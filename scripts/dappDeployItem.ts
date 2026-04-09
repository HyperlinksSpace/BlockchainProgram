import { BlockchainProgram } from '../wrappers/BlockchainProgram';
import { NetworkProvider } from '@ton-community/blueprint';
import { Address } from 'ton-core';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('Dapp address'));

    const blockchainProgram = provider.open(BlockchainProgram.createFromAddress(address));

    await blockchainProgram.sendDeployItemMsg(provider.sender(), {
            itemIndex: 0,
            itemOwnerAddress: address,
            itemAuthorityAddress: address,
          // itemContent: '1',
            queryId: Date.now(),
            collectionId: 16,
    });

    ui.write("Item successfully deployed!");
}

