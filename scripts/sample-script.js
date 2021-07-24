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

  // We get the contract to deploy
  const RETOKEN = await hre.ethers.getContractFactory("REToken");
  const retoken = await RETOKEN.deploy();

  await retoken.deployed();

  console.log("REToken deployed to:", retoken.address);

  const REFRACTIONAL = await hre.ethers.getContractFactory("REFractional");
  const refractional = await REFRACTIONAL.deploy(retoken);

  await refractional.deployed();

  console.log("REFractional deployed to:", refractional.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
