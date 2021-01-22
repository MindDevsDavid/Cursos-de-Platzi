alert ("Estas en un campo minado personalizable.\nElige un valor para X y para Y");
rows = prompt("Cantidad de cuadros en X??");
cols = prompt("Cantidad de cuadros en Y??");
x = prompt ("Tu posicion en X? (entre 0 y" + rows +")");
y = prompt ("Tu posicion en Y? (entre 0 y" + cols +")");

function aleatorio (minimo, maximo){
  var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
  return numero;
}

function explosion (){
  alert("BOOM!!!");
  document.write("<h1>BOOM!! Elegiste un area minada :(</h1>");
}

function ganar(){
  document.write("Eres un ganador :)");
}

var x, y;
var campo = [];
var rows;
var cols;
var i = 0;
var textos = ["Cesped","Bomba"];


for(i = 0; i<rows; i++){
  campo[ i ] = [];

for(j = 0; j < cols; j++){
    campo[ i ][ j ] = aleatorio(0,1);
  }
}

if (x < rows && y < cols ){

    var posicion = campo[x][y];
    document.write("Elegiste " + textos[posicion] + "<br />");

    if (campo[x][y] == 0){
      ganar();
    } else {
      explosion();
    }

} else {

    document.write("Te saliste del campo!!");
    explosion();

}
