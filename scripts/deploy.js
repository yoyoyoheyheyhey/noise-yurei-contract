async function main() {
  const NoiseYurei = await ethers.getContractFactory("NoiseYurei")

  const NoiseYurei = await NoiseYurei.deploy()
  await NoiseYurei.deployed()
  console.log("Contract deployed to address:", NoiseYurei.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
