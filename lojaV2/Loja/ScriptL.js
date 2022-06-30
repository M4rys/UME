

//Lista de variaveis
let img = document.querySelector('#boneco')
let btn1 = document.getElementById("i1")
let btn2 = document.getElementById("i2")
let btn3 = document.getElementById("i3")
let din = parseInt(document.getElementById("dinheiro").textContent)
let dinText = document.getElementById("dinheiro")
let comprar = document.getElementById("comprar")
let voltar = document.getElementById("voltar")
let Plano_fundo = document.getElementById("Plano_Fundo")
let informacao = document.getElementById("informações")
let erro = document.getElementById("erro")
let ok = document.getElementById("Ok")





//eventos para o clique dos personagem da loja
btn1.addEventListener('click',()=>{
    //remove a visibilidade do botão de compra e do plano de fundo 
    comprar.classList.remove("abrirComprar")
    Plano_fundo.classList.remove("abrirPlano")
    let image = "b2.png";
    let nome1 = "O Azul"
    let preco2 = 100
    let preco1 = "Preço: 100$"
    let raridade1 = "COMUM"

    //Variavel que recebe os valores da função para formatar os textos
    let {nome,raridade,preco} = adjust(nome1,raridade1,preco1)

    //Funções de compra
    inf(nome, raridade, image, preco)
    compra(preco2)
})

btn2.addEventListener('click',()=>{
    comprar.classList.remove("abrirComprar")
    Plano_fundo.classList.remove("abrirPlano")
    let image = "b3.png";

    let nome1 = "O Vermelho"
    let preco2 = 500
    let preco1 = "Preço: 500$"
    let raridade1 = "RARO"

    //Variavel que recebe os valores da função para formatar os textos
    let {nome,raridade,preco} = adjust(nome1,raridade1,preco1)

    //Funções de compra
    inf(nome, raridade, image, preco)
    compra(preco2)
})
btn3.addEventListener('click',()=>{
    comprar.classList.remove("abrirComprar")
    Plano_fundo.classList.remove("abrirPlano")
    let image = "coelho_sapo1.png";

    let nome1 = "O Cavalheiro"
    let preco2 = 9999
    let preco1 = "Preço: 9999$"
    let raridade1 = "EPICO"

    //Variavel que recebe os valores da função para formatar os textos
    let {nome,raridade,preco} = adjust(nome1,raridade1,preco1)

    //Funções de compra
    inf(nome, raridade, image, preco)
    compra(preco2)
})


//Botão para voltar da loja para o menu
voltar.addEventListener('click',()=>{
    window.location.href = "/menu/index.html"
})


//Fução que adiciona o Texto de compra de skins na tela
function inf(nome, raridade, image, preco){
    img.src = image
    comprar.classList.add("abrirComprar")
    Plano_fundo.classList.add("abrirPlano")
    informacao.innerHTML = ""
    informacao.style.maxBlockSize = "100%"
    informacao.appendChild(nome)
    informacao.appendChild(raridade)
    informacao.appendChild(preco)
    

}

//Função que Formata o Texto de compra de skin antes de adicionar na tela
function adjust(textoNome,textoRaridade,textoPreco){
    
    //CSS para o Nome da Skin--------------------------------------------------------
    let nome1 = document.createTextNode(textoNome)
    let nome = document.createElement("span")
    nome.style.fontSize = "2.3vw"
    nome.style.paddingLeft = "10px"
    nome.style.color = "white"
    nome.style.backgroundColor = "purple"
    nome.style.border = "solid black"
    nome.appendChild(nome1)

    //CSS para o raridade da skin-----------------------------------------------------
    let raridade1 = document.createTextNode(textoRaridade)
    let raridade = document.createElement("span")
    raridade.style.fontSize = "2.3vw"
    if(textoRaridade == "COMUM"){
        raridade.style.color = "white"
    }
    if(textoRaridade == "RARO"){
        raridade.style.color = "blue"
    }
    if(textoRaridade == "EPICO"){
        raridade.style.color = "orange"
    }
    raridade.style.backgroundColor = "purple"
    raridade.style.border = "solid black"
    raridade.appendChild(raridade1)

    //CSS para o Preço da Skin---------------------------------------------------------
    let preco1 = document.createTextNode(textoPreco)
    let preco = document.createElement("span")
    preco.style.fontSize = "2.3vw"
    preco.style.color = "white"
    preco.style.backgroundColor = "purple"
    preco.style.border = "solid black"
    preco.appendChild(preco1)
    return {nome,raridade,preco}
}
//Função para mostrar na tela a diminuição do dinheiro na hora da compra
function compra(preco){
    comprar.removeEventListener("click",window.c)

    //essa parte serve para que a função não se duplique durante a execução
    window.c = function c(){
        if ((din-preco) >= 0){
            let a = din-preco
            dinText.innerHTML = a
            din = a
        }

        else{
            erro.classList.add("open_erro")

            ok.removeEventListener('click',window.ok0)

            window.ok0 = function ok1(){
                erro.classList.remove('open_erro')

            }
            ok.addEventListener('click',window.ok0)
        }

    }

    comprar.addEventListener("click",window.c)

    }

//Função a barra de pesquisa
let input = document.querySelector('#filtro')
let x = document.querySelectorAll('.item h')

function pesquisa(e){
    x.forEach((item,index) => {
        if(!item.innerHTML.toLowerCase().includes(e.target.value)){
            item.parentElement.style.display = 'none';
          }else {
            item.parentElement.style.display = 'block';
          }
        })
}

input.addEventListener("keyup", pesquisa); 






