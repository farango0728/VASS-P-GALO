import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import accounting from "accounting";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center"
  },

  cardRating: {
    display: "flex"
  }
 
}));

export default function CheckoutCard({ el }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography aria-label="settings" variant="h5" color="textSecondary">
            {accounting.formatMoney(el.price)}
          </Typography>
        }
        title={el.name}
        subheader="Disponible"
      />
      <CardMedia className={classes.media} image={el.img} title="Paella dish" />

      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
          {Array(el.rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <IconButton>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
