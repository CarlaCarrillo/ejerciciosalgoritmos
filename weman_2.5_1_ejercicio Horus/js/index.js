//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arreglo.length; i++) {
		imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

function ordenaPorHabitacion(arreglo) {
	var registro = [
	{numHabitacion: "87", nombreHuesped: "Donna Noble"},
	{numHabitacion: "34", nombreHuesped: "Jean Luc Piccard"},
	{numHabitacion: "23", nombreHuesped: "Deana Troi"},
	{numHabitacion: "12", nombreHuesped: "Christpher Pike"},
	{numHabitacion: "67", nombreHuesped: "Amy Pond"},
	{numHabitacion: "45", nombreHuesped: "Miyamoto Musashi"},
	{numHabitacion: "93", nombreHuesped: "Amelia Earhart"},
	{numHabitacion: "47", nombreHuesped: "Katherin Janeway"}
	];
	console.log(registro.sort(function (prev,next) {
	if (prev.numHabitacion > next.numHabitacion) {
	return 1;
	}
	if (prev.numHabitacion < next.numHabitacion) {
	return -1;
	}
	return 0;
	}));


	dibujaTarjetas(registro);

	//Esta función escribe la función que ordenará el arreglo por habitación
}


function ordenaPorHuesped(arreglo) {
	var registro = [
	{numHabitacion: "87", nombreHuesped: "Donna Noble"},
	{numHabitacion: "34", nombreHuesped: "Jean Luc Piccard"},
	{numHabitacion: "23", nombreHuesped: "Deana Troi"},
	{numHabitacion: "12", nombreHuesped: "Christpher Pike"},
	{numHabitacion: "67", nombreHuesped: "Amy Pond"},
	{numHabitacion: "45", nombreHuesped: "Miyamoto Musashi"},
	{numHabitacion: "93", nombreHuesped: "Amelia Earhart"},
	{numHabitacion: "47", nombreHuesped: "Katherin Janeway"}
	];
	console.log(registro.sort(function (prev,next) {
	if (prev.nombreHuesped > next.nombreHuesped) {
	return 1;
	}
	if (prev.nombreHuesped < next.nombreHuesped) {
	return -1;
	}
	return 0;
	}));

	dibujaTarjetas(registro);
		//Función que ordena por el nombre del huesped
	}

function guardar(){
   
    var _nom = document.getElementById("habitacion").value;
    var _ced = document.getElementById("huesped").value;

    var fila="<tr><td>"+_nom+"</td><td>"+_ced +"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("registro").appendChild(btn);
//Se crea un botón para guardar mis datos haciendo referencia a los elementos "habtación" y "huesped"
}

//Aún no logramos hacer que la tabla guarde los valores nuevos