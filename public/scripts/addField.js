// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener("click", cloneField)

// Executar uma ação
function cloneField () {
    // Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Limpar os campos
    const fields = newFieldContainer.querySelectorAll("input")
    //fields[0].value = ""
    //fields[1].value = ""
    fields.forEach(function(it) {
        it.value = ""
    })

    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}


