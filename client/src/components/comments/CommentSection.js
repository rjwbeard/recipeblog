import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { fetchComments, postComment } from "../../apis/comments";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

const CommentSection = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { user, isAuthenticated } = useAuth0();

  const loadComments = async () => {
    const commentsData = await fetchComments();
    setComments(commentsData);
    console.log(commentsData);
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(commentText, user.nickname, user.sub, recipeId);
    loadComments();
    setCommentText("");
  };

  const renderCommentForm = (isAuthenticated) => {
    return (
      isAuthenticated && (
        <div>
          <CommentForm
            text={commentText}
            setCommentText={setCommentText}
            onSubmit={handleSubmit}
            userNickname={user.nickname}
            userId={user.sub}
            recipeId={recipeId}
          />
        </div>
      )
    );
  };

  const filterComments = (commentArray, recipeId) => {
    console.log(commentArray, recipeId);
    const filteredComments = commentArray.filter(
      (r) => parseInt(r.recipeId) === recipeId
    );
    return filteredComments;
  };

  const filteredComments = filterComments(comments, recipeId);
  console.log(filteredComments);
  const renderComments = (commentArray) => {
    const renderedComments = [...commentArray].reverse().map((c, i) => {
      return (
        <div key={i}>
          <CommentCard user={c.userNickname} text={c.text} date={c.date} />
        </div>
      );
    });
    return renderedComments;
  };

  return (
    <div className="CommentSection">
      {renderCommentForm(isAuthenticated)}
      {renderComments(filteredComments)}
    </div>
  );
};

export default CommentSection;
