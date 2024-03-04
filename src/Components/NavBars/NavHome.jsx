import React from 'react'
import '../../CSS/NavBars/NavHome.css'
import yo from '../../assets/IMG/yo.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import toggle from '../../assets/IMG/toggler.png'
import close from '../../assets/IMG/cerrar.png'
import useShowToggle from '../../HOOKS/useShowToggle'


export const NavHome = () => {
    const { isNavOpen, toggleNav } = useShowToggle()


    return (
        <>
            <nav className={`navHome ${isNavOpen ? 'open' : ''}`}>
                <div className="container-nav-home">
                    <div className="img-name">
                        <img src={yo} alt="Ricardo" />
                        <h2>Ricardo</h2>
                    </div>
                    <div className={`options ${isNavOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Apis">APIS</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="toggler" onClick={toggleNav}>
                        <img src={toggle} alt="toggler" />
                    </div>
                </div>
                <div className={`options-movil ${isNavOpen ? 'open' : ''}`}>
                    <button className={`close ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
                        <img src={close} alt="close" /> 
                    </button>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
