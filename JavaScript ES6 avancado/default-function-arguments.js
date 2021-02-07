function multiply(a,b){//antigo
    b=b||1; 
    /* COMPORTAMENTO ATIPICO: colocavam o OU para verificar se existia um valor, se não existia aplicava o 1, 
    mas dava erro se a pessoa colocasse 0 como valor, pq o zero é falso na verificação*/
    b = typeof b === 'undefined' ? 1 : b;
    // era utilizado para resolver esse problema
    return a*b;
}
console.log(multiply(5));

function multiply2(a,b=1){//novo: posso referenciar no parametro
    return a*b;
}
console.log(multiply2(5));

function randomNumber(){//é bom pra gerar id randomicos pq só é chamada qdo realmente precisa dela
    console.log('generating a random number...')
    return Math.random()*10;
}
function multiply3(a,b=randomNumber()){
    return a*b;
}
console.log(multiply3(5));
