async function main() {
  const NoiseYurei = await ethers.getContractFactory("NoiseYurei")

  const noiseYurei = await NoiseYurei.deploy()
  await noiseYurei.deployed()
  console.log("Contract deployed to address:", NoiseYurei.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
