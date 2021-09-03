/* ACA AGREGO UNA CLASE EN LUGAR DE LA FUNCION ANTERIOR*/

class Clasecalculoprecio
{
    constructor(tipohabitacion,cantdias,cantpersonas)
    {
        this.tipohabitacion = tipohabitacion;
        this.cantdias = cantdias;
        this.cantpersonas = cantpersonas;
        this.resultado = 0; //aca voy a volcar el resultado del calculo de la habitacion del hotel para luego desplegar
    }
    calcular() 
    {
        var precio;
        /*HAGO VERIFICACIONES DE LA INFORMACION INGRESADA POR EL USUARIO*/
        if (this.cantdias < 1 || this.cantdias > 30 || isNaN(this.cantdias))
        {
            alert("Error: los dias de reserva deben estar entre 1 y 30");
            return;
        }
        if (this.tipohabitacion != 0 && this.tipohabitacion != 1 && this.tipohabitacion != 2)
        {
            alert("Error: debe elegir un tipo de habitacion (0 - Comun , 1 - Superior , 2 - Lujo)");
            return;
        }
        if (this.cantpersonas < 1 || this.cantpersonas > 5 ||  isNaN(this.cantpersonas))
        {
            alert("Error: La cantidad de personas debe estar entre 1 y 5");
            return;
        }
        /* ACA HAGO CALCULO, SEGUN LA HABITACION MULTIPLICO POR LA CANTIDAD DE DIAS*/
         switch (this.tipohabitacion)
        {
            case 0:
            {
                precio = precioshab[0] * this.cantdias;
                break;
            }
            case 1:
            {
                precio = precioshab[1] * this.cantdias;
                break;
            }
            case 2:
            {
                precio = precioshab[2] * this.cantdias;
                break;
            }
        }
        /*AHORA, SEGUN LA CANTIDAD DE PERSONAS AGREGO UN 20% DE RECARGO EN CASO DE SOLICITAR HABITACION PARA MAS DE 2 PERSONAS*/
        if (this.cantpersonas > 2)
        {
            precio += ((precio * 20) / 100);
        }
        this.resultado = precio;
    }
}
class DeterminarDespliegueHabitacion
{
    constructor(obj)
    {
        this.nombrecliente = obj.nombre;
        this.tipohab = obj.tipohab;
        this.cantdias = obj.dias;
        this.cantpersonas = obj.personas;
    }
    determinarHabitacion()
    {
        const matrizdatos = [];
        let leyendatipohab = "";  
        matrizdatos.push(objetoliteral);
        sessionStorage.setItem('datoscliente',JSON.stringify(matrizdatos)); //almaceno datos en el storage de sesion como ejercicio
        
        //aca determino, segun el tipo de habitacion elegida le voy a mostrar la foto correspondiente a la habitacion de forma DINAMICA!!
        if (this.tipohab == 0)
        {
            document.getElementById("imagencambio").src = "img/habcomun.jpg"; //dinamicamente cambio la imagen usando el DOM segun el tipo de habitacion elegida
            leyendatipohab = "Estandard";
        }
        else if (this.tipohab == 1)
        {
            document.getElementById("imagencambio").src = "img/habsuperior.jpg";
            leyendatipohab = "Superior";
        }
        else if (this.tipohab == 2)
        {
            document.getElementById("imagencambio").src = "img/hablujo.jpg";
            leyendatipohab = "Lujo"
        }

        document.getElementById("LeyendaCliente").innerText = "Bienvenido: " + this.nombrecliente;
        document.getElementById("LeyendaClienteDesc").innerText = "Estimado cliente, es un placer recibirlo en TU HOTEL, a la izquierda puede visualizar una imagen de la habitación reservada por usted, la misme incluye servicio a la habitación las 24hs y de obsequio una botella de champagne Chandon Rosé, no dude en contactarnos ante cualquier inquietud o modificación de su reserva, estamos para ayudarlo!"
        document.getElementById("despliegueTipoHab").innerText = "Tipo Habitacion: " + leyendatipohab;
        document.getElementById("despliegueCantPersonas").innerText = "Cant. Personas: " + this.cantpersonas;
        document.getElementById("despliegueCantDias").innerText = "Cant. Dias: " + this.cantdias;
        let avisoadicional = document.createElement("p"); //agrego lineas dinamicamente al final de la pagina
        avisoadicional.innerHTML = `<hr><hr><hr><hr>` ;
        document.body.appendChild(avisoadicional);

    }
}
var precioshab = [];
precioshab.push(1200); //precio habitacion comun , indice 0
precioshab.push(2000); //precio habitacion superior, indice 1
precioshab.push(2800); //precio habitacion lujo, indice 2

//agregando storages


/* preguntas para hacer al usuario respecto al alojamiento */
let nombrecliente = prompt("Bienvenido a TU HOTEL, por favor ingrese su nombre completo")
let tipohabitacion = parseInt(prompt("Bienvenido a TU HOTEL, Ingrese tipo de habitacion deseada: \n\n 0 - Comun \n 1 - Superior \n 2 - Lujo \n"));
let cantdias = parseInt(prompt("Ingrese cantidad de dias de su estadia"));
let cantpersonas = parseInt(prompt("Ingrese cantidad de personas"));
/* llamado a la funcion principal */
const preciofinal2 = new Clasecalculoprecio(tipohabitacion,cantdias,cantpersonas); //hago instancia del objeto
preciofinal2.calcular(); //ejecuto el metodo de calculo

let objetoliteral = {nombre: nombrecliente, tipohab: tipohabitacion, dias: cantdias, personas: cantpersonas }; //a modo de ejercicio hago un objeto literal con los datos ingresados por el cliente para luego pasar el objeto como parametro de la instancia de la clase

const instanciaDeterminarHabitacion = new DeterminarDespliegueHabitacion(objetoliteral);
instanciaDeterminarHabitacion.determinarHabitacion(); //ejecuto las modificaciones en el DOM, hago que aparezca una foto de acuerdo a la habitacion elegida y pongo la leyenda "bienvenido XXXX" a la derecha de la foto junto a una leyenda








if (preciofinal2.resultado != 0) /*en caso de no devolver error despliego la informacion del calculo para el cliente */
{
    alert("estimado cliente, muchas gracias por brindar la informacion solicitada, en este caso el costo del alojamiento es de: $" + preciofinal2.resultado);
}




