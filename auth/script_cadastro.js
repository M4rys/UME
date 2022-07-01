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

function criar_cadastro(){
    // pega dados dos inputs
    const nick = document.getElementById("input_Apelido")
    if(nick.value.length < 5) return alert("Apelido inválido\n -pelo menos 5 caracteres");

    const email = document.getElementById("input_email")
    if(email.value.length < 5 || !email.value.includes("@")) return alert("Email inválido");

    const senha = document.getElementById("input_senha");
    if(senha.value.length < 6) return alert("Senha inválida\n -pelo menos 6 caracteres");

    // {nick:,email:,senha:,}
    // chave para dados locais = userlist
    let userlist = getData("userlist")
    userlist = ( userlist === null ) ? [] : userlist
    // verifica se o nick ou email já foi cadastrado
    for(const user of userlist) 
        if (user.nick == nick.value) return alert("nick em uso")
        else if(user.email == email.value) return alert("email em uso")
    // registra o novo usuário
    userlist.push({nick: nick.value, email: email.value, senha: senha.value})
    setData("userlist", userlist)
    alert("cadastro realizado com sucesso")
    // manda para o login
    window.location.href = "/auth/"
}

document.getElementById("btn_cadastrar").onclick = criar_cadastro;
