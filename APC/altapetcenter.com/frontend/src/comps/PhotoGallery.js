import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PhotoGallery.css";

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  const imageVariants = {
    open: { scale: 1.2 },
    closed: { scale: 1 },
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <div className="photo-gallery">
      <div className="grid-container">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-container"
            onClick={() => handleImageClick(index)}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={image.url}
              alt={image.caption}
              variants={imageVariants}
              initial="closed"
              animate={selectedImage === index ? "open" : "closed"}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
      {selectedImage !== null && (
        <motion.div
          className="overlay"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          transition={{ duration: 0.5 }}
          onClick={handleImageClose}
        >
          <motion.img
            src={images[selectedImage].url}
            alt={images[selectedImage].caption}
            variants={imageVariants}
            initial="closed"
            animate="open"
            transition={{ duration: 0.5 }}
          />
          <p>{images[selectedImage].caption}</p>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoGallery;
