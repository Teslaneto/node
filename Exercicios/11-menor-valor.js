let var1 = 2;
let var2 = 10;
let var3 = 2;

if(var1 < var2 && var1 < var3){
    console.log("O menor valor é "+var1);
}else if(var2 < var1 && var2 < var3){
    console.log("O menor valor é "+var2);
}else if(var3 < var2 && var3 < var1){
    console.log("O menor valor é "+var3);
}else if (var1 === var2 && var1 !== var3) {
    console.log("var1 e var2 são iguais, e var3 é diferente.");
} else if (var1 === var3 && var1 !== var2) {
    console.log("var1 e var3 são iguais, e var2 é diferente.");
} else if (var2 === var3 && var2 !== var1) {
    console.log("var2 e var3 são iguais, e var1 é diferente.");
}else{
    console.log("Os valores são iguais");
}