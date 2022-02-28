import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { fetchComments, postComment } from "../../apis/comments";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

const CommentSection = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const commentRecipeId = parseInt(recipeId);

  const loadComments = async () => {
    const commentsData = await fetchComments();
    setComments(commentsData);
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userNickname = user.nickname;
    const userId = user.sub;
    const date = new Date();
    console.log(date);
    await postComment({
      commentText,
      userNickname,
      userId,
      commentRecipeId,
      date,
    }).then(
      () => {
        loadComments();
        setCommentText("");
      },
      (e) => console.error(e)
    );
  };

  const renderCommentForm = (isAuthenticated) => {
    return (
      isAuthenticated && (
        <div>
          <CommentForm
            commentText={commentText}
            setCommentText={setCommentText}
            onSubmit={handleSubmit}
            userNickname={user.nickname}
            userId={user.sub}
            commentRecipeId={commentRecipeId}
          />
        </div>
      )
    );
  };

  const filterComments = (commentArray, commentRecipeId) => {
    const filteredComments = commentArray.filter((r) => {
      return parseInt(r.commentRecipeId) === commentRecipeId;
    });
    return filteredComments;
  };

  const filteredComments = filterComments(comments, commentRecipeId);

  const renderComments = (commentArray) => {
    const renderedComments = [...commentArray].reverse().map((c, i) => {
      return (
        <div key={i}>
          <CommentCard
            user={c.userNickname}
            text={c.commentText}
            date={c.date}
          />
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
