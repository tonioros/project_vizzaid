window.onload = function() {
  console.log("Pagina cargada");
  var saludo = "";
  var enterio = 1;
  var boolean = true || false;
  var float = 0.123;
  for (var i = 0; i < 10; i++) {

  }
  var saludo = function() {
    console.log("Funcion de Variable");
  }
  function despedir() {
    console.log("Despedir");
  }
  var dom = {
    "saludar" : function() {
      console.log("saludar, again uwu");
    }
  ,"despedir": function() {
  console.log("adios, again uwu");
  }};
}

var persona = {nombre:"Antonio",apellido:"Xocoy Rosales", setnombre: function (nombre) {
  persona.nombre = nombre;
}, getNombre: function () {
  return persona.nombre;
}};

var nombre = document.getElementsByName('p')
console.log(nombre);
var inputNombre = document.getElementById('idNombre')
console.log(inputNombre);
