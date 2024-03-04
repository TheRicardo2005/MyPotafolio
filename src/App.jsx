import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './PAGES/Home'
import { RickAndMorty } from './PAGES/RickAndMorty'
import { Apis } from './PAGES/Apis'
import { Pokemon } from './PAGES/Pokemon'


function App() {

    return (
        <>
            <Router>
                <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Rick-and-Morty' element={<RickAndMorty />} />
                        <Route path='/Pokemon' element={<Pokemon/>}/>
                        <Route path='/Apis' element={<Apis />} />
                    </Routes>
            </Router>
        </>
    )
}

export default App
