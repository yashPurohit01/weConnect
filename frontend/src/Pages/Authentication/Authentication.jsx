import React, { useState } from 'react'
import EmailPhonenumber from './PhoneNumberEmail/EmailPhonenumber'
import Register from './Register/Register';
import Otp from './Otp/Otp';
import styles from './Authentication.module.css';


function Authentication() {
    const steps = {
        1: Register,
        2: EmailPhonenumber,
        3: Otp,
    };

    const NextStep = () => {
        setStep(step + 1)
    };

    const [step, setStep] = useState(1);
    const Step = steps[step];
    return (
        <div className={styles.registerCard}>
                    <Step NextStep={NextStep} />



        </div>
    )
}

export default Authentication
