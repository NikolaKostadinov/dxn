require('@nomiclabs/hardhat-waffle');

dotenv = require('dotenv');
dotenv.config();
const { DAPP_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.0',
  networks: {
    hardhat:{ },
    goerli: {
      url: DAPP_URL,
      accounts: [ PRIVATE_KEY ]
    }
  }
}