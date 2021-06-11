import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/newsapi/trending`)
      .then((response) => {
        const { details } = response.data;
        setNewsList(details);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <NewsContext.Provider value={[newsList, setNewsList]}>
      {children}
    </NewsContext.Provider>
  );
};
