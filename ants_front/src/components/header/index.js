import React from 'react';
import './style.css';

export default function Header() {

    return (
        <div className='header'>
            <header className='headerObj'>
                <h1 className='logo'>LOGO</h1>
                <nav>
                    <ul className='nav-links'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

