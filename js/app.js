//Variables
const formularioEnviar = document.getElementById('gform');
//const btnEnviar= document.getElementById('enviar');


//Event Listeners
eventListeners();
obtenerFecha();

function eventListeners(){
    //Inicio de la aplicación y deshabilitar submit
    //document.addEventListener('DOMContentLoaded',inicioApp);
    //Boton enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

}

/*

function inicioApp(){
    btnEnviar.disabled=false;
}*/


//Función que envia los emails
function enviarEmail(e){
    setTimeout(function(){
        formularioEnviar.reset();
    },2000);
}

//Fecha footer
function obtenerFecha(){
    const d = new Date();
    const year= d.getFullYear();
    document.getElementById("fecha").innerHTML ='<center>'+ '<br>' + '<strong>' +year + '</strong>'+'</center>';
}