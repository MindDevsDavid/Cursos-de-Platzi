var teclas = {
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
};

var lobrego = {
	url: "lobrego.png",
};

document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("zona1");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

lobrego.imagen = new Image();
lobrego.imagen = lobrego.url;


function dibujarLobrego (xinicial, yinicial, xfinal, yfinal, lienzo)
{
		papel.drawImage(lobrego.imagen, x, y);
}

function dibujarTeclado(evento)
	{
		var movimiento = 10;
		switch(evento.keyCode)
			{	
				case teclas.UP:
					dibujarLobrego(x, y, x, y - movimiento, papel);
					y = y - movimiento;
				break;
				case teclas.DOWN:
					dibujarLobrego(x, y, x, y + movimiento, papel);
					y = y + movimiento;
				break;
				case teclas.LEFT:
					dibujarLobrego(x, y, x - movimiento, y, papel);
					x = x - movimiento;
				break;
				case teclas.RIGHT:
					dibujarLobrego(x, y, x + movimiento, y, papel);
					x = x + movimiento;
				break;
				default:
					console.log("alguna otra tecla");
				break;
			
			}
	}	