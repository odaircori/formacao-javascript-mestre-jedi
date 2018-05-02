var nomeBootInputText = window.document.getElementById("nomeBoot");

function visualizarcampos() {

console.log("typeof: " + typeof(nomeBootInputText));
console.log("Object call: " + Object.prototype.toString.call(nomeBootInputText));

console.log("Recuperar Valor com Value " + nomeBootInputText.value);

}