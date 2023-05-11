import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import BootstrapDialogTitle from "./BootstrapDialogTitle";
import styles from "./InfosModal.module.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function InfosModal({ appartment }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.globalInfosModal}>
      <button
        className={styles.moreInfo}
        type="button"
        onClick={handleClickOpen}
      >
        &#40;More info&#41;
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialogTitle-root": {
            display: "flex",
            flexDirection: "center",
            alignItems: "center",
          },
          "& .MuiPaper-root": {
            display: "flex",
            maxWidth: "100%",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <div className={styles.cityAndPrice}>
            <h3 className={styles.modalTitle}>{appartment.title} </h3>
          </div>
        </BootstrapDialogTitle>
        <DialogContent className={styles.dialogContent} dividers>
          <div className={styles.descriptionContainer}>
            <h4>Description:</h4>
            <h4 className={styles.modalDesc}>{appartment.desc}</h4>
          </div>

          <div className={styles.infosBloc}>
            <div className={styles.infosContainer}>
              <h4>Price:</h4>
              <h4 className={styles.chambers}>{appartment.price}€ /night</h4>
            </div>
            <div className={styles.infosContainer}>
              <h4>Chambers:</h4>
              <h4 className={styles.chambers}>{appartment.chambers}</h4>
            </div>
            <div className={styles.infosContainer}>
              <h4>Surface:</h4>
              <h4 className={styles.surface}>{appartment.surfaces} m2</h4>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
