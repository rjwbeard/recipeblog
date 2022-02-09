const CommentCard = ({ user, text, date }) => {
  return (
    <div className="CommentCard">
      <header className="CommentCard_header">{user}</header>
      <div className="CommentCard_date">{date}</div>
      <p className="CommentCard_text">{text}</p>
    </div>
  );
};

export default CommentCard;
