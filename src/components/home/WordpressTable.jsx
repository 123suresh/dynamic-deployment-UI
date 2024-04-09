import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteWordpress } from "../../action/wordpress";

function WordpressTable(props) {

  let dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);
  const [delDetail, setDelDetail] = useState({
    name:"",
    namespace:""
  })

  const handleDelete = (name, namespace) => {
    setDelDetail({name:name, namespace:namespace})
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDelEnv = () => {
    dispatch(deleteWordpress(delDetail))
    setOpenDialog(false);
    setDelDetail({name:"", namespace:""})
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Name Space</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.details.map((wordpress) => (
              <TableRow
                key={wordpress.namespace}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {wordpress.name}
                </TableCell>
                <TableCell>{wordpress.namespace}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" size="small" color="error"
                  onClick={()=>handleDelete(wordpress.name, wordpress.namespace)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openDialog && (
        <>
          <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Are you sure?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              <Typography>
                Deleting this space will permanently delete you environment.
              </Typography>

              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained">Cancel</Button>
              <Button onClick={handleDelEnv} variant="contained" color="error">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
}

export default WordpressTable;
