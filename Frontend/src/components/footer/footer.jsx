import "./footer.css"
//linkedin
import {FaLinkedin} from 'react-icons/fa'
//instagram
import {FaInstagram} from 'react-icons/fa'
//github
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="foooter-container" >
                <div className="social-media-footer">
                    <p>follow me on:</p>
                    <a href="https://www.linkedin.com/in/juan-david-garcia-arce-50169a283" className="footer-btn linkedin">
                        < FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/juanda_garc/" className="footer-btn instagram">
                        < FaInstagram />
                    </a>
                    <a href="https://github.com/Juandagarc" className="footer-btn github">
                        < FaGithub />
                    </a>
                </div>
                <div className="menu-navbar-footer">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/proyects">Proyects</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <br />
            <p>© All rights reserved by Juandagarc.</p>
        </div>
    )
}

export default Footer