document.querySelector('#header').innerHTML = "estoy leyendo el documento for3"

var arreglo = []


for(let i = 0; i<10; i++){
    let numeroaleatorio = Math.floor(Math.random() * 20) + 1
    arreglo[i] = numeroaleatorio
}

console.log(arreglo)