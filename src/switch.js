document.querySelector('#header').innerHTML = "estoy leyendo el documento switch"
var Dia
var mensaje
var userInput = prompt("Ingrese el numero del dia de la semana")

function lunes() {
    mensaje = "Lunes"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  
  }
  
  function martes() {
    mensaje = "Martes"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "blue";
}

  function Miercoles() {
    mensaje = "Miercoles"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "pink";
  
  }

  function ese_no_es_un_dia() {
    mensaje = "Ese no es un dia";
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "red";
  }

  function Jueves() {
    mensaje = "Jueves";
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "purple";
  }

  
  function Viernes() {
    mensaje = "Viernes";
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "brown";
  }

  function Sabado() {
    mensaje = "Sabado";
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "green";
  }

  function Domingo() {
    mensaje = "Domingo";
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color = "black";
  }

  Dia = parseInt(userInput)// con parseInt se convierte a entero 
switch(Dia) {
    case 1:
        lunes()
        break
    case 2:
        martes()
        break
    case 3:
        Miercoles()
        break
    case 4:
        Jueves()
        break
    case 5:
        Viernes()
        break
    case 6:
        Sabado()  
        break 
    case 7:
        Domingo()
    break
    default:
        ese_no_es_un_dia()
    break
}
