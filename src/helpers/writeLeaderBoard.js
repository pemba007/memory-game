import { v4 as uuidv4 } from "uuid";
import fire from "../../config/fire-config";

const writeLeaderBoard = async ({ username, level }) => {
  // Write function
  return new Promise((resolve, reject) => {
    fire
      .database()
      .ref("/users/" + uuidv4())
      .set({
        name: username,
        level: level,
        date: new Date().toISOString(),
      })
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject();
      });
  });
};

export default writeLeaderBoard;
