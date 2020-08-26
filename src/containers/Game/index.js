import React, { useState, useEffect } from "react";
import { Typography, makeStyles, Container, Grow } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import Clock from "../../components/Clock";
import Tile from "../../components/Tile";
import { motion } from "framer-motion";

const Game = (props) => {
  const [level, setLevel] = useState(0);
  // const [timer, setTimer] = useState(null);
  const [cardData, setCardData] = useState([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);

  const [showData, setShowData] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // Array to save solved data

  const [solvedData, setSolvedData] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // Id of opened tiles

  const [openTiles, setOpenTiles] = useState([-1, -1]);

  const _randomizeData = (data) => {
    console.log("_randomizeData -> data", data);
    let temp = data ? [...data] : [...cardData];
    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let tempp = temp[i];
      temp[i] = temp[j];
      temp[j] = tempp;
    }
    console.log("_randomizeData -> temp", temp);
    setCardData(temp);
  };

  const newLevel = () => {
    const oldLevel = level;
    setLevel(level + 1);

    console.warn("Successfullt completed level", oldLevel);
    console.warn("You can go to", oldLevel + 1);

    // Creating new data

    const arrayTemp = new Array();

    for (let i = 1; i <= 6 + oldLevel; i++) {
      arrayTemp.push(i);
      arrayTemp.push(i);
    }
    console.log("newLevel -> arrayTemp", arrayTemp);
    // setCardData(arrayTemp);
    _randomizeData(arrayTemp);

    // Hide all show data

    setShowData(new Array(arrayTemp.length).fill(false));
    setSolvedData(new Array(arrayTemp.length).fill(false));
    setOpenTiles(new Array(2).fill(-1));
  };

  useEffect(() => {
    _randomizeData();
  }, []);

  useEffect(() => {
    console.log("Game -> showData", showData);
    console.log("Game -> openTiles", openTiles);
    console.log("Game -> solvedData", solvedData);
  });

  const useStyles = makeStyles({
    mainContainer: {
      width: "95%",
      textAlign: "center",
    },
  });

  const Header = () => (
    <>
      <Typography variant='h4' color='textPrimary' gutterBottom>
        Memory Game
      </Typography>
      <Typography variant='subtitle1' align='center' gutterBottom>
        Find the pairs
      </Typography>
    </>
  );

  const checkIfAllTrue = (arr) => {
    let result = arr.every(function (e) {
      return e > 0;
    });
    console.log("SolvedData -> Game -> result", result);
    return result;
    // result && newLevel();
  };

  const _handleTilePress = (id) => {
    console.log("_handleTilePress -> id", id);
    if (openTiles[0] !== id && openTiles[1] !== id && !solvedData[id]) {
      // Check if current open is equal to already opened
      if (openTiles[1] !== -1) {
        if (cardData[openTiles[1]] === cardData[id]) {
          // Match
          console.log("Match");

          // Setting solved data
          var tempS = [...solvedData];
          tempS[openTiles[1]] = tempS[id] = true;
          console.log("_handleTilePress -> temp", tempS);

          if (checkIfAllTrue(tempS)) {
            newLevel();
          } else {
            console.log("Not finished", tempS);

            setSolvedData(tempS);
            // Hiding openTiles[0]
            temp = [...showData];
            temp[openTiles[0]] = false;
            setShowData(temp);
            // Setting openTiles
            let temp = [...openTiles];
            temp[0] = temp[1] = -1;
            setOpenTiles[temp];
          }
        } else {
          // No Match

          console.log("No Match");

          // Closing openTiles[0] and opening tempArray[id]

          if (openTiles[0] !== -1) {
            let tempoArray = [...showData];
            tempoArray[openTiles[0]] = false;
            tempoArray[id] = true;
            console.log("_handleTilePress -> tempoArray", tempoArray);
            setShowData(tempoArray);
          } else {
            let tempoArray = [...showData];
            tempoArray[id] = true;
            setShowData(tempoArray);
          }

          // Setting open tiles

          let tempArray = [...openTiles];
          tempArray[0] = tempArray[1];
          tempArray[1] = id;
          // Assigning new open Tiles
          setOpenTiles(tempArray);
        }
      } else {
        console.log("Initial or solved");
        let tempoArray = [...showData];
        tempoArray[id] = true;

        setShowData(tempoArray);

        // Initial or after solve
        let temp = [...openTiles];
        temp[0] = temp[1];
        temp[1] = id;
        setOpenTiles(temp);
      }
    } else if (openTiles[0] === id && !solvedData[id]) {
      let tempArray = [...openTiles];
      tempArray[1] = tempArray[0];
      tempArray[0] = openTiles[1];
      setOpenTiles(tempArray);
    }
  };

  const renderTiles = () => {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          marginTop: "50px",
        }}
      >
        <Grid container spacing={3}>
          {showData.map((item, index) => {
            return (
              <Tile
                show={item || solvedData[index]}
                key={index}
                value={cardData[index]}
                id={index}
                tilePress={_handleTilePress}
              />
            );
          })}
        </Grid>
      </motion.div>
    );
  };

  const _timeOver = () => {
    console.warn("Time has ended");
  };

  const classes = useStyles(props);

  return (
    <div className={classes.mainContainer}>
      <Header />
      <Clock timeOver={_timeOver} />

      {renderTiles()}
    </div>
  );
};

export default Game;
