//funciones

function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let resultado = num1 + num2

    document.getElementById("resultado").textContent = resultado
}


function restar(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let resultado = num1-num2

    document.getElementById("resultado").textContent = resultado
}


function multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let resultado = num1*num2

    document.getElementById("resultado").textContent = resultado
}


function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let resultado = num1/num2

    document.getElementById("resultado").textContent = resultado
}






//eventos
document.getElementById("sumar").addEventListener("click",sumar)
document.getElementById("restar").addEventListener("click",restar)
document.getElementById("multiplicar").addEventListener("click",multiplicar)
document.getElementById("dividir").addEventListener("click",dividir)