import React, {useState, useCallback} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../nav/Nav'
import './header.css'
import useEventListener from '../CustomHook'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    function resizeNav() {
        if(window.innerWidth > 800 && menuOpen) {
            setMenuOpen(false)
        }
    }

    useEventListener('resize' , resizeNav)

    return (
        <div className={menuOpen && 'header-outer'}>

            <div className='header'>
                <h1>crowdfund</h1>

                <h1 className='icon'>
                    <i 
                        onClick={toggleMenu}
                        class={menuOpen ? 'fas fa-times' : 'fas fa-bars'}
                    />
                </h1>

                <ul>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Discover</Link>
                    </li>
                    <li>
                        <Link to='/'>Get Started</Link>
                    </li>
                </ul>

                {
                    menuOpen && <Nav/>
                }
            </div>
        </div>

    )
}

export default Header

// Hamburger Icon class
{/* "fas fa-bars" */}

//X btn class
{/* <i class="fas fa-times"></i> */}
