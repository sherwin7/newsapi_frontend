import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import NewsCard from "./NewsCard";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const News = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.margin} spacing={5}>
      <Grid item>
        <NewsCard />
      </Grid>
      <Grid item>
        <NewsCard />
      </Grid>
      <Grid item>
        <NewsCard />
      </Grid>
      <Grid item>
        <NewsCard />
      </Grid>
      <Grid item>
        <NewsCard />
      </Grid>
      <Grid item>
        <NewsCard />
      </Grid>
    </Grid>
  );
};

export default News;
