// Objetivo específico 1: Definir eventos a manejar y su función de respuesta
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Objetivo específico 2: Modificar el DOM para realizar salidas de un procesamiento
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;

    guardarPersona(nombre, edad, genero);
    mostrarResultados();
    limpiarFormulario();
  });

  function guardarPersona(nombre, edad, genero) {
    // Objetivo específico 3: Almacenar datos (clave-valor) en el Storage y recuperarlos
    var persona = { nombre: nombre, edad: edad, genero: genero };

    if (localStorage.getItem("personas")) {
      var personas = JSON.parse(localStorage.getItem("personas"));
      personas.push(persona);
      localStorage.setItem("personas", JSON.stringify(personas));
    } else {
      localStorage.setItem("personas", JSON.stringify([persona]));
    }
  }

  function mostrarResultados() {
    var listaResultados = document.getElementById("lista-resultados");
    listaResultados.innerHTML = ""; // Limpiar la lista antes de mostrar los resultados

    var personas = JSON.parse(localStorage.getItem("personas"));

    personas.forEach(function(persona) {
      var item = document.createElement("li");
      item.textContent = "Nombre: " + persona.nombre + " | Edad: " + persona.edad + " | Género: " + persona.genero;
      listaResultados.appendChild(item);
    });
  }

  function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("genero").value = "masculino";
  }

  // Cargar resultados al cargar la página
  window.addEventListener("load", function() {
    mostrarResultados();
  });