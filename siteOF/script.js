let img = document.querySelector('#boneco')
let btn1 = document.getElementById("i1")
let btn2 = document.getElementById("i2")
let btn3 = document.getElementById("i3")

//eventos para o clique dos personagem da loja
btn1.addEventListener('click',()=>{

    let image = "img/b2.png";
    img.src = image
})

btn2.addEventListener('click',()=>{

    let image = "img/b3.png";
    img.src = image

})
btn3.addEventListener('click',()=>{
    let image = "img/coelho_sapo1.png";
    img.src = image
})


/* Funcionamento botçao de voltar */
voltar.addEventListener('click',()=>{
    window.location.href = "/menu/index.html"
})

amigos.addEventListener('click',()=>{
    window.location.href = "/menu/index.html"
})
