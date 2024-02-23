const array = [21,17,19,18,10,31,22,41,5];
const maiorIdade = array.filter((idade)=>idade>18);
// console.log(maiorIdade);

const maior30 = array.find((trinta)=>trinta>30);
// console.log(maior30);

const novo = array.filter(idade => idade<18).map(idade => 18-idade);
// console.log("Falta " +novo+" anos");

const array2 = [1,22,31,40,3,5];
const qualMaior = array2.reduce((valor2,valor1) => {

if(valor1>valor2){
   return  valor2 = valor1;
}
 else 
 return valor1 = valor2;
}
   

);
console.log(qualMaior);