document.querySelector('#header').innerHTML = "estoy leyendo el documento for"

var numero = parseInt(prompt("Ingrese un numero"))

for (let index = 1; index < 11; index++) {
        var result = index*numero
        console.log(index, "x", numero, "=", result)
    } 
  