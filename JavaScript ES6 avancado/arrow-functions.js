//antigo
var soma = function(a,b){
    return a+b;
}
console.log(soma(5,5));

//arrow functions utilizam => e retornam o valor sem escrever return
var sum = (a,b) => a+b;
console.log(sum(5,3));

//se tiver mais informações usar chaves e return
var sum2 = (a,b)=>{
    var x =10;
    if (a>b){
        a=a+x;
    }
    return a+b;
}
console.log(sum2(5,3));

// se tiver apenas um argumento não preciso de parenteses
var sum3 = a => 10+a;
console.log(sum3(5));

//criar objeto
var obj = {
    test: "123"
};

//objeto literal
var createObj = () => ({test: 123});
console.log(createObj());

//criar objeto atraves de funcao construtora, não dá pra fazer com arrow function
/*function Car(){
    this.foo="bar";
}
console.log(new Car());
*/
//caracteristica de hoist das funções antigas não funciona em arrow

//só funciona pq está no contexto
var obj = {
    showContext: function showContext(){
        //this = obj
        setTimeout(()=>{ //arrow tem contexto igual ao codigo q envolve ele, por isso não precisa mais d variavel pro this ou usar o bind
            this.log("teste"); //console.log(this);
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();

