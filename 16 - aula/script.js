// // CONSOLE = TERMINAL DO NAVEGADOR 
// console.log(console)

// // WINDOW = JANELA DO NAVEGADOR
// // window.alert()
// // alert("não")

// // DOCUMENT = DOM OU SEU CODIGO EM HTML INTEIRO
// console.log(document)
// console.log(document.head)
// console.log(document.body)

// // ACESSAR ELEMENTOS DO BODY

// // PEGA ELEMENTOS PELA TAG
// var titulos = document.getElementsByTagName("h1")
// console.log(titulos)

// // PEGA ELEMENTOS PELA CLASSE
// var parrafos = document.getElementsByClassName("para")
// console.log(parrafos)

// // PEGA ELEMENTOS PELO ID
// var p3 = document.getElementById("p3")
// console.log(p3)

// // MODIFICANDO PROPRIEDADES DE ALGUM ELEMENTO

// // pego por id
// p3.style.backgroundColor = "yellow"
// p3.style.color = "green"

// // PEGO POR CLASS
// for (var i = 0; i < parrafos.length; i++) {
//     parrafos[i].style.backgroundColor = "white"
//     parrafos[i].style.color = "blue"
// }

// // PEGO POR TAG
// var titulos = document.getElementsByTagName("h1")
// for (var i = 0; i < titulos.length; i++) {
//     titulos[i].style.backgroundColor = "yellow"
//     titulos[i].style.color = "blue"
// }

// function cliquei(msg) {
//     alert(msg)
// }

// var titulos = document.getElementsByTagName("h1")
// function mudarCorTitulos(cor) {
//     for (var i = 0; i < titulos.length; i++) {
//         titulos[i].style.color = cor
//     }
// }
// // MUDAR A FONTE DE TODOS OS TITULOS, AUMENAR AS FONTES
// function mudarFonteTitulos(fonte) {
//     for (var i = 0; i < titulos.length; i++) {
//         titulos[i].style.fontFamily = fonte
//         titulos[i].style.fontSize = "20px"
//     }
    
// }

// function quemFoi(element) {
//     alert("Você clicou em: " + element.innerHTML);
// }
