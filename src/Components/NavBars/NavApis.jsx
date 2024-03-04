import React from 'react'
import '../../CSS/NavBars/NavApis.css'
import { Link } from 'react-router-dom'
import useShowToggle from '../../HOOKS/useShowToggle'

export const NavApis = () => {

    const { toggleNav, isNavOpen } = useShowToggle()

    return (
        <>
            <section className='Header'>
                <div className="container-link">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Apis">Apis</Link></li>
                        <li><Link to="/">HV</Link></li>
                    </ul>
                </div>
            </section>
            <div className="toggle-NavApi" onClick={toggleNav}>
                <h2>Menu</h2>
            </div>
            <div className={`container-movil-menu ${isNavOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>


        </>
    )
}
