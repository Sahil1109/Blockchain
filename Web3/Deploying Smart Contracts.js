var Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

const account1 ='0xaa61c6A0e290c1829814Db7b265125FA1a5ceAB3'
// const account2 ='0x0eaD9053de1cE7517c32B976bB3Fc4EBe49A8Ed5'

const privateKey1 =Buffer.from('d8f574eaacef313e3e46aff27425b577b3a55cfb8f5b90ec4c67c1151375456c','hex')
// const privateKey2 =Buffer.from('8b0e253a9ee6596efa8b4baaba79dc6ef92c452178af34421e98e59fa4be3388','hex')

const contractABI =[{"inputs":[{"internalType":"uint8","name":"_numProposals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"delegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"toVoter","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint8","name":"toProposal","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"internalType":"uint8","name":"_winningProposal","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}]
const contractAddress ='0xe7a06a20ef7d8278e3bca649ba3bb4f02d538315f6af94afdfe9a401eae970f6'

var ballotContract =new web3.eth.Contract(contractABI,contractAddress);
console.log(ballotContract)
ballotContract.methods.name().call((err,result)=>{console.log(result)})
// web3.eth.getTransactionCount(account1,(err,txCount)=>{

//     //Smart contract data
//     const data='0x608060405234801561001057600080fd5b506040516108723803806108728339818101604052602081101561003357600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055508060ff166002816100fd9190610104565b5050610157565b81548183558181111561012b5781836000526020600020918201910161012a9190610130565b5b505050565b61015491905b808211156101505760008082016000905550600101610136565b5090565b90565b61070c806101666000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635c19a95c14610051578063609ff1bd146100955780639e7b8d61146100b9578063b3f98adc146100fd575b600080fd5b6100936004803603602081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061012e565b005b61009d610481565b604051808260ff1660ff16815260200191505060405180910390f35b6100fb600480360360208110156100cf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104f9565b005b61012c6004803603602081101561011357600080fd5b81019080803560ff1690602001909291905050506105f6565b005b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff161561018e575061047e565b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156102bc57503373ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b1561032b57600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915061018f565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610365575061047e565b60018160010160006101000a81548160ff021916908315150217905550818160010160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff161561046457816000015460028260010160019054906101000a900460ff1660ff168154811061044557fe5b906000526020600020016000016000828254019250508190555061047b565b816000015481600001600082825401925050819055505b50505b50565b6000806000905060008090505b6002805490508160ff1610156104f4578160028260ff16815481106104af57fe5b906000526020600020016000015411156104e75760028160ff16815481106104d357fe5b906000526020600020016000015491508092505b808060010191505061048e565b505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415806105a15750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff165b156105ab576105f3565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055505b50565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff168061065e57506002805490508260ff1610155b1561066957506106d4565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548160ff021916908360ff160217905550806000015460028360ff16815481106106b857fe5b9060005260206000200160000160008282540192505081905550505b5056fea265627a7a723158205803a8aea2e47712704822bafa0bfd151f3ebb3021eebc11a4fb4d273d4104e464736f6c634300050c0032'

//     //Create transaction object
//     const txObject={
//     nonce:web3.utils.toHex(txCount),
//     gasLimit:web3.utils.toHex(1000000),//Raise this
//     data:data,
//     gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei'))
//     }

//     //Sign the transaction
//     const tx = new Tx(txObject)
//     tx.sign(privateKey1)

//     const serializeTransaction = tx.serialize()
//     const raw = '0x'+serializeTransaction.toString('hex')

// //Broadcast the transaction
// web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
//     console.log('err:',err,'txHash:',txHash)
// })
// })
