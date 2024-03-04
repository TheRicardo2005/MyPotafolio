import React from 'react'
import '../../CSS/Main/MainApis.css'
import { NavApis } from '../NavBars/NavApis'
import { CardsApi } from '../Cards/CardsApi'

export const MainApis = () => {
    return (
        <>
            <section className='Background-apis'>
                <NavApis></NavApis>
                <div className="conatiner-cards-api">
                    <main>
                        <CardsApi/>
                    </main>
                </div>
            </section>
            
        </>
    )
}
