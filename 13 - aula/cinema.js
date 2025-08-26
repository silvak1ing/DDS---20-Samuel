function calcularPrecoIngresso(idade) {
    if (idade <= 17) {
        return 15; 
    } else if (idade >= 18 && idade <= 59) {
        return 30; 
    } else if (idade >= 60) {
        return 20;
    } else {
        return 0; 
    }
}


function calcularTotal(idade1, idade2) {
    const preco1 = calcularPrecoIngresso(idade1);
    const preco2 = calcularPrecoIngresso(idade2);
    return preco1 + preco2;
}
