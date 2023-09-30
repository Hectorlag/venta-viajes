import { barcelona, roma, paris, londres } from "./ciudades.js";

//obtener los elementos del dom
let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let precioElemento = document.getElementById('precio')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
    //REMOVER ACTIVO
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
    
    //AGREGAR ACTIVE AL QUE CORRESPONDA
    this.classList.add('active')

    //TRAER INFORMACION DEL OBJETO CORRESPONDIENTE SEGUN EL ENLACE
    let contenido = obtenerContenido(this.textContent)
    
    tituloElemento.innerHTML = contenido.titulo
    precioElemento.innerHTML = contenido.precio
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    //MOSTRAR EL CONTENIDO EN EL DOM
    
   });  
});

//FUNCION PARA TRAER LA INFOMACIÒN CORRECTA DESDE CIUDAD..JS
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}

