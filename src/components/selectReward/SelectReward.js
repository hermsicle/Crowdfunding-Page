import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import MenuOptions2 from '../menu/menuOptions/MenuOptions2'

function SelectReward(props) {
    const {aboutMenu} = useContext(Context)

    const mapRewards = aboutMenu.map( (item, i) => (
        <MenuOptions2 data={item} index={i} />
    ))
    return (
        <div>
            {mapRewards}
        </div>
    )
}

export default SelectReward
