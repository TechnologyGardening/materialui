import { React } from "react";
import Paper from "@mui/material";
import Grid from "@mui/material";
import Typography from "@mui/material";

const headerFooterStyle = {
  padding: 8,
  textAlign: "center",
};
const mainStyle = {
  padding: 16,
  textAlign: "center",
};
const navStyle = { marginLeft: 5 };

export default function Fun1() {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={headerFooterStyle}>
            <Typography>Header</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main COntent</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main COntent</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main COntent</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main COntent</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main COntent</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main COntent</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper style={headerFooterStyle}>
            <Typography>Footer</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
