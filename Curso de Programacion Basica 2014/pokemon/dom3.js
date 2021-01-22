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
}

function inicio ()
{

  var pikachu = new Pokemon("Pikachu", 100, 55, "Electrico", "Pika!!");
  nombrePokemon.textContent = pikachu.nombre;

}
