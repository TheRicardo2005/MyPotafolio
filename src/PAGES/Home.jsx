import React from 'react'
import { NavHome } from '../Components/NavBars/NavHome'
import { Aboutme } from '../Components/About/Aboutme'
import { Footer } from '../Components/Footers/Footer'
import { LoadingP } from '../Components/Loaders/LoadingP'
import useLoadingP from '../HOOKS/useLoadingP'

export const Home = () => {

    const { loading, setLoading } = useLoadingP(true, 2000);

    return (
        <>
            {loading ? ( // Renderiza el loader si loadingP es true
                <LoadingP />
            ) : (
                <>
                    <NavHome />
                    <Aboutme />
                    <Footer />
                </>
            )}
        </>
    )
}
