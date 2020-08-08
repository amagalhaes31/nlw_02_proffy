// Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "35998948748",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
        subject: "Química",
        cost: "20,00",
        weekday:[0],
        time_from:[720],
        time_to: [1220]
    },
    {
        name: "Alexandre Magalhaes",
        avatar: "https://avatars1.githubusercontent.com/u/65422190?s=460&u=9f9f1cea12c33fcb08e9840abaeec562890be8b0&v=4",
        whatsapp: "35998948748",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
        subject: "Matemática",
        cost: "30,00",
        weekday:[1],
        time_from:[720],
        time_to: [1220]
    }
]

const subjects = [
        "Artes",
        "Biologia",
        "Ciências",
        "Educação física",
        "Física",
        "Geografia",
        "História",
        "Matemática",
        "Português",
        "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// Funcionalidades
function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber-1
    return subjects[arrayPosition]
}


function pageLanding (req, res) {
    return  res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return  res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    // Adicionar os dados na lista proffys
    if (isNotEmpty) {
        console.log("entrei aqui")
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }    

    return  res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

//Configurar o Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express:server,
    noCache: true,
})


// Inicio e configuração do servidor
// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// Rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// Inicializa o servidor
.listen(5500)