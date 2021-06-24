const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.getElementById("btn");
let color = document.querySelector(".color");
let container = document.getElementById("container");

button.addEventListener("click", function(){ 
    let ourColor = "#";
    for(let i = 0; i<6;i++){
        ourColor+= hex[getRand()];
    }
    container.style.backgroundColor = ourColor;
    color.textContent = ourColor;
});

function getRand(){
    return Math.floor(Math.random() * hex.length);
}