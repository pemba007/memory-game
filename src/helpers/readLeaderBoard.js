import fire from "../../config/fire-config";

const readLeaderBoard = async () => {
  return new Promise((resolve, reject) => {
    try {
      const dataArray = [];
      var db = fire.database();
      var ref = db.ref("/users");
      ref
        .orderByChild("level")
        .limitToLast(10)
        .on("child_added", function (snapshot) {
          console.log(snapshot.val());
          dataArray.unshift(snapshot.val());
        });

      resolve(dataArray);
    } catch (e) {
      reject();
    }

    // Read function
    // fire
    //   .database()
    //   .ref("/users")
    //   .orderByChild("level")
    //   .on("child_added", function (snapshot) {
    //     console.log(
    //       snapshot.key + " was " + snapshot.val().height + " meters tall"
    //     );
    //   })
    //   .catch(() => reject());
    // .then(function (snapshot) {
    //   const data = snapshot.val();
    //   const temp = [];
    //   for (var key in data) {
    //     if (data.hasOwnProperty(key)) {
    //       temp.push(data[key]);
    //     }
    //   }

    //   resolve(temp);
    // })
    // .catch(() => reject());
  });
};

export default readLeaderBoard;
