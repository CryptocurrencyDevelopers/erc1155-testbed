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
      url: "https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b",
      chainId: 1
    }
    // mumbai: {
    // Infura
    // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
    // url: "https://rpc-mumbai.matic.today",
    // accounts: [privateKey]
    // },
    // matic: {
    //   // Infura
    //   // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [privateKey]
    // }

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

