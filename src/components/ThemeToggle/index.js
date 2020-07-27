import React from "react";
import Fab from "@material-ui/core/Fab";

import WbIncandescentTwoToneIcon from "@material-ui/icons/WbIncandescentTwoTone";

const ThemeToggle = (props) => {
  return (
    <Fab
      color='primary'
      aria-label='like'
      style={{ position: "fixed", bottom: "2rem", left: "2rem" }}
      onClick={props.onChange}
    >
      <WbIncandescentTwoToneIcon />
    </Fab>
  );
};

export default ThemeToggle;
