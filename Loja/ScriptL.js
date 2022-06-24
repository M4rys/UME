let img = document.querySelector('#boneco')
let btn1 = document.querySelector("#i1")
let btn2 = document.querySelector("#i2")
let btn3 = document.querySelector("#i3")
let popup = document.getElementById("popup")
let confirmar = document.getElementById("confirm")
let din = parseInt(document.getElementById("dinheiro").textContent)
let erro = document.getElementById("erro")
let comprar = document.getElementById("comprar")
let preview = document.getElementById("preview")
let sair = document.getElementById("sair")
let sim = document.getElementById("Sim")
let nao = document.getElementById("Não")
let ok = document.getElementById("erro")


//---------------------------------------------------------------------------------
function remove(){
    popup.classList.remove("open_popup")
    confirmar.classList.remove("open_confirm")
    erro.classList.remove("open_erro")
}
//---------------------------------------------------------------------------------
function click(image,preco,din){
    popup.classList.add("open_popup")
    
//---------------------------------------------------------------------------------
    comprar.removeEventListener('click',window.comp)

    window.comp = function comp1(){
        remove()
        if ((din-preco) >= 0){
            confirmar.classList.add("open_confirm")
            //---------------------------------------------------------------------------------
            sim.removeEventListener('click',window.aceitar)

            window.aceitar = function aceitar1(){
                remove()
            }

            sim.addEventListener('click',window.aceitar)
            //---------------------------------------------------------------------------------

            nao.removeEventListener('click',window.negar)

            window.negar = function negar1(){
                remove()
            }

            nao.addEventListener('click',window.negar)
            
        }
        else{
            erro.classList.add("open_erro")
            //---------------------------------------------------------------------------------
            ok.removeEventListener('click',window.ok0)

            window.ok0 = function ok1(){
                console.log(1)
                remove()
            }

            ok.addEventListener('click',window.ok0)
            //---------------------------------------------------------------------------------
        }}

    comprar.addEventListener('click',window.comp)
//---------------------------------------------------------------------------------
    preview.addEventListener('click',()=>{
        img.src = image;
        remove()
    })
//---------------------------------------------------------------------------------
    sair.addEventListener('click',()=>{
        remove()
    })
//---------------------------------------------------------------------------------
}

//---------------------------------------------------------------------------------
btn1.addEventListener('click',()=>{
    let image = "cartola.jpg";
    let preco = 100;
    click(image,preco,din)
})
//---------------------------------------------------------------------------------
btn2.addEventListener('click',()=>{
    let image = "square.png";
    let preco = 200;
    click(image,preco,din)
})
//---------------------------------------------------------------------------------
btn3.addEventListener('click',()=>{
    let image = "patolino.png";
    let preco = 3000;
    click(image,preco,din)
})
//---------------------------------------------------------------------------------
