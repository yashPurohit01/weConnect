import React from 'react'
import styles from './Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../Components/shared/Card/Card';
import Button from '../../Components/shared/Button/Button';

function Home() {
    const siginLink = {
        textDecoration: "none",
        color: "rgba(54, 54, 255, 0.864)",
        fontSize: "12px"
    }
    const history = useHistory();
    const selectRegister = () => {
        history.push('/auth');
    }
    return (
        <div className={styles.cardWrapper}>
            <Card title1="Welcome to" title2=" weConnect ">

                <div className={styles.para} >
                    <p>
                        weConnect is created with ease for people.
                        They can hagout with there familes , friends
                        and others easily.weConnected is very much
                        secured  with peer-to-peer connection
                    </p>
                </div>

                <Button onClick={selectRegister} text="Go" logo="arrow_forward" />

                <div className={styles.signinWrapper}>
                    <span className={styles.span}>
                        Have A invite text ?
                    </span>
                    <Link to="#" style={siginLink}>Sign in</Link>
                </div>
            </Card>




        </div>
    )
}

export default Home
