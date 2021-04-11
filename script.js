window.addEventListener('load', start);
function start() {
    console.log('Todos recursos terminaram o carregamento')
}

let textRed = document.getElementById('textRed');
let textGreen = document.getElementById('textGreen');
let textBlue = document.getElementById('textBlue');

function changeColor() {
    let red = document.getElementById('rangeRed').value;
    let green = document.getElementById('rangeGreen').value;
    let blue = document.getElementById('rangeBlue').value;
    let color = `rgb(${red}, ${green}, ${blue})`;
    
    Divquadrado.style.backgroundColor = color;

    textRed.value = red;
    textGreen.value = green;
    textBlue.value = blue;
    
}
document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);

