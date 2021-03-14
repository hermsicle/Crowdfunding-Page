import React, {useState} from 'react'

const PledgeContext = React.createContext()

function PledgeContextProvider(props) {

    const [totalAmountPledged, setTotalAmountPledged] = useState('89914')
    const [totalBackers, setTotalBackers] = useState('5007')

    const [userPledgeAmount, setUserPledgeAmount] = useState('')

    const [bambooStandsLeft, setBambooStandsLeft] = useState('101')
    const [blackEditionsLeft, setBlackEditionsLeft] = useState('64')


    function handleChangeInput(e) {
        setUserPledgeAmount(e.target.value)
    }

    function getTotalAmountPledged() {
        setTotalAmountPledged(prevAmount => parseInt(prevAmount) + parseInt(userPledgeAmount))
    }

    function getTotalBackers() {
        setTotalBackers(prevAmount => parseInt(prevAmount) + parseInt(1))
    }

    function updateBambooStands(id) {
        if(id === 1) {
            setBambooStandsLeft(prevAmount => parseInt(prevAmount) - parseInt(1))
        }
    }

    function updateBlackEditions(id) {
        if( id === 2) {
            setBlackEditionsLeft(prevAmount => parseInt(prevAmount) - parseInt(1) )
        }
    }

    return (
        <PledgeContext.Provider 
            value=
                {{
                    totalAmountPledged, totalBackers,
                    userPledgeAmount, handleChangeInput,
                    getTotalAmountPledged, getTotalBackers,
                    bambooStandsLeft, blackEditionsLeft,
                    updateBambooStands, updateBlackEditions
                }}
        >
            {props.children}
        </PledgeContext.Provider>
    )
}

export {PledgeContextProvider, PledgeContext}