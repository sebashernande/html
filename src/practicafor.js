document.querySelector('#header').innerHTML = "estoy leyendo el documento for"


for (let index = 1; index < 11; index++) {
    for (let index1 = 1; index1 <11; index1++){
        var result = index*index1
        console.log(index, "x", index1, "=", result)
    } 
}

  