import { Address, toNano } from 'ton-core';
import { BlockchainProgram } from '../wrappers/BlockchainProgram';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('Dapp address'));

    const blockchainProgram = provider.open(BlockchainProgram.createFromAddress(address));

        await blockchainProgram.sendDestroySbtMsg(provider.sender(), {
            queryId: Date.now(),
            itemAddress: Address.parse("EQCIdOdc6__fo1oqwBTaXLEg0RawVanTMe8ahLpZYm4RxffR")
        });

    ui.write('Destroyed successfully!');
}