var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 10, 10, 220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}


// function sirve para declarar una funcion
// function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) tiene 5 parametros, los cuales se pueden cambiar como queramos cada vez que invoquemos dicha funcion, ejemplo: dibujarLinea("pink", 10, 300, 220, 10); 







































