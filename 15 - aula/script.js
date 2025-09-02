// // LISTA DE ALUNOS
// var alunos = ["João", "Maria", "José"];
// var medias = [7.5, 8.0, 4.5];

// for (var i = 0; i < alunos.length; i++) {
//     console.log(alunos[i] + " - " + medias[i]);
// }

// // CRIANDO OBJETOS DE ALUNO
// var aluno = {
//     nome: "Pedro",
//     media: 7.5
// };
// var aluno2 = {
//     nome: "Samuel",
//     media: 8.0
// };
// var aluno3 = {
//     nome: "Lucas",
//     media: 4.5
// };

// console.log(aluno.nome + " - " + aluno.media);
// console.log(aluno2.nome + " - " + aluno2.media);
// console.log(aluno3.nome + " - " + aluno3.media);

// // CRIANDO UM OBJETO COM MAIS PROPRIEDADES
// var aluno4 = {
//     nome: "Joelma",
//     media: 9.0,
//     idade: 20,
//     curso: "Programação"
// };

// console.log(aluno4.nome + " - " + "Média " + aluno4.media + " - Idade " + aluno4.idade + " - " + aluno4.curso);
// console.log(aluno4["nome"] + " - " + "Média " + aluno4["media"] + " - Idade " + aluno4["idade"] + " - " + aluno4["curso"]);

// // CRIANDO OBJETO VAZIO
// var garrafa = {};
// console.log(garrafa);

// // ADICIONANDO PROPRIEDADES
// garrafa.cor = "Verde";
// garrafa.tamanho = "2L";
// garrafa.material = "Plástico";
// garrafa["marca"] = "UAI";
// console.log(garrafa);

// // ALTERANDO PROPRIEDADES
// garrafa.cor = "Azul";
// garrafa.tamanho = "1L";
// garrafa.material = "Vidro";
// garrafa["marca"] = "Coca-Cola";
// console.log(garrafa);

// // CRIAR UM OBJETO COM MÉTODOS
// var animal1 = {
//     nome: "Patixa",
//     especie: "Capivara",
//     raca: "Ranço do Maia",
//     falar: function() {
//         console.log("Quem é tu cara? Eu nem lembro quem é tu cara!");
//     },
//     andar: function() {
//         console.log(this.nome + " está andando! EU ODEIO MANUS!");
//     }
// };
// console.log(animal1);
// animal1.andar();
// animal1.falar();


// PRODUTO 1
var produto1 = {
    nome: "Tixan P",
    preco: 10.0,
    categoria: "Limpeza",
    quantidade: 100,
    tamanho: ["500ml", "200ml", "1L"],
    descricao: "Limpa D+",
    exibirInfo: function() {
        console.log("Nome: " + this.nome);
        console.log("Preço: " + this.preco);
        console.log("Categoria: " + this.categoria);
        console.log("Descrição: " + this.descricao);
        console.log("Quantidade: " + this.quantidade);
    },
    verTamanhos: opcoes
};

// FUNÇÃO GENÉRICA PARA VER TAMANHOS
function opcoes() {
    let tmhs = "";
    for (var i in this.tamanho) {
        tmhs += this.tamanho[i] + " ";
    }
    console.log("Tamanhos disponiveis: " + tmhs);
}
// PRODUTO 2
var produto2 = {
    nome: "Bauru",
    preco: 12.50,
    categoria: "Comida",
    quantidade: 200,
    tamanho: ["Pequeno", "Médio", "Grande"],
    descricao: "Gostoso demais",
    exibirInfo: function() {
        console.log("Nome: " + this.nome);
        console.log("Preço: " + this.preco);
        console.log("Categoria: " + this.categoria);
        console.log("Descrição: " + this.descricao);
        console.log("Quantidade: " + this.quantidade);
    },
    verTamanhos: opcoes
};
// PRODUTO 3
var produto3 = {
    nome: prompt("nome"),
    preco: prompt("preco"),
    categoria: prompt("categoria"),
    quantidade: prompt("quantidade"),
    tamanho: prompt("tamamhos:").split(","),
    descricao: "Limpa tudo",
    exibirInfo: function() {
        console.log("Nome: " + this.nome);
        console.log("Preço: " + this.preco);
        console.log("Categoria: " + this.categoria);
        console.log("Descrição: " + this.descricao);
        console.log("Quantidade: " + this.quantidade);
    },
    verTamanhos: opcoes
};

// TESTANDO
produto1.exibirInfo();
produto1.verTamanhos();

console.log("------------")

produto2.exibirInfo();
produto2.verTamanhos();

console.log("------------")

produto3.exibirInfo();
produto3.verTamanhos();
