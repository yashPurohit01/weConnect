import React from 'react'
import Button from '../../../../Components/shared/Button/Button'

function EmailAddress({NextStep}) {
    return (
        <div>
            EmailAdress
            <Button text="Go" logo="arrow_forward" onClick={NextStep}/>
        </div>
    )
}

export default EmailAddress
