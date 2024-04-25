document.querySelector('#header').innerHTML = "estoy leyendo el documento cotidiano"

var cesta = []
 

function Ver_Tareas_hasta_el_momento() {
 alert(cesta)
 
 }

 function Agregar_una_tarea() {
   var nuevatarea = prompt ("Ingrese una nueva tarea")  
   alert(cesta.push(nuevatarea))
   }

   function modificar_una_Tarea() {
    var tareamodificar = prompt ("Que tarea desea modificar?")
    alert(cesta[tareamodificar])
    var modifi = prompt("Ingrese la modificacion que desea hacerle")
    alert(cesta[tareamodificar] = modifi)

     }

     
   function Quitar_una_tarea_espesicifca() {
    var tareaeliminar = prompt ("ingrese el numero de lista de la tarea a eliminar")
    alert(cesta[tareaeliminar])
    respuesta = prompt ("Desea eliminarla?")
    if (respuesta == "si"){
    alert(cesta.splice(tareaeliminar, 1))

    }

       }

var inicio = true
do{
  var opcion = prompt("1. ver tareas hasta el momento\n2. agregar una tarea\n3. Modificar una tarea\n4. Eliminar una tarea\n5. Terminar progama")
   switch(parseInt(opcion)){
     case 1:
       Ver_Tareas_hasta_el_momento()
      break
     
      case 2:
       Agregar_una_tarea()
      break

       case 3:
      modificar_una_Tarea()
      break

      case 4:
      Quitar_una_tarea_espesicifca()
      break

     case 5:
         inicio = prompt("Desea terminar ciclo?")
         if (inicio == "si"){
             inicio = false
         
         }

   }

 }while(inicio == true)
