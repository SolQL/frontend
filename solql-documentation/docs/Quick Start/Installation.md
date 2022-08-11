---
sidebar_position: 2
---

For the time being, SolQL is only available as an npm package. 


```bash
npm install solql
```


Optional step:

If you would like to use the solql cli, you would need to install it as a hardhat plug-in.
This can be done by adding the following lines to your hardhat.config.js file.

```js
const { addSolQLPlugin } = require("solql");

addSolQLPlugin();
```
