import React , {useState , useContext} from 'react'
import './riser.css'
import Bookmark from './Bookmark'
import LogoMobile from './LogoMobile'
import Menu from '../menu/Menu'
import {Context} from '../Context'


function Riser() {
    const {toggleMenu} = useContext(Context)
    const {menuOpen} = useContext(Context)

    const [isBookMarked, setBookMarked] = useState(false)

    function toggleBookmark() {
        setBookMarked(!isBookMarked)
    }

    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <>
        {menuOpen && <Menu/>}
        <div className='riser-outer'>
            <div className='riser'>
                <LogoMobile/>
                <h2>Mastercraft Bamboo Monitor Riser</h2>
                <p>
                    A beautifully handcrafted monitor stand to reduce neck and eye strain.
                </p>
                <div className='riser-container-inner'> 
                    <button
                        onClick={ () => {
                                toggleMenu()
                                scrollToTop()
                            }
                        }
                    >
                        Back this project
                    </button>
                
                    {
                        isBookMarked ? 
                        <div className='bookmark-container-2'>
                            <i class="fas fa-bookmark bm2" onClick={toggleBookmark}></i>
                            <p>Bookmarked</p>
                        </div>

                        : 
                        
                        <div className='bookmark-container'>
                        <Bookmark onClick={toggleBookmark} />
                        <p>Bookmark</p>
                    </div>

                    }
                </div>
            </div>
        </div>

        </>
    )
}

export default Riser
