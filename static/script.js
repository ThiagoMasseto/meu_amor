const heartsContainer = document.querySelector(".hearts");



function createHeart(){


    const heart = document.createElement("div");


    heart.classList.add("heart");


    heart.innerHTML = "❤️";



    heart.style.left = Math.random() * 100 + "%";



    heart.style.animationDuration =

    Math.random() * 5 + 5 + "s";



    heart.style.fontSize =

    Math.random() * 20 + 15 + "px";



    heartsContainer.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },8000)


}



setInterval(createHeart,300);





// CARTA


const button = document.getElementById("openLetter");

const letter = document.getElementById("letter");

const card = document.querySelector(".card");



button.addEventListener("click",()=>{


    letter.classList.add("show");


    card.classList.add("hide");


});