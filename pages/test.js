import React from "react";
import readLeaderBoard from "../src/helpers/readLeaderBoard";

const Test = () => {
  const _buttonPressed = async () => {
    const data = await readLeaderBoard().catch((e) => console.error(e));
    console.log("_buttonPressed -> data", data);
  };

  return (
    <>
      <button onClick={_buttonPressed}>Testststststst</button>
    </>
  );
};
export default Test;
