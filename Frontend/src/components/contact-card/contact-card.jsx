import React from 'react';
import './contact-card.css';
import MyPhoto from '../../assets/my-photo.jpeg';
import BMo from '../../assets/bmo.gif';
//linkedin
import {FaLinkedin} from 'react-icons/fa'
//instagram
import {FaInstagram} from 'react-icons/fa'
//whatsapp
import {FaWhatsapp} from 'react-icons/fa'

const ContactCard = () => {
  return (
    <div id="contact-app" >
        
        <div className='left-card-section' >
            <div className='info'>
            <h3>Email:</h3>
            {/*  mail to: juandagarce@gmail.com */}
            <a href="mailto:juandagarce@gmail.com?subject = Feedback&body = Message" className='wp-button' > Juandagarce@gmail.com </a>
            <h3>Phone:</h3>
            <a href="https://api.whatsapp.com/send?phone=3165536861&text=Hello!%20I'd%20like%20to%20contact%20you%20for..." className='wp-button' > Click here to chat <FaWhatsapp /></a>
            </div>
            <img src={ BMo } className="bmo" alt="BMO" />
        </div>

      <div className="contact-card">
        <div className="contact-card-image">
          <img src={ MyPhoto } className="contact-picture" alt="Dev" />
        </div>
        <div className="contact-card-body">
          <h2>Juan David García</h2>
          <p>Web Designer</p>
        </div>
        <div className="contact-card-footer">
          <a href="https://www.linkedin.com/in/juan-david-garcia-arce-50169a283" className="contact-btn">
            < FaLinkedin />
          </a>
          <a href="https://www.instagram.com/juanda_garc/" className="contact-btn">
            < FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
