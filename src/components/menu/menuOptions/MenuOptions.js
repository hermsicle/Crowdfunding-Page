import React, {useState, useContext} from 'react'
import '../menu.css'
import {Context} from '../../Context'
import {PledgeContext} from '../../PledgeContext'

function MenuOptions(props) {
    const {toggleMenu} = useContext(Context)
    const {toggleModal} = useContext(Context)

    const {handleChangeInput} = useContext(PledgeContext)
    const {getTotalAmountPledged} = useContext(PledgeContext)
    const {getTotalBackers} = useContext(PledgeContext)
    const {userPledgeAmount} = useContext(PledgeContext)
    const {bambooStandsLeft} = useContext(PledgeContext)
    const {blackEditionsLeft} = useContext(PledgeContext)
    const {updateBambooStands} = useContext(PledgeContext)
    const {updateBlackEditions} = useContext(PledgeContext)

    const [pledge, setPledge] = useState({id: props.data.id, checked: false})
    const [radio, setRadio] = useState(false)


    function handleChange(e) {
        const {name, value} = e.target
        setPledge({id: parseInt(value), checked:true})
    }

    function unCheckRadio(e) {
        if (e.target.checked && !radio) {
            setRadio(true)
        } else if (e.target.checked && radio) {
            setRadio(false)
        }
    }


    //conditionals to check to determine which classes to go for
    const checkMenu = props.data.id === 3 ? 'grayed-option' : 'options-container'
    // const checkActive = checkInput ? 'options-container-active' : 'options-container'
    // const checkActive = 'options-container'
    const checkActive = pledge.id === props.data.id && pledge.checked === true && radio
                        ? 'options-container-active' : 'options-container'
    return (
        <>
        <div 
            className= 
                {`${checkMenu} ${checkActive} `}
            >
            <div className='options-header'>
                <input 
                    type='radio' 
                    checked={radio}
                    onClick={unCheckRadio}
                    name={props.data.id}
                    onChange={handleChange}
                    value={props.data.id}
                    disabled={props.data.disabled ? true : false}
                    style={{
                        cursor: props.data.disabled ? 'not-allowed' : 'pointer'
                    }}
                /> 
                <div className='header_'>
                    <h3 className='menu-head'>{props.data.header}</h3>
                    <h3 className= 'menu-subheader'>
                        {props.data.subheader}
                    </h3>
                </div>
            </div>

            <p className='menu-content'>
                {props.data.content}
            </p>

            <h3 className='menu-stock'>
                {props.data.stock} 
                {props.data.id === 1 ? bambooStandsLeft : ''}
                {props.data.id === 2 ? blackEditionsLeft : ''}
                <span>{props.data.left}</span> 
            </h3>

            {
                props.data.id === pledge.id && pledge.checked === true && radio ? 
                <div key={props.data.id} 
                className='pledge-container active'>
                <p>Enter your pledge</p>
                <div className='pledge-inner'>
                    <form 
                        className='pledge-amount'
                    >
                    <i class="fas fa-dollar-sign"></i>
                        <input
                            type='number'
                            name='amount'
                            min={props.data.minimumPledgeAmount}
                            placeholder={props.data.minimumPledgeAmount}
                            onChange={handleChangeInput}

                        />
                    </form>
                    <button
                        disabled={userPledgeAmount === '' ? true : false}
                        onClick={() => {
                            toggleMenu()
                            toggleModal()
                            getTotalAmountPledged()
                            getTotalBackers()
                            updateBambooStands(props.data.id)
                            updateBlackEditions(props.data.id)
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>  
            : ''
            }

            
            {/* <div key={props.data.id} 
                className='pledge-container active'>
                <p>Enter your pledge</p>
                <div className='pledge-inner'>
                    <form 
                        className='pledge-amount'
                    >
                    <i class="fas fa-dollar-sign"></i>
                        <input
                            type='number'
                            name='amount'
                            min={props.data.minimumPledgeAmount}
                            placeholder={props.data.minimumPledgeAmount}
                            onChange={handleChangeInput}

                        />
                    </form>
                    <button
                        disabled={userPledgeAmount === '' ? true : false}
                        onClick={() => {
                            toggleMenu()
                            toggleModal()
                            getTotalAmountPledged()
                            getTotalBackers()
                            updateBambooStands(props.data.id)
                            updateBlackEditions(props.data.id)
                        }}
                    >
                        Continue
                    </button>
                </div>
            </div>   */}


        </div>
        </>
    )
}

export default MenuOptions
