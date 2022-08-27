import React, { useEffect } from "react";
import NewsItem from "./newsItem";
import { useSelector } from "react-redux";
import { newsSelector } from "../../../redax/reducers/newsReducer";
import { useDispatch } from "react-redux";
import { getApiNews, deleteApiNews } from "../../../redax/actions/newsActions";

export default function MapNews() {
  const news = useSelector(newsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiNews("http://localhost:4004/news"));
  }, [news]);

  function deleteItem(e) {
    let id = e.target.id;
    dispatch(deleteApiNews(`http://localhost:4004/news/${id}`));
    dispatch(getApiNews("http://localhost:4004/news"));
  }
  return (
    <div>
      {news.length ? (
        news?.map((n, i) => {
          return <NewsItem news={n} key={i} onDelete={deleteItem} />;
        })
      ) : (
        <div style={{ color: "white" }}>There are no news...</div>
      )}
    </div>
  );
}
