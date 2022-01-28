const CommentForm = ({ text, setCommentText, onSubmit }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCommentText(value);
  };

  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <label className="comment-form-header">Leave a Comment</label>
      <textarea
        className="comment-input"
        value={text}
        type="text"
        onChange={handleInputChange}
      ></textarea>
      <input className="comment-submit-button" type="submit" value="Submit" />
    </form>
  );
};

export default CommentForm;
