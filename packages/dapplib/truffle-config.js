require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom drive flock slush stool rice still concert grace gloom swift giggle'; 
let testAccounts = [
"0x9be5f287e0f0fd31ab4a2a8aa928f04a06e73db4c6ced9dff2e80bf904b4942d",
"0x64db45d097ec50caff5ad98f4ae5474197140f496f965aa61d684bbdc4cab530",
"0x1743e2f497b5507add81ce72ccfafa04c658b573d47fcecbb807adb11818d124",
"0x2c7a70ed9bb3ff11bc708a9f675b4a5ae275c4ae5037c8c0f1e42237dd066cca",
"0x2ac8b51d835f22aa4126dde3a0acab82e305cca9854f0633b59acabcbc5b7f6f",
"0x5c5a2fe7e60e5e2e5072911ac68e74fd8e4b52d4d73d3f703443472836fca2d9",
"0x4f4c2eb88d052f0af094434b5b08909518fdf02c0c4ca04b96814166a6a832cd",
"0x47929dc608545119409e64bd72df8dc353f1d629b1129d206c1191ce8000ec1c",
"0xdbcb2f26827e270e6a61b898f0e61a7e76e5a6cb9711552b42706b38d90b544a",
"0xa2c3897ed336948263659158053f6f5c8a5407fbc164422d1b39567c44f7f18f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

