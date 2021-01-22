var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "green";

while(l < lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(colorcito, 0, yi, xf, 300);
	console.log("Linea" + 1);
	l++;
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 300, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}



// while (mientras esto sea verdad)
// {
	// ejecuta este codigo
// }
