import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import readLeaderBoard from "../../helpers/readLeaderBoard";

import Link from "next/link";

const LeaderBoard = () => {
  const [userData, setUserData] = React.useState([]);
  const [, updateState] = React.useState();

  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    const getUserData = async () => {
      const userData = await readLeaderBoard().catch(() => {
        console.log("Error happend on fetch");
        // error = true;
      });
      setUserData(userData);
      console.log("LeaderBoard -> userData", userData);
    };
    getUserData();
  }, []);

  React.useEffect(() => {
    console.log("User Data changed", userData);
    forceUpdate();
  }, [userData]);

  console.log("LeaderBoard -> userData", userData);

  return (
    <div style={{ width: "100%" }}>
      <Grow
        in={true}
        timeout={2500}
        style={{ transformOrigin: "bottom center" }}
      >
        <Typography
          variant='h4'
          color='textPrimary'
          align='center'
          gutterBottom
        >
          LeaderBoard
        </Typography>
      </Grow>

      <Grow
        in={true}
        timeout={2500}
        style={{ transformOrigin: "bottom center" }}
      >
        <Grid
          container
          spacing={3}
          justify='center'
          style={{ paddingTop: "2rem" }}
        >
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell align='right'>Level</TableCell>
                    <TableCell align='right'>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.map((row) => (
                    <TableRow key={`${row.name}-${row.date}`}>
                      <TableCell component='th' scope='row'>
                        {row.name}
                      </TableCell>

                      <TableCell align='right'>{row.level}</TableCell>
                      <TableCell align='right'>
                        {new Date(row.date).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grow>

      <Link href='/'>
        <Grow
          in={true}
          timeout={2500}
          style={{ transformOrigin: "bottom center" }}
        >
          <Button
            variant='outlined'
            color='secondary'
            aria-label='Go Home'
            style={{
              display: "block",
              margin: "auto",
              marginTop: "2rem",
            }}
            size='large'
          >
            Play Game
          </Button>
        </Grow>
      </Link>
    </div>
  );
};

export default LeaderBoard;
