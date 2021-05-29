import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  InputBase,
  Paper,
  IconButton,
  Divider,
} from "@material-ui/core";
import { MdSearch } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [searchStr, setSearchStr] = useState("");

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchStr);
    setSearchStr("");
  };

  return (
    <Grid container alignItems="center" className={classes.margin}>
      <Grid item xs={3}>
        <Typography>News Aggregator</Typography>
      </Grid>

      <Grid item xs={8} sm={6}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search News"
            onChange={handleChange}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            className={classes.iconButton}
            aria-label="search"
            onClick={handleSearch}
          >
            <MdSearch style={{ color: "blue" }} />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Header;
