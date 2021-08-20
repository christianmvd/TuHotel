const habcomun = "1200"; /* constantes para definir precio por dia de cada tipo de habitacion */
const habsup = "2000";
const hablujo = "2800";
/* preguntas para hacer al usuario respecto al alojamiento */
let tipohabitacion = parseInt(prompt("Bienvenido a TU HOTEL, Ingrese tipo de habitacion deseada (0 - Comun , 1 - Superior , 2 - Lujo"));
let cantdias = parseInt(prompt("Ingrese cantidad de dias de su estadia"));
let cantpersonas = parseInt(prompt("Ingrese cantidad de personas"));
/* llamado a la funcion principal */
var preciofinal = calculoprecio(tipohabitacion,cantdias,cantpersonas);

if (preciofinal != 0) /*en caso de no devolver error despliego la informacion del calculo para el cliente */
{
    alert("estimado cliente, muchas gracias por brindar la informacion solicitada, en este caso el costo del alojamiento es de: $" + preciofinal);
}

function calculoprecio(tipohabitacion,cantdias,cantpersonas)
{
    var precio;
    /*HAGO VERIFICACIONES DE LA INFORMACION INGRESADA POR EL USUARIO*/
    if (cantdias < 1 || cantdias > 30 || isNaN(cantdias))
    {
        alert("Error: los dias de reserva deben estar entre 1 y 30");
        return 0;
    }
    if (tipohabitacion != 0 && tipohabitacion != 1 && tipohabitacion != 2)
    {
        alert("Error: debe elegir un tipo de habitacion (0 - Comun , 1 - Superior , 2 - Lujo)");
        return 0;
    }
    if (cantpersonas < 1 || cantpersonas > 5 ||  isNaN(cantpersonas))
    {
        alert("Error: La cantidad de personas debe estar entre 1 y 5");
        return 0;
    }
    /*FIN DE VERIFICACIONES */

    /* ACA HAGO CALCULO, SEGUN LA HABITACION MULTIPLICO POR LA CANTIDAD DE DIAS*/
    switch (tipohabitacion)
    {
        case 0:
            {
                precio = habcomun * cantdias;
                break;
            }
        case 1:
            {
                precio = habsup * cantdias;
                break;
            }
        case 2:
            {
                precio = hablujo * cantdias;
                break;
            }
    }
    /*AHORA, SEGUN LA CANTIDAD DE PERSONAS AGREGO UN 20% DE RECARGO EN CASO DE SOLICITAR HABITACION PARA MAS DE 2 PERSONAS*/
    if (cantpersonas > 2)
    {
        precio += ((precio * 20) / 100);
    }
    return precio;
}


