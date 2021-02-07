
/*arrowFn
const arrowFn = () => 'Code here';
 OU
 const arrowFn = () => {
     //MAIS DE UMA EXPRESSÃO, tipo if e for
     return 'Code here';
 }
*/
//SPREAD
var partes = ['ombro', 'joelhos'];
var musicas = ["cabeça",...partes,"e", "pés"];

console.log(musicas);

//in algo está(in) algumacoisa.
0 in partes;
3 in musicas;
"ombro" in partes;

//instanceof verifica se é uma instancia de alguma outra coisa.

