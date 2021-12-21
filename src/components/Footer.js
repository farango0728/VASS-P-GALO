import React from "react";
import { Container } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3949ab",
    boxShadow: "none",
  },
  title: {
    color: "white",
  },

  posicion: {
    position: "absolute",
    width: "100%",
    bottom: "0",
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.posicion}>
      <AppBar position="sticky" className={classes.root}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography className={classes.title}>© 2021 Comics</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
