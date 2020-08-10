const express = require('express')
const server = express()

const  {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//Configurar o Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express:server,
    noCache: true,
})


// Inicio e configuração do servidor
server
// Receber os dados do body
.use(express.urlencoded({extended: true}))
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

// Rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// Inicializa o servidor
.listen(5500)