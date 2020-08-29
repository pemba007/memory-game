import fire from "../../config/fire-config";

const readLeaderBoard = async () => {
  return new Promise((resolve, reject) => {
    // Read function
    fire
      .database()
      .ref("/users")
      .once("value")
      .then(function (snapshot) {
        const data = snapshot.val();
        const temp = [];
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            temp.push(data[key]);
          }
        }

        resolve(temp);
      })
      .catch(() => reject());
  });
};

export default readLeaderBoard;
