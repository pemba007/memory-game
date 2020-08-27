import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const NewGame = ({ open, handleClose, gameOver, level }) => {
  return (
    <Dialog
      open={open}
      //   TransitionComponent={Transition}
      keepMounted
      disableBackdropClick
      disableEscapeKeyDown
      onClose={handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle id='alert-dialog-slide-title'>Time Up</DialogTitle>
      <DialogContent>
        {/* <DialogContentText id='alert-dialog-slide-description'> */}
        <Typography component='p' variant='h4'>
          You have reached level {level + 1}
        </Typography>
        {/* </DialogContentText> */}
      </DialogContent>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          You can start again or end the game
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>New Game</Button>
        <Button onClick={gameOver}>Game Over</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGame;
