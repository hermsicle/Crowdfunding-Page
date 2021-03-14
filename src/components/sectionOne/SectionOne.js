import React, {useContext} from 'react'
import './sectionOne.css'
import {PledgeContext} from '../PledgeContext'

function SectionOne() {

    const {totalAmountPledged} = useContext(PledgeContext)
    const {totalBackers} = useContext(PledgeContext)

    return (
        <div className='section-one'>
            <div className='one'>
                <h1>${totalAmountPledged}</h1>
                <p>of $100,000 backed</p>
            </div>
            <div className='two'>
                <h1>{totalBackers}</h1>
                <p>total backers</p>
            </div>
            <div className='three'>
                <h1>56</h1>
                <p>days left</p>
            </div>
            <div className='outer'>
                <div className='inner'></div>
            </div>
        </div>
    )
}

export default SectionOne
