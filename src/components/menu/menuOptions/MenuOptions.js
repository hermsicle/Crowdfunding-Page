import React, {useState, useContext} from 'react'
import '../menu.css'
import Alert from '../../alert/Alert'
import {Context} from '../../Context'

function MenuOptions(props) {
    const {toggleMenu} = useContext(Context)
    const {toggleModal} = useContext(Context)


    const [input, setInput] = useState()
    const [checkInput, setCheckInput] = useState(false)

    //Handles the user input select, sets Input state to value
    function handleChange(e) {
        let inputVal = parseInt(e.target.name)
        setInput(inputVal)
    }

    // console.log(props.data.active)
    // console.log(props.data)

    function checkInputs(e) {
        console.log(e.target.checked)
        if(e.target.checked && !checkInput) {
            setCheckInput(true)
        } else if (e.target.checked && checkInput) {
            setCheckInput(false)
        }
    }

    //conditionals to check to determine which classes to go for
    const checkMenu = props.data.id === 3 ? 'grayed-option' : 'options-container'
    const checkActive = checkInput ? 'options-container-active' : 'options-container'

    return (
        <>
        <div 
            className= 
                {`${checkMenu} ${checkActive} `}
            >
            <div className='options-header'>
                <input 
                    type='radio' 
                    onClick={checkInputs}
                    checked={checkInput}
                    name={props.data.id}
                    // name='radio'
                    onChange={handleChange}
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
                <span>{props.data.left}</span> 
            </h3>
            
            {
                props.data.id === input && checkInput ?
                <div className='pledge-container'>
                <p>Enter your pledge</p>
                <div className='pledge-inner'>
                    <form 
                        className='pledge-amount'
                    >
                    <i class="fas fa-dollar-sign"></i>
                        <input
                            type='text'
                            min='1'
                        />
                    </form>
                    <button
                        onClick={() => {
                            toggleMenu()
                            toggleModal()
                        }}
                    >
                        Continue
                    </button>
                </div>
                </div> 
                : ''
            }

        </div>




        </>
    )
}

export default MenuOptions
