import React, {useContext} from 'react'
import MenuOptions from './menuOptions/MenuOptions'
import './menu.css'
import {Context} from '../Context'

function Menu(props) {

    const {menu} = useContext(Context)
    const {toggleMenu} = useContext(Context)
    const {aboutMenu} = useContext(Context)

    const mapMenu = menu.map( (item) => (
        <MenuOptions data={item} check={aboutMenu} />
    ))

    

    return (
        <div className='menu-outer'>
            <div className='menu-inner'>
                <div className='menu-header'>
                    <h2>Back this project</h2>
                    <i 
                        onClick={ () => toggleMenu() }
                        class="fas fa-times"></i>
                </div>
                <p>
                    Want to support us in bringing Mastercraft Bamboo Monitor Rise out 
                    in the world? 
                </p>

                {mapMenu}
            </div>
        </div>
    )
}

export default Menu
