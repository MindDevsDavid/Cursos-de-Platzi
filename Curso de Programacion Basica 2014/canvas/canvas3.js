var dibujo, lienzo, t, b;

function inicio(){

  t = document.getElementById("usuario");
  b = document.getElementById("dibujalo");
  dibujo = document.getElementById("dibujito");
  lienzo = dibujo.getContext("2d");

  b.addEventListener("click", dibujarGrilla);

lienzo.beginPath();
lienzo.strokeStyle = "a5a5a5";
lienzo.arc(150,150,100,(Math.PI * 2),false);
lienzo.closePath();
lienzo.stroke();

}

function dibujarGrilla(l){

  var l = lienzo;
  var rayas = Number(t.value)
  var ancho = 300, alto = 300;
  var anchoLinea = ancho / rayas;
  var limiteX = ancho/anchoLinea;
  var limiteY = alto/anchoLinea;
  var linea;

  l.strokeStyle = "#cb3234";

  for(linea = 0; linea <= limiteX; linea++)
  {
    var punto = linea * anchoLinea;

    l.beginPath();
    l.moveTo(punto, 0);
    l.lineTo(punto, ancho);
    l.closePath();
    l.stroke()
  }
  for(linea = 0; linea <= limiteY; linea++)
  {
    var punto = linea * anchoLinea;

    l.beginPath();
    l.moveTo(0, punto);
    l.lineTo(alto, punto);
    l.closePath();
    l.stroke()
  }
}
