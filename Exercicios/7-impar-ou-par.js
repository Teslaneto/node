//Um número é par quando o dividimos por dois e seu resto é zero.
//Um número é ímpar quando, na divisão por dois, o resto é diferente de zero.

let valor = 11;
let divisao = valor % 2;  // % ele dividi e tras o resto

console.log(divisao);

if(divisao != 0){
    console.log("Numero é Impar");
}else{
    console.log("Numero é Par");
}