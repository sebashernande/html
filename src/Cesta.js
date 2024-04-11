 document.querySelector('#header').innerHTML = "estoy leyendo el documento cesta"

 var cesta = ["Fresa", "Pera", "Pina", "Naranja","Uva"]
  

 function Elementos_de_la_cesta() {
  alert(cesta)
  
  }

  function Agregar_una_fruta() {
    var nuevafruta = prompt ("Ingrese una nueva fruta")  
    alert(cesta.push(nuevafruta))
    }

    function Quitar_una_Fruta() {
    cesta.pop()
    alert("Se elimino con exito")
      }

var inicio = true
do{
   var opcion = prompt("1. ver elementos de la cesta\n2. agregar una fruta a la cesta\n3. quitar una fruta de la cesta\n4. Salir del progama")
    switch(parseInt(opcion)){
      case 1:
        Elementos_de_la_cesta()
       break
      
       case 2:
        Agregar_una_fruta()
       break

        case 3:
       Quitar_una_Fruta()
       break

      case 4:
          inicio = prompt("Desea terminar ciclo?")
          if (inicio == "si"){
              inicio = false
          
          }

    }

  }while(inicio == true)

