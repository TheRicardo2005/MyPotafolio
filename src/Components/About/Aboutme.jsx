import React from 'react'
import '../../CSS/About/Aboutme.css'
import { CardsAboutMe } from '../Cards/CardsAboutMe'

export const Aboutme = () => {
  return (
    <>
        <main className='aboutMe'>
            <div className="container-about-img">
                <div className="container-text">
                    <h1>Acerca de mí</h1>
                    <p>¡Hola!, ¿qué tal? Yo soy Ricardo Polania Rubiano, actualmente aprendiz del SENA,
                        donde estoy estudiando un tecnólogo en Análisis y Desarrollo de Software (ADSO).
                        También he realizado cursos complementarios de diseño y desarrollo Front-end con
                        HTML, CSS y JavaScript, desarrollo web con REACT.JS, desarrollo web con PHP y solución
                        de problemas mediante la utilización de algoritmos. Me considero una persona 
                        responsable, siempre con ganas de aprender algo nuevo y seguir avanzando como persona
                         y profesionalmente de igual forma.
                    </p>
                </div>
                <div className="container-img-yo">
                    
                </div>
            </div>
            <CardsAboutMe/>
        </main>
    </>
  )
}
