import axios from "./index";
const { v4: uuidv4 } = require("uuid");

export const fetchComments = async () => {
  const response = await axios.get("/comments");
  const comments = response.data;
  return comments;
};

export const postComment = async (text, userNickname, userId, recipeId) => {
  const formData = {
    id: uuidv4(),
    text: text,
    userNickname: userNickname,
    userId: userId,
    recipeId: parseInt(recipeId),
    date: new Date().toLocaleString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  };

  const response = await axios
    .post("/comments/", { ...formData })
    .then((response) => console.log(response))
    .catch((error) => console.log(error.response.data));

  return response;
};
