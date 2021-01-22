function Pokemon (n, v, a, g)
{
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.grito = g;
    this.gritar = function ()
    {
        alert(this.grito);
    }
}

function inicio (){

  var pikachu = new Pokemon("Pikachu", 100, 55, "Pika!!");
  pikachu.gritar();
  nombrePokemon.textContent = pikachu.nombre;

}
