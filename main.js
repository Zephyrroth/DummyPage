const input1 = document.querySelector('#calc1');
const input2 = document.querySelector('#calc2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result')

function btnclick() {
    const sumaint= input1.value + input2.value;
    presult.innerText = "Resultado: " + sumaint; 
}   