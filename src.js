const colors = ["Red", "Green", "Blue", "Orange", "Purple", "Pink", "Yellow"];

let button = document.getElementById("btn");
let color = document.querySelector(".color");
let container = document.getElementById("container");

button.addEventListener("click", function(){ 
    let newColor = getRand();
    container.style.backgroundColor = colors[newColor];
    color.textContent = colors[newColor];
    
});

function getRand(){
    return Math.floor(Math.random() * colors.length);
}