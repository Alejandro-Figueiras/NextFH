import { Pokemon } from "@/pokemons/interfaces/pokemon"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response"

interface Props {
	params: Promise<{
		id: string
	}>
}

//! Solo se va a ejecutar en buildtime
export const generateStaticParams = async () => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=151`
	).then((res) => res.json())

	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split("/").at(-2)!,
		name: pokemon.name,
	}))

	const static151Pokemons = Array.from({ length: 151 }).map((_, i) => `${i + 1}`).concat(...pokemons.map((p) => p.name ))
	return static151Pokemons
		.map((id) => ({ id: `${id}` }))
}

const getPokemon = async (id: string) => {
	const pokemon: Pokemon = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${id}`,
		{
			next: {
				revalidate: 60 * 60 * 30,
			},
		}
	).then((r) => r.json())

	return pokemon
}

export const generateMetadata = async ({ params }: Props) => {
	try {
		const paramsProps = await params
		const { id, name } = await getPokemon(paramsProps.id)

		return {
			title: `#${id}: ${name}`,
			description: `Página del pokémon ${name}`,
		} as Metadata
	} catch (e) {
		console.log(e)
		notFound()
	}
}

export default async function PokemonPage({ params }: Props) {
	const paramsProps = await params
	const pokemon = await getPokemon(paramsProps.id)

	return (
		<div className='flex mt-5 flex-col items-center text-slate-800'>
			<div className='relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3'>
				<div className='mt-2 mb-8 w-full'>
					<h1 className='px-2 text-xl font-bold text-slate-700 capitalize'>
						#{pokemon.id} {pokemon.name}
					</h1>
					<div className='flex flex-col justify-center items-center'>
						<Image
							src={pokemon.sprites.other?.dream_world.front_default ?? ""}
							width={150}
							height={150}
							alt={`Imagen del pokemon ${pokemon.name}`}
							className='mb-5'
						/>

						<div className='flex flex-wrap'>
							{pokemon.moves.map((move) => (
								<p key={move.move.name} className='mr-2 capitalize'>
									{move.move.name}
								</p>
							))}
						</div>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4 px-2 w-full'>
					<div className='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
						<p className='text-sm text-gray-600'>Types</p>
						<div className='text-base font-medium text-navy-700 flex'>
							{pokemon.types.map((type) => (
								<p key={type.slot} className='mr-2 capitalize'>
									{type.type.name}
								</p>
							))}
						</div>
					</div>

					<div className='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
						<p className='text-sm text-gray-600'>Peso</p>
						<span className='text-base font-medium text-navy-700 flex'>
							{pokemon.weight}
						</span>
					</div>

					<div className='flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg'>
						<p className='text-sm text-gray-600'>Regular Sprites</p>
						<div className='flex justify-center'>
							<Image
								src={pokemon.sprites.front_default}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>

							<Image
								src={pokemon.sprites.back_default}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>
						</div>
					</div>

					<div className='flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg'>
						<p className='text-sm text-gray-600'>Shiny Sprites</p>
						<div className='flex justify-center'>
							<Image
								src={pokemon.sprites.front_shiny}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>

							<Image
								src={pokemon.sprites.back_shiny}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
