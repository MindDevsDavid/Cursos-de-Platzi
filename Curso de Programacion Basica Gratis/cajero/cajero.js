class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}
}

function entregarDinero()
{
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	for(var bi of caja)
	{
		if(dinero >  0)
		{
			div = Math.floor(dinero / bi.valor);
			
			if(div > bi.cantidad)
			{
				papeles = bi.cantidad
			}
			else
			{
				papeles = div;
			}
			
			entregado.push (new Billete(bi.valor, papeles) );
			
			dinero = dinero - (bi.valor * papeles);
		}
	}
	
	if (dinero > 0)
	{
		resultado.innerHTML = "cajero pobre :(";
	}
	else
	{
		for(var e of entregado)
		{
			if(e.cantidad > 0)
			{
			resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "</br>";	
			}
		}
	}

}

var caja = [];
var entregado = [];
caja.push(new Billete (100000, 1000) );
caja.push(new Billete (50000, 3000) );
caja.push(new Billete (20000, 2000) );
caja.push(new Billete (10000, 3000) );
caja.push(new Billete (5000, 4000) );
caja.push(new Billete (2000, 4000) );
caja.push(new Billete (1000, 4000) );

var dinero;
var div =  0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);