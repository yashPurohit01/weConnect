import React from 'react'
import Button from '../../shared/Button/Button'

function UserAvatar({NextStep}) {
    return (
        <div>
            Avatar
            <Button onClick={NextStep}/>
        </div>
    )
}

export default UserAvatar
