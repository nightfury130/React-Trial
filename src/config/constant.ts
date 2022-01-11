import Web3 from "web3";
export const web3 = new Web3("https://rpc-mumbai.maticvigil.com");
export const contractAddress = "0x979DE62043d23f966f5083cAeb7bbca22c4bBe89";
export const contractABI = require("./contracts/TESTlaunchpadVesting.json");
export const contract = new web3.eth.Contract(contractABI, contractAddress);
export const contract = "";
export const NETWORK_NAME = "Mumbai Testnet";
