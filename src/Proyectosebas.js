

let arreglo = []

function construirArrgelo(largo) {
    arreglo.length = largo
}

function ArregloLlenar() {
    for (let i = 0; i < arreglo.length; i++) {
        let nuneroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = nuneroAleatorio
    }
    alert("Arreglo:" + arreglo)
    console.log(arreglo)
}

function promedioArreglo() {
    let sumaTotal = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sumaTotal = sumaTotal + arreglo[i];
    }
    alert("El promedio es:" + sumaTotal)
    console.log("el promedio es: " + sumaTotal)
    return sumaTotal / arreglo.length
}

function mayoresPromedio() {
    let promedio = promedioArreglo();
    let cantidadDeElementos = 0;
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
    return totalImpares
}
function mayorArreglo() {
    let valorMayor = 0
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > valorMayor) {
            valorMayor = arreglo[i]
        }
        console.log("El valor mas grande de este arreglo: " + valorMayor)
    }
    return valorMayor
}
function mayorDiferencia() {

    let valorDiferenciaMayor = 0
    let diferencia = 0
    for (let i = 0; i <= arreglo.length; i++) {


        diferencia = arreglo[i] - arreglo[i + 1]


        if (diferencia < 0) {
            diferencia = diferencia * 1
        }

        if (diferencia > valorDiferenciaMayor) {
            valorDiferenciaMayor = diferencia
        }
        console.log(valorDiferenciaMayor)
    }
    return valorDiferenciaMayor
}

function MayorDiferencia(){
    }


 function EncontrarElemento(){
    var Numerodelarray = prompt("Ingrese el numero que desea buscar si esta en el arreglo")
    do{
        x + 1 

      

        cesta.splice(x, Numerodelarray)
      }while(x <= cesta.length)
      if (Numerodelarray == arreglo){
        prompt("Si el numero esta en el arreglo")


      }


    }     





var largo = parseInt(prompt("Digitar que tan largo quiere el arreglo"))
construirArrgelo(largo);

var inicio = true

do {

    var menu = parseInt(prompt("1. Llenar el arreglo\n 2.Promedio de arreglo\n3. Valores mayores del promedio\n4.Suma de los valores del arreglo con un numero \n 5. Sumar los numeros impares \n 6.Numero mayor de este arreglo \n 7.Diferencias entre solo 2 valores del arreglo \n 8.Encuentra un elemento en especifico \n 9.Posicion de un elemento \n 10. Invertir el orden del arreglo \n 11.Insertsr un nuevo elemento \n 12. Mostrar arreglo \n13.Cerrar aplicacion"))

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

            mayorDiferencia()
            break
        case 8:
            EncontrarElemento()

            break
        case 9:
            inicio = prompt("Desea terminar ciclo?")
            if (inicio ="si"){
                inicio = false
            
            }
            break;
        default: alert("Esto no sirve webon")
            break;

    }

} while (inicio == true)









