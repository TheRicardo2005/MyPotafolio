import React from 'react'
import '../../CSS/Cards/CardsApi.css'

export const CardsApi = () => {
    return (
        <>
            <a href="/Rick-and-Morty">
                <div className="box" id='rick-y-morty'>

                    <div className="content">
                        <h2>API Rick y Morty</h2>
                    </div>

                </div >
            </a>
            <a href='/Pokemon'>
                <div className="box" id='pokemon'>
                    <div className="content">
                        <h2>API Pokemon</h2>
                    </div>
                </div >
            </a>
        </>
    )
}
