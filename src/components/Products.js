import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import capitan from "../assets/img/capitan.jpg";
import batman from "../assets/img/batman.jpg";
import ironman from "../assets/img/ironman.jpg";
import superman from "../assets/img/superman.jpg";

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
            resena="Steve Rogers nació durante la Depresión y creció, convirtiéndose en un joven débil en una familia pobre. Su padre murió cuando él era un niño; su madre, durante la adolescencia de Steve. Horrorizado ante un noticiario que mostraba a los nazis en Europa, Rogers intentó alistarse en el ejército. En cambio, debido a su fragilidad y su malestar, fue rechazado."
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
            resena="Anthony Stark, hijo del industrial Howard Stark, demostró su aptitud mecánica y su genio inventivo a muy temprana edad, metiéndose en un programa de ingeniería eléctrica en el Instituto de Tecnología de Massachusetts a los quince años."
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
            resena="El superhéroe más reconocido en la cultura pop, Superman ha sido elevado al estado mítico folkhero. El bebé Kal-El llegó a la Tierra desde el planeta moribundo Krypton y fue encontrado por una pareja de granjeros que lo nombró Clark Kent y lo crió como propio. "
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
            resena="Antes de convertirse en el mejor detective del mundo y cuando aún era un niño, el millonario Bruce Wayne vio morir a sus padres durante un asalto. Este asesinato definió su vida y lo impulsó a convertirse en el arma definitiva contra el crimen: Batman"
          />
        </Grid>
      </Grid>
    </div>
  );
}
