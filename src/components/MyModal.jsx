import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "200px",
    height: "50px",
    fontSize: "14pt",
  },
}));

export default function MyModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
    props.setter(false);
  };

  const finalMessage = (res) => {
    if (res == "X") {
      return "X wins,";
    } else if (res == "O") {
      return "O wins,";
    } else {
      return "No one wins,";
    }
  };
  return (
    <div>
      {open && (
        <>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <Typography fontSize="14pt">
                  {finalMessage(props.result)}{" "}
                  {`A total of ${props.count} moves were complete`}
                </Typography>
              </div>
            </Fade>
          </Modal>
        </>
      )}
    </div>
  );
}
