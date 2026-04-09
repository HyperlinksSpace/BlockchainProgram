import { BlockchainProgram } from '../wrappers/BlockchainProgram';
import { NetworkProvider } from '@ton-community/blueprint';
import { Address } from 'ton-core';
import { randomAddress } from '@ton-community/test-utils';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('Dapp address'));

    const blockchainProgram = provider.open(BlockchainProgram.createFromAddress(address));

    await blockchainProgram.sendChangeDappOwnerMsg(provider.sender(), {
        newOwner: randomAddress(),
        queryId: Date.now()
    })

    ui.write('Owner changed successfully!');

}