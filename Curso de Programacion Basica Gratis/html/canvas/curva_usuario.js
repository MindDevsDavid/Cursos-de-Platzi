var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick()
{
	var lineas = parseInt(texto.value);
	var l = 0;
	var yi, xf;
	var colorcito = "green";
	var espacio = ancho / lineas;

	for(l = 0; l < lineas; l++)
		{
			yi = espacio * l;
			xf = espacio * (l + 1);
			dibujarLinea(colorcito, 0, yi, xf, 300);
		}

	dibujarLinea(colorcito, 1, 1, 1, 300);
	dibujarLinea(colorcito, 1, 300, 299, 299);
	dibujarLinea(colorcito, 299, 299, 299, 1);
	dibujarLinea(colorcito, 299, 1, 1, 1);
}






// boton.addEventListener  es añadirle al boton una funcion que este escuchando para ver cuando ocurre un evento
// boton.addEventListener pide dos parametros, uno de el evento que es espera, y otro de lo que se va a ejecutar cuando ocurra el evento
// texto.value muestra el valor de "texto"









