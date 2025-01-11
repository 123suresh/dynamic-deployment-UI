
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid } from "@mui/material";

export default function ImgAccordian({imgPanel,handleChange,expanded,setExpanded}) {

  return (
      <Accordion expanded={expanded === imgPanel} onChange={handleChange(imgPanel)} style={{backgroundColor:"black"}}>
        <AccordionSummary
        >
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                <Typography>
            <img
                src="http://narayanpuri.com/assets/images/awards/aarohan.jpg" // Replace with your image URL
                alt="Description of the image"
                style={{ width: "80%" }} // Optional styling
            />
        </Typography>
                </Grid>
                <Grid item>
                <Typography component="span" sx={{ width: '33%', flexShrink: 0, color:"white", fontSize:"22px" }}>
            General settings
          </Typography>
                </Grid>
            </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"white", fontSize:"18px"}}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
        
      </Accordion>
  );
}


