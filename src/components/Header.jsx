import React from 'react';
import Logo from '../assets/quiz-logo.png'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Quiz Logo" />
            <h2>Quiz App</h2>
        </header>
    )
}

export default Header;