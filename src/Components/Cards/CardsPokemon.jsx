import React from 'react'
import img from '../../assets/IMG/Fondo/Fondo-card-Pokemon.jpg'
import useFetch from '../../HOOKS/useFetch'
import useFetchPokemon from '../../HOOKS/useFetchPokemon'

export const CardsPokemon = () => {

    //const { character, loading } = useFetch('https://pokeapi.co/api/v2/pokemon');
    const { pokemonList, loading } = useFetchPokemon();
    console.log(pokemonList)

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                pokemonList.map((pokemon, index) => (
                    <div className="card" key={index}>
                        <div className="card-info">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <h3>{pokemon.name}</h3>
                            <div className="container-type">
                                {pokemon.types.map((type, typeIndex) => (
                                    <div className="tipe" key={typeIndex}>
                                        {type.type.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}
