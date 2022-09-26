const baseURL= `https://pokeapi.co/api/v2/pokemon/`;
const idinput=document.getElementById('theID');
const pokemoncontainer=document.getElementById('pokemoncontainer');
//busco el pokemon concatenando la base url con el id que obtengo del input
const pokemones= async (id) => {
    try {
        const response =await fetch (baseURL+id);
        const pokemon = await response.json();
        console.log(pokemon);
        renderpokemon(pokemon);
       
        
    } catch (error) {
        alert (`NO HAY POKEMONES CON ESE ID`);
    }
}

const renderpokemon =pokemon => {
  const imgen=pokemon.sprites.other.home.front_default;
  const tipo=pokemon.types[0].type.name;

const {name,height,weight}=pokemon;
pokemoncontainer.innerHTML= 
`
    <div class='card'>
        <h1> ${name}</h1>
        <img src="${imgen}" />
        <h2> tipo : ${tipo}</h2>
        <h2>Altura:${height/10} metros</h2>
        <h2>Peso: ${weight/10} kilogramos</h2>
    </div> 
    
`

}


poke.addEventListener('submit', e => {
    // Prevenimos por defecto el comportamiento al enviar el form
    e.preventDefault();
   const valor=idinput.value;
   console.log(valor);
   if (valor >0 ){
    pokemones(valor);
   }
   else{
    alert(`ingrese un numero`);
   }
    idinput.value='';

  
    
});