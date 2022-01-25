import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { fetchComments } from "../../apis/comments";
import { postComment } from "../../apis/comments";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

const CommentList = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { user } = useAuth0();

  const loadComments = async () => {
    const commentsData = await fetchComments();
    setComments(commentsData);
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    postComment(commentText, user.nickname, recipeId, date);
    loadComments();
    setCommentText("");
  };

  const { isAuthenticated } = useAuth0();
  const renderCommentForm = (isAuthenticated) => {
    return (
      isAuthenticated && (
        <div>
          <CommentForm
            text={commentText}
            setCommentText={setCommentText}
            onSubmit={handleSubmit}
            userName={user.nickname}
            recipeId={recipeId}
          />
        </div>
      )
    );
  };

  const filterComments = (commentArray, recipeId) => {
    const filteredComments = commentArray.filter(
      (r) => r.recipeId === recipeId
    );
    return filteredComments;
  };

  const filteredComments = filterComments(comments, recipeId);

  const renderComments = (commentArray) => {
    const renderedComments = [...commentArray].reverse().map((c, i) => {
      return (
        <div key={i} className="comment-list">
          <CommentCard user={c.userName} text={c.text} date={c.date} />
        </div>
      );
    });
    return renderedComments;
  };

  return (
    <div>
      <div>{renderCommentForm(isAuthenticated)}</div>
      <div>{renderComments(filteredComments)}</div>
    </div>
  );
};

export default CommentList;
