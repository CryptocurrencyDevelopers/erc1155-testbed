const { describe, expect } = require("chai");
const { ethers } = require("hardhat");

async function main() {

const web3 = new ethers.providers.JsonRpcProvider('https://hardhat.cryptocurrencydevelopers.dev')
const Game = require('../artifacts/contracts/GameItems.sol/GameItems.json')
    const GameItems = await ethers.getContractFactory("GameItems");
    // const gameitems = await GameItems.deploy();
    const gameitems = new ethers.Contract('0x5948A5E70DAeEC707A04391a3Eb0bDA8F71b1436', Game.abi, web3)
    await gameitems.deployed();

    // const deployerWallet = "0xfabb0ac9d68b0b445fb7357272ff202c5651694a";main()

    const gI = await gameitems.balanceOf("0xfabb0ac9d68b0b445fb7357272ff202c5651694a",3);
    console.log(gI.toString())
    // expect(await gameitems.balanceOf(deployerWallet,3)).to.equal(1000000000);

    // const getGameItemsBalance = await gameitems.balanceOf(deployerWallet,3)

    // wait until the transaction is mined
    // await setGreetingTx.wait();

}
main()
