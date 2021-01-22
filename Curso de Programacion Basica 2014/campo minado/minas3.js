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

//var num1 = aleatorio(0,1);
//var num2 = aleatorio(0,1);
//var num3 = aleatorio(0,1);
//var num4 = aleatorio(0,1);
//var num5 = aleatorio(0,1);
//var num6 = aleatorio(0,1);
//var num7 = aleatorio(0,1);
//var num8 = aleatorio(0,1);
//var num9 = aleatorio(0,1);
var x, y;
//var campo = [ [ 1 , 2 , 3 ],
//              [ 4 , 5 , 6 ],
//              [ 7 , 8 , 9 ] ];
var campo = [];
var rows = 3;
var cols = 3;
var i = 0;
//campo[ 0 ] = [];
//campo[ 0 ][ i ];
//campo[ 0 ][ 1 ];
//campo[ 0 ][ 2 ];
//campo[ 1 ] = [];
//campo[ 1 ][ 0 ] = 4;
//campo[ 1 ][ 1 ] = 5;
//campo[ 1 ][ 2 ] = 6;
//campo[ 2 ] = [];
//campo[ 2 ][ 0 ] = 7;
//campo[ 2 ][ 1 ] = 8;
//campo[ 2 ][ 2 ] = 9;

var textos = ["Cesped","Bomba"];

for(i = 0; i<rows; i++){
  campo[ i ] = [];
  /*campo[ i ][ 0 ] = aleatorio(0,1);
  campo[ i ][ 1 ] = aleatorio(0,1);
  campo[ i ][ 2 ] = aleatorio(0,1);*/

  for(j = 0; j < cols; j++){
    campo[ i ][ j ] = aleatorio(0,1);
  }
}

alert ("Estas en un campo minado.\nElige una posicion entre el 0 y el 2 para X y para Y");
x = prompt ("Posicion en X? (entre 0 y 2)");
y = prompt ("Posicion en Y? (entre 0 y 2)");

if (x < 3 && y < 3 ){

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
