import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import { contractAddress, contractABI } from '../utils';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () =>{

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({ provider, signer, contract });

}

export const TransactionProvider = ({ children }) => {

    const [ account, setAccount ] = useState();

    const wallectConnection = async () => {

        try {
            
            if (!ethereum) return alert('Where is your wallet ?');
        else {
    
            const accounts = await ethereum.request({ method: 'eth_accounts' });
    
            console.log(accounts); // <-- DEV
    
            if (accounts.length) setAccount(accounts[0]);
    
        }

        } catch (error) {
            console.log(error);
        }
    
    }

    useEffect(() => {
        wallectConnection();
    }, [])

    const connectWallet = async () => {

        try {
            
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    
            setAccount(accounts[0]);
    
        } catch (error) {
            console.log(error);
        }
    
    }

    return(
        <TransactionContext.Provider value={{ account, connectWallet }}>
            {
                children
            }
        </TransactionContext.Provider>
    );
}