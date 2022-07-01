// funções dos botões

function onPressJogar(sala) {
    window.location.href = "/game"
    setData("currentSala", sala)
}

function onPressPesquisar() {
    const inputText = document.getElementById("scInput")

    //obter lista das salas
    let listsala = getData("listsala")
    if (listsala === null) return;

    let newlist = []

    //verificar se o nome possui o texto que está sendo procurado
    for(const ts of listsala) if (ts.name.startsWith(inputText.value)) newlist.push(ts)

    updateTab(newlist)
}

function onPressCriarSala() {
    showCriarSala()
}

function criarSala() {
    const inputText = document.getElementById("dialog_input_nomesala")
    if (inputText.value.length < 3) return alert("O nome da sala deve possuir, ao menos, 3 (três) caracteres")

    const selectType = document.getElementById("dialog_select_type")

    const sala = {
        name: inputText.value,
        players: 0,
        max_players: 4,
        type: selectType.value
    }

    //obter lista das salas
    let listsala = getData("listsala")
    listsala = (listsala === null) ? [] : listsala

    //verificar se o nome já exite
    for(const ts of listsala) if (ts.name == sala.name) return alert(`"${sala.name}" já está em uso, escolha outro nome`);

    //atualizar lista de salas com a nova sala
    listsala.push(sala)
    setData("listsala", listsala)

    cancelarCriarSala()
    updateTab()
}

function cancelarCriarSala() {
    const inputText = document.getElementById("dialog_input_nomesala")
    const selectType = document.getElementById("dialog_select_type")
    inputText.value = ""
    selectType.selectedIndex = 0
    hideCriarSala()
}

//funções gerais

//adicionar dados na memória local do navegador
function setData(name, objeto) {
    localStorage.setItem(name, JSON.stringify(objeto))
}

//obter dados da memória local do navegador
function getData(name) {
    const data = localStorage.getItem(name)

    if (data === null) return null;

    return JSON.parse(data)
}

//remove dados da memória local do navegador
function removeData(name) {
    localStorage.removeItem(name)
}

function createDiv(opt) {
    const div = document.createElement("div")
    div.className = opt.className
    if (opt.id) div.id = opt.id
    
    if (opt.child) {
        div.appendChild(opt.child)
    }

    return div
}

function createLabel(text) {
    const label = document.createElement("label")
    label.className = "label_item"
    label.textContent = text

    return label
}

function addNewLine(server) {
    const boxPai = document.getElementById("listitems")
    const boxItem = createDiv({className: "div_list_item"})

    const name = createDiv({ className: "div_col div_col_name", child: createLabel(server.name) })
    const tipo = createDiv({ className: "div_col div_col_item", child: createLabel(server.type) })
    const players = createDiv({ className: "div_col div_col_lastitem", child: createLabel(server.players + '/' + server.max_players) })
    const jogar = createDiv({ className: "div_col div_col_btn", child: createLabel("Entrar") })

    jogar.addEventListener("click", () => onPressJogar(server))

    boxItem.appendChild(name)
    boxItem.appendChild(tipo)
    boxItem.appendChild(players)
    boxItem.appendChild(jogar)

    boxPai.appendChild(boxItem)
}

function updateTab(serverList) {
    let listsala;

    if (serverList) listsala = serverList
    else listsala = getData("listsala")

    if (listsala === null) return;

    const boxPai = document.getElementById("container")
    const boxChild = document.getElementById("listitems")

    if (boxChild) boxPai.removeChild(boxChild)

    boxPai.appendChild(createDiv({ id: "listitems" }))

    for (let sala of listsala) {
        addNewLine(sala)
    }
}

//mostra uma janela suspensa que é usada para criar a sala
function showCriarSala(){
    for(let obj of document.getElementsByClassName("dialogCriarSala")) {
        obj.style.visibility = 'visible'
    }
}

//esconde a janela suspensa que é usada para criar a sala
function hideCriarSala(){
    for(let obj of document.getElementsByClassName("dialogCriarSala")) {
        obj.style.visibility = 'hidden'
    }
}

//executar quando carregado

hideCriarSala()
updateTab()

//eventos

document.getElementById("scBtnPesquisar").addEventListener("click", onPressPesquisar)
document.getElementById("scBtnCriarSala").addEventListener("click", onPressCriarSala)
document.getElementById("dialogBtnCriar").addEventListener("click", criarSala)
document.getElementById("dialogBtnCancelar").addEventListener("click", cancelarCriarSala)

//botões do header

document.getElementById("imgBtnVoltar").addEventListener("click", () => window.location.href = "/menu")
document.getElementById("imgBtnMenu").addEventListener("click", () => window.location.href = "/perfil")