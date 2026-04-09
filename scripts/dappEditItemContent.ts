import { BlockchainProgram } from '../wrappers/BlockchainProgram';
import { NetworkProvider } from '@ton-community/blueprint';
import { Address, toNano } from 'ton-core';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('Dapp address'));

    const blockchainProgram = provider.open(BlockchainProgram.createFromAddress(address));

    await blockchainProgram.sendEditItemContentMsg(provider.sender(), {
        newContent: '',
        itemAddress: Address.parse("EQAccX36sUCKkTK4UYPrgRgwEZjhdhAqhREVnOuPJ7fwNGPv"),
        queryId: Date.now()
         
    });

    ui.write("Item content succesfully edited!");
}

