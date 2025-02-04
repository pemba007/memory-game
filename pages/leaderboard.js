import Head from "next/head";

import ThemeToggle from "../src/components/ThemeToggle";
import LeaderBoard from "../src/containers/LeaderBoard";

import readLeaderBoard from "../src/helpers/readLeaderBoard";
import React from "react";

export default function index(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getUserData = async () => {
      const userData = await readLeaderBoard().catch(() => {
        console.log("Error happend on fetch");
        // error = true;
      });
      setData(userData);
      console.log("getStaticProps -> userData", userData);
    };
    getUserData();
  }, []);
  return (
    <>
      <Head>
        <title>Leaderboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeToggle onChange={props.themeChange} />
      <main
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <LeaderBoard userData={data ? data : []} />
      </main>
    </>
  );
}

// export async function getStaticProps() {
//   // let error = false;
//   // Fetch necessary data for the blog post using params.id
//   const userData = await readLeaderBoard().catch(() => {
//     console.log("Error happend on fetch");
//     // error = true;
//   });
//   console.log("getStaticProps -> userData", userData);

//   return {
//     props: {
//       data: userData,
//     },
//   };
// }
