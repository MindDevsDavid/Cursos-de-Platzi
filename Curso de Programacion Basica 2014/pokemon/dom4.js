function Pokemon (n, v, a, t, g)
{
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.tipo = t
    this.grito = g;
    this.gritar = function ()
    {
        alert(this.grito);
    }

    if (noPokemon == 1){
        this.imagen = "pikachu.jpg"
    } else if (noPokemon == 2){
        this.imagen = "bulbasaur.png"
    } else if (noPokemon == 3){
        this.imagen = "charmander.png"
    }
}


  function inicio1 ()
{

    var pikachu = new Pokemon("Pikachu", 100, 55, "Electrico", "Pika!!");
    nombrePokemon.innerText = pikachu.nombre;
    imagenPokemon.src = pikachu.imagen;

}

  function inicio2 ()
{

    var bulbasaur = new Pokemon ("Bulbasaur", 90, 50, "Planta / Veneno", "Bulbasaur!!");
    nombrePokemon.innerText = bulbasaur.nombre;
    imagenPokemon.src = bulbasaur.imagen;

}

  function inicio3 ()
{

    var charmander = new Pokemon("Charmander", 150, 60, "Fuego", "Charmander!!");
    nombrePokemon.innerText = charmander.nombre;
    imagenPokemon.src = charmander.imagen;

}


  function datos1 ()
{

var pikachu = new Pokemon("Pikachu", 100, 55, "Electrico", "Pika!!");

datosPokemon.innerText =  pikachu.nombre + " es de tipo " + pikachu.tipo  + "!!" +
                    "\n" +pikachu.nombre + " tiene una vida de " + pikachu.vida + "!!" +
                    "\n" +pikachu.nombre + " tiene un ataque de " + pikachu.ataque + "!!" +
                    "\nEl grito de " + pikachu.nombre + " es " + pikachu.grito ;

}

function datos2 ()
{

var bulbasaur = new Pokemon("Bulbasaur", 90, 50, "Planta / Veneno", "Saur!!");

datosPokemon.innerText =  bulbasaur.nombre + " es de tipo " + bulbasaur.tipo  + "!!" +
                  "\n" +bulbasaur.nombre + " tiene una vida de " + bulbasaur.vida + "!!" +
                  "\n" +bulbasaur.nombre + " tiene un ataque de " + bulbasaur.ataque + "!!" +
                  "\nEl grito de " + bulbasaur.nombre + " es " + bulbasaur.grito ;

}

function datos3 ()
{

var charmander = new Pokemon("Charmander", 150, 60, "Fuego", "Charmander!!");

datosPokemon.innerText =  charmander.nombre + " es de tipo " + charmander.tipo  + "!!" +
                  "\n" +charmander.nombre + " tiene una vida de " + charmander.vida + "!!" +
                  "\n" +charmander.nombre + " tiene un ataque de " + charmander.ataque + "!!" +
                  "\nEl grito de " + charmander.nombre + " es " + charmander.grito ;

}

function pikapikachu ()
{

  inicio1();
  datos1();

}

function bulbabulbasaur ()
{

  inicio2();
  datos2();

}

function charcharmander ()
{

  inicio3();
  datos3();

}
