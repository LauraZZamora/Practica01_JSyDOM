// querySelector
const heading = document.querySelector('.header__texto h2')  // 0 o 1 elemento
heading.textContent = 'Nuevo Heading'; // Modifiacr texto de elemento
heading.classList.add('nueva-clase'); // Agregar clase a elemento
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
//console.log(enlaces[0]);

    //Modificar enlaces

    // enlaces[0].textContent = 'Nuevo Texto para Enlace';
    // enlaces[0].href = 'google.com';
    // console.log(enlaces[0]);

    // Agregar - quitar clases

    enlaces[0].classList.add('nueva-clase');
    //enlaces[0].remove('navegacion__enlace');

// getElementById

    const heading2 = document.getElementById('heading');
    console.log(heading2);


//Generar codigo html
const nuevoEnlace = document.createElement('A');// Generar un nuevo enlace
nuevoEnlace.href = 'nuevo-enlace.html'; // Agregar el href
nuevoEnlace.textContent = 'NUEVO ENLACE' // Agregr contenido de texto
nuevoEnlace.classList.add('navegacion__enlace'); // Agregar clase
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);  ///// agregar nuevo enlace a la navegacion
console.log(nuevoEnlace);


// Eventos

// console.log(1);
// window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML esten listos
//     console.log(2);
// });

//window.addEventListener('load', imprimir);

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded',function() { // Solo espera por el HTML, pero no espera CSS o imagenes
//     console.log(4);
// })

// console.log(5);

// function imprimir() {
//     console.log(2);
// }

// window.onscroll = function(evento) {
//     console.log(evento);
// }


// Seleccionar elementos y asociar un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(btnEnviar);
//     console.log(evento);
//     evento.preventDefault();
//     //validar un fomrulario
//     console.log('enviando formulario');
// });



// Eventos de Inputs y Tareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje } =  datos;

    if (nombre === '' || email === '' || mensaje === '') {
        console.log("El nombre, email o mensaje estan vacios");
        mostrarError("Todos los campos son obligatorios");
        return;
    } else {
        confirmarEnvioForm("Se envio el formulario");
    }
    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    // Enviar el formulario
    console.log('Enviando formulario....');

});


function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}


function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    //Desaparezaca despes de 5 segundos

    setTimeout(() => {
        error.remove();
    }, 2000);
    console.log(error);
}

function confirmarEnvioForm(mensaje) {
    const confirmar = document.createElement('P');
    confirmar.textContent = mensaje;
    confirmar.classList.add('confirmar');
    formulario.appendChild(confirmar);

    setTimeout(() => {
        confirmar.remove();
    }, 2000);
    console.log(confirmar);

}