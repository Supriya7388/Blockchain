// https://eth-mainnet.g.alchemy.com/v2/J99tzhH_z3BXlfqW3QjJcnW6CJSwhFU8
// 0x76332aF436099A4A54DC56979981764496BfB2C0
// 31a50247f6414b49ecac75c968345061354ec9980324f207045850d4c80046ab
// https://eth-goerli.g.alchemy.com/v2/hfkzt9lCDtl5jCWQo2pkPlK1GyJYMo_S
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    mainnet: {
      url: 'https://eth-goerli.g.alchemy.com/v2/hfkzt9lCDtl5jCWQo2pkPlK1GyJYMo_S',
      accounts: ['0xb45a7510eaad1ef02cfad55c67c0ea084cdd40d2'],
    },
  },
};
