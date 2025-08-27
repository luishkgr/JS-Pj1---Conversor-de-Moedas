let moedaOriginal = document.getElementById("moedaOriginal");
let moedaDestino = document.getElementById("moedaDestino");
let valor = document.getElementById("valor");
let convertButton = document.querySelector(".convertButton");

function converter() {
    console.log(moedaOriginal);
    console.log(moedaDestino);
    console.log(valor);
}

convertButton.addEventListener("click", converter);

console.log("tudo pronto");