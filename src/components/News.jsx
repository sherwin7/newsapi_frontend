import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import Pagination from "@material-ui/lab/Pagination";

import { NewsContext } from "../contextApi/NewsContext";

import NewsCard from "./NewsCard";
import { pagination } from "../utils/pagination";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const News = () => {
  const classes = useStyles();

  const [newsList] = useContext(NewsContext);
  const [page, setPage] = useState(1);
  const [newsPg, setNewsPg] = useState([]);

  useEffect(() => {
    const news = pagination(page, 5, newsList);
    setNewsPg(news.result);
  }, [page, newsList]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Grid container className={classes.margin} spacing={5}>
        {newsPg.map((news) => {
          return (
            <Grid item key={uuidv4()}>
              <NewsCard
                heading={news.heading || ""}
                source={news.source_name || ""}
                description={news.description || ""}
                imageURL={news.imageURL || ""}
                articleLink={news.articleLink || ""}
              />
            </Grid>
          );
        })}
      </Grid>

      <Pagination
        count={50}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};

export default News;
