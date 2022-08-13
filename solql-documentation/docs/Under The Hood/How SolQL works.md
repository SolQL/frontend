---
sidebar_position: 3
---



### ISolQL Solidity interface

```js
interface ISolQL {
    function query() external returns(bytes memory results);
}
```


### The Oracle contract

```js
contract Oracle {
    
    function run(bytes memory bytecode) public returns(bytes memory result) {

        ISolQL query = ISolQL(deployContractFromBytecode(bytecode));
        result = query.query();

        return result;
    }


    function deployContractFromBytecode(bytes memory bytecode) internal returns(address queryContract) {
        assembly {
            queryContract := create(0, add(bytecode, 0x20), mload(bytecode))
        }
    }
    
}
```