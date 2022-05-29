const Title = document.querySelector('title').innerHTML="AMM";
const myName =  document.getElementsByClassName("name-h3")[0];
const strText = myName.textContent;
console.log(strText);
const splitText = strText.split("");

myName.textContent = "";

for(let i=0; i<splitText.length; i++){
    myName.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick , 200);



function onTick(){
    const span = myName.querySelectorAll("span")[char];
    span.classList.add("animation-A");
    char++;
    if(char ===splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}






















const clickMenu = document.querySelector(".click-menu");
const navMenu = document.querySelector(".nav-menu");
const app = document.getElementById("app"); 

clickMenu.addEventListener("click" ,() => {
    clickMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    app.classList.toggle("app-click");
    console.log(navMenu , clickMenu);
})
document.querySelectorAll(".nav-link").forEach(n >= n.addEventListener("click" , () => {
clickMenu.classList.remove("active");
navMenu.classList.remove("active");
    app.classList.remove("app-click");



} ))
