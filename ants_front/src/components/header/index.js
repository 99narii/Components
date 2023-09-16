import React, { useState, useEffect } from 'react';
import './style.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 600);

    const toggleMenu = () => {
        if (window.innerWidth <= 600) { // 화면 너비가 600px 이하일 때만 메뉴를 토글합니다.
            setIsMenuOpen(!isMenuOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) { // 화면 너비가 600px 초과일 때
                setIsMenuOpen(true); // 메뉴 보임
            } else { 
                setIsMenuOpen(false); // 그렇지 않으면 메뉴 숨김
            }
        };

        window.addEventListener('resize', handleResize);

        return () => { 
            window.removeEventListener('resize', handleResize);
        };
    }, []);

   return (
       <div className='header'>
           <header className='headerObj'>
               <h1 className='logo'>LOGO</h1>
               {(window.innerWidth <= 600 || !isMenuOpen) && (
                   <button onClick={toggleMenu} className="toggle-button">Toggle</button>
               )}
               {(window.innerWidth > 600 || isMenuOpen) && (
                   <nav>
                       <ul className={`nav-links ${isMenuOpen ? '' : 'hidden'}`}>
                           {/* hidden 클래스를 추가하여 display 속성을 제어합니다. */}
                           <li><a href='/'>Home</a></li>
                           <li><a href='/about'>About</a></li>
                           <li><a href='/contact'>Contact</a></li>
                       </ul>
                   </nav>  
               )}
           </header>
       </div>
   );
}