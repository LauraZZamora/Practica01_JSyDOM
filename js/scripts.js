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
const nuevoEnlace = document.createElement('IMG');// Generar un nuevo enlace
nuevoEnlace.href = 'nuevo-enlace.html'; // Agregar el href
nuevoEnlace.textContent = 'NUEVO ENLACE' // Agregr contenido de texto
nuevoEnlace.classList.add('navegacion__enlace'); // Agregar clase
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);  ///// agregar nuevo enlace a la navegacion
console.log(nuevoEnlace);

