![Lead Picture](https://raw.githubusercontent.com/HyperlinksSpace/tonnftdapp/refs/heads/master/blackpaper/1.png)
<br><br>
# TDBt. & TDA Blackpaper

Tokenized Decentralized Backend template & Tokenized Decentralized App Concept

*v.1.1 · April 9, 2026 · by https://www.hyperlinks.space/, fmr. Some DAO*

/

The aim of this text is to give anyone, no matter of technical background, a comprehensive understanding of how to build Tokenized Decentralized Backend using TDBt. architectural principles & features as well as giving the ideas of some of the opportunities before us.

What is?

*TDBt is a tokenized decentralized backend template on TON, that reveals the main principles of building and launching Multi-User, Mass-Adoptable & Scalable Decentralized apps and services such as freelance-exchanges, bulletin boards, taxi, etc. TDBt. is built upon a strong foundation of TON, conceptions of NFT & NFT-Collections, conception of Decentralization itself. We developed the ideas lying behind the concept of editable NFT’s (mainly used for minting so-called “loot-box” NFT collections) offering to apply NFT for a wider range of use-cases. In fact, we propose to think and develop in the paradigm, in which we perceive NFT and Jettons as units, that allow us to store, retrieve, update and even process data (because we can easily extend NFT Standards easily), needed to represent practically entities in blockchain. We are convinced that this approach can lead to creation of a vast variety of complex and useful apps, usage of which we can already experience in Web 2.0, but decentralized. Our technology opens up the possibility to build practically any backend in blockchain, using the power of Jettons, NFT, Collections & the new type of smart-contracts, that we have developed - Token Decentralized Backend smart-contract (further, TDBs), that is needed to conduct and manage all NFT Collections and Jetton-masters under his responsibility. By building this new layer, we automaze & consolidate the process of governing NFT Collections & Jettons, making TDBs an owner & editor of all Collections & Jetton-masters within one single app. This gives us an opportunity to build a vast variety of processes within blockchain representing different entities in the form of NFT Collections & Jettons, needed for the app to work (e.g. freelance-exchange basically needs representation of freelancers, contractors, ads & admins on it’s backend). Apart from that we provide an opportunity to easily interact with the app, as TDBs becomes the main access-point to all functions of the app. We kept the code of NFT and NFT-Collections, but extended its functionality to meet the user-stories and other requirements in our first implementation.*

---

Contents.

- [1 · Motivation](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#1--motivation)
  - [1.2 · Goals & Values](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#12--goals--values)
  - [1.3 · Benefits of Tokenization & Decentralization of apps](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#13--benefits-of-tokenization--decentralization-of-apps)
- [2 · Architectural Principles](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#2--architectural-principles)
  - [2.1 · Bird’s eye view](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#21--birds-eye-view)
    - [2.1.1 · NFT layer](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#211--nft-layer)
    - [2.1.2 · NFT Collections layer](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#212--nft-collections-layer)
    - [2.1.3 · TDBs](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#213--tdbs)
  - [2.4 · General Visual Representation](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#24--general-visual-representation)
  - [2.5 · How to play around with this?](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#25--how-to-play-around-with-this)
- [3 · Features](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#3--features)
  - [3.1 · Deal with Smart-Contracts](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#31--deal-with-smart-contracts)
    - [3.1.1 · Mint smart-contracts:](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#311--mint-smart-contracts)
    - [3.1.2 · Change code of smart-contracts:](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#312--change-code-of-smart-contracts)
    - [3.1.3 · Delete smart-contracts](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#313--delete-smart-contracts)
  - [3.2 · Deal with Data](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#32--deal-with-data)
    - [3.2.1 · Store Data](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#321--store-data)
    - [3.2.2 · Update Data](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#322--update-data)
    - [3.2.3 · Retrieve Data](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#323--retrieve-data)
    - [3.2.4 · Process Data (Coming soon)](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#324--process-data-coming-soon)
  - [3.3 · Deal with App](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#33--deal-with-app)
    - [3.3.1 · Own & Benefit Securely](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#331--own--benefit-securely)
    - [3.3.2 · Upgrade TDA](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#332--upgrade-tda)
    - [3.3.3 · Build UI](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#333--build-ui)
- [4 · TDA Concept](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#4--tda-concept)
- [5 · Use Cases](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#5--use-cases)
  - [5.1 · Freelance-exchange](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#51--freelance-exchange)
  - [5.2 · Betting](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#52--betting)
  - [5.3 · Taxi (Coming soon)](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#53--taxi-coming-soon)
- [6 · Opportunities](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#6--opportunities)
  - [6.1 · Tokenize anything!](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#61--tokenize-anything)
  - [6.2 · Hack different markets delivering them decentralization](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#62--hack-different-markets-delivering-them-decentralization)
  - [6.3 · Bring AI to Blockchain](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#63--bring-ai-to-blockchain)
- [7 · Let’s play!](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/blackpaper/Blackpaper.md#7--lets-play)



# 1 · Motivation

Main aim of this section is to reveal considerations that have led to the creation of this technology and show real benefits that it can bring to our world.



## 1.2 · Goals & Values

TDBt. was created to give people an opportunity to create & use tokenized & decentralized backend for their apps taking all the benefits of tokenization & decentralization. We support the values of openness (as long as security of sensitive information), effectiveness & fairness and believe blockchain technologies can bring more of them to our everyday lives. Blockchain really makes it possible to service human relations more efficiently, fairly and safely, including human relations within the framework of services and applications. We hope that you will be able to see this after reading this whitepaper.



## 1.3 · Benefits of Tokenization & Decentralization of apps

Let’s think, what benefits tokenization & decentralization of apps bring to different social groups involved in its work.

! Chat GPT 3.5 turbo gives us quite a reasonable answer:

Tokenization and decentralization of apps can bring numerous benefits to various social groups involved in their work. Here are some potential advantages for different stakeholders:

1. Developers and Contributors:

- Financial Incentives: Tokenization allows developers to be directly rewarded for their contributions through tokens or cryptocurrencies, providing new revenue streams and financial incentives.
- Open and Collaborative Ecosystem: Decentralization fosters an open and collaborative environment where developers can contribute to the project, propose improvements, and participate in decision-making processes.
- Trust and Security: Blockchain-based decentralized apps offer enhanced security and trust as the transactions and data are stored on a distributed ledger, reducing the risk of single points of failure or malicious attacks.

1. Users and Consumers:

- Ownership and Control: Tokenization grants users ownership rights in the app or platform, allowing them to have a say in the governance and direction of the project.
- Transparent and Auditable: Decentralized apps built on blockchain technology provide transparency, as the code and transactions are often open and auditable, ensuring that users can verify the integrity of the system.
- Data Privacy and Security: Decentralization reduces the reliance on central authorities, giving users greater control over their personal data and reducing the risk of data breaches.

1. Investors and Token Holders:

- Access to Investment Opportunities: Tokenization allows fractional ownership, enabling broader access to investment opportunities, including early-stage projects, that were traditionally limited to venture capitalists or wealthy individuals.
- Liquidity and Tradeability: Tokens can be traded on cryptocurrency exchanges, providing investors with liquidity and the ability to buy, sell, or transfer their investments more easily.
- Governance Participation: Token holders often have voting rights and can participate in the governance of the project, influencing decision-making processes and the evolution of the app.

1. Communities and Society:

- Inclusion and Access: Decentralized apps can provide access to financial services, digital identity, and other applications to underserved populations, bridging the digital divide and promoting financial inclusion.
- Empowerment and Local Economies: Tokenization can empower local communities by enabling them to participate in decentralized networks, share resources, and contribute to local economic ecosystems.
- Trust and Accountability: Decentralization reduces the reliance on centralized authorities, promoting trust and accountability within communities and society at large.

It's important to note that the benefits of tokenization and decentralization can vary depending on the specific context, implementation, and adoption of these technologies. Additionally, challenges such as scalability, user experience, and regulatory considerations may also need to be addressed for wider adoption and to maximize the benefits for all social groups involved.

Chat GPT is quite right, but moreover, blockchain can really give us more sense of confidence in our everyday life as YOU are to choose rules for storing your data, managing your interactions & keeping your assets. YOU are to decide! You can always study the rules before playing & and play with confidence of further compliance. Сlear rules of the game in the Blockchain in its deep.



# 2 · Architectural Principles

In this section we aim to give you an idea of main findings, which open up endless possibilities for us to create & use decentralized backends for Multi-User, Mass-Adoptable & Scalable Decentralized apps.



## 2.1 · Bird’s eye view

TDBt deployed to blockchain looks like a layered, growing, updatable & upgradable network of smart-contracts sending messages and interacting with each other asynchronously. Basically it has three layers: NFT layer, NFT Collections layer & top layer consisting of just one contract - TDBs that acts as the index & master contract on the top of all layers. Messages go between these layers from top to bottom. Each layer is responsible for its own scope of duties and responsibilities.



### 2.1.1 · NFT layer

This is the essential layer of smart-contracts that stores the largest amount of data of the app. In fact, to build an app using principles of TDBt we use an abstraction of NFT to represent any entity, no matter if it is a sword in a computer game, taxi-driver's passport or a smart-contract of a voting game. When developing the app on the principles of TDBt. you can implement different NFT Standards, according to your needs. For instance, if you make a freelance-exchange, you may represent each contractor’s ad in the form of NFT, as well as each contractor’s or freelancer’s profile, as well as admin’s NFT that gives him certain rights. In general, we can represent vast amounts of entities in the form of NFT as it can store practically any metadata & files, such as images, video, pdf, music & so on. We propose to store metadata on-chain to easily edit and manipulate individual attributes. Depending on the particular entity that we represent in the form of NFT, we use different NFT Standards, modify & extend them, if needed.



### 2.1.2 · NFT Collections layer

Contracts of this layer are based on the existing standard of TON NFT Editable Collection. We inherit the general idea and conception of NFT Collections (grouping and managing NFT) and add some specific functions, data structures and get-methods that we need for certain interactions, depending on their type. You can find general description of NFT Collection concept here, description of



### 2.1.3 · TDBs

This smart contract forms the top layer of the whole smart-contract network. It performs various functions related to managing collections of tokens. Those functions allow us to effectively manage all the smart-contracts in the network. Let’s stipulate it’s main functions:

1. It keeps track of some important information about the contract, such as the sequence number, public key, owner's address, the index of the next collection, and a dictionary of collections.
2. The contract allows the owner to change the ownership of the contract to a new address.
3. The owner can withdraw funds from the contract, but only if the balance is sufficient.
4. The owner can edit the code of the contract.
5. The contract allows the deployment of new collections. Each collection has its own code and data.
6. The contract allows the deployment of individual items within a collection.
7. The contract supports batch deployment of multiple items within a collection.
8. The owner can edit the content of a collection.
9. The owner can change the ownership of a collection to a new address.
10. The owner can edit the content of an item within a collection.
11. The owner can destroy an SBT item within a collection.
12. The owner can revoke ownership of an SBT within a collection.
13. The owner can transfer ownership of an item to another address.
14. The contract provides methods to retrieve the balance of the contract and the sequence number.
15. The contract can receive messages from external sources and perform certain actions based on the received message.
16. The contract provides getters to retrieve the contract's data, including the public key, owner's address, next collection index, and a list of deployed collection addresses.



## 2.4 · General Visual Representation

The scheme below illustrates the network of smart-contracts, described in p. 2.1 and shows the pattern of messages sending and proxying.
<br><br><br>
![General visual representation](https://raw.githubusercontent.com/HyperlinksSpace/tonnftdapp/refs/heads/master/blackpaper/2.png)
<br><br><br>
As you can see there are three layers of smart-contracts: TDBs, NFT Collections & NFT’s.



## 2.5 · How to play around with this?

To expand this technology, you can consider the following ideas:

Widen functionality of layers: Explore the possibility of widening the functionality of the existing architecture. These layers can provide enhanced functionalities, such as improved data storage, access control, or scalability solutions.

Add new layers: Introduce new layers to the technology stack that can serve specific purposes. For example, you might consider incorporating a layer for decentralized identity management, decentralized storage, or decentralized governance.

Jettonize everything: You can further explore the potential use cases of Jettons and how they can enhance the functionality and flexibility of the tokenized decentralized applications. Utilize the concept of Jettons to represent and manage different entities within the blockchain. Explore ways to create and utilize Jetton standards that can be easily extended and customized for various use cases.

Expand the functionality of smart contracts: Smart contracts are a core component of decentralized applications. Look for ways to expand the capabilities of smart contracts within the TDBt framework. This can involve adding new features, integrating with external services, or creating more complex logic within the smart contracts.

Combine standards and invent new ones: Investigate the possibility of combining different standards within the blockchain ecosystem to leverage the strengths of each. For example, you can explore integrating NFT standards with other token standards or interoperability protocols to enhance the capabilities of the decentralized applications.

Store any data: Consider expanding the types of data that can be stored and processed within the TDBt framework. This can involve integrating with external data sources, implementing oracles for real-world data integration, or incorporating off-chain data solutions.

Build Decentralized Management: Operate TDA with MultiSig or DAO smart-contract, build groups of access, voting systems, role models to operate the expanding functionality of the TDA.



# 3 · Features

This section describes basic technical features (functional atoms) that make TDBt work. Please take note that you can manage all the interactions described (except get-methods for retrieving data) by sending messages to TDBs (top-layer smart-contract), that will (if needed) proxy the message to the smart-contracts of the layer at the bottom, and so on.



## 3.1 · Deal with Smart-Contracts

TDBt provides basic features to manage smart-contracts within your app.



### 3.1.1 · Mint smart-contracts:

There are three ways to mint new smart-contracts to the network of your TDA

- Collection Deployment | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L89)| - function of TDBs that allows you to mint new collections that will be put under the governance of TDBs.
- NFT Item Deployment | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L107)| - You can deploy individual NFT Items in collections through TDBs. Message will pass through TDBs, then will be forwarded to the corresponding NFT Collection, that in its term will send a message to the empty address that will mint a new smart-contract of NFT.
- Batch NFT Deploy | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L125)| - You can deploy multiple NFT with a single transaction.



### 3.1.2 · Change code of smart-contracts:

This methods will help you to upgrade the smart-contracts in your TDA:

- Edit dApp Code | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L67)| - You can upgrade the code of the main smart-contract (TDBs).
- Edit Collection Code (coming soon)
- Edit NFT Code (coming soon)



### 3.1.3 · Delete smart-contracts

You can even implement functions that will allow you to burn tokens, such as:

- Destroy SBT Item | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L188)| - You can burn SBT tokens in collections of SBT type. Message will pass through TDBs, then will be forwarded to the corresponding NFT Collection, that in its term will send a message to SBT Item to be burned.
- Delete dApp (coming soon)
- Delete NFT (coming soon)
- Delete NFT Collection (coming soon)



## 3.2 · Deal with Data

TBDs provide functions to deal with data from your app.



### 3.2.1 · Store Data

You can mint a new smart-contract to blockchain to store new data. So you can use methods for creating smart-contracts described in p. 3.1.1 for that purpose.



### 3.2.2 · Update Data

You can take advantage of the Editable NFT Standard to update data in smart-contract by just editing it. You can use following methods for that purpose:

- Edit Collection Content | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L141)| - You can update content and metadata of NFT Collections through TDBs. It will forward the message to the corresponding collection.
- Edit NFT Item Content | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L174)| - You can update content and metadata of NFT through TDBs. It will forward the message to the corresponding collection and collection, in its term will forward the message to the NFT Item.



### 3.2.3 · Retrieve Data

- Use TDAs Get-Methods | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L368)| - In TDBt you will find methods that will allow you to get the current sequence number, get TDA data, get deployed collections addresses.
- Use Collection Get-Methods | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/customers_collection.fc#L149)| - For example, in collections of freelancers of TDBt you will find methods that will allow you to collect data, get NFT addresses by index, get royalty params, get NFT content.
- Use NFT Get-Methods | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/customers_nft.fc#L219)| - You can get NFT Content or the address of the editor by running NFT get-methods inherited from the NFT Standart.



### 3.2.4 · Process Data (Coming soon)



## 3.3 · Deal with App

Owners of TDA have additional functionality and opportunities to maintain, scale and improve the app.



### 3.3.1 · Own & Benefit Securely

Here are essential functions and opportunities for owners of the app:

- Change dApp Owner | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L48)| - You can change the owner of the TDA, for example, you can migrate from ordinary wallet to multisig wallet, or DAO smart-contract.
- Withdraw Funds | [see code ↗](https://github.com/HyperlinksSpace/tonnftdapp/blob/master/contracts/nft_dapp.fc#L57)| - You can withdraw funds to the address that is owner of the TDA
- Manage TDA Collectively - You can make a multisig or DAO smart-contract.



### 3.3.2 · Upgrade TDA

You can upgrade your app using methods described in p. 3.1.2.



### 3.3.3 · Build UI

You can build a serverless frontend for your TDA, using TON SDK’s. For example, you can use [TON Connect demo app](https://github.com/ton-connect/demo-dapp) as a starting JS template.



# 4 · TDA Concept

Tokenized Decentralized App (TDA) is a novel approach that combines the advantages of Tokenized Decentralized Backend (TDB) with a serverless frontend. The core idea behind TDA is to enable seamless app functionality by extracting all necessary information from the TDB smart-contract network. By leveraging the capabilities of blockchain and smart contracts, TDA empowers developers to build robust, transparent, and decentralized applications.

To illustrate the concept, let's consider an example of a freelance marketplace. With TDA, the app can retrieve real-time data by parsing the collection of freelance orders directly from the TDB smart-contract network. This allows for the dynamic generation of an actual list of available orders, eliminating the need for a centralized backend system. The TDA can extract and display relevant information such as order statuses, contractors, responsible freelancers, and more, providing users with up-to-date details.

The interaction between the TDA and smart contracts is bidirectional. When users engage in various processes within the app, they can trigger changes in the corresponding smart contracts by sending messages or transactions. For instance, accepting an order or updating its status can be accomplished by interacting with the smart contract representing that specific order. These actions are transparent, auditable, and secure due to the immutability and consensus mechanisms of the underlying blockchain network.

By tokenizing the app's functionalities and integrating them with the blockchain infrastructure, TDA introduces several benefits. Firstly, it ensures data integrity and immutability since the information is stored on the blockchain. This enhances trust and eliminates the need for centralized intermediaries. Secondly, TDA leverages the decentralized nature of blockchain to create a resilient and censorship-resistant app ecosystem. It is no longer reliant on a single point of failure, reducing the vulnerability to hacking, downtime, or data breaches.

Moreover, TDA enables a more inclusive and collaborative environment by allowing users to participate directly in the governance and decision-making processes through smart contracts. Tokenized incentives can be implemented, rewarding users who contribute to the network with tokens for their computational resources, data sharing, or other valuable contributions.

In summary, TDA harnesses the power of Tokenized Decentralized Backend and combines it with a serverless frontend to create a new paradigm of decentralized application development. By leveraging smart contracts and blockchain technology, TDA offers enhanced transparency, security, and user empowerment. This innovative approach opens up a world of possibilities for building decentralized applications that are efficient, trustworthy, and resilient, with potential applications spanning various industries and sectors.



# 5 · Use Cases

The aim of this section is to show how exactly underlied features work and conduct the work of the app on particular examples.



## 5.1 · Freelance-exchange

Here is a concept of a decentralized freelance exchange service “TON Jobs”.

TON Jobs is a freelance exchange service that provides real payment guarantees through its decentralized architecture. Freelancers get guarantee of payment, as their rewards are stored on the balance of order NFT’s that are issued for each order. After completing the order they get an NFT of order on their wallet with order completion proof and corresponding funds on the balance. Contractors get service of arbitration in case of disputes for free. Service fees are deducted from freelancers' reward on the successful completion of order.

Contractor’s scenario: Contractor opens the site, passes authorization through crypto wallet and registers his profile. He gets an NFT, where his profile data is stored. He presses the button to create a new freelance marketplace ad, enters all the information and reward sum. When creating the ad contractor stipulates the sum of reward, so when finishing the process of ad creation, contractor signs this message to TON, that will be send to mint an NFT of order that will store all the information about the order as well as the reward for the freelancer (contractor sends this sum with the message to deploy a new order in one transaction). Contractor waits for the offers from freelancers, having an opportunity to cancel the order any time and get back the funds. Freelancers apply for the order and their applications are stored in the data storage of the NFT of order so as the contractor can see them when refreshing the page. After getting the orders, the contractor chooses a freelancer and he becomes the doer of the order, stipulated in the smart-contract of order. When a freelancer finishes the work, he applies for the reward. If the Contractor confirms that the work is done within 48 hours, the freelancer is granted the amount and the NFT order. If not, or one of the counterparties sends for the appeal, admins go for the case and solve it individually according to the rules and conditions of the service.

Freelancer’s scenario: Freelancer opens the site, passes authorization through crypto wallet and registers his profile. Freelancers browse existing NFT of orders, sorting and filtering them by attributes such as category, reward amount, time of creation, status, number of applications just like we browse NFT on marketplaces of NFT. Freelancer chooses the suitable order and applies for it, signing the transaction with his wallet, sending an insufficient amount to cover the blockchain fee. If a freelancer is chosen for the work, he gets a notification to his crypto wallet from the service and can start completing the order. After completing the order freelancer presses the button to confirm completion and send corresponding message to blockchain to claim reward. If the contractor confirms this fact on his part within 48 hours, the freelancer gets the order NFT with order completion proof and freelancer’s reward amount.

Admin scenario: Admins are given special NFT of Admins that give them rights to solve issues. Each case is considered individually and maximum additional information is extracted from all the counterparts of the service. After considering the case, admins send votes to TDBs and get little reward for voting. After the voting result is defined, a transaction that solves the case is sent to the blockchain.

Technical features: To build a freelance-exchange TDA on the TON blockchain using NFT technology, you can leverage the TDBs and NFT collections provided by the [TDBt repository](https://github.com/HyperlinksSpace/tonnftdapp/). Here's how we use this technology to create the freelance exchange dApp:

1. Deploying NFT Collections: Using the master-contract from the repository, you can deploy NFT collections that will store the main assets of the freelance exchange dApp. For example, you can deploy NFT collections for orders, freelancers, employers, and admins. These collections will serve as units to store relevant data associated with each category.
2. Storing Data as NFTs: With the NFT collections deployed, you can use the NFTs to store the main data of the freelance exchange dApp. Each NFT within a collection represents a unique entity such as an order, a freelancer, an employer, or an admin. You can associate metadata with each NFT to store additional information about the entity, such as the freelancer's skills, the order details, or the employer's preferences.
3. Master-Contract Ownership and Editing: The master-contract becomes the owner and editor of all the deployed NFT collections. As the owner and editor, the master-contract has the authority to initiate the minting of NFTs and edit their attributes. This allows for the maintenance of up-to-date data on the blockchain. For example, when the status of an order changes, the freelance exchange dApp can send a request to the master-contract to update the corresponding NFT's status attribute.
4. Data Updates via Master-Contract: When a change occurs in the freelance exchange dApp, such as the status of an order or the details of a freelancer, the dApp can interact with the master-contract to request the necessary updates. The dApp can send a message to the master-contract, specifying the NFT and the attribute to be edited. The master-contract then processes the request and updates the corresponding NFT attribute accordingly.
5. Blockchain-based Data Storage: By utilizing NFTs and storing data on the TON blockchain, the freelance exchange dApp ensures that the important information, such as order statuses, freelancer details, and employer preferences, are securely stored and tamper-resistant. The data is kept on-chain, allowing for transparency and immutability.
6. Additional Functionality: In addition to the core functionality of storing and updating data, you can enhance the freelance exchange dApp by adding features such as NFT transfers between users, tracking transaction history, implementing payment mechanisms using blockchain tokens, and creating a user-friendly front-end interface to interact with the dApp.

By using the NFT technology provided by the TON NFT dApp repository, you can create a decentralized freelance exchange dApp on the TON blockchain. This approach allows for the storage of key data as NFTs and leverages the master-contract's ownership and editing capabilities to maintain and update the data on-chain, ensuring transparency and reliability within the freelance exchange ecosystem.



## 5.2 · Betting

Here is a concept of a decentralized betting service “TON Bet”.

TON Bet is a betting service that provides real payment guarantees through its decentralized architecture. Users receive tokens for each bet, and receive rewards for winning bets based on having the tokens in their wallet. Additionally, the prize pool is held in staking during events, allowing users and agents to receive additional benefits. In the future, an automated feature is planned for users to create their own proposals and oracles for bets.

User scenario: Users vote on the outcome of real events (such as presidential elections). After the event, the outcome is determined, and those who guessed correctly receive their vote back with a proportionate part of the prize pool and any staking profits. Users determine the amount to bet.

Offer for users: Earn profits by betting on current events. Voting system built on the TON blockchain guarantees fair payouts and survey transparency. Receive guaranteed extra winnings for staking the amount of your bet while the game is on.

Influencer scenario: influencers, such as admins of Telegram chats or owners of Telegram channels, enter a special bot to view available betting games, select a game and generate a post to advertise in a channel to attract participants. After the outcome is determined, influencers receive a reward that can be withdrawn to their cold wallet.

Offer for influencers: Try a new way to monetize your audience. Take benefits from low entry cost and high speed for checking profit hypotheses. Get transparent payout, secured by decentralized architecture of the service and additional profits from staking coins.

MVP: The service issues proposals (like “who will be next president of the USA? Trump / Biden / other”), while influencers can generate their proxy smart-contracts to attract an audience and receive payments.

Technical features: Tokens are equivalent to votes in the service. Users select their stake amount in TON and the tokens, where 1 token equals 1 vote. The final prize pool value, based on the outcome, is distributed to the Jetton wallets of winning bets accordingly. Let's see how this mechanism works on the example of the voting process.
<br><br><br>
![TON Bet mechanism](https://raw.githubusercontent.com/HyperlinksSpace/tonnftdapp/refs/heads/master/blackpaper/3.png)
<br><br><br>
On the first and second steps user sends the amount of his bet through Influencer’s proxy (smart-contract that is needed to calculate Influencer’s reward) to the Jetton-Master of Votes (smart-contract, that accepts the bets and mints back Jettons to user accordingly to the amount of his votes). On the third step Jetton-Master just mints the corresponding amount of Jettons to the user.

Tokenization: Tokens play a vital role in our architecture. After making a bet, users get Jettons that prove their rights for the reward with additional profit for stacking in case they win. Apart from that, users can get achievements in the form of NFT, which will allow them to access some additional privileges on our service, such as increased staking percentage or access to some VIP-offers.

Turnover of Jettons: Voting period for each proposal will be limited - there will always be some time between termination of voting and determining the outcome of an event. Due to this fact, Jettons can change their valuation over time. Let’s see how this will work on the example of the proposal to vote on the outcome of the presidential elections. This betting offer may be minted a year before the elections themselves and users may have an opportunity to vote within, let’s say, just a month after the minting of the proposal. In this case, somebody that will get known about this game after the voting termination, may want to buy jettons from other users to participate. On the other hand, somebody who has voted for the favorite may want to sell his Jettons at a lower rate than his potential reward, but get his money back earlier to lower the risk level. Change of favorite or expectations, news on the candidates and elections may drive sales on the secondary market too. For this reason, we plan to build a special Jettons exchange to help buyers of Voting Jettons to find sellers, explore offers and trade Jettons.

Oracles: As we plan to expand our service for supporting almost all types of events from the birth of offspring of a popular blogger's cat to rap battle or football matches, we will allow different types of oracles depending on the type of the event. Firstly we will deploy the proposals, but when anyone will have an opportunity to mint a betting game on any event, they will choose an available type of oracle from the list themselves, e.g. in case of such event as birth of offspring of a popular blogger's cat (The question could be on the amount of cats that will be born) blogger himself will be able to act as an oracle, leaving it up to users to decide whether to trust his offer or not. In this case his wallet will act as an oracle and the transaction which will determine the outcome will be signed by his wallet. This address will be stored in the memory of smart-contract of this offer. In case of a rap battle, a multisig wallet can act as an oracle - all the judges will need to sign a transaction to determine the outcome. For such events as football matches or cryptocurrency rates related outcomes we can implement the usage of off-chain oracles.

Moderation and Appeals: We want the content on our service to comply with universal moral standards, that's why we plan to check the user-generated proposals on the compliance to our terms and conditions. In the future we will implement a decentralized mechanism of moderation. We will deploy the NFT collection of moderator’s badges and will implement a mechanism of getting moderator’s NFT for some specific activities on our service, that will allow users to vote on whether to post some proposals or not. Of course users will get some additional amount of coins from the prize pool for voting. We plan to use similar mechanics for the Appeals. When oracle determines the outcome, rewards don’t go to users instantly, user’s have some time to file an appeal. If some previously determined percent of users voted for the appeal, moderators come into the game, double check the situation and vote for the real outcome.



## 5.3 · Taxi (Coming soon)



# 6 · Opportunities

In this section we reveal the main opportunities that TDBt brings for decentralization.



## 6.1 · Tokenize anything!

The flexibility of the tokenized decentralized backend allows for the creation of various services across different industries and sectors. The NFT layer in the architecture can represent any entity, whether it's a virtual item in a game, a passport for a taxi driver, or a smart contract for a voting game. The technology provides flexibility in terms of representing different entities as NFTs and storing their metadata and files on-chain. This opens up the possibility of tokenizing a wide range of assets and entities across different markets. NFTs can represent a wide range of digital or physical assets, such as:

Digital collectibles: You can tokenize and create NFTs for digital artwork, virtual items in games, music, videos, and other forms of digital content.

Real-world assets: Physical assets like real estate, art pieces, luxury goods, or even intellectual property rights can be tokenized and represented as NFTs on the blockchain.

Identity and reputation: You can tokenize identity-related information, such as verified credentials or reputation scores, to enhance trust and interoperability in various industries like finance, education, and healthcare.

Financial instruments: NFTs can be used to tokenize financial assets like equity in companies, bonds, derivatives, and other investment instruments, providing fractional ownership and liquidity.

Intellectual property: Tokenizing intellectual property rights, such as patents, trademarks, or copyrights, can enable more efficient licensing, tracking, and monetization of creative works.



## 6.2 · Hack different markets delivering them decentralization

The markets where this technology can be applied are diverse and include but are not limited to:

Art and collectibles: Tokenization can revolutionize the art market by providing provenance, authenticity, and fractional ownership of artworks. It can also enable new forms of digital art and collectibles.

Gaming and virtual worlds: NFTs have gained significant traction in the gaming industry, allowing players to own, trade, and monetize in-game items and virtual land. Virtual worlds can also benefit from decentralized services built on this technology.

Decentralized finance (DeFi): Tokenization can enable new financial instruments and protocols in the DeFi space, such as tokenized stocks, commodities, or lending/borrowing markets.

Supply chain and logistics: By tokenizing goods and tracking their provenance on the blockchain, supply chain management can be enhanced with improved transparency, efficiency, and trust.

Identity and credentials: Tokenized identity solutions can streamline identity verification processes, facilitate secure sharing of personal data, and enable self-sovereign identity.

Content creation and distribution: NFTs can revolutionize the media and entertainment industry by providing new models for content creation, distribution, and monetization, empowering creators and reducing intermediaries.



## 6.3 · Bring AI to Blockchain

Apart from that, we can think about how to bring AI to blockchain. Of course, considering the risks and threats of AI. Here's a description of the possibilities and opportunities that can arise from combining AI, blockchain, and neural networks:

Decentralized AI: By integrating AI with blockchain, you can create a decentralized AI network. Traditional AI models often rely on centralized servers, which can be vulnerable to single points of failure, data breaches, and censorship. With blockchain, AI models can be distributed across a network of nodes, making the system more robust, transparent, and resistant to attacks.

Secure and Private Data Sharing: Blockchain technology provides a decentralized and tamper-resistant platform for storing and sharing data. By utilizing smart contracts, you can establish rules and permissions for accessing data, ensuring privacy and security. AI algorithms can then be trained on this shared data without exposing the underlying sensitive information, thereby enabling collaborative and privacy-preserving AI models.

Tokenized Incentives: The use of tokens within the blockchain can serve as incentives for participation in the AI network. For example, individuals can contribute their computational resources, such as processing power or storage, to the network and be rewarded with tokens in return. This incentivizes the growth of the network and encourages active participation from various stakeholders.

Neurotransmitter Tokens: In the context of neural networks, tokens can be used as "neurotransmitters" to facilitate communication between different smart contracts representing neurons. These tokens can carry information, instructions, or value between the nodes of the neural network, enabling the exchange of data and coordination between different components.

Enhanced Machine Learning Models: Integrating AI with blockchain can help improve machine learning models in several ways. Firstly, the transparency and immutability of blockchain can enhance the auditability and accountability of AI algorithms, addressing concerns around biased or unfair decision-making. Secondly, by utilizing the distributed nature of blockchain, AI models can leverage a larger pool of diverse and securely shared data for training, leading to more accurate and robust models.

New Business Models: The fusion of AI, blockchain, and neural networks can unlock novel business models. For instance, decentralized AI marketplaces can emerge, where individuals can buy and sell AI algorithms, services, or even trained models directly, eliminating the need for intermediaries. This can promote innovation, empower individual developers, and create a more accessible and competitive AI ecosystem.

Autonomous Smart Contracts: AI embedded within smart contracts can enable autonomous and intelligent decision-making based on predefined rules and conditions. For example, in decentralized finance (DeFi), AI-powered smart contracts can automatically assess and execute complex financial transactions, mitigate risks, and optimize investment strategies, all while ensuring transparency and security.

Trust and Verification: Blockchain's inherent trust and transparency can be leveraged to verify the authenticity and integrity of AI models and their outputs. This is particularly relevant in critical domains like healthcare or autonomous vehicles, where ensuring the reliability and trustworthiness of AI systems is essential.

These opportunities represent a glimpse of the potential that lies ahead by combining AI, blockchain, and neural networks. However, it's important to note that these concepts are still evolving, and their practical implementation and widespread adoption may require further research, development, and collaboration within the AI and blockchain communities.



# 7 · Let’s create!

We appreciate your contributions, making apps, extensions, discoveries and findings.

Let’s play… Big. Let’s play… Wondering! Let’s create a decentralized world.

I believe we can do it…. Together…

*Special thanks to developers, founders and adepts of TON, to the community of TON & crypto community for their contributions for the whole decentralized technology landscape, to OpenAI team for creating a useful tool.*