var Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

const account1 ='0xaa61c6A0e290c1829814Db7b265125FA1a5ceAB3'
const account2 ='0x0eaD9053de1cE7517c32B976bB3Fc4EBe49A8Ed5'

const privateKey1 =Buffer.from('d8f574eaacef313e3e46aff27425b577b3a55cfb8f5b90ec4c67c1151375456c','hex')
const privateKey2 =Buffer.from('8b0e253a9ee6596efa8b4baaba79dc6ef92c452178af34421e98e59fa4be3388','hex')

// web3.eth.getBalance(account1,(err,bal)=>{
//     console.log('account 1 balance:',web3.utils.fromWei(bal,'ether'))
// })
// web3.eth.getBalance(account2,(err,bal)=>{
//     console.log('account 2 balance:',web3.utils.fromWei(bal,'ether'))
// })
web3.eth.getTransactionCount(account1,(err,txCount)=>{
    //build the transactions
        const txObject ={
        nonce:web3.utils.toHex(txCount),
        to:account2,
        value: web3.utils.toHex(web3.utils.toWei('1','ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei'))
    }
    //sign the transaction
    const tx = new Tx(txObject)
    tx.sign(privateKey1)

    const serializedTransaction = tx.serialize()
    const raw = '0x'+serializedTransaction.toString('hex')

    //broadcast the transaction
    web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
        console.log('txHash:',txHash)
    })
})



