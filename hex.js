const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    
    
    let hexValue = "#"
    for(let i = 0; i < 6; i++){
        hexValue += colors[getRandomNumber()];
    }
        console.log(hexValue);
        document.body.style.backgroundColor = hexValue;
        color.textContent = hexValue;
        // document.getElementById("color_code").color = hexValue
    
});

function getRandomNumber(){ 
    return Math.floor(Math.random() * colors.length);}