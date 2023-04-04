import React from 'react';
import { motion } from 'framer-motion';
import Divider from './Divider';
import cat from '../Cats/Cat.jpg';

import './About.css';


function About() {

  return (
    <motion.section
      className="about-section">

<motion.section
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0 , opacity: 1}}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      >
 <div className="spacer"></div>
    <img className="banner-img" src={cat} alt="" />
      <Divider title={"About us"}/>

      <motion.p className="ds last">
      Alta Grooming is a full service salon established in May 1990. Our commitment is to provide quality health and beauty services for pets of all sizes in a caring, stress-free environment. Our highly trained, talented pet stylists have an average of 20 years experience in the pet care industry.
      We offer a wide range of grooming services from whimsical clips designed to fit your pets personality to specialty show grooming and terrier hand stripping. All services are provided in a loving and professional manner so that your pet can enjoy his "spa day" as much as you appreciate his fresh and well groomed appearance.
      </motion.p>

      </motion.section>
    </motion.section>
  );
}

export default About;