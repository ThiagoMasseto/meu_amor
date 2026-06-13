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