import React from 'react'
import Button from '../../../Components/shared/Button/Button'

function Otp({NextStep}) {
    return (
        <div>
            
            <Button text="Go" img="arrow_forward" onClick={NextStep}/>
        </div>
    )
}

export default Otp
