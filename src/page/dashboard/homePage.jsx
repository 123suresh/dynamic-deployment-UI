import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';
import { createWordpress, fetchWordpressDetails } from "../../action/wordpress";

const useStyles = makeStyles((theme) => ({
}));

function HomePage() {
  const classes = useStyles();

  let dispatch = useDispatch();

  const [dialog, setDialog] = useState(false);
  const [wordpressData, setWordpressData] = useState({
    name:"",
    namespace:""
  });

  useEffect(()=>{
    dispatch(fetchWordpressDetails())
  },[])

  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51MK1zoD510dCzLPslHJ0ELW7dmktRE7QPuQca9futZLHsbwaGeQ7PXhe5vNXqLQZSEMubRx95WmdGHMAZ2kphDlE00ym9gXKmc"
    );

    const body = {
      products: [
        {
          address: "North Indian, Biryani, Mughlai",
          arrimg:
            "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
          delimg:
            "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
          dish: "punjabi",
          id: 1,
          imgdata:
            "https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp",
          price: 350,
          qnty: 1,
          rating: "3.8",
          somedata: " 1175 + order placed from here recently",
        },
      ],
    };
    const headers = {
      "Content-Type": "application/json",
      // Authorization: `bearer ${isAuthenticated}`,
    };
    const response = await fetch(
      "http://localhost:8080/payment/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log("error or not");
      console.log(result.error);
    }
  };


  const handleClickOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setWordpressData({name:"", namespace:""})
    setDialog(false);
  };

  const handleDataChange = (e, type) => {
    if(type === "name"){
      setWordpressData({...wordpressData, name:e.target.value})
    }else{
      setWordpressData({...wordpressData, namespace:e.target.value})
    }
  }

  const handleCreateWordPress = () => {
    const payload = wordpressData
    dispatch(createWordpress(payload))
    handleClose()
  }

  return (
    <>
      <div style={{ padding: "30px" }}>
        <Button variant="contained" onClick={() => makePayment()}>
          Payment
        </Button>
      </div>

      <div style={{ padding: "30px" }}>
        <Button variant="contained" onClick={() => handleClickOpen()}>
          Create wordpress application
        </Button>
      </div>

      {dialog && (
        <>
          <Dialog
            open={dialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Create Wordpress Application
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Grid container direction="column" spacing={3} style={{padding:"20px"}}>
                  <Grid item>
                    <TextField 
                      id="outlined-basic" 
                      label="Environment Name" 
                      variant="outlined" 
                      value={wordpressData.name}
                      onChange={(e)=>handleDataChange(e, "name")}
                      />
                    </Grid>
                  <Grid item>
                    <TextField 
                      id="outlined-basic" 
                      label="Namespace" 
                      variant="outlined" 
                      value={wordpressData.namespace}
                      onChange={(e)=>handleDataChange(e, "namespace")}
                      />
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
              <Button onClick={handleCreateWordPress} 
              variant="contained"
                disabled={!wordpressData.name || !wordpressData.namespace}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
}

export default HomePage;
