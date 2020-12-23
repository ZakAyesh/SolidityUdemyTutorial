const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const mnemonic = 'tiny nasty there biology home gate endorse fringe skin patient nurse common';

const provider = new HDWalletProvider(
     mnemonic,
    'https://rinkeby.infura.io/v3/183938d4eb184360af056f3394ba4e43'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result =  await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0] });

    console.log(interface);    
    console.log('Contract deployed', result.options.address)
};
deploy();