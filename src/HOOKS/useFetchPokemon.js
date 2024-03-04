import React, { useState, useEffect } from 'react'

const useFetchPokemon = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon-form');
                const data = await response.json();
                const pokemonData = data.results;
                
                const promises = pokemonData.map(async (pokemon) => {
                    const pokemonInfoResponse = await fetch(pokemon.url);
                    const pokemonInfo = await pokemonInfoResponse.json();
                    return pokemonInfo;
                });

                const pokemonDetails = await Promise.all(promises);
                setPokemonList(pokemonDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchData();
    }, []);
    
  return {
    pokemonList,
    loading
  }
}

export default useFetchPokemon