// torna a div jogar em um butão que leva para a lista de servidores
document.getElementById("jogar").addEventListener("click", function(){
    window.location.href = "/salas/";
});
// torna a div loja em um botão que leva para a loja    
document.getElementById("loja").addEventListener("click", function(){
    window.location.href = "/loja/";
});

// function getData(name) {
//     const data = localStorage.getItem(name)

//     if (data === null) return null;

//     return JSON.parse(data)
// }

// function removeData(name) {
//     localStorage.removeItem(name)
// }

// window.onload = () => {

// }
