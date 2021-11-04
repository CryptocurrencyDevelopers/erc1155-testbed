const { describe, expect } = require("chai");
const { ethers } = require("hardhat");

async function main() {

const web3 = new ethers.providers.JsonRpcProvider('https://hardhat.cryptocurrencydevelopers.dev')
const Game = require('../artifacts/contracts/GameItems.sol/GameItems.json')
    const GameItems = await ethers.getContractFactory("GameItems");
    // const gameitems = await GameItems.deploy();
    const gameitems = new ethers.Contract('0x35a61e6869Ec111485147A699E9d02417b1e9547', Game.abi, web3)
    await gameitems.deployed();

    // const deployerWallet = "0xfabb0ac9d68b0b445fb7357272ff202c5651694a";main()

    const gI = await gameitems.balanceOf("0xfabb0ac9d68b0b445fb7357272ff202c5651694a",3);
    console.log(gI.toString())
    const gU = await gameitems.uri(1)
    console.log(gU)
    // expect(await gameitems.balanceOf(deployerWallet,3)).to.equal(1000000000);

    // const getGameItemsBalance = await gameitems.balanceOf(deployerWallet,3)

    // wait until the transaction is mined
    // await setGreetingTx.wait();

}
main()
