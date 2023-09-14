import React from 'react';
import './style.css';

function Footer({ company, email }) {
    return (
            <footer className='footer'>
                <div className="footer-links">
                    <p>Company : {company} | E-mail : {email} </p>
                    <p>Copyright &copy; 2023 Company Name</p>
                </div>
            </footer>
    );
}

export default Footer;