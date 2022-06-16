//console.log('começando alguma coisa.')
document.getElementById("play-btn").addEventListener("click", function(){
    window.location.href = "/listaServers/index.html";
});
// variavel para colocar o nick do usuário
var vemDoBanco = "M4rys"
let nick_User= document.getElementById("User_nick");
nick_User.innerText = vemDoBanco;
let img_User = document.getElementById("User_img");
img_User.setAttribute('src', '../Imagens/user2.png');

document.getElementById("loja-btn").addEventListener("click", function(){
    window.location.href = "/loja/index.html";
});