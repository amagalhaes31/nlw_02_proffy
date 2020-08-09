const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Alexandre Magalhaes",
        avatar: "https://avatars1.githubusercontent.com/u/65422190?s=460&u=9f9f1cea12c33fcb08e9840abaeec562890be8b0&v=4",
        whatsapp: "35998948748",
        bio: "Apaixonado por novas tecnologias. Amante da vida. Sonhador de sonhos loucos."
    }

    classValue = {
       subject: "Matematica",
       cost: "25,00"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 3,
            time_from: 1720,
            time_to: 11220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos
})
