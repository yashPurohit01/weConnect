import React from 'react'

import styles from './Register.module.css';
import { Link } from 'react-router-dom'
import Button from '../../../Components/shared/Button/Button';
import Card from '../../../Components/shared/Card/Card';

function Register({ NextStep }) {
    const signupLink = {
        textDecoration: "none",
        color: "rgba(54, 54, 255, 0.864)",
        fontSize: "14px",
        marginLeft: "5px"
    }
    return (
        <>
            <Card title2="weConnect">
                <div className={styles.registerButton}>
                    <Button onClick={NextStep} text="Register yourself" />
                </div>

                <div className={styles.join}>
                    <span className={styles.span}>join through link ? </span>
                    <Button text="join" />
                </div>
                <div className={styles.signinLink}>
                    <span>Already have account ?</span>
                    <Link style={signupLink} to='#'>Sign in</Link>
                </div>
            </Card>


        </>
    )
}

export default Register