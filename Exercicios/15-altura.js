const altura = [1.3, 1.5, 1.6, 1.8, 2];
let somar = 0;

for(let i = 0; i < altura.length; i++){
    somar += altura[i];
    console.log(somar);
}
console.log("A altura media é : "+ somar / altura.length);