document.querySelector('#header').innerHTML = "estoy leyendo el documento doWhile"

  function suma() {
    var Numero1 = prompt("Ingrese numero 1")  
    var Numero2 = prompt("Ingrese numero 2")
     alert(parseInt(Numero1)+parseInt(Numero2))
  }
  
  function Resta() {
    var Numero1 = prompt("Ingrese numero 1")
    var Numero2 = prompt("Ingrese numero 2")
    alert(parseInt(Numero1)-parseInt(Numero2))
 }

  function Multiplicacion() {
    var Numero1 = prompt("Ingrese numero 1")
    var Numero2 = prompt("Ingrese numero 2")
    alert(parseInt(Numero1)*parseInt(Numero2))
  
  }

  function Division() {
    var Numero1 = prompt("Ingrese numero 1")
    var Numero2 = prompt("Ingrese numero 2")
    alert(parseInt(Numero1)/parseInt(Numero2))
  }

  var inicio = true

 
do{
    
    var respuesta = prompt("1. suma\n2. Resta\n3. Multiplicacion\n4. division\n5. cerrar programa")
    switch(parseInt(respuesta)){
         case 1:
          suma()
         break

         case 2:
          Resta()
         break

          case 3:
          Multiplicacion()
         break

         case 4:
          Division()
         break

         case 5:
            inicio = prompt("Desea terminar ciclo?")
            if (inicio == "si"){
                inicio = false
            
            }

    
    
    }

}while(inicio == true)