import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';


function Card({ title1, icon ,title2, children }) {
    return (
        <div className={styles.card}>

            <div className={styles.headingWrapper}>
                <h2>{title1}</h2>
                <h1>{title2}</h1>

            </div>

            {children}



        </div>

    )
}

export default Card
