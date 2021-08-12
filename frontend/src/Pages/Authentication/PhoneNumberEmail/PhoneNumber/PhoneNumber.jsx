import React from 'react'
import Button from '../../../../Components/shared/Button/Button'
import styles from './PhoneNumber.module.css'

function PhoneNumber() {
    return (
        <div className={styles.phonenumberCard}>
            <div className={styles.heading}>
                <img className={styles.img} src="images/number.png" alt="phone"/>
            Enter your Phone Number
            </div>
         
            <div >
                <input className={styles.inputBox} type="text" placeholder="+91 - 1234567890" />
            </div>

            <Button text="Go" logo="arrow_forward" />
        </div>
    )
}

export default PhoneNumber
