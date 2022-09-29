//CommonJS responsavel por importar ou exportar os modulos 
//importando o modulo os do node e colocando em uma variavel
const os = require('os')

//o mododulo os esta dentro da variável os, desta forma conseguimos acessar as propriedades e metodos deste módulo/objetp



//console.log(`memoria livre: ${freeMen}`,`memoria livre: ${totalMen}`)
//set interval

setInterval(() => {
    const totalMen = parseInt(os.totalmem()/1024 /1024 ) 
    const freeMen = parseInt(os.freemem()/1024 /1024 ) 
    const percent = parseInt((freeMen / totalMen) * 100)

    const memoria = {
        total: `${totalMen} MB`,
        free: `${freeMen} MB`,
        percent: `${percent} %` 
    }
    
    
    console.clear()
    console.table(memoria)
},1000)
