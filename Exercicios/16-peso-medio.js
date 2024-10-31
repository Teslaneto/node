const peso = [60, 64, 68, 61, 70];
let somar = 0;

peso.forEach(element => {
    somar += element;
    console.log(element);
});
console.log("A media de peso é: "+ somar / peso.length);