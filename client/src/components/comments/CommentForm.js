const CommentForm = ({ text, setCommentText, onSubmit }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCommentText(value);
  };

  return (
    <form className="CommentForm" onSubmit={onSubmit}>
      <label className="CommentForm_header">Leave a Comment</label>
      <textarea
        className="CommentForm_input"
        value={text}
        type="text"
        onChange={handleInputChange}
      ></textarea>
      <input
        className="CommentForm_submit_button"
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default CommentForm;
