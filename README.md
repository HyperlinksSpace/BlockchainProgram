# Blockchain Program

Blockchain Program is a tokenized smart-contract architecture that shows how to build and run multi-user, mass-adoptable, and scalable onchain programs: marketplaces, bulletin boards, mobility-style services, and more. The same layered pattern can be adapted across ecosystems once you map NFT or fungible token standards to your chain. This repository implements one concrete stack; the ideas transfer. NFTs and fungible tokens are used as units to store, retrieve, update, and process data needed to represent practical entities onchain. This approach enables complex blockchain services that feel familiar from Web2, but stay verifiable onchain. The architecture centers on a controller contract, [BlockchainProgram](./contracts/blockchain_program.fc), which governs NFT collections and related tokenized components in a single program. That consolidates management flows and gives one primary access point for operations, while preserving flexibility at collection and item level.

## Bird’s eye view

Once deployed on a blockchain, Blockchain Program looks like a layered, growing, updatable and upgradable network of smart contracts sending messages and interacting asynchronously. It has three layers: NFT layer, NFT Collections layer, and the top layer consisting of one contract - `BlockchainProgram` - that acts as the index and master contract above all layers. Messages go between these layers from top to bottom. Each layer is responsible for its own scope of duties and responsibilities.

### NFT layer

This is the essential layer of smart contracts that stores the largest amount of program data. In fact, to build a program using Blockchain Program principles we use an abstraction of NFT to represent any entity, no matter if it is a sword in a computer game, a taxi-driver passport, or a smart contract for a voting game. When developing a program with Blockchain Program, you can implement different NFT standards according to your needs. For instance, on a Blockchain Deals-style platform, each listing, user profile, and admin role can be represented as an NFT. In general, many entities can be represented as NFTs because they can store metadata and files such as images, video, PDF, music, and more.

### NFT Collections layer

Contracts of this layer follow an editable NFT collection pattern: grouping and managing NFTs, with domain-specific functions, data structures, and getters for the interactions you need. The same structural idea appears on several chains under different standard names.

### BlockchainProgram

This smart contract forms the top layer of this smart contract network. It performs functions related to managing collections and items and allows us to effectively manage all smart contracts in the network. Main functions:

* It keeps track of some important information about the contract, such as the sequence number, public key, owner's address, the index of the next collection, and a dictionary of collections. 
* The contract allows the owner to change the ownership of the contract to a new address. 
* The owner can withdraw funds from the contract, but only if the balance is sufficient. 
* The owner can edit the code of the contract. 
* The contract allows the deployment of new collections. Each collection has its own code and data. 
* The contract allows the deployment of individual items within a collection. 
* The contract supports batch deployment of multiple items within a collection.
* The owner can edit the content of a collection. 
* The owner can change the ownership of a collection to a new address.
* The owner can edit the content of an item within a collection. 
* The owner can destroy an SBT item within a collection. 
* The owner can revoke ownership of an SBT within a collection. 
* The owner can transfer ownership of an item to another address. 
* The contract provides methods to retrieve the balance of the contract and the sequence number. 
* The contract can receive messages from external sources and perform certain actions based on the received message. 
* The contract provides getters to retrieve the contract's data, including the public key, owner's address, next collection index, and a list of deployed collection addresses.

## Features

This section describes basic technical features that make Blockchain Program work. You can manage all the interactions described (except getters for retrieving data) by sending messages to `BlockchainProgram` (the top-layer smart contract), which can proxy the message to lower layer smart contracts when needed.

### Deal with Smart Contracts

Blockchain Program provides basic features to manage smart contracts within your program.

#### Mint smart contracts:

There are three ways to mint new smart contracts into your program’s network.

* Collection Deployment | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L89) | - `deploy_collection` in `BlockchainProgram` mints new collections under master governance.

* NFT Item Deployment | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L107) | - `deploy_item` deploys individual NFT items via the collection contract. Messages are forwarded to the corresponding NFT collection, which mints the NFT item contract.

* Batch NFT Deploy | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L125) | - `batch_nft_deploy` deploys multiple NFTs in one flow.

#### Change code of smart contracts:

These methods help us to upgrade smart contracts in our program:

* Edit Program Code | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L67) | - `edit_code` upgrades the code of the main smart contract (`BlockchainProgram`).

* Edit Collection Code (coming soon)

* Edit NFT Code (coming soon)

#### Delete smart contracts

We can even implement functions that will allow us to burn tokens, such as:

* Destroy SBT Item | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L188) | - `destroy_sbt_item` burns SBT tokens in SBT collections via `BlockchainProgram`.

* Delete program (coming soon)

* Delete NFT (coming soon)

* Delete NFT Collection (coming soon)

### Deal with Data

`BlockchainProgram` provides functions to work with program data.

#### Store Data

We can mint a new smart contract on the blockchain to store new data. Use the minting methods described under **Mint smart contracts** above for that purpose.

#### Update Data

We can take advantage of the Editable NFT Standard to update data in a smart contract by editing it. We can use the following methods for that purpose:

* Edit Collection Content | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L141) | - `edit_collection_content` updates content and metadata of NFT collections through `BlockchainProgram`.

* Edit NFT Item Content | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L174) | - `edit_item_content` updates NFT content and metadata through `BlockchainProgram`.

#### Retrieve Data

* Use Program Get Methods | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L368) | - `get_dapp_data` returns owner, next collection index, and collections dictionary.

