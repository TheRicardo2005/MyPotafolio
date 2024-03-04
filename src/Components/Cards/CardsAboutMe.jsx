import React from 'react'
import '../../CSS/Cards/CardsAboutMe.css'
import contact from '../../assets/IMG/icons/comunicar.png'
import games from '../../assets/IMG/icons/consola.png'
import learn from '../../assets/IMG/icons/lluvia-de-ideas.png'
import cine from '../../assets/IMG/icons/palomitas-de-maiz.png'
import person from '../../assets/IMG/icons/programador.png'
import coffe from '../../assets/IMG/icons/taza-de-cafe.png'


export const CardsAboutMe = () => {
  return (
    <>
        <main className='abotCards'>
            <div className="card-about">
                <div className="card-img-about">
                    <img src={person} alt="icon" />
                </div>
                <div className="title-card">
                    <h5>I'm Developer</h5>
                </div>
            </div>

            <div className="card-about">
                <div className="card-img-about">
                    <img src={coffe} alt="coffe" />
                </div>
                <div className="title-card">
                    <h5>Coffee x Me = 100%</h5>
                </div>
            </div>

            <div className="card-about">
                <div className="card-img-about">
                    <img src={cine} alt="cine" />
                </div>
                <div className="title-card">
                    <h5>I Like Movies</h5>
                </div>
            </div>

            <div className="card-about">
                <div className="card-img-about">
                    <img src={games} alt="cine" />
                </div>
                <div className="title-card">
                    <h5>I Like Video Games</h5>
                </div>
            </div>

            <div className="card-about">
                <div className="card-img-about">
                    <img src={learn} alt="cine" />
                </div>
                <div className="title-card">
                    <h5>Continuous Learning</h5>
                </div>
            </div>

            <div className="card-about">
                <div className="card-img-about">
                    <img src={contact} alt="cine" />
                </div>
                <div className="title-card">
                    <h5>rpolanirubiano@gmail.com</h5>
                </div>
            </div>


        </main>
    </>
  )
}
