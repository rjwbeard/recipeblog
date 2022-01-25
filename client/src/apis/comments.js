import axios from "./index";
const { v4: uuidv4 } = require("uuid");

export const fetchComments = async () => {
  const response = await axios.get("/comments");
  const comments = response.data;
  return comments;
};

export const postComment = async (text, userName, recipeId, date) => {
  const formData = {
    id: uuidv4(),
    text: text,
    userName: userName,
    recipeId: parseInt(recipeId),
    date: date,
  };

  const response = await axios
    .post("/comments/", { ...formData })
    .then((response) => console.log(response))
    .catch((error) => console.log(error.response.data));

  return console.log(response);
};
