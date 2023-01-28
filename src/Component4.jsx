import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { grey } from "@mui/material/colors";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: 3,
    borderColor: "text.primary",
    borderRadius: "10px",
  },
});
const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid xs={12} sm={6} md={3} item {...props} />;
const PlacingPropsinJSXTags = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Container spacing={1}>
      <Item>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
    </Container>
  </div>
));

export default PlacingPropsinJSXTags;
