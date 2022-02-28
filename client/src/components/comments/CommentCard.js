const CommentCard = ({ user, text, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="CommentCard">
      <header className="CommentCard_header">{user}</header>
      <div className="CommentCard_date">{formattedDate}</div>
      <p className="CommentCard_text">{text}</p>
    </div>
  );
};

export default CommentCard;
