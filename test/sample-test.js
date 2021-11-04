const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GameItems", function () {
  it("Should return the GameItems balance", async function () {
    const GameItems = await ethers.getContractFactory("GameItems");
    const gameitems = await GameItems.deploy();
    await gameitems.deployed();

    expect(await gameitems.balanceOf(deployerWallet,3)).to.equal(1000000000);

    // const getGameItemsBalance = await gameitems.balanceOf(deployerWallet,3)

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await getGameItemsBalance).to.equal();
  });
});
