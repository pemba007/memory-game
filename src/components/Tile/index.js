import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  // style rule
  foo: (props) => ({
    backgroundColor: props.backgroundColor,
  }),
  bar: {
    // CSS property
    color: (props) => props.color,
  },
  mainContainer: {
    width: "95%",
    textAlign: "center",
  },
  paper: {
    cursor: "pointer",
    minHeight: "100px",
    display: "grid",
    placeItems: "center",
    [theme.breakpoints.up("md")]: {
      minWidth: "100px",
      maxWidth: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    // position: "relative",
  },
  paperBack: {},
  tileContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    display: "flex",
    justifyContent: "center",

    // },
    // position: "relative",
  },
  tileBackContainer: {
    // [theme.breakpoints.down("sm")]: {
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    // },
  },
}));

const variants = {
  visible: { rotateY: 0, transition: { duration: 0.5 } },
  hidden: { rotateY: 180, transition: { duration: 0.5 } },
  hovering: {
    scale: 1.5,
  },
  exit: {
    scale: 5,
  },
};

const variantsBack = {
  visible: { rotateY: [180, 0], transition: { duration: 0.5 } },
  hidden: { rotateY: 0, transition: { duration: 0.5 } },
  hovering: {
    scale: 1.5,
  },
};

const Tile = (props) => {
  // console.log("Tile -> props", props);
  const classes = useStyles(props);

  return (
    <>
      <Grid
        item
        lg
        md
        sm
        xs={6}
        onClick={() => props.tilePress(props.id)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {props.show ? (
          <AnimatePresence>
            <motion.div
              initial='hidden'
              animate='visible'
              whileHover='hovering'
              variants={variants}
              className={classes.tileContainer}
            >
              <Paper className={classes.paper} elevation={3}>
                {props.value}
              </Paper>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial='initial'
            animate='visible'
            whileHover='hovering'
            variants={variantsBack}
            className={classes.tileBackContainer}
          >
            <Paper className={classes.paper} elevation={3}>
              Hidden
            </Paper>
          </motion.div>
        )}
      </Grid>
    </>
  );
};

export default Tile;
