import React from 'react'
import '../../CSS/Loaders/LoadingP.scss'

export const LoadingP = () => {
    return (
        <>
            <main className='LoadingP'>
                <div className="loading">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </main>
        </>
    )
}
