import React from "react";
import classes from './Header.module.css';

const Header = props => {
    return <header className={classes.header}>
        <h1>REACT</h1>
        <img className={classes.image} src='https://cdn-media-1.freecodecamp.org/images/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg' alt='react-logo'/>
        <h1>NOTES</h1>
    </header>
}

export default Header;