const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Fetch the deployer's balance using the provider
    const balance = await deployer.provider.getBalance(deployer.address);

    // Use the formatEther function directly from ethers
    const formattedBalance = ethers.formatEther(balance);
    console.log("Account balance:", formattedBalance);

    // Get the contract factory and deploy the contract
    const MeetAndGreet = await ethers.getContractFactory("MeetAndGreet");
    const meetAndGreet = await MeetAndGreet.deploy();

    console.log("MeetAndGreet contract address:", meetAndGreet.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
