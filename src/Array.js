document.querySelector('#header').innerHTML = "estoy leyendo el documento Array"
var cestaVacia = [] //array vacio  
var cesta = ["Fresa","Pera","Cereza"]

console.log(cesta)

cesta[0] = "uva" //valor de una posicion
console.log(cesta)
 
console.log(cesta.length) //ver el tamano del array

cesta.push("Naranja")
console.log(cesta)// agrega un elemento al array

cesta.pop() //este elimina el ultimo elemento del array
console.log(cesta)

cesta.push("Naranja")
cesta.push("pina")
console.log(cesta)

/*
el segundo (1) indica cuantos elementos eliminar
desde el indice (2)
*/

cesta.splice(2,1)
console.assert.log





var opcion = prompt("1. ver elementos de la cesta\n2. agregar una fruta a la cesta\n3. quitar una fruta de la cesta")

