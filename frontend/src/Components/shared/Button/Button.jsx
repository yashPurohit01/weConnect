import React from 'react'
import styles from './Button.module.css'
function Button({ text, logo ,onClick }) {
    return (
        <div>
            <button onClick={onClick} className={styles.button}>
                <span>{text}</span>
                {
                  logo?<img className={styles.img} src={`/images/${logo}.png`} height="16px" width="16px" alt='arrow' />:""
                 } 
                
            </button>
        </div>
    )
}

export default Button
