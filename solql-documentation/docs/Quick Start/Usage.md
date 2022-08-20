---
sidebar_position: 3
---

** Make sure you have followed the installation steps and have installed solql to follow along with this tutorial **


You have two options for using solql.


1)	The cli, which uses a provider of your choosing from your hardhat.config.js file.


2)	The SolQL class, which you will need to manually pass a provider to.

The first method is the quickest to get started, as it only requires you to add your provider to the hardhat.config.js file.

The second method requires a set-up like what you can observe in the code snippet below.

Note that both methods require the succcessful [** compilation**](#compilation) of the smart contract you intend to use.

## Usage within scripts



```js
const hre = require("hre");
const { SolQL } = require("solql");




async function main() {

    const contractName = "Query1";
    const chainId = "5"; //the chainId of goerli testnet.
    const providerUrl = 'YOUR PROVIDER URL HERE';

    const provider = new ethers.providers.JsonRpcProvider(providerUrl);

    const solql = new SolQL(contractName, chainId, provider, hre);

    const result = await solql.query.run();

    console.log(result);
}



```


## CLI usage





Continuing with our example of contract Query1 on goerli testnet.


First, you would have to compile your contract using:

```bash
npx hardhat compile
```

After you've successfully compiled your contracts, you can use the following:


```bash
npx hardhat solql --contract-name Query1 --network-name goerli
```

this should print the result of your query to the console.


Note that in this example, goerli, the network name, must exist under the networks property of the hardhat.config.js file.
An example of this would be:
```js
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.16",
  networks: {

    goerli: {
      url: process.env.GOERLI_URL,
      //accounts: [ process.env.GOERLI_PRIVATE_KEY ]
    }
  }
};
```


More generally, we have the following: 
```bash
npx hardhat solql --contract-name <query contract name> --network-name <name of the network>
```



## Compilation

if you make changes to your smart contract, you will need to re-compile it using
```bash
npx hardhat compile
```
This may throw errors, which will most likely be as a result of bugs in the solidity code.