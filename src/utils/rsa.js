var NodeRSA = require('node-rsa')
var fs = require('fs')

module.exports.encryptString = (text) => {
  let public = fs.readFileSync('public.key', 'utf8')
  let publicKey = new NodeRSA(public)
  publicKey.setOptions({encryptionScheme: 'pkcs1'});
  return publicKey.encrypt(text, 'base64')
}

module.exports.decryptString = (text) => {
  let private =  fs.readFileSync('private.key', 'utf8')
  let privateKey = new NodeRSA(private)
  privateKey.setOptions({encryptionScheme: 'pkcs1'});
  return privateKey.decrypt(text, 'utf8')
}
