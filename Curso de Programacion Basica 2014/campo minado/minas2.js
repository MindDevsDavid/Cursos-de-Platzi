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

var num1 = aleatorio(0,1);
var num2 = aleatorio(0,1);
var num3 = aleatorio(0,1);
var num4 = aleatorio(0,1);
var num5 = aleatorio(0,1);
var num6 = aleatorio(0,1);
var num7 = aleatorio(0,1);
var num8 = aleatorio(0,1);
var num9 = aleatorio(0,1);
var x, y;
var campo = [ [ num1 , num2 , num3 ],
              [ num4 , num5 , num6 ],
              [ num7 , num8 , num9 ] ];
var textos = ["Cesped","Bomba"];

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
