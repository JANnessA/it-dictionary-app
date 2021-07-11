var NodeRSA = require('node-rsa')
var fs = require('fs')

//decrypt
let public = fs.readFileSync('public.key', 'utf8')
let publicKey = new NodeRSA(public)
console.log(public);
console.log(publicKey.encrypt('text', 'base64'));
console.log('==============================');
//encrypt
let private = fs.readFileSync('private.key', 'utf8')
let privateKey = new NodeRSA(private)
let decText = 'MWHbX/KNodf1be4fpLlh8oO3GtakXe42JebADdtBni+AcJy8Xn+7ubOLGoMTgRuNceaNXzQhvlXN/yIw211BL2REt5fLw4yIcLgNN6RQ2Afa7d0JhQZkbglWX02BJ1/2u8k0ka3qbGw22wFaZ7seASOkuMyoXZieI4i+YNohubY='
console.log(private);
console.log(privateKey.decrypt(decText, 'utf8'));

// exports.encryptString = async(text) => {
//   let public = await fs.readFile('public.key', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//   })
//   let publicKey = new NodeRSA(public)
//   console.log(publicKey.encrypt(text, 'utf8'));
//   return publicKey.encrypt(text, 'utf8')
// }

// exports.decryptString = async(text) => {
//   let private = await fs.readFile('private.key', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//   })
//   let privateKey = new NodeRSA(private)
//   console.log(privateKey.decrypt(text, 'base64'));
//   return privateKey.decrypt(text, 'base64')
// }