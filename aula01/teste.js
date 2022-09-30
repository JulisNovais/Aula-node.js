//CommonJS responsavel por importar ou exportar os modulos 
//importando o modulo os do node e colocando em uma variavel
const os = require('os')
const {byteToGB} = require('../aula02/convertUnitStorage.js')
const fs = require('fs')

//o mododulo os esta dentro da variável os, desta forma conseguimos acessar as propriedades e metodos deste módulo/objetp
//console.log(`memoria livre: ${freeMen}`,`memoria livre: ${totalMen}`)
//set interval

setInterval(() => {
    const totalMen = parseFloat(byteToGB(os.totalmem())).toFixed(2)
    const freeMen = parseFloat(byteToGB(os.freemem())).toFixed(2)
    const percent = parseInt((freeMen / totalMen) * 100)

    const memoria = {
        total: `${totalMen} GB`,
        free: `${freeMen} GB`,
        percent: `${percent} %`
    }
    
    
    console.clear()
    console.table(memoria)
    fs.appendFile('../aula02/log.txt', 'insirindo log...', 'utf-8' () => 
    console.log('log inserido')

},1000)

