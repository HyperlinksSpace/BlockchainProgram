import { Blockchain, SandboxContract, TreasuryContract } from '@ton-community/sandbox';
import { Cell, Dictionary, toNano } from 'ton-core';
import { BlockchainProgram } from '../wrappers/BlockchainProgram';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';
import { buildNftCollectionDataCell } from '../wrappers/utils/collectionHelpers';
import { randomAddress } from '@ton-community/test-utils';

describe('BlockchainProgram', () => {
    let code: Cell;
    let blockchainProgram: SandboxContract<BlockchainProgram>;
    let blockchain: Blockchain;
    let owner: SandboxContract<TreasuryContract>;

    beforeAll(async () => {
        code = await compile('BlockchainProgram');
    });

    beforeEach(async () => {
        blockchain = await Blockchain.create();
        owner = await blockchain.treasury('owner');

        blockchainProgram = blockchain.openContract(
            BlockchainProgram.createFromConfig({
                ownerAddress: owner.address,
                nextCollectionIndex: 0,
                collectionsDict: Dictionary.empty(Dictionary.Keys.Uint(256), Dictionary.Values.Address())
            }, code)
        );

        const deployer = await blockchain.treasury('deployer');
        const deployResult = await blockchainProgram.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: blockchainProgram.address,
            deploy: true,
        });
    });

    it('should mint collections and increase nextCollectionIndex', async () => {

        const collectionDataCell = buildNftCollectionDataCell({
            ownerAddress: owner.address,
            nextItemIndex: 0,
            collectionContent: '',
            commonContent: '',
            nftItemCode: await compile('AdminNft'),
            royaltyParams: {
                royaltyFactor: 12,
                royaltyBase: 100,
                royaltyAddress: randomAddress()
            },
        });
        
        const mintCollectionResult = await blockchainProgram.sendDeployCollectionMsg(owner.getSender(), {
            collectionCode: await compile('AdminCollection'),
            collectionData: collectionDataCell,
            queryId: Date.now(),
        });
        
        expect(mintCollectionResult.transactions).toHaveTransaction({
            from: owner.address,
            to: blockchainProgram.address,
            success: true
        });
        
       const nextCollectionIndex = await blockchainProgram.getNextCollectionIndex();
        
       expect(nextCollectionIndex).toBeGreaterThan(0);
    });

});

