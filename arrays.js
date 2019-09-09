var lista = [12, 10, 4 ,35];
var i;

console.log("El tamaño de este array es de: "+lista.length);
lista = lista.concat([0, 23]);
console.log("El nuevo array tiene un tamaño de: " + lista.length);

for(i=0; i < lista.length; i++){
    console.log(lista[i]);
}

