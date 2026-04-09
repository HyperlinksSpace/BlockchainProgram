import { Address, Dictionary, toNano } from 'ton-core';
import { BlockchainProgram } from '../wrappers/BlockchainProgram';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const blockchainProgram = BlockchainProgram.createFromConfig(
        {
            ownerAddress: provider.sender().address as Address,
            nextCollectionIndex: 0,
            collectionsDict: Dictionary.empty(Dictionary.Keys.Uint(256), Dictionary.Values.Address()),
        },

        await compile('BlockchainProgram')
    );

    await provider.deploy(blockchainProgram, toNano('1'));

}
