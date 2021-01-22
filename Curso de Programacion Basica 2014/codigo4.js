var peso;
var pesoEnMarte;

alert("¿Quieres saber tu peso en Marte?");
peso = prompt ("¿Cual es tu peso en Kg?", "70");
peso = parseInt(peso);

pesoEnMarte = (peso/9.81)*3.711;
pesoEnMarte = parseInt(pesoEnMarte);

alert("Tu peso en Marte es = " + pesoEnMarte + "!!!");
