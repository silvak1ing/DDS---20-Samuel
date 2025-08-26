// // MOSTRA UMA MENSAGEM NO CONSOLE
// console.log("fala dai chafe")

// // CAIXA DE ALERTA
// // alert("ta tranquilo");

// var nome = "samuel"
// var idade = 20
// var numero = 2
// var pulo = 2.09
// var theBest = true

// console.log("O nome:" + nome)
// console.log("De Numero:", numero)
// console.log(pulo);
// console.log(theBest);

// typeof(pulo)
// console.log(typeof(pulo))

// var nulo = null
// var indefinido = undefined

// console.log(nulo)
// console.log(indefinido);

// // OPERADORES ARITIMETICOS
// // +,-,*,/,**,%

// var a = 10 , b = 5

// console.log("Soma:", a + b);
// console.log("Subtração:", a - b);
// console.log("Multiplicação:", a * b);
// console.log("Divisão:", a / b);
// console.log("Exponenciação:", a ** b);
// console.log("Resto da divisão:", a % b);

// // OPERADORES LOGICOS
// // &&, ||, !

// var verdade = true
// var mentira = false

// console.log("E:", verdade && mentira);
// console.log("OU:", verdade || mentira);
// console.log("NÃO:", !verdade);
// console.log("NÃO:", !mentira);

// // OPERADORES RELACIONAIS
// // >, <, >=, <=, ==, ===, !=, !==
// var c = 10, d = 5
// var e = "10"
// var f = "5"
// var g = 20
// var h = 10
// console.log("Maior:", c > d);
// console.log("Menor:", c < d);
// console.log("Maior ou igual:", c >= d);
// console.log("Menor ou igual:", c <= d);
// console.log("Igual:", c == e);
// console.log("Idêntico:", c === e);
// console.log("Diferente:", c != g);
// console.log("Não idêntico:", c !== h);
// console.log("Exemplo:", (c > d) && (g > f) || (h === e));

// // INTERAGIR COM O USUARIO
// var resposta = prompt("Qual a sua idade?")
// alert("sua idade e: " + resposta)
// console.log("Sua idade é: " + resposta)

// ESTRUTURAS CONDICIONAIS
var estavivo = false
if (estavivo == true) {
    console.log("está vivo");

}
else if(estavivo == false){
    console.log("não está vivo ☠️");
}
else{
    console.log("não sei");
}

// switch = ESCLHA 
var camisa = "azul"
switch (camisa) {
    case "azul":
        console.log("camisa azul TOP 🐋");
        break;
    case "vermelha":
        console.log("camisa vermelha");
        break;
    case "verde":
        console.log("camisa verde");
        break;
    default:
        console.log("camisa não encontrada");
        break;
}
// LAÇOS DE REPETIÇÃO
// for, while, do while
for (var i = 0; i < 5; i++) {
    console.log("O valor de i é:", i);
}
var cont = 0
while (cont < 5) {
    console.log("O valor de cont é:", cont);
    cont++
}
var contador = 0
do {
    console.log("O valor de contador é:", contador);
    contador++
}
while (contador < 5);

// FUNÇÕES
// SO EXECUÇÃO
function teste() {
    console.log("Função teste");
}
console.log(teste)

// TESTE
var novo = function(){
    console.log("Função novoTeste");
}
novo()

// COM PARAMETROS
function teste2(parametro){
    console.log("O parametro é:", parametro)
}
teste2("samuel")

// COM RETORNO
function calculo(n1, n2){
    let resultado = n1 + n2
    return resultado
}

var final = calculo(3,9)
console.log("O resultado é:", final);

// var resposta = prompt("Qual a sua idade?")
// alert("sua idade e: " + resposta)
// console.log("Sua idade é: " + resposta)

do{
    
}
while()