// Obtener elementos del DOM
var inputTI = document.getElementById("TI");
var spanCC_A = document.getElementById("cc_a");
var buttonEnviar = document.getElementById("contra_enviar");

// Agregar evento de clic al botón
buttonEnviar.addEventListener("click", function() {
  // Obtener el valor del input "TI"
  var valorTI = inputTI.value;
  // Construir el texto a mostrar en el span "cc_a"
  var textoCC_A = "PRIMERA VEZ CC <br>" + valorTI;
  // Asignar el texto al span "cc_a"
  spanCC_A.innerHTML = textoCC_A;
});

document.getElementById("contra_enviar").addEventListener("click", function() {
    var apellido = document.getElementById("APE").value;
    var nombre = document.getElementById("NOM").value;
    var valorConcatenado = apellido + "<br>" + nombre;
    document.getElementById("tlll").innerHTML = valorConcatenado;
    document.getElementById("firmaaa").innerHTML = nombre;
  });


// Obtener los elementos de entrada
var fechaInput = document.getElementById("FECH");
var lugarInput = document.getElementById("LUG");

// Obtener el elemento span de salida
var fechLugSpan = document.getElementById("fech_lug");

// Función para escribir los valores en el span
function escribirFechLug() {
  // Obtener los valores de los campos de entrada
  var fecha = fechaInput.value;
  var lugar = lugarInput.value;

  // Concatenar los valores con un salto de línea
  var fechLug = fecha + "<br>" + lugar;

  // Escribir los valores en el span
  fechLugSpan.innerHTML = fechLug;
}

// Asociar la función al evento click del botón
var button = document.getElementById("contra_enviar");
button.addEventListener("click", escribirFechLug);




// Obtener referencias a los elementos necesarios
const inputFechaCreacion = document.getElementById('FECHCRE');
const spanCreaUno = document.getElementById('creauno');
const spanCreados = document.getElementById('creados');
const botonEnviar = document.getElementById('contra_enviar');

// Agregar un controlador de eventos al botón
botonEnviar.addEventListener('click', function() {
  // Obtener el valor del input de fecha de creación
  const valorFechaCreacion = inputFechaCreacion.value;

  // Crear el texto a agregar antes del valor de fechcre
  const textoAdicional = '8501569037 <br>';

  // Asignar el valor a creauno concatenándolo con el texto adicional
  spanCreaUno.innerHTML = textoAdicional + valorFechaCreacion;
  spanCreados.innerText = valorFechaCreacion;
});



// Obtener el elemento de entrada por su ID
var inputFechVen = document.getElementById("FECHVEN");

// Obtener el elemento de span por su ID
var spanFechsdfkjasd = document.getElementById("fechsdfkjasd");

// Obtener el elemento de botón por su ID
var button = document.getElementById("contra_enviar");

// Agregar un evento click al botón
button.addEventListener("click", function() {
  // Obtener el valor del input
  var valorFechVen = inputFechVen.value;
  
  // Concatenar el texto deseado con el valor del input
  var resultado = "ESTE COMPROBANTE ES <br>  VALIDO HASTA EL  " + valorFechVen;
  
  // Asignar el resultado al contenido del span
  spanFechsdfkjasd.innerHTML = resultado;
});


// Obtener elementos del DOM
var inputSex = document.getElementById("SEX");
var spanSex = document.getElementById("SEXxxxxx");
var button = document.getElementById("contra_enviar");

// Agregar un event listener al botón
button.addEventListener("click", function() {
  // Obtener el valor del input
  var sexo = inputSex.value;
  
  // Escribir el valor en el span
  spanSex.textContent = sexo;
});


document.getElementById("contra_enviar").addEventListener("click", function() {
    var inputValue = document.getElementById("LUGPRE").value;
    document.getElementById("LIGPUNO").textContent = inputValue;
    document.getElementById("LIGPUNOD").textContent = inputValue;
  });
  









  const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('file-input');
        const imgPreview = document.getElementById('imgprueb');

        dropZone.addEventListener('click', () => {
            fileInput.click();
        });

        dropZone.addEventListener('dragover', (event) => {
            event.preventDefault();
            dropZone.classList.add('dragover');
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('dragover');
        });

        dropZone.addEventListener('drop', (event) => {
            event.preventDefault();
            dropZone.classList.remove('dragover');
            const file = event.dataTransfer.files[0];
            handleFile(file);
        });

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            handleFile(file);
        });

        function handleFile(file) {
            if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imgPreview.src = e.target.result;
                }
                reader.readAsDataURL(file);
            } else {
                alert('Por favor, selecciona un archivo de imagen válido (JPEG o PNG).');
            }
        }




        




  