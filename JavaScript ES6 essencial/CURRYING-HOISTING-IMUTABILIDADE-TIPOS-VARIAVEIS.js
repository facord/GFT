/*
function soma(a,b){
    return a+b;
}
console.log(soma(2,2));
console.log(soma(2,3));
console.log(soma(2,4));
console.log(soma(2,5));
Como o primeiro numero é constante podemos fazer a mudança pro código abaixo
*/
/* CURRYING */
function soma(a){
    return function(b){
        return a+b;
    }
}
const soma2 = soma(2)
console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

/* HOISTING de VARIAVEL */
function fn(){
    console.log(text);
    var text = "Exemplo";
    console.log(text);
}
fn();

/*
function fn(){
    var text;
    console.log(text);
    var text = "Exemplo";
    console.log(text);
}
fn();
*/

/* HOISTING de função */
function fn(){
    log("Hoisting de Função");

    function log(value){
        console.log(value);
    }
}
fn();

/* IMUTABILIDADE*/
const user = {
    name: "Fabiana",
    lastName: "Cordeiro Rocha"
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName:`${user.name} ${user.lastName}` /* concatena de forma mais simples*/      
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName,user);

const students = [
    {
      name: 'Leonardo Da Vinci',
      grade: 10
    },
    {
      name: 'Van Gogh',
      grade: 7
    },
    {
      name: 'Claude Monet',
      grade: 4
    }
  ]
  
  function getApprovedStudents(studentsList) {
       return studentsList.filter(student => student.grade >= 7)
  }
  
  console.log('Alunos aprovados')
  console.log(getApprovedStudents(students))
  
  console.log('Lista de alunos')
  console.log(students)

  /* TIPOS */
var nameVar = "fabiana";
let nameLet= "fabiana";
const nameConst="fabiana";

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);
