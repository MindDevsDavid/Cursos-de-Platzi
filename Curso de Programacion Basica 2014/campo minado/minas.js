function explosion (){
  alert("BOOM!!!");
  document.write("<h1>BOOM!! Elegiste un area minada :(</h1>");
}

function ganar(){
  document.write("Eres un ganador :)");
}

var x, y;
var campo = [ [ 1 , 0 , 0 ],
              [ 0 , 1 , 0 ],
              [ 1 , 1 , 1 ] ];
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
