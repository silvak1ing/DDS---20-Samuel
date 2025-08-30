// // CRIAÇÃO DO ARRAY 
// console.log("Olá, mundo!")
// var array = ["samuel", 18, "sete", true]
// console.log(array)
// // MOSTRA VALOR DE POSIÇÃO ESPECIFICA
// console.log(array[0])

// // ALTERA VALOR DE POSIÇÃO ESPECIFICA
// array [2] = "outro valor"
// console.log(array)

// var times = ["Cruzeiro", "são paulo", "corinthians", "santos"]
// for (var i = 0; i < times.length; i++) {
//     console.log(times[i])
// }

// console.log("--------------")
// // PERCORRENDO O ARRAY DESCOBRINDO O TAMANHO DELE
// for (var i = 0; i < times.length; i++) {
//     console.log(i + " - " + times[i])
// }
// console.log("--------------")
// // PERCORRENDO O ARRAY DESCOBRINDO O TAMANHO DELE COM FOR IN
// var i = 0
// for (var index in times) {
//     console.log(index + " - " + times[index])
// }

// console.log("--------------")
// for (var index in times) {
//     console.log(times[index])
// }

// // MANIBULAÇÃO DE ARRAYS
// var frutas = ["banana", "maçã", "pera", "uva"]
// console.log(frutas)
// // ADICIONA NO FINAL DO ARRAY
// frutas.push("laranja")  
// console.log(frutas)
// // ADICIONA NO INICIO DO ARRAY
// frutas.unshift("morango")
// console.log(frutas)
// // REMOVE DO FINAL DO ARRAY
// frutas.pop()
// console.log(frutas)
// // REMOVE DO INICIO DO ARRAY
// frutas.shift()
// console.log(frutas)
// // REMOVE ITENS DE UMA POSIÇÃO ESPECIFICA
// frutas.splice(1, 2) // (posição inicial, quantidade de itens a serem removidos)
// console.log(frutas)
// // ADICIONA ITENS EM UMA POSIÇÃO ESPECIFICA
// frutas.splice(1, 0, "kiwi", "melancia") // (posição inicial, quantidade de itens a serem removidos, itens a serem adicionados)
// console.log(frutas)
// SUBSTITUI ITENS EM UMA POSIÇÃO ESPECIFICA

//  frutas.splice(1, 2, "abacaxi", "mamão") // (posição inicial, quantidade de itens a serem removidos, itens a serem adicionados)
//  console.log(frutas)
//  // INVERTE A ORDEM DOS ITENS
//  frutas.reverse()
// console.log(frutas)

// // ORDENA OS ITENS
// frutas.sort()
// console.log(frutas)
// // ORDENA OS ITENS DE FORMA NUMÉRICA
// var numeros = [10, 5, 3, 20, 15]
// console.log(numeros)
// numeros.sort(function(a, b) {return a - b}) // ORDEM CRESCENTE
// console.log(numeros)

// let alunos = [];
// let continuar = true;

// while (continuar) {
//   let nome = prompt("Digite o nome do aluno:");
//   let nota = Number(prompt("Digite a nota do aluno:"));
//   let peso = Number(prompt("Digite o peso da nota:"));

//   alunos.push({ nome: nome, nota: nota, peso: peso });

//   let resposta = prompt("Deseja adicionar mais um aluno? (s/n)");
//   if (resposta.toLowerCase() !== "s") {
//     continuar = false;
//   }
// }

// if (alunos.length > 0) {
//   console.log("Lista de alunos:");

//   for (let i = 0; i < alunos.length; i++) {
//     // Cada aluno so tem uma nota com peso
//     let media = alunos[i].nota; // já que só foi cadastrada uma nota

//     let status;
//     if (media >= 7) {
//       status = "Aprovado";
//     } else if (media >= 5) {
//       status = "Recuperação";
//     } else {
//       status = "Reprovado";
//     }

//     console.log(
//       alunos[i].nome +
//       " - Nota: " + alunos[i].nota +
//       " (Peso: " + alunos[i].peso + ") - Status: " + status
//     );
//   }

//   // cálculo da média ponderada da turma
//   let somaNotasPonderadas = 0;
//   let somaPesos = 0;

//   for (let i = 0; i < alunos.length; i++) {
//     somaNotasPonderadas += alunos[i].nota * alunos[i].peso;
//     somaPesos += alunos[i].peso;
//   }

//   let mediaPonderadaTurma = somaNotasPonderadas / somaPesos;
//   console.log("Media ponderada da turma: " + mediaPonderadaTurma.toFixed(2));
// } else {
//   console.log("Nenhum aluno cadastrado.");
// }






var frutas = ["banana", "maçã", "pera", "uva"]
 // INVERTE A ORDEM DOS ITENS
 frutas.reverse()
console.log(frutas)''