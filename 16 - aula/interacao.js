function troca(elementoQueChamou) {
    // console.log(element que chamou);
    let textoNovo = elementoQueChamou.value

    let textoAntigo = document.getElementById("TextoTrocar")
    textoAntigo.innerText = textoNovo

}
// ALTERAR O OUTRO TEXTO
function trocaAgora(elementoQueChamou) {
    let textoNovo = elementoQueChamou.value

    let textoAntigo = document.getElementById("TextoTrocarAgora")
    textoAntigo.innerHTML = textoNovo
}

function Viraverde(elementoQueChamou) {
    elementoQueChamou.style.color = "green"
    elementoQueChamou.style.fontSize = "20px"
}

function Viraazul(elementoQueChamou) {
    elementoQueChamou.style.color = "blue"
    elementoQueChamou.style.fontSize = "16px"
}