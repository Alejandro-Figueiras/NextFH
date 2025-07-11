import PokemonGrid from "@/pokemons/components/PokemonGrid"
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response"
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon"

export const metadata = {
	title: 'Lista de Pokémon',
	description: 'Lista de todos los pokemons de la primera generación'
}

const getPokemons = async (
	limit = 20,
	offset = 0
): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	).then((res) => res.json())

	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split("/").at(-2)!,
		name: pokemon.name,
	}))

	return pokemons
}

export default async function PokemonsPage() {
	const pokemons = await getPokemons(151)

	return (
		<div className='flex flex-col'>
      <h1 className="text-center text-5xl my-8">Listado de Pokémons <small>estático</small></h1>
			<PokemonGrid pokemons={pokemons} />
		</div>
	)
}
