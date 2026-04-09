import { BlockchainProgram } from '../wrappers/BlockchainProgram';
import { NetworkProvider } from '@ton-community/blueprint';
import { Address, toNano } from 'ton-core';
import { sleep } from '@ton-community/blueprint/dist/utils';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('Dapp address'));

    const blockchainProgram = provider.open(BlockchainProgram.createFromAddress(address));

    const balanceBefore = await blockchainProgram.getStateBalance();

    await blockchainProgram.sendWithdrawMsg(provider.sender(), {
        queryId: Date.now(),
        withdrawAmount: toNano('0.05')
    });

    let balanceAfter = await blockchainProgram.getStateBalance();
    let attempt = 1;
    while (balanceBefore === balanceAfter) {
        ui.setActionPrompt(`Attempt ${attempt}`);
        await sleep(2000);
        balanceAfter = await blockchainProgram.getStateBalance();
        attempt++;
    }

    ui.clearActionPrompt();
    ui.write('Success!');

}