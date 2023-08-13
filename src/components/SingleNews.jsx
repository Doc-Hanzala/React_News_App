const SingleNews = ({
  title,
  points,
  num_comments,
  objectID,
  author,
  url,
  removeStory,
}) => {
  return (
    <div className="single-news">
      <h3>{title}</h3>
      <p>
        {points} points by <span> {author} </span>
      </p>
      <p> {num_comments} no of comments</p>
      <a target="_blank" href={url}>
        read more
      </a>
      <button onClick={()=> removeStory(objectID)} className="btn">remove story</button>
    </div>
  );
};

export default SingleNews;
