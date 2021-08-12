import React, { useState } from 'react';
import Card from '../../../Components/shared/Card/Card';
import styles from './EmailPhonenumber.module.css';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import EmailAddress from './Email/EmailAddress'

function EmailPhonenumber({ NextStep }) {
    const selects = {
        phone: PhoneNumber,
        email: EmailAddress,
    }

 
    const [select, setSelect] = useState('phone');

    const Selected = selects[select];

    return (
        < >
            <div className={styles.toogler}>
                <button className={`${styles.button} ${select ==='phone'?styles.activate: ''}`} onClick={setSelect('phone')}> <img src="images/phone.png" alt="phone" /></button>
                <button className={`${styles.button} ${select ==='email' ?styles.activate: ''}`} onClick={setSelect('email')}> <img src="images/email.png" alt="email" /></button>
            </div>
            <Card  title2="weConnect">
                <Selected NextStep={NextStep} />
            </Card>



        </>
    )
}

export default EmailPhonenumber
