const CommentCard = ({ user, text, date }) => {
  return (
    <div className="comment-card">
      <header className="comment-card-header">{user}</header>
      <div className="comment-card-date">{date}</div>
      <p className="comment-card-text">{text}</p>
    </div>
  );
};

export default CommentCard;
