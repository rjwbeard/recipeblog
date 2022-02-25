const CommentCard = ({ user, text, date: rawDate }) => {
  const date = new Date(rawDate).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="CommentCard">
      <header className="CommentCard_header">{user}</header>
      <div className="CommentCard_date">{date}</div>
      <p className="CommentCard_text">{text}</p>
    </div>
  );
};

export default CommentCard;
