import React from 'react'
import Button from '../../shared/Button/Button'

function UserName({NextStep}) {
    return (
        <div>
            UserName
            <Button onClick={NextStep}/>
        </div>
    )
}

export default UserName
