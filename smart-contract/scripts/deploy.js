const hre = require("hardhat");

async function main() {
  const transactions = await hre.ethers.deployContract("Transactions");

  await transactions.waitForDeployment();

  console.log("Transactions deployed to: ", transactions.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
