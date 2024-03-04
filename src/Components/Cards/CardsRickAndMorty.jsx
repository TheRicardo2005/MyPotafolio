import React from 'react';
import '../../CSS/Cards/CardsRickAndMorty.css';
import 'font-awesome/css/font-awesome.min.css';
import useFetch from '../../HOOKS/useFetch';
import { LoadingP } from '../Loaders/LoadingP';


export const CardsRickAndMorty = () => {

    const { character, loading } = useFetch('https://rickandmortyapi.com/api/character')

    return (
        <>
            <section className='cards-Rick-y-morty'>
                {loading ? (
                    <LoadingP />
                ) : (
                    character && character.map((personaje) => (
                        <div className="card-Rick" key={personaje.id}>
                            <div className="img-container">
                                <img src={personaje.image} alt={personaje.name} />
                            </div>
                            <div className="content-name">
                                <h3>{personaje.name}</h3>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </>
    );
};

