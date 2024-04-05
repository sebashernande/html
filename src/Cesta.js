 document.querySelector('#header').innerHTML = "estoy leyendo el documento cesta"

 var cesta = ["Fresa", "Pera", "Pina", "Naranja","Uva"]
 var contador

 function Elementos_de_la_cesta() {
    console.log(cesta.length)
  
  }


do{
 var opcion = prompt("1. ver elementos de la cesta\n2. agregar una fruta a la cesta\n3. quitar una fruta de la cesta")

}