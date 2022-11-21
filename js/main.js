//-----------------Para los tutores-----------------------------------
//EL CODIGO COMENTADO ES DE LAS ENTREGAS ANTERIORES,
//LO COMENTÉ PARA QUE NO MOLESTARAN LOS ALERT
//PARA LA ENTREGA FINAL LO ACOMODO CORRECTAMENTE
//--------------------------------------------------------------------

// //Declaracion de variables
// let edad;
// let totalCarrito = 0;

// //Arrays y objetos
// const productos = [
//     {
//         id: 1,
//         nombre: "ipa",
//         categoria: "cerveza",
//         precio: 450
//     },
//     {
//         id: 2,
//         nombre: "golden",
//         categoria: "cerveza",
//         precio: 300
//     },
//     {
//         id: 3,
//         nombre: "honey",
//         categoria: "cerveza",
//         precio: 350
//     }
// ]
// const carrito = [];

// //Declaracion de funciones
// function ingreso(b){
//     for(let i=2; i>=0; i--){
//         b = Number(prompt("Ingrese su edad")); 
//         while(isNaN(b)){
//             b = Number(prompt("Por favor ingrese una edad válida"));
//         }
//         if(b >= 18 && b <= 122){ //La persona más longeva de la historia ‒una mujer francesa llamada Jeanne Calment ‒ vivió hasta los 122. Cuando nació en 1875, la esperanza media de vida era de unos 43
//             alert("Cumplis los requisitos!");
//             let res = prompt("Deseas comprar algo? S/N");
//             while(res !== "s" && res !== "S" && res !== "n" && res !== "N"){
//                 res = prompt("Por favor ingrese una opción válida");
//             }
//             if(res === "s" || res === "S"){
//                 let existe;
//                 let opcion = prompt("Elegí una de nuestras opciones de cervezas: \n" + productos[0].nombre.toUpperCase() + ": $" + productos[0].precio + " \n" + productos[1].nombre.toUpperCase() + ": $" + productos[1].precio + " \n" + productos[2].nombre.toUpperCase() + ": $" + productos[2].precio + " \n Presioná X para finalizar.");
//                 while (opcion != "X" && opcion != "x") {
//                     existe = productos.some((producto)=>{
//                         return producto.nombre === opcion.toLowerCase();
//                       })
//                     if(existe){
//                     const encontrado = productos.find((producto)=>{
//                         return producto.nombre === opcion.toLowerCase();
//                       })
//                     alert("Elegiste " + encontrado.nombre.toUpperCase() + " a $" + encontrado.precio);
//                     carrito.push(encontrado);
//                     }else{
//                         alert("Opcion no válida");
//                     }
//                 opcion = prompt("Desea agregar algo mas?: \n" + productos[0].nombre.toUpperCase() + ": $" + productos[0].precio + " \n" + productos[1].nombre.toUpperCase() + ": $" + productos[1].precio + " \n" + productos[2].nombre.toUpperCase() + ": $" + productos[2].precio + " \n Presioná X para finalizar.");
//                 }
//                 carrito.forEach((el) => {
//                     totalCarrito += el.precio;
//                 });
//                 alert("Tu compra final es de $" + totalCarrito);
//             }else{
//                 alert("Tu compra es de $ " + totalCarrito);
//                 alert("Gracias por confiar en nosotros")
//             }
//             break;
//         }else{
//             if(i==0){
//                 alert("No tenés más intentos")
//             }else{
//                 alert("Error, te quedan " + i + " intentos");
//             }
//         }
//     }
//     alert("Muchas gracias por visitar nuestra página. Quedate por aca si queres ver algo más");
// }

// //Llamado de funciones
// ingreso(edad);

//------------------------------------------------------------------------------------------------------------------
//CODIGO DE LA 3RA ENTREGA

const nombre = document.getElementById("nombre"),
    apellido = document.getElementById("apellido"),
    telefono = document.getElementById("telefono"),
    correo = document.getElementById("correo"),
    btnEnviar = document.getElementById("enviar"),
    parrafo = document.getElementById("parrafoCompletar"),
    formulario = document.getElementById("form"),
    prueba = document.getElementById("correoDePrueba");
    
const datos = [];

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    datos.push({nombre:nombre.value, apellido:apellido.value, telefono:telefono.value, correo:correo.value});
    localStorage.setItem("datos", JSON.stringify(datos));
    let datosDeVuelta = JSON.parse(localStorage.getItem("datos"));
    
    parrafo.innerText = ("Bienvenido a 967 " + nombre.value + " " + apellido.value + "\nTu telefono es: " + telefono.value); //desde form
    prueba.innerText = ("El correo es: " + datosDeVuelta[0].correo); //desde storage
})
