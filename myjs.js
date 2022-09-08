const text = document.querySelectorAll(".paths");
for(let i = 0; i < text.length; i++){
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#sixth");
const animation = document.querySelector(".animation");
lastWord.addEventListener("animationend", () => {
    animation.style = "transition: all .6s ease; opacity: 0; pointer-events: none"
    //pointer-events: none -> 鼠標"穿透"該元素並指定該元素"下面"的任何東西
})