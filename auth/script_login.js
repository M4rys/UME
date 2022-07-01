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

function login(){
    // pega dados dos inputs
    const nick = document.getElementById("input_apelido")
    if(nick.value.length < 5) return alert("Apelido inválido");

    const senha = document.getElementById("input_senha");
    if(senha.value.length < 6) return alert("Senha inválida");

    // {nick:,email:,senha:,}
    // chave para dados locais = userlist
    let userlist = getData("userlist")
    userlist = ( userlist === null ) ? [] : userlist
    // verifica se o nick ou email já foi cadastrado
    for(const user of userlist) 
        if (user.nick == nick.value && user.senha == senha.value){
            // se existir entra na conta do usuario
            // e manda para o menu
            window.location.href = "/menu/"
            return
        }
            
            

    alert("credenciais inválidas")
}

document.getElementById("btn_login").onclick = login;
