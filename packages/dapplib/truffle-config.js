require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remind concert hunt inflict swear slam'; 
let testAccounts = [
"0x0539e9d04f9d61531c37cfa026414a2b8f468255afa021036b287b1eee596627",
"0x8cde405c1187553d23e813d853666d6b69764b6588833545346227f7b4c8423e",
"0x8867a19ec057225d5a369d2adf65a50ba6994995720206725db4f4b4482a31b3",
"0xed66d3fa55274d4a21d1ef87837a47785adf386b8586d5c95cd1ca5ed02bdf90",
"0x31047cf026b4b39124e9b8bf1113e4b35bd63c8bd9a60c7c94b704a6e024edd1",
"0x7570d80d2260dd209e208f647e9c0e0d81ec7dc0ab3ec3cfee77cdf703419147",
"0xa6608da806101ae5dbcc4bad21285a789a8c65adf673009f2e9b352912d6ace2",
"0x1e85bfcdf151489ed34615691a97fe2f237e86b601ab7bf0c65a69d4b21ecaee",
"0xda3658a1a953042690e950d84d1a58c348e162cd799f334a699547aea656207f",
"0xcfe04d4669d610baadf1ced9cd917034a13ae1640505ae8e93f59c4abf0331cf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

