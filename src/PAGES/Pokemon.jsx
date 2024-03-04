import React from 'react'
import { CardsPokemon } from '../Components/Cards/CardsPokemon'
import '../CSS/Cards/Pokemon.css'

export const Pokemon = () => {
  return (
    <>
        <div className="container-card-pokemon">
            <CardsPokemon/>
        </div>
    </>
  )
}
