import axios from "./index";

export const fetchComments = async () => {
  const response = await axios.get("/comments");
  const comments = response.data;
  return comments;
};

export const postComment = async (formValues) => {
  const response = await axios
    .post("/comments/add", { ...formValues })
    .then((response) => console.log(response))
    .catch((e) => console.error(e.response.data));
  return response;
};
