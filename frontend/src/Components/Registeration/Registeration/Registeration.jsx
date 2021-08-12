import React, { useState } from 'react'
import Register from '../Register/Register';
import EmailPhonenumber from '../PhoneNumberEmail/EmailPhonenumber';
import Otp from '../Otp/Otp';
import UserName from '../UserName/UserName';
import UserAvatar from '../UserAvatar/UserAvatar';
import Card from '../../shared/Card/Card';
import styles from './Registeration.module.css';

function Registeration() {
    const steps = {
        1: Register,
        2: EmailPhonenumber,
        3: Otp,
        4: UserName,
        5: UserAvatar
    };
    const NextStep = () =>{
        setStep(step+1);
    }
    const [step, setStep] = useState(1);
    const Step = steps[step];
    return (
        <div className={styles.registerCard}>
            <Card>
                <Step NextStep ={NextStep} />
            </Card>

        </div>
    )
}

export default Registeration

