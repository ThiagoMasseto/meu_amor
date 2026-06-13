// ===============================
// CORAÇÕES FLUTUANDO NO FUNDO
// ===============================


const heartsContainer = document.querySelector(".hearts");



function createHeart(){


    const heart = document.createElement("div");


    heart.classList.add("heart");


    heart.innerHTML = "❤️";



    // posição aleatória na tela

    heart.style.left = Math.random() * 100 + "%";



    // tamanho aleatório

    heart.style.fontSize =

    Math.random() * 20 + 15 + "px";



    // velocidade aleatória

    heart.style.animationDuration =

    Math.random() * 5 + 5 + "s";



    heartsContainer.appendChild(heart);



    // remove depois da animação

    setTimeout(()=>{


        heart.remove();


    },8000);



}



// cria corações continuamente

setInterval(createHeart,300);





// ===============================
// ABRIR CARTA
// ===============================



const button = document.getElementById("openLetter");


const welcome = document.getElementById("welcome");


const letter = document.getElementById("letter");





button.addEventListener("click",()=>{



    // esconde tela inicial

    welcome.classList.add("esconder");



    // mostra carta

    letter.style.display = "block";



});