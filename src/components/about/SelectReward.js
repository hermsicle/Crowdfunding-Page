import React, {useContext} from 'react'
import './selectReward.css'

import {Context} from '../Context'
import {PledgeContext} from '../PledgeContext'

function SelectReward({data}) {
    const {selectReward} = useContext(Context)
    const {toggleMenu} = useContext(Context)
    const {bambooStandsLeft} = useContext(PledgeContext)
    const {blackEditionsLeft} = useContext(PledgeContext)


    function scrollToTop() {
        window.scrollTo(0, 250)
    }
    
    return (
        <>
        {
        data.id === 0 ? '' : 
        <div className={data.id === 3 ? 'reward-card active' : 'reward-card'}>
            <div className='reward-header-container'>
                <h3 className='reward-header'>{data.header}</h3>
                <h3 className='pledge'>{data.subheader}</h3>
            </div>

            <p>{data.content}</p>

            <div className='inventory-container'>
                <h1>
                    {data.stock}
                    {data.id === 1 ? bambooStandsLeft : ''}
                    {data.id === 2 ? blackEditionsLeft : ''}
                    <span>left</span>
                </h1>
                <button
                    disabled={data.id === 3 ? true : false} 
                    onClick={() => {
                        selectReward(data.id)
                        toggleMenu()
                        scrollToTop()
                    }}
                >{data.button}</button>
            </div>
        </div>
        }

        </>
    )
}

export default SelectReward
