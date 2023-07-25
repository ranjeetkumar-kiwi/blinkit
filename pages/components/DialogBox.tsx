import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogBoxProps {
  dialogTitle: string;
  open: boolean;
  handleClose: () => void;
  handleClickOpen: () => void;
  children:any;
}

const DialogBox: React.FC<DialogBoxProps> = ({ dialogTitle, children, open, handleClose, handleClickOpen }) => {
  return (
    <React.Fragment>
      {/* Removed the button to open the dialog */}
      <Dialog fullWidth open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogActions>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </div>

        <DialogContent>{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogBox;
