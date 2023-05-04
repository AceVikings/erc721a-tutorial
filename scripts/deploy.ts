import { ethers } from "hardhat";

async function main() {
  const NFTaFactory = await ethers.getContractFactory("NFTa");
  const NFTa = await NFTaFactory.deploy();

  console.log(`NFTa deployed locally at ${NFTa.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
