// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Transactions {

    uint256 transactionCouter;

    event Transfer(address sender, address recever, uint ammount, string message, uint256 timestamp);

    struct Transaction {
        
        address sender;
        address recever;
        uint ammount;
        string message;
        uint256 timestamp;

    }

    Transaction[] transactions;

    function appendToBlockchain (address payable recever, uint ammount, string memory message) public {

        transactionCouter += 1;
        transactions.push(Transaction(msg.sender, recever, ammount, message, block.timestamp));
        
        emit Transfer(msg.sender, recever, ammount, message, block.timestamp);

    }

    function getTransactions () public view returns (Transaction[] memory) {
        
        return transactions;

    }

    function countTransactions () public view returns (uint256) {
        
        return transactionCouter;

    }

}