// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
const deployerWallet = "0xfabb0ac9d68b0b445fb7357272ff202c5651694a";
  // We get the contract to deploy
  const GameItems = await hre.ethers.getContractFactory("GameItems");
  const gameitems = await GameItems.deploy();

  await gameitems.deployed()
  // .then(() => console.log(gameitems.balanceOf(deployerWallet.toString(),3)))
  // .catch((error) => {
  //   console.error(error);
  //   process.exit(1);
  // });
  console.log("GameItems deployed to:", gameitems.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
