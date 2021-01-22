function Pokemon( nombrePoke, vidaPoke, ataqPoke, tipoPoke, debilPoke ){

  var estructuraPokemon =
  {
    nombre: nombrePoke,
    vida: vidaPoke,
    ataque: ataqPoke,
    datos: {
      tipo: tipoPoke,
      debilidad: debilPoke
    }
  };
  return estructuraPokemon;
}

var pikachu = Pokemon( "Pikachu", 100, 55, "Electrico", "Tierra");
var bulbasaur = Pokemon("Bulbasaur", 90, 50, "Planta / Venenoso", "Fuego / Psiquico / Volador / Hielo");

document.write(pikachu.nombre);
