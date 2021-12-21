import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import capitan from "../assets/img/capitan.jpg";
import batman from "../assets/img/batman.jpg"
import ironman from "../assets/img/ironman.jpg"
import superman from "../assets/img/superman.jpg"
import pantera from "../assets/img/pantera.png"
import linterna from "../assets/img/linterna.jpeg"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Products({ addCarrito }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product
            id={1}
            name="Capitan America"
            price={50}
            img={capitan}
            description="Comics del Capitan America primera edicion"
            addCarrito={addCarrito}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product
            id={2}
            name="Ironman"
            price={60}
            img={ironman}
            description="Comics de Ironman primera edicion"
            addCarrito={addCarrito}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product
            id={3}
            name="Superman"
            price={50}
            img={superman}
            description="Comics de Superman primera edicion"
            addCarrito={addCarrito}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product
            id={4}
            name="Batman"
            price={40}
            img={batman}
            description="Comics de batman primera edicion"
            addCarrito={addCarrito}
          />
        </Grid>
        
        
      </Grid>
    </div>
  );
}
