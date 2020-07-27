import Head from "next/head";

import Login from "../src/containers/Login";
import Game from "../src/containers/Game";
import Button from "@material-ui/core/Button";
import ThemeToggle from "../src/components/ThemeToggle";

export default function Home(props) {
  const [gameMode, setGameMode] = React.useState(false);

  const [userInfo, setUserInfo] = React.useState(null);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeToggle onChange={props.themeChange} />
      <main
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        {gameMode ? <Game /> : <Login />}
      </main>
    </>
  );
}
