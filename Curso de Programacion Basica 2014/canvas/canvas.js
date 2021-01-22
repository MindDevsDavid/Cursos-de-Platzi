var dibujo, lienzo;

function inicio(){
dibujo = document.getElementById("dibujito");
lienzo = dibujo.getContext("2d");

dibujarGrilla(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = "a5a5a5";
lienzo.arc(150,150,100,(Math.PI * 2),false);
lienzo.closePath();
lienzo.stroke();

}

function dibujarGrilla(l){
  var ancho = 300, alto = 300;
  var anchoLinea = 30;
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
