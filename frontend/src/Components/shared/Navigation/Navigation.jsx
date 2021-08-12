import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';


function Navigation() {
    const brandstyle = {
        color: '#E4E3F0',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'48px',
        fontFamliy:"'Snippet', sans-serif",
        letterSpacing: '-0.02em',
        lineHeight: '25px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        p:{
            height:'8px',
            width:'210px',
            fontSize:'small'
        }
    }
    return (
        <nav className={`${styles.navbar} container`} >
          
                <Link style={brandstyle} to='/'>
                    <p /*  style= {styles.logo}  */>weConnect</p>
                    <p style ={brandstyle.p}>connect to your love onces </p>
                </Link>


        </nav>
    )
}

export default Navigation
