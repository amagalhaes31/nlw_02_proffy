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

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos
    // Proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedClasssesSchedules)

    // Consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectedClassesAndProffsys = await db.all (`
        SELECT classes.*, proffys.* 
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id) 
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffsys)

    // O horário que a pessoa trabalha, por exemplo, das 8h - 18h
    // O horário do time_from (8h) precisa ser antes ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectedClasssesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "100"
        AND class_schedule.time_to > "100"
    `)
    console.log(selectedClasssesSchedules)

})
