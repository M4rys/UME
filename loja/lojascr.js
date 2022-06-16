let img = document.querySelector('img')
let btn1 = document.querySelector("#i1")
let btn2 = document.querySelector("#i2")
let btn3 = document.querySelector("#i3")



btn1.addEventListener('click',()=>{
    img.src = "../Imagens/cartola.jpg";
})

btn2.addEventListener('click',()=>{
    img.src = "../Imagens/square.png";
})

btn3.addEventListener('click',()=>{
    img.src = "../Imagens/patolino.png";
})