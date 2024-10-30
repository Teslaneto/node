let a = 0;
let b = 1;
const n = 10;

for(let i = 0; i < n; i++){
    let temp = a;
    a = b;
    b = temp + a;
    console.log(b);
}