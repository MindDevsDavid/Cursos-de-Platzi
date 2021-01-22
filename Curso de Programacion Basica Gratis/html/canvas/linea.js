var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");


lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(50, 10);
lienzo.lineTo(250, 2);
lienzo.stroke();
lienzo.closePath();






// document.getElementById es para obtener en javascript a un objeto de html
// d.getContext("2d"); es para decir que nuestro dibujo es en 2d
// lienzo.beginPath(); asi es como javascript le llama a arrancar un trazo 
// lienzo.strokeStyle = "red"; es para elegir el color de la linea
// lienzo.moveTo(100,100); es el punto en donde va a arrancar la linea
// lienzo.lineTo(200,200); es para decir hasta donde va la linea
// lienzo.stroke(); es la funcion que dibuja la linea
// lienzo.closePath(); es para terminar el dibujo






