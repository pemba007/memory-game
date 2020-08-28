import Head from "next/head";

import ThemeToggle from "../src/components/ThemeToggle";
import LeaderBoard from "../src/containers/LeaderBoard";

export default function index(props) {
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
        <LeaderBoard />
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Fetch necessary data for the blog post using params.id
}
