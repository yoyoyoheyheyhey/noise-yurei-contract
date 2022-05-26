require('dotenv').config();
const { API_URL, PUBLIC_KEY, PRIVATE_KEY } = process.env

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/NoiseYurei.sol/NoiseYurei.json")
const contractAddress = "0x9815d57b725D54A79CBBE9fbaaE68158BDf60735"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log("Promise failed:", err)
    })
}

// #0
// mintNFT("ipfs://QmXnRjMxa7Gdo4dVcJAys3nXCwLga5EZFxGijaonVYaAnn")
// 0x697c0b42222bd67b6f9d297b6542e62b5390bd701abc570bad7782fe8fcf8e70
// #1
// mintNFT("ipfs://QmNRkAWBv1WPZv7gBYmkM1zhhjNqz5C25puc3GHL2LBATr")
// 0x49a92e31fb3947dbfeb00b5da243dc33e1b0e138626b70e069b962f12989c422
// #2
// mintNFT("ipfs://QmNjL5SxQb3yd4zbm2RTE5CN2kXFZZyetqyopFxUzSkuPr")
// 0x2559f595880124c76e544f8fe91a03fa60e2b8cb439ce421e168dd7f69aec8eb
// #3
// mintNFT("ipfs://QmdpZTPVUC58o44sTfkaX5HSzTLkqYKsX92qX45F42Qs3o")
// 0x959bd48bc6b21f295cf03b5e7aca7915f72f03bee3ba193afe14bcf2d3879e23
// #4
// mintNFT("ipfs://QmcfTetbC99Fuqhkh7whTXjAmbjEvCqm4ztha1rDQAzMPL")
// 0xd20b2dc7b9fc0d35f4bd66e8a9390c264d31f403630b630b1eef6d7c2041f92e
// #5
// mintNFT("ipfs://QmPGHJnZKpc1F5k8DLJsLyi8eASsRbDfK1Em8XiNeu2cfn")
// 0x076465b9869f2efddae660a35129c165caa1cac632601c359f3200ffb9a81c4e
// #6
// mintNFT("ipfs://QmREe2bdjHGXeHZ381fE9vEuofEF6jn1S1EDeGfUpWcocd")
// 0xf17ead3f171249595ead43a6f6d045ebffd4c3d2b730530942d075579bbd45d5
// #7
// mintNFT("ipfs://QmNmwWww22NkXE8J1JTwdsqhEK4VV7KiGXvVKkbMxSMDvW")
// 0xb1353192d70f2d67caf7f2a003c7d558ad01f1bda7c132bd27f395fb59e3fb56
// #8
// mintNFT("ipfs://QmQ4qscmc9Aszgv21V3tDDktL4ZEPugLRodAxohBT4JRcY")
// 0x7cb2e410acfbcc42723f0d3007f9188f30ed19ec494403547e0e3884a6d92550
// #9
// mintNFT("ipfs://QmXViwVrie7grMjYpuCSKmxfUPH76Xd3vWhXwdXmPn8RRx")
// 0x8b1de9163a57c84ad735ec84d8e82a75c20ea9fd3b4e0fc715132c78dc68a4af
// #10
// mintNFT("ipfs://QmbeLLPpTxE9RFjb2enzXViTuSckp4bhZ15bMx8KMNjrCK")
// 0x9c85ee1e93fb8f68f4f8b9529d3469ac742e34d0a07c3fc13514d1fd98306d0e
// #11
// mintNFT("ipfs://QmZM696dxjTNMkypnCsQCGSHCfVtYeY9VZtkdSqbMpWgLL")
// 0x0e74232766c847ee86978ce024d674157d489c4b51a15e38b85c288d07f4aed4
// #12
// mintNFT("ipfs://QmTeXMTxoBwr8shAFHxz58dufEGb2qMGZWaTqcTYWf6rwy")
// 0xcdaaa0196ec1c09446f0b040cccd56bd050b9df0ba38abeb78c98ba6fbcc5f37
// #13
// mintNFT("ipfs://QmdC2qS5jwwBDbPas6FfcFM3KxBG8P8Wp2E8eqS6yEQj9c")
// 0x9872e2c9aaf2d5ed6839a988115c345b0612fca6fc011538558517e0a4851aca
// #14
// mintNFT("ipfs://QmV8gbC7S2qpKH4gsQenxVgpDL1dXQwUugMteggEb1EsAK")
// 0x01a6388a0714122f2309a401a004b163dddcd36869319b5dab47641ee91ba894
// #15
// mintNFT("ipfs://QmYBJj96XY46RDC5TkC9sDmSkpZrUMvDFn7nrmzVWFwWJj")
// 0x07fa27f5a965bf7a71b2bd4754b3e1d23e33863bdb1540a5d5e90662be418b98
// #16
// mintNFT("ipfs://QmciCMK2hKLyxa85TGfu4m14t487QSbTjVc1UGNhHABvSs")
// 0x710ead2e8e8acc259d23f3606923a28550635e8108960cbde7cdb9aa595b76e4
// #17
// mintNFT("ipfs://QmQhbf4mgchCAYy6H6wybG5QcEDxtPoocbfwN9GmXoJR5Y")
// 0x3d0b6b4b31e14e20e760b82e0c704053e3519a37aacfb2c1ca6563a9cc92f9c2
// #18
// mintNFT("ipfs://QmYqsaezRjQb9j1cDPLGq9Bo9At7n6v6hg2y6iUZdWo5HM")
// 0x61a83730c3930a0cb10e7dbeb9f4516a68b330b2799e895e73a005fb0d338fd8
// #19
// mintNFT("ipfs://QmZJN1YHN4t7WxbRmNm9KmF3zvqRSbAvzy9zwVxwubwJ3R")
// 0x0ea09393841cfb3b4099e8c1c72f56f1d6c7a257f572611e6fdb55306f23df3d