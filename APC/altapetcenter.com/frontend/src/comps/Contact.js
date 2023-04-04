import React from 'react';
import { motion } from 'framer-motion';
import ContactImg from '../dogs/contact.jpg'
import Hours from './Hours';
import './Contact.css';


function Contact() {

  return (
    <motion.section className='about-section'>
    <motion.section 
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: 0 , opacity: 1}}
    transition={{ duration: 0.4, ease: "easeInOut" }}>
           <div className="spacer"></div>
           <div className="img-cont">
            <img className="banner-img" src={ContactImg} alt="" />
           </div>
    <h1 className='call-contact'>Call (909) 949-0199 today!</h1>
    <h1 className='call-contact'>hello@altapetcenter.com</h1>
    <Hours/>

          <div className="contact-space"></div>
          </motion.section>
  </motion.section>
  );
}

export default Contact;