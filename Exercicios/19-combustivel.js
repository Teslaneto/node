function tipo(dados){
    switch(dados){
        case 1:
            console.log("Colocando Alcool");
            break;
        case 2:
            console.log("Coloacando Gasolina");
            break;
        case 3:
            console.log("Colocando Diesel");
            break;
        default:
            console.log("Esse dado não existe")
    }
}
module.exports = tipo