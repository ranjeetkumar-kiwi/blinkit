"use-client";
import styles from "../../../styles/navbar.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import { useState } from "react";
import DialogBox from "../DialogBox";


const Location = () => {
      const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {

        setOpen(false);
      };

     
  return (
    <div className={styles.location}>
      <h3>Delivery in 8 minutes</h3>
      <div className={styles.locationDrop} onClick={handleClickOpen}>
        <div>B-9 Noida sector 3</div>
        <div>
          <ArrowDropDownIcon />
        </div>
        <DialogBox dialogTitle="Choose Loaction" open={open} handleClose={handleClose} handleClickOpen={handleClickOpen}>
          {/* <Button variant="contained" color="success">
            Detect my location
          </Button> */}
        </DialogBox>
      </div>
    </div>
  );
};

export default Location;
