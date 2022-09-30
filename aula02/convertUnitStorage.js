const byteToMB = bytes => bytes / 1024 / 1024  

const byteToGB = bytes => bytes / 1024 / 1024 / 1024


// o module exports permite exportar as funções para que sejam 
// visiveis em outro arquivo, permitindo a reutilização e evitando repetição de código

module.exports = { byteToGB, byteToMB}