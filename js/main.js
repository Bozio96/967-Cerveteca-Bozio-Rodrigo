//Declaracion de variables
let edad;

//Declaracion de funciones

function ingreso(b){
    for(let i=2; i>=0; i--){
        b = Number(prompt("Ingrese su edad")); 
        while(isNaN(b)){
            b = Number(prompt("Por favor ingrese una edad válida"));
        }
        if(b >= 18){
            alert("Cumplis los requisitos!");
            let res = prompt("Deseas comprar algo? S/N");
            while(res !== "s" && res !== "S" && res !== "n" && res !== "N"){
                res = prompt("Por favor ingrese una opción válida");
            }
            let compra = 0;
            if(res === "s" || res === "S"){
                let opcion = prompt("Elegí una de nuestras opciones de cervezas: \n1- IPA: $400 \n2 - GOLDEN: $300 \n3 - HONEY: $350 \nPresioná X para finalizar.");
                while (opcion != "X" && opcion != "x") {
                         switch (opcion) {
                           case "1":
                             alert("Elegiste IPA");
                             compra += 400;
                            break;
                           case "2":
                            alert("Elegiste GOLDEN");
                            compra += 300; 
                            break;
                           case "3":
                             alert("Elegiste HONEY");
                             compra += 350;
                             break;
                    
                           default:
                             alert("Opción no válida");
                             break;
                         }
                         opcion = prompt("Desea agregar algo más? \n1- IPA: $400 \n2 - GOLDEN: $300 \n3 - HONEY: $350 \nPresioná X para finalizar.");
                       }
                alert("Tu compra final es de $ " + compra);
            }else{
                alert("Tu compra es de $ " + compra);
                alert("Gracias por confiar en nosotros")
            }
            break;
        }else{
            if(i==0){
                alert("No tenés más intentos")
            }else{
                alert("Error, te quedan " + i + " intentos");
            }
        }
    }
    alert("Muchas gracias por visitar nuestra página. Quedate por aca si queres ver algo más");
}

//Llamado de funciones
ingreso(edad);