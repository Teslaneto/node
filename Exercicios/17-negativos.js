const negativos = [ -2, -1, 0, 1, 2, 3, 4, 5, 6, 7 ];

for(let i = 0; i < negativos.length; i++) {
    let valor = negativos[i];  // Acessa cada número na lista

    if (valor < 0) {
        console.log("Esse número é negativo: " + valor);
    }
}
