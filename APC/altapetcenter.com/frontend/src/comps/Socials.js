
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYelp, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Socials(props) {
    const iconStyles = {
        fontSize: props.size,
        marginRight: '7px',
        marginLeft: '7px',
        color: props.primary
      };
    
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (icon) => {
      setHoveredIcon(icon);
    };
  
    const handleMouseLeave = () => {
      setHoveredIcon(null);
    };
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com/altapetcenter/" 
      
      target="_blank" rel="noreferrer"
        onMouseEnter={() => handleMouseEnter('instagram')} onMouseLeave={handleMouseLeave}>
        <FontAwesomeIcon icon={faInstagram}
          className='center-socials'
          style={hoveredIcon === 'instagram' ? { ...iconStyles, color: props.secondary } : iconStyles} />
      </a>
      <a href="https://www.facebook.com/altapetcenter/" 
      
      target="_blank" rel="noreferrer"
        onMouseEnter={() => handleMouseEnter('facebook')} onMouseLeave={handleMouseLeave}>
        <FontAwesomeIcon icon={faFacebookSquare}
          className='center-socials'
          style={hoveredIcon === 'facebook' ? { ...iconStyles, color: props.secondary } : iconStyles} />
      </a>
      <a href="https://www.yelp.com/biz/alta-pet-center-upland" 
      
      target="_blank" rel="noreferrer"
        onMouseEnter={() => handleMouseEnter('yelp')} onMouseLeave={handleMouseLeave}>
        <FontAwesomeIcon icon={faYelp}
          className='center-socials'
          style={hoveredIcon === 'yelp' ? { ...iconStyles, color: props.secondary } : iconStyles} />
      </a>
    </div>
  )
}

export default Socials;