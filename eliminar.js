function verificarNumero(numero) {
    if(numero % 2 === 0) {
        return '${numero} es par'
    }else{
        return '${numero} es impar'
    }

    
}
    console.log(verificarNumero(10));
    console.log(verificarNumero(11));