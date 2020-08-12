let contractABI = [];
let contractAddress = '0x83b369Ac9732CE950Fe0F4f8b06A0d2C5F48bA18'
//We use web3 libary and give url to our local blockChain
//if i want to run on etherium network localhost will be my etherium node address
let web3 = new Web3('http://localhost:9545');
//THis will point to our etherium stance
let testContract1 = new web3.eth.Contract(contractABI, contractAddress)

console.log(web3)

//this method retruns promise
web3.eth.getAccounts()
.then(console.log);