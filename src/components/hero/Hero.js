import React from 'react'
import Header from '../header/Header'
import './hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <Header/>
                <div className='hero'>
                    <div className='hero-overlay'></div>
                </div>
        </div>

    )
}

export default Hero
