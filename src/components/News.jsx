import { useEffect, useReducer } from "react";
import Loading from "./Loading";
import AllNews from "./AllNews";
import Search from "./Search";

const initialState = {
  status: "loading",
  news: [],
  query: "typescript",
  page: 0,
  nbPages: 0,
};

const reducer = (state, action) => {
  const { type, payLoad } = action;

  if (type === "SET_NEWS") {
    return {
      ...state,
      status: "ready",
      news: payLoad.news,
      nbPages: payLoad.nbPages,
    };
  }
  if (type === "HANDLE_SEARCH") {
    return { ...state, query: payLoad };
  }
  if (type === "REMOVE_STORY") {
    const upatedNews = state.news.filter((news) => news.objectID !== payLoad);
    return { ...state, news: upatedNews, page: 0 };
  }
};

const News = () => {
  const [{ status, news, query, page, nbPages }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //   fetching news
  const getNews = async () => {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
    );
    const data = await response.json();
    dispatch({
      type: "SET_NEWS",
      payLoad: { news: data.hits, nbPages: data.nbPages },
    });
  };

  //   function for searching news
  const handleSearch = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payLoad: query });
  };

  //   removing story
  const removeStory = (id) => {
    dispatch({ type: "REMOVE_STORY", payLoad: id });
  };

  //   useEffect
  useEffect(() => {
    getNews();
  }, [query]);

  return (
    <div className="news">
      <Search query={query} handleSearch={handleSearch} />
      {status === "loading" && <Loading />}
      {status === "ready" && (
        <AllNews news={news} removeStory={removeStory} dispatch={dispatch} />
      )}
    </div>
  );
};

export default News;