* Use Collection Get Methods | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/customers_collection.fc#L149) | - Example: `get_collection_data` and related getters (`get_nft_address_by_index`, `royalty_params`, `get_nft_content` in the same file).

* Use NFT Get-Methods | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/customers_nft.fc#L219) | - `get_nft_data` and `get_editor` expose NFT content and editor address.

#### Process Data (Coming soon)

### Deal with Program

Program owners have additional functionality and opportunities to maintain, scale, and improve the program.

#### Own & Benefit Securely

Here are essential functions and opportunities for owners of the program:

* Change program Owner | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L48) | - `change_owner` updates the owner of `BlockchainProgram` (incoming `op::change_owner` is handled in `recv_internal` at line 341).

* Withdraw Funds | [see code ↗](https://github.com/HyperlinksSpace/BlockchainProgram/blob/master/contracts/blockchain_program.fc#L57) | - `withdraw_funds` sends native currency on the host chain to the owner address of `BlockchainProgram`.

* Manage Program Collectively: use a multisig, a DAO smart contract, or any other solution.

#### Upgrade Program

We can upgrade the program using the methods described under **Change code of smart contracts** above.

#### Build UI

We can build a serverless frontend using the wallet and chain SDKs for your target network. Wallet-connect-style flows work well for submitting transactions to `BlockchainProgram`.

### Blockchain Program Concept

Blockchain Program is an approach that combines a tokenized blockchain architecture with a serverless frontend. The core idea is to enable program functionality by extracting required information directly from the `BlockchainProgram` smart contract network.

To illustrate the concept, consider a Blockchain Deals Platform. The program can retrieve real-time data by parsing deal and order collections directly from the `BlockchainProgram` smart contract network, without a centralized coordinator for core state.

The interaction between the program and smart contracts is bidirectional. When users perform actions, they can trigger changes in corresponding smart contracts by sending messages or transactions.

By tokenizing program functionality and integrating it with blockchain infrastructure, Blockchain Program ensures data integrity and immutability, and reduces single points of failure.

Moreover, this approach enables collaborative governance through smart contracts and tokenized incentives.

In summary, Blockchain Program combines tokenized architecture with serverless frontend to support transparent, secure, and resilient blockchain programs.

## Repository Structure

The managing file is [`blockchain_program.fc`](./contracts/blockchain_program.fc), which contains the implementation of the `BlockchainProgram` contract in FunC.

Key directories:

- [`contracts/`](./contracts/) - Core smart contracts, including the Blockchain Program contract and collection/item implementations.
	- [`contracts/imports/`](./contracts/imports/) - Shared FunC libraries and helper modules imported by contracts.
		- [`contracts/imports/test-libs/`](./contracts/imports/test-libs/) - Helper libraries used for low-level testing and message/storage validation.
	- [`contracts/utils/`](./contracts/utils/) - Constants, op-codes, and low-level utility definitions used across contracts.
- [`wrappers/`](./wrappers/) - TypeScript wrappers and compile configs for deploying and interacting with contracts.
	- [`wrappers/BlockchainProgram.ts`](./wrappers/BlockchainProgram.ts) - TypeScript wrapper for the master contract (`BlockchainProgram` class, `BlockchainProgramConfig`).
	- [`wrappers/BlockchainProgram.compile.ts`](./wrappers/BlockchainProgram.compile.ts) - Blueprint compiler config for `contracts/blockchain_program.fc` (used as `compile('BlockchainProgram')`).
	- [`wrappers/utils/`](./wrappers/utils/) - Wrapper-side helper modules for content building, minting, and op-code utilities.
- [`scripts/`](./scripts/) - Deployment and operational scripts for common contract management flows.
	- [`scripts/deployBlockchainProgram.ts`](./scripts/deployBlockchainProgram.ts) - Deploys the Blockchain Program.
- [`tests/`](./tests/) - Automated tests and test utilities used to validate contract behavior.
	- [`tests/utils/`](./tests/utils/) - Test helper utilities (for example, random key generation) reused across specs.

## Blockchain Deals Platform (example shape)

To build a Blockchain Deals-style program, we can leverage the `BlockchainProgram` contract and NFT collections in this repository:

1. **Deploying NFT Collections**: Using the master contract from the repository, we deploy NFT collections that hold the main entities of the deals platform: for example collections for open deals, participants, counterparties, and admins. Each collection groups one kind of record.

2. **Storing Data as NFTs**: With those collections deployed, NFTs store the primary data of the platform. Each NFT can represent a deal, a participant profile, a counterparty, or an admin role. Metadata can carry skills, deal terms, preferences, and status fields.

3. **Contract Ownership and Editing**: `BlockchainProgram` becomes the owner and editor of deployed NFT collections where that fits your trust model. It can initiate minting and edit attributes so onchain state stays current.

4. **Data Updates**: When program state changes, the program sends messages to `BlockchainProgram`, which routes updates to the right collection and NFT fields.

5. **Onchain Data Storage**: Important information (deal status, participant fields, preferences) lives in contract storage, tamper-evident and readable by anyone with ledger access.

6. **Additional Functionality**: Beyond storing and updating data, you can add NFT transfers between users, history via the chain, settlement using the chain’s native asset or app tokens, and a frontend that talks to the contracts directly.

The same `BlockchainProgram` layering applies on other smart contract platforms after you port the FunC contract and wire your chain’s token and address rules; the architecture is the portable part.

## Blackpaper

Read [`Blackpaper.md`](./blackpaper/Blackpaper.md) for more information and to contribute to this solution.