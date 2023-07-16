/* PRIMEIRA TROCA DE  IMAGEM */
let goleira = document.getElementById("goleira");
let defesa  = document.getElementById("defesa");
let  meia   = document.getElementById("meia");
let ataque  = document.getElementById("ataque")
let  img    = document.getElementById("meninas");

goleira.addEventListener ("click", function() {
   
   img.src = './img/goleiras.png'
});

defesa.addEventListener("click", function(){
    img.src = './img/defensoras.png'
});

meia.addEventListener("click", function(){
    img.src = './img/meia.png'
});

ataque.addEventListener("click", function(){
   img.src = './img/atacantes.png'
});


let goleira2 = document.getElementById("goleira2");
let defesa2  = document.getElementById("defesa2");
let  meia2   = document.getElementById("meia2");
let ataque2  = document.getElementById("ataque2")
let  img2    = document.getElementById("meninas");

goleira2.addEventListener ("click", function() {
   
   img.src = './img/goleiras.png'
});

defesa2.addEventListener("click", function(){
    img.src = './img/defensoras.png'
});

meia2.addEventListener("click", function(){
    img.src = './img/meia.png'
});

ataque2.addEventListener("click", function(){
   img.src = './img/atacantes.png'
});






