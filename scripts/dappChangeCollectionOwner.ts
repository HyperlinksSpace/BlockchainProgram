import { BlockchainProgram } from '../wrappers/BlockchainProgram';
import { NetworkProvider } from '@ton-community/blueprint';
import { randomAddress } from '@ton-community/test-utils';
import { Address, toNano } from 'ton-core';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('Dapp address'));

    const blockchainProgram = provider.open(BlockchainProgram.createFromAddress(address));

    await blockchainProgram.sendChangeCollectionOwnerMsg(provider.sender(), {
            newOwner: randomAddress(),
            value: toNano('0.02'),
            queryId: Date.now(),
            collectionId: 0,
    });

    ui.write("Successfully changed collection owner!");
}
