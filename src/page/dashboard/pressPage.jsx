import React from "react";
import { makeStyles } from "@material-ui/core";
import PressImg from "../../components/common/pressImg";


const useStyles = makeStyles((theme) => ({}));

function PressPage() {
  const classes = useStyles();


  return (
    <div style={{ padding: "30px" }}>
        <PressImg/>
    </div>
  );
}

export default PressPage;
