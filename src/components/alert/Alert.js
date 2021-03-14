import React, {useContext} from 'react'
import './alert.css'
import {Context} from '../Context'

function Alert() {

    const {toggleModal} = useContext(Context)

    return (
        <div className='alert-outer'>
            <div className='alert-inner'>
            <svg className='check-svg' width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
                <h1>Thanks for your support!</h1>
                <p className='thank-you-msg'>
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo 
                    Monitor Riser worldwide. You will get an email once our campaign is completed.
                </p>
                <button 
                    onClick={() => {
                        toggleModal()
                    }}
                >
                    Got it!
                </button>
            </div>
        </div>
    )
}

export default Alert
