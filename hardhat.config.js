require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18", 
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    paths: {
      artifacts: "./artifacts",
    },
    external: {
      contracts: [
        {
          artifacts: "@openzeppelin/contracts/build/contracts",
        },
      ],
    },
  },
};


