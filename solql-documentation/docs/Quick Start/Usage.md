---
sidebar_position: 3
---
## Usage within scripts
Suppose you had a contract named Query1, and wanted to run it on goerli.



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



