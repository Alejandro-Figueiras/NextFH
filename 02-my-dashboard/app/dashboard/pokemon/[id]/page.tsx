import { Pokemon } from "@/pokemons/interfaces/pokemon"

interface Props {
  params: Promise<{
    id: string
  }>
}

const getPokemon = async(id: string) => {
  const pokemon:Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
  }).then(r => r.json())

  console.log(pokemon)
  return pokemon
}


export default async function PokemonPage({ params }: Props) {
  const paramsProps = await params;
  const pokemon = await getPokemon(paramsProps.id)
  console.log(paramsProps)

  return (
    <div>
      {JSON.stringify(pokemon)}
    </div>
  );
}