import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
import { createWordpress, fetchWordpressDetails } from "../../action/wordpress";
import WordpressTable from "../../components/home/WordpressTable";
import HomeDialog from "../../components/home/HomeDialog";
import ImgAccordian from "../../components/common/imgAccordian";

const useStyles = makeStyles((theme) => ({}));

function AwardPage() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div style={{ padding: "30px" }}>
        <Grid
        container
        spacing={3}
        // justifyContent="space-between"
        // alignItems="center"
      >


        <Grid item>
        <Grid
        container
        spacing={3}
        // justifyContent="space-between"
        // alignItems="center"
      >
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel1" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel2" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel3" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>

        </Grid>
        </Grid>


        <Grid item>
        <Grid
        container
        spacing={3}
        // justifyContent="space-between"
        // alignItems="center"
      >
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel4" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel5" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel6" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>

        </Grid>
        </Grid>


      </Grid>






        {/* <ImgAccordian imgPanel="panel1" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        <ImgAccordian imgPanel="panel2" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        <ImgAccordian imgPanel="panel3" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        <ImgAccordian imgPanel="panel4" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/> */}
    </div>
  );
}

export default AwardPage;
