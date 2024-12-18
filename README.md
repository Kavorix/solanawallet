# Solana Wallet Cross-Platform App with Expo, Web3 & React Native

This is a simple Solana Wallet Cross-Platform App built with Expo, Web3 & React Native to learn about web3 and smart contract. The Solana Wallet is an essential bridge connecting DeFi developers and the Solana blockchain. With Solana's quick and low-cost transactions.

## Screens and Features

### Welcome

These screens show using the Biometric Prompt (Android) or FaceID and TouchID (iOS) to authenticate the user with a fingerprint or face scan. Later,automatically create mnemonic phrase or recovery wallet with mnemonic phrase. Save and load mnemonics from local securely store on the device.

<div align="center">
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/authenticate.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/auto_set_seed.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/recovery_seed.gif" width=20% height=20%>  
</div>
  
### Dashboard

These screens shows the accounts SOL/SPL-token balances,SOL/SPL-token deposits, SOL/SPL-token transfers. Camera support with QR code scanning for Sol/SPL-token deposit, transfer. Multiple wallet accounts add,delete,refresh.

<div align="center">
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/dashboard.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/mutil_accounts.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/send.gif" width=20% height=20%>  
</div>

### Airdrop and Mint

These screens show minting new tokens, airdropping Sol/Usdc. Convenient for developers

<div align="center">
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/mint.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/airdrop.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/airdrop_usdc.gif" width=20% height=20%>  
</div>



### Safe Transfer
Build the "Safe Token Transfer app", that prevents funds from being lost.
When someone wants to transfer tokens to a particular user, they do it in 2 steps to enforce safety. First, they deposit those tokens into an escrow token account that is controlled by our program. Second, the final receiver of the tokens confirms the withdrawal and receives the funds from the escrow.
If they fat-fingered receiver's address, or if receiver cannot find his keys anymore, they can safely pull back his Safe Payment before the transfer is complete.This smart contract repository:https://github.com/kavorix/safe-transfer.git 

<div align="center">
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/safe_transfer.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/safe_transfer_confirm.gif" width=20% height=20%>  
</div>


### Safe Exchange
Introduce a third party C which both A and B trust.A or B can go first and send their token to C. C then waits for the other party to send their token and only then does C release both token.The blockchain way is to replace the trusted third party C with code on a blockchain, specifically a smart contract that verifiably acts the same way a
trusted third party would. This smart contract repository:
https://github.com/kavorix/safe_exchange.git 

<div align="center">
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/safe_exchange.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/safe_exchange_confirm.gif" width=20% height=20%>  

</div>

### Others

 History, remove recovery phrase, change Web3 explorer

<div align="center">
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/history.gif" width=20% height=20%> 
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp 
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/remove_seed.gif" width=20% height=20%>  
&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp
<img src="https://github.com/Kavorix/solanawallet/blob/master/wallet/change_explorer.gif" width=20% height=20%> 
</div>

#### Request Airdrop

This app is configured to connect to dev network so the tokens showed are not real.
Good thing is that every time you press here you get 2 SOL in your account that can be used to test the app, make transfers...


## What I used to build this Solana Wallet

### Expo
Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
 - [Expo](https://expo.io/)

### TypeScript
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
 - [TypeScript](https://www.typescriptlang.org/)

### Solana/web3.js
This is the Solana Javascript API built on the Solana JSON RPC API.
 - [Solana/web3.js](https://solana-labs.github.io/solana-web3.js/)

###  @solana/spl-token
TypeScript library for interacting with the SPL Token and Token-2022 programs.
 - [ @solana/spl-token](https://www.npmjs.com/package/@solana/spl-token) 


###  @project-serum/anchor
TypeScript client for Anchor programs.
 - [ @project-serum/anchor](https://www.npmjs.com/package/@project-serum/anchor) 

### React Native Paper
Paper is a collection of customizable and production-ready components for React Native, following Google’s Material Design guidelines.
 - [React Native Paper](https://callstack.github.io/react-native-paper/)

### React Navigation
Routing and navigation for Expo and React Native apps.
 - [React Navigation](https://reactnavigation.org/)

### Tailwind CSS
NativeWind uses Tailwind CSS as scripting language to create a universal style system for React Native
- [NativeWind](https://www.nativewind.dev//)

### Rust
Solana supports writing on-chain programs using the Rust programming language.
- [Rust](https://www.rust-lang.org/)

### More

Moreover I used other libraries for crypto, qr generate and scan...

You can check them in [package.json](https://github.com/kavorix/solanaWallet/blob/main/package.json)


## Run it:

~~~bash
$ git clone https://github.com/kavorix/solanaWallet.git
$ cd solanaWallet
$ yarn 
$ expo start
~~~



