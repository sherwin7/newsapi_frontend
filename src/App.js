import { Fragment } from "react";
import { Grid } from "@material-ui/core";

import Header from "./components/Header";
import Sidebar from "./components/Sidenav";
import NewsComponent from "./components/News";

function App() {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={8}>
            <NewsComponent />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
