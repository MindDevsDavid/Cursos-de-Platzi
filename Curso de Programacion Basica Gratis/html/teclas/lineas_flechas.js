var teclas = {
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
};

document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lienzoWidht = 8;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento)
	{
		var colorcito = "red";
		var movimiento = 10;
		switch(evento.keyCode)
			{	
				case teclas.UP:
					dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
					y = y - movimiento;
				break;
				case teclas.DOWN:
					dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
					y = y + movimiento;
				break;
				case teclas.LEFT:
					dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
					x = x - movimiento;
				break;
				case teclas.RIGHT:
					dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
					x = x + movimiento;
				break;
				default:
					console.log("alguna otra tecla");
				break;
			
			}
	}
	
// lienzo.lienzoWidht = 5;	    sirve para cambiar el ancho de la linea
	
	
	
	