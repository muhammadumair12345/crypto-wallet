const hre = require("hardhat");

async function main() {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.waitForDeployment();

  console.log("Transactions deployed to: ", transactions.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
