"use strict"
//Definimos variables a utilizar
let primerNumero , segundoNumero , tipoOperacion , resultado;

//Definimos una funcion para limpiar la pantalla
function fnLimpiarPantalla(){

    display.value = " ";

}

//Definimos una funcin para marcar los numeros en la pantalla desde los botones
function fnMarcarNumero(n){

    if(!(display.value.includes("."))){
   
    display.value = display.value + n;

}else if(n != "."){
    display.value = display.value + n;

    }

}


//Definimos una funcion para recibir la operacion 
function fnOperacion(op){

    primerNumero = Number(display.value);
    fnLimpiarPantalla();
    tipoOperacion = Number(op);
    
}

//Definimos la funcion para el boton igual

function fnOperar(){

    segundoNumero = Number(display.value);
    fnLimpiarPantalla;

switch(tipoOperacion){
    case 1:
        resultado = primerNumero + segundoNumero;
        break;
    case 2:
        resultado = primerNumero - segundoNumero;
        break;
    case 3:
        resultado = primerNumero * segundoNumero;
        break;
    case 4:
        resultado = primerNumero / segundoNumero;
        break;
    case 5:
        resultado = Math.pow(primerNumero , segundoNumero);

}
display.value = resultado;

}

//Definimos una funcion para el boton especifico porcentaje
function fnPorcentaje(){

    segundoNumero = Number(display.value);
    fnLimpiarPantalla();
    resultado = primerNumero * (segundoNumero / 100);
    display.value = resultado;
}

//Definimos una funcion para cambio de signo
function fnCambiarSigno(){

    display.value = Number(display.value) * -1;
}
