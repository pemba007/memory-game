import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  makeStyles,
  Snackbar,
  Slide,
  Grow,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
      width: "100%",
    },
  },
}));

const Login = (props) => {
  const [loginOn, setLoginOn] = useState(false);
  const [id, setId] = useState(null);
  const [error, setError] = useState(false);

  const classes = useStyles();

  const _handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("_handleFormSubmit -> id", id);
    !id ? setError(true) : props.setUserInfo(id);
  };

  function TransitionUp(props) {
    return <Slide {...props} direction='up' />;
  }

  const action = (
    <Button color='secondary' size='small' onClick={() => setError(false)}>
      Close
    </Button>
  );

  const _handleIdChange = (e) => {
    // console.log("_handleIdChange -> e", e.target.value);
    setId(e.target.value);
    setError(false);
  };

  return (
    <div>
      {!loginOn ? (
        <>
          <Grow
            in={true}
            timeout={2500}
            style={{ transformOrigin: "bottom center" }}
          >
            <Typography variant='h2' color='textPrimary' gutterBottom>
              Welcome to the Memory Game
            </Typography>
          </Grow>

          <Grow
            in={true}
            timeout={2500}
            style={{ transformOrigin: "bottom center" }}
          >
            <Typography variant='subtitle1' align='center' gutterBottom>
              Here you'll be playing a memory test where you have to find the
              most common pairs
            </Typography>
          </Grow>
          <Grow
            in={true}
            timeout={2500}
            style={{ transformOrigin: "bottom center" }}
          >
            <Button
              color='primary'
              variant='contained'
              aria-label='Start Game'
              style={{ display: "block", margin: "auto", marginTop: "2rem" }}
              size='large'
              onClick={() => setLoginOn(true)}
            >
              Play Now
            </Button>
          </Grow>
        </>
      ) : (
        <>
          <Grow
            in={true}
            timeout={2500}
            style={{ transformOrigin: "bottom center" }}
          >
            <Typography variant='h2' color='textPrimary' gutterBottom>
              Please enter your id
            </Typography>
          </Grow>

          <form
            className={classes.root}
            noValidate
            autoComplete='off'
            onSubmit={_handleFormSubmit}
          >
            <Grow
              in={true}
              timeout={2500}
              style={{ transformOrigin: "bottom center" }}
            >
              <TextField
                id='outlined-basic'
                label='Enter your id'
                variant='outlined'
                onChange={_handleIdChange}
                autoFocus
                error={error}
              />
            </Grow>

            <Snackbar
              open={error}
              onClose={() => setError(false)}
              TransitionComponent={TransitionUp}
              message='Please insert the id'
              key={TransitionUp ? TransitionUp.name : ""}
              action={action}
              autoHideDuration={6000}
              bac
            />

            <Grow
              in={true}
              timeout={2500}
              style={{ transformOrigin: "bottom center" }}
            >
              <Button
                type='submit'
                color='primary'
                variant='contained'
                aria-label='Start Game'
                style={{ display: "block", margin: "auto" }}
                size='large'
                // onClick={() => props.setUserInfo("Rame")}
              >
                Let's Play
              </Button>
            </Grow>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
