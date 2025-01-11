import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const images = [
  "http://narayanpuri.com/assets/images/press/hero_thumb.jpg",
  "http://narayanpuri.com/assets/images/press/passionate_thumb.jpg",
  "http://narayanpuri.com/assets/images/press/rabbit_thumb.jpg",
  "http://narayanpuri.com/assets/images/press/rabbit_thumb.jpg",
  "http://narayanpuri.com/assets/images/press/rabbit_thumb.jpg",
  "http://narayanpuri.com/assets/images/press/hero_thumb.jpg",
  "http://narayanpuri.com/assets/images/press/passionate_thumb.jpg",
  "http://narayanpuri.com/assets/images/press/rabbit_thumb.jpg",
];

const PressImg = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentImage(null);
    setOpen(false);
  };

  return (
    <div>
      {/* Grid for Gallery */}
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <img
              src={image}
              alt={`Gallery ${index}`}
              style={{
                width: "80%",
                height: "auto",
                cursor: "pointer",
                borderRadius: "8px",
              }}
              onClick={() => handleOpen(image)}
            />
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          onClick={handleClose}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.8)", // Transparent background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
          }}
        >
          {currentImage && (
            <img
              src={currentImage}
              alt="Expanded"
              style={{
                width: "auto",
                height: "85vh",
                maxWidth: "95vw",
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
      </Modal>



    </div>
  );
};

export default PressImg;
