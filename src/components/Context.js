import React, {useState, useEffect} from 'react'
import { aboutText } from './about/aboutText'
import {menuData} from './menu/menuData'

const Context = React.createContext()

function ContextProvider(props) {

    const [menu, setMenu] = useState([])
    const [aboutMenu, setAboutMenu] = useState([])
    const [menuOpen, setMenuOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [isPledgeActive, setPledgeActive] = useState(false)
    
    function selectReward(id) {
        // let menuSliced = menu.slice(1)
        let mapAboutMenu = menu.map(list => {
            if(list.id === id) {
                return {
                    ...list, 
                    active: !list.active
                }
            }
            return list
        })
        setAboutMenu(mapAboutMenu)
        setPledgeActive(!isPledgeActive)
    }

    // console.log(aboutMenu)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    function toggleModal() {
        setModalOpen(!modalOpen)
    }


    useEffect( () => {
        setMenu(menuData)
    }, [])

    return (
        <Context.Provider 
            value={{menu , selectReward, aboutMenu, toggleMenu , menuOpen, isPledgeActive, toggleModal, modalOpen}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider , Context}