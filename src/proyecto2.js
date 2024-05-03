document.querySelector('#header').innerHTML = "estoy leyendo el documento proyecto"

let arreglo = []

var largo = parseInt(prompt("Digite la cantidad de elementos del arreglo"))

function construir(largo){
    arreglo.length = largo
}

construir(largo)

console.log(arreglo)



function LlenarArreglo(){
    for(let i = 0; i< arreglo.length; i++){
        let numeroaleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroaleatorio
    }   

}



do{
    
    var respuesta = parseInt(prompt("1. Llenar arreglo"))
    switch((respuesta)){
         case 1:

         LlenarArreglo()

         break

    
    }  

}while(true)

