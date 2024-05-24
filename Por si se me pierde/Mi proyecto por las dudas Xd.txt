let arreglo = []

function construirArrgelo(largo) {

    arreglo.length = largo

}
var largo = parseInt(prompt("Digitar que tan largo quiere el arreglo"))
construirArrgelo(largo)



function ArregloLlenar() {

      for (let i = 0; i < arreglo.length; i++) {
         let nuneroRandom = Math.floor(Math.random() * 20) + 1

          arreglo[i] = nuneroRandom
    }

      alert("Arreglo:" + arreglo)

    console.log(arreglo)
    alert("El arreglo se completo con numeros aleatorios correctamente")

}

function promedioArreglo() {
    
     let total = 0
     for (let i = 0; i < arreglo.length; i++) {
        total = total + arreglo[i];
    }

    console.log("el promedio es: " + total)

    alert("El promedio es:" + total)

    return total / arreglo.length
}

function mayoresPromedio() {
    let promedio = promedioArreglo()
    let cantidadDeElementos = 0
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > promedio) {
            cantidadDeElementos++;
        }
     console.log ("Promedio da: " + promedio)
    }
    return cantidadDeElementos
}

function sumaValor(Valor) {
    var Valor = parseInt(prompt("Digite un valor a sumar con el arreglo"))
    for (let index = 0; index < arreglo.length; index++) {
        resultado = Valor + arreglo[index]
        console.log("La suma de todo eso da:" + resultado)
        alert("La suma de todo eso da:" + resultado)
    }
    return Valor
}
function sumaImPares() {
    let totalImpares = 0

      for (let i = 0; i < arreglo.length; i++) {
        if ((arreglo[i] % 2) != 0) {
            totalImpares = totalImpares + arreglo[i]
        }
    }
    console.log("Suma de solo los impares: " + totalImpares)
    alert("Suma de solo los impares: " + totalImpares)
    return totalImpares
}
function mayorArreglo() {
    let valorMayor = 0
      for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > valorMayor) {
            valorMayor = arreglo[i]
        }

    }
    console.log("El valor mas gande del arreglo es: ", valorMayor)
    alert("El valor mas gande del arreglo es: ", valorMayor)
    return valorMayor

}
function mayorDifF() {

     let valorDifF = 0
    let diferencia = 0
      for (let i = 0; i <= arreglo.length; i++) {

         diferencia = arreglo[i] - arreglo[i + 1]

         if (diferencia < 0) {
              diferencia = diferencia * -1
        }

        if (diferencia > valorDifF) {
            valorDifF = diferencia
         }
     }

    console.log("El numero con mayor diferencia es: ", valorDifF)
    return valorDifF
}





 function encontrarElementoespecific(valor) {
        let especifi = false
       for (let i = 0; i < arreglo.length; i++) {


           if (valor == arreglo[i]) {

             especifi = true
          }
 
          return especifi
     }
   
 }
 
 function posicionElementp(valorNum) {
    
    let encontrar = false;

    let posicion = -1;

    for (let i = 0; i < arreglo.length; i++) {

        if (valorNum == arreglo[i]) {
             encontrar = true
             posicion = i;
             i = arreglo.length;
         }

     }



    if (encontrar) {
        return posicion
    } else {

        return -1
    }
  
   
}

function invertirArreglo() {
       let ArregloInvertido = []

      ArregloInvertido.length = arreglo.length

     let auxPosicion = 0

     for (let i = arreglo.length; i >= 0; i--) {

        ArregloInvertido[auxPosicion] = arreglo[i];
        auxPosicion++;
     }


     arreglo = ArregloInvertido

     console.log("El arreglo se invirtio corrwctamente, porfavor use la opcion 12 para ver los cambios en el arreglo ")
     alert("El arreglo se invirtio corrwctamente, porfavor use la opcion 12 para ver los cambios en el arreglo ")
}

function insertarElemento(posicion1, valor) {
      var posicion1 = parseInt(prompt("Digite el numero quiere remplazar: ")) 

      var valor = parseInt(prompt("Digite el nuevo valor que desea asignarle: "))

        arreglo[posicion1] = valor
        prompt = ("Porfavor use la opcion 12 para ver los cambios que realizo en el arreglo")


}

function mostrarHileraArreglo() {

    for (let i = 0; i < arreglo.length; i++) {


        console.log("Aqui se muestra el arreglo:  " + i, arreglo[i])
    }
}




var inicio = true

do {

    var menu = parseInt(prompt("1. Llenar el arreglo\n 2.Promedio\n3. Valor mayor del promedio\n4.Suma de los valores del arreglo con un numero \n 5. Sumar solo los numeros impares \n 6.Mostrar el numero mas grande del arreglo \n 7.Diferencias entre solo 2 valores del arreglo \n 8.Encuentra un elemento en especifico que este en el arreglo \n 9.Posicion de un elemento especifivo que este en el arreglo \n 10. Invertir el orden del arreglo \n 11.Insertsr un nuevo elemento \n 12. Mostrar arreglo \n13.Cerrar aplicacion"))

     switch (parseInt(menu)) {
         case 1:

            ArregloLlenar();
            break;

         case 2:

          promedioArreglo()
            break;
         case 3:

          mayoresPromedio()
            break;
         case 4:

          sumaValor()
            break;
         case 5:
 
          sumaImPares()
            break
         case 6:

          mayorArreglo()
            break
         case 7:

          mayorDifF()

            break
         case 8:
           
         let num = parseInt(prompt("Digitar el numero que desea ver si se encuentra en el arreglo :) : "))

         console.log("Este numero es " + encontrarElementoespecific(num))

         alert("Este numero es " + encontrarElementoespecific(num))
            break
         case 9:

         let num2 = parseInt(prompt("Ponga el numero que desea ver su posicion : "))

          console.log("El numero a buscar se encuentra en la posicion  " + posicionElementp(num2))

           alert("El numero a buscar se encuentra en la posicion  " + posicionElementp(num2))
         break
         case 10:
          invertirArreglo()

         break

         case 11:
         insertarElemento()

         break

         case 12:
          mostrarHileraArreglo()
         break

         case 13:
            inicio = prompt("Desea terminar ciclo?")
            if (inicio ="si"){
                prompt = ("Gracias por ejecutar, deseo pasar :,)  ")
                inicio = false
            
            
            }
            break

        default: alert("Esto no sirve webon")
            break

    }
} while (inicio == true)









