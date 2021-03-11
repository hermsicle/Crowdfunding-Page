import React, {useContext} from 'react'
import './about.css'
import {aboutText} from './aboutText'
import SelectReward from './SelectReward'
import {Context} from '../Context'

function About(props) {

    let {menu} = useContext(Context)
    //Remove first item of menu , not needed in this section
    // menu = menu.slice(1)
    const rewardsList = menu.map( (item, index) => (
        <SelectReward key={index} data={item}/>
    ))

    return (
        <div className='about-section'>
            <h2>About this project</h2>
            <div className='about-top-section'>
            {
                aboutText.map( (message, index) => (
                    <p 
                        key={index} 
                        className={'message'}
                    > 
                        {message.message} 
                    </p>
                ))
            }
            </div>

            <div className='rewards-container'>
                {rewardsList}
            </div>
            

        </div>
    )
}

export default About
