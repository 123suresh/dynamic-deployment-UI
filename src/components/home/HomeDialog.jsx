import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

function HomeDialog(props) {
  return (
    <>
      <Dialog
        open={props.dialog}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Create Wordpress Application
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid
              container
              direction="column"
              spacing={3}
              style={{ padding: "20px" }}
            >
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Environment Name"
                  variant="outlined"
                  value={props.wordpressData.name}
                  onChange={(e) => props.handleDataChange(e, "name")}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Namespace"
                  variant="outlined"
                  value={props.wordpressData.namespace}
                  onChange={(e) => props.handleDataChange(e, "namespace")}
                />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} variant="contained" color="error">
            Cancel
          </Button>
          <Button
            onClick={props.handleCreateWordPress}
            variant="contained"
            disabled={!props.wordpressData.name || !props.wordpressData.namespace}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default HomeDialog;
