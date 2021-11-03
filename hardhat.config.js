require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
// const mnemonic = fs.readFileSync(".secret").toString().trim();
//

// require("./tasks/faucet");


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      chainId: 1337,
      url: "http://localhost:8545"
    },
    hardhat: {
      chainId: 1337
    },
    cd: {
      url: "https://hardhat.cryptocurrencydevelopers.dev",
      chainId: 1337,
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://hardhat.cryptocurrencydevelopers.dev",
      chainId: 1
    }
  },
  solidity: {
     compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.5.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  }
};

