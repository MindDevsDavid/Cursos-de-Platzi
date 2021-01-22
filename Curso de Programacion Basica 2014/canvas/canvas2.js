var dibujo, lienzo, lienzoWidth = 300, lienzoHeight = 300;
var x1 = 30, x3 = 0, y1 = 0, y3 = 30;

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

  var x = 0;
  var x2 = 30;
  var y = 270;
  var y2 = 300;
  var step = 30;

  l.strokeStyle = "#cb3234";

for (let i=0;i<=20;i++){

  l.beginPath();
  l.moveTo(x, y);
  l.lineTo(x2, y2);
  l.closePath();
  l.stroke();

// Relacion Y y X
if(y > 0){
  x = 0;
  y = y - step;
} else {
  y = 0;
  x = x + step;
}
// Relacion entre x2 y y2
if(x2 < lienzoWidth){
  y2 = lienzoHeight;
  x2 = x2 + step;
} else {
x2 = lienzoWidth;
y2 = y2 - step;
    }
  }

  for (let i=0;i<=20;i++){

    l.beginPath();
    l.moveTo(x1, y1);
    l.lineTo(x3, y3);
    l.closePath();
    l.stroke();

  // Relacion Y y X
  if(x1 < 300){
    x1 = x1 + step;
    y1 = 0;
  } else {
    x1 = 300;
    y1 = y1 + step;

  }
  // Relacion entre x2 y y2
  if(y3 < 300){
    y3 = y3 + step;
    x3 = 0;
  } else {
  y3 = 300;
  x3 = x3 + step;

      }
    }
}
