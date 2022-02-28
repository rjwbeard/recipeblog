const CommentForm = ({ commentText, setCommentText, onSubmit }) => {
  const onKeyDown = async (e) => {
    if (e.keyCode === 13) {
      await onSubmit(e);
    }
  };

  return (
    <form className="CommentForm" onSubmit={async (e) => await onSubmit(e)}>
      <label className="CommentForm_header" htmlFor="CommentForm_input">
        Leave a Comment
      </label>
      <textarea
        name="CommentForm_input"
        className="CommentForm_input"
        value={commentText}
        type="text"
        onChange={(e) => setCommentText(e.target.value)}
        onKeyDown={async (e) => await onKeyDown(e)}
      ></textarea>
      <button className="CommentForm_submit_button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
