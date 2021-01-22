var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var mapa = "tile.png";
var cantidadVacas = prompt("Cuantas vacas quieres?");
var cantidadCerdos = prompt("Cuantos cerdos quieres?");
var cantidadPollos = prompt("Cuantos pollos quieres?");

var fondo = {
	url: "tile.png",
	cargaOK: false
}
var vaca = {	
	url: "vaca.png",
	cargaOK: false
};
var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};
var pollo = {
	url: "pollo.png",
	cargaOK: false
};
	
	console.log(cantidadVacas);
	console.log(cantidadCerdos);
	console.log(cantidadPollos);
		

fondo.imagen = new Image();
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas()
{
	vaca.cargaOK = true;
	dibujarVacas();
}

function cargarCerdos()
{
	cerdo.cargaOK = true;
	dibujarCerdos();
}

function cargarPollos()
{
	pollo.cargaOK = true;
	dibujarPollos();
}

function dibujar()
{
	if(fondo.cargaOK)	{
		
		papel.drawImage(fondo.imagen, 0, 0);
	
	}	
}

function dibujarVacas()
{
	if(vaca.cargaOK)
		{
			
		for (var v=0; v <  cantidadVacas; v++)
		{
			
	    var x = aleatorio(0, 7); 
		var y = aleatorio(0, 7);
		var x = x * 60;
		var y = y * 60;
		papel.drawImage(vaca.imagen, x, y);
		
		}
	}
	
}

function dibujarCerdos()
{
		if(cerdo.cargaOK)
	{
		for (var c = 0; c < cantidadCerdos; c++)
		{
			
		var x = aleatorio (0, 7);
	    var y = aleatorio(0, 7);
		var x = x * 60;
		var y = y * 60;
		papel.drawImage(cerdo.imagen, x, y);
		}
	}
	
}

function dibujarPollos()
{
		if(pollo.cargaOK)
	{
		for(var p = 0; p < cantidadPollos; p++)
		{
				
		var x = aleatorio (0, 7);
	    var y = aleatorio(0, 7);
		var x = x * 60;
		var y = y * 60;
		papel.drawImage(pollo.imagen, x, y);
		}
	}
}

function aleatorio(min, max)
{
	var resultado;
	resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
	
}

