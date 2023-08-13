import SingleNews from "./SingleNews";

const AllNews = ({ news, removeStory,dispatch }) => {
  // const {title,points,num_comments,objectID} = news
  return (
    <div className="all-news">
      {news.map((singleNews) => {
        return (
          <SingleNews
            key={singleNews.objectID}
            {...singleNews}
            removeStory={removeStory}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default AllNews;
