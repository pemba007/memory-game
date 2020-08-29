import Head from "next/head";

import Login from "../src/containers/Login";
import Game from "../src/containers/Game";

import ThemeToggle from "../src/components/ThemeToggle";

export default function Home(props) {
  const [gameMode, setGameMode] = React.useState(false);

  const [userInfo, setUserInfo] = React.useState(null);

  return (
    <>
      <Head>
        <title>Memory Game</title>
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
        {gameMode ? (
          <Game logOut={() => setGameMode(false)} user={userInfo} />
        ) : (
          <Login
            openGame={() => gameMode(true)}
            setUserInfo={(user) => {
              setUserInfo(user);
              setGameMode(true);
            }}
          />
        )}
      </main>
    </>
  );
}
