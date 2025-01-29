
// let generadorNumeroSecreto = 0
// let contador = 0;
// let listaNumerosSorteados = []
// let numeroMaximo = 10

// function intentoDeUsuario(){
//     alert("CLICK DESDE LA FUNCION");
// }
// function asignarTextoElemento(elemento,texto){
//     let elementoHTML = document.querySelector(elemento)
//     elementoHTML.innerHTML = texto ;
// }


// function numeroSecreto() {
//     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
//     console.log(numeroGenerado)
//     console.log(listaNumerosSorteados);
//     //SI EL NUMERO GENERADO ESTA INCLUIDO EN LA LISTA 
//     //SI YA SORTEAMOS TODOS LOS NUMEROS PODEMOS MOSTRAR UN MENSAJE Y MOISTRAR ALGO 
//     if(listaNumerosSorteados.length == numeroMaximo){
//         asignarTextoElemento("p","YA SE SORTEARON TODOS LOS NUMEROS POSIBLES")
//     }else{
//         if(listaNumerosSorteados.includes(numeroGenerado)){
//             return numeroSecreto();
//         }else{
//             listaNumerosSorteados.push(numeroGenerado);
//             return numeroGenerado
//         }
//     }
    
// }



// function numeroDeIntentos(){
//     let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value)
//     if(numeroDeUsuario === generadorNumeroSecreto){
//         asignarTextoElemento("p",`CORRECTO, NUMERO DE INTENTO: ${contador+1}`)
//         document.querySelector("#reiniciar").removeAttribute("disabled")
//     }else{
//         contador = contador + 1
//         if(numeroDeUsuario> generadorNumeroSecreto){
//             asignarTextoElemento("p",`MAL INCORRECTO, EL NUMERO ES MENOR, NUMERO DE INTENTO: ${contador}`)
//         }else{
//             asignarTextoElemento("p",`MAL INCORRECTO, EL NUMERO ES MAYOR, NUMERO DE INTENTO: ${contador}`)
//         }
//         limpiarCaja()
//     }
//     return;
// }
// //ESTO SIRVE PARA LIMPIAR LA CAJA DE CUANDO SE HACE EL INTETNO
// function limpiarCaja(){
//     let valorCaja = document.querySelector("#valorUsuario")
//     valorCaja.value = "";
// }
// function condicionesIniciales(){
//     asignarTextoElemento("h1","JUEGO DEL NÚMERO SECRETO");
//     asignarTextoElemento("p",`INDICA UN NÚMERO DEL 1 AL ${numeroMaximo}` );
//     generadorNumeroSecreto = parseInt(numeroSecreto())
//     contador = 0;

// }

// function reiniciarJuego(){
//     //PRIMERO SE DEBE LIMPIAR LA CAJA
//     limpiarCaja();
//     //INDICAR MENSAJE DE NUMERO
//     //GENERAR EL NUMERO ALEATORIO
//     //INICIALIZAR EL NUMERO DE INTENTOS
//     condicionesIniciales()
//     //DESHABILITAR EL BOTON DE NUEVO JUEGO
//     document.querySelector("#reiniciar").setAttribute("disabled","true")
    
    
// }
// condicionesIniciales()

"1"
// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = []
"2"
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' ,'Python']
"3"
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby','GoLang')
"4"
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostraLista(lista){
    console.log(lista)
}
"5"
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function listaAlreves(lista){
    console.log(lista.reverse())
}
"7"
let listaDeNumeros = [1,2,3,4,5,6] 
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mayoresMenores(lista){
    let mayor = (Math.max(...lista))
    let menor = (Math.min(...lista))
    console.log(`EL NÚMERO MAYOR ES ${mayor}, EL NÚMERO MENOR ES ${menor}`)
}
mayoresMenores(listaDeNumeros)
