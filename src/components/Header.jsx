import { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, InputBase, Paper, IconButton, Divider } from "@material-ui/core";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import axios from "axios";
import { NewsContext } from "../contextApi/NewsContext";

import Logo from "../images/logo.png";

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
  const [newsList, setNewsList] = useContext(NewsContext);

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const handleSearch = () => {
    setSearchStr("");

    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/newsapi/search?q=${searchStr}`
      )
      .then((response) => {
        const { details } = response.data;
        setNewsList(details);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Grid container alignItems="center" className={classes.margin}>
      <Grid item xs={3}>
        <LogoContainer
          src={Logo}
          alt=""
          onClick={() => window.location.reload()}
        />
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

const LogoContainer = styled.img`
  padding-left: 25px;
  cursor: pointer;
`;
