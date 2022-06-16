let serversList = [
    {name: "Servidor Amora 1", players: 2, max_players: 5, type: "public"},
    {name: "Servidor Amora 2", players: 2, max_players: 5, type: "public"},
    {name: "É os guri", players: 4, max_players: 5, type: "public"},
    {name: "Vem que ta open", players: 1, max_players: 5, type: "public"},
    {name: "Sem ideias", players: 3, max_players: 5, type: "private"},
    {name: "Vazio", players: 0, max_players: 5, type: "private"},
    {name: "Vazio", players: 0, max_players: 5, type: "private"},
    {name: "Vazio", players: 0, max_players: 5, type: "private"},
    {name: "Vazio", players: 0, max_players: 5, type: "private"},
    {name: "Vazio", players: 0, max_players: 5, type: "private"},
]

function addDivItem(text, item=undefined) {
    let div = document.createElement("div")
    div.className = "div_item"

    if (typeof item != 'undefined') {
        div.className = "div_item_play"

        div.addEventListener("click", () => {
            alert(item.name)
        })
    }

    let label = document.createElement("label")
    label.className = "label_item"
    label.textContent = text

    div.appendChild(label)
    return div
}

function addNewLine(server) {
    let columns = document.getElementsByClassName("div_col")
    
    columns[0].appendChild(addDivItem(server.name))
    columns[1].appendChild(addDivItem(server.players + '/' + server.max_players))
    columns[2].appendChild(addDivItem(server.type))
    columns[3].appendChild(addDivItem("Entrar", item=server))
}

function updateTab(serverList) {
    for (let server of serverList) {
        addNewLine(server)
    }
}

updateTab(serversList)




// let btn = document.getElementById("btn-calc")
// btn.addEventListener("click", () => {
//     let num = 990000
//     let final = ""

//     while(num > 0) {
//         final = (num % 2).toString() + final
//         num = Math.floor(num / 2)
//     }

//     alert(final)
// })

//0000011110001101100110000