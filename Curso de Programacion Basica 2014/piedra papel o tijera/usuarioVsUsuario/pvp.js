 var opcionJugar = 0

  function juego(){

    var nombreUsuario1;
    var nombreUsuario2;
    var piedra = 0;
    var papel  = 1;
    var tijera = 2;
    var opcionUsuario1;
    var opcionUsuario2;
    var decisionFinal;

  alert ("Bienvenidos al juego de Piedra, Papel o Tijera,\n el cual definira completamente sus vidas");

  alert ("Primero hay que identificar a los 2 participantes");

  nombreUsuario1 = prompt ("Cual es tu nombre, usuario 1??: ");

  nombreUsuario2 = prompt ("Cual es tu nombre, usuario 2??: ");

  alert ("Ahora se enfrentara " + nombreUsuario1 + " contra " + nombreUsuario2 + " !!!");

  alert ("Mientras " + nombreUsuario1 + " elige su opcion " + nombreUsuario2 + " no podra mirar la pantalla");

  alert ("Recuerden que: \n 0 = piedra \n 1 = papel \n 2 = tijera");

  opcionUsuario1 = prompt ("Cual es tu opcion, " + nombreUsuario1 + "?? \n 0 = piedra \n 1 = papel \n 2 = tijera", 0);

  opcionUsuario2 = prompt ("Listo " + nombreUsuario1 + "!! ,cual es tu opcion, " + nombreUsuario2 + "?? \n 0 = piedra \n 1 = papel \n 2 = tijera", 0);

  alert ("Ya tenemos los resultados!!");


    if (opcionUsuario1 == opcionUsuario2){

alert("Empate!!");

    } else if (opcionUsuario1 == 0 && opcionUsuario2 == 1){

alert ("Gana el papel de " + nombreUsuario2 + " contra la piedra de " + nombreUsuario1 + "!!");

    } else if (opcionUsuario1 == 0 && opcionUsuario2 == 2){

alert ("Gana la piedra de " + nombreUsuario1 + " contra la tijera de " + nombreUsuario2 + "!!");

    } else if (opcionUsuario1 == 1 && opcionUsuario2 == 0){

alert ("Gana el papel de " + nombreUsuario1 + " contra la piedra de " + nombreUsuario2 + "!!");

    } else if (opcionUsuario1 == 1 && opcionUsuario2 == 2){

alert ("Gana la tijera de " + nombreUsuario2 + " contra el papel de " + nombreUsuario1 + "!!");

    } else if (opcionUsuario1 == 2 && opcionUsuario2 == 0){

alert ("Gana la piedra de " + nombreUsuario2 + " contra la tijera de " + nombreUsuario1 + "!!");

    } else if (opcionUsuario1 == 2 && opcionUsuario2 == 1){

alert ("Gana la tijera de " + nombreUsuario1 + " contra el papel de " + nombreUsuario2 + "!!");
    }

}

do {
    juego();
    opcionJugar = prompt ("Quieres volver jugar Piedra, Papel o Tijera con un amigo??\n 0 = si \n 1 = no",0);
}
while(opcionJugar == 0);
