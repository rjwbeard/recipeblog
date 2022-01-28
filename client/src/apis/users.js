import axios from "./index";
// const { v4: uuidv4 } = require("uuid");

export const fetchUsers = async () => {
  const response = await axios.get("/users");
  const users = response.data;
  return users;
};

export const addUser = async (id, nickname) => {
  const formData = {
    id: id,
    nickname: nickname,
    favoriteRecipes: [],
  };

  const response = await axios
    .post("/users/", { ...formData })
    .then((response) => console.log(response))
    .catch((error) => console.log(error.response.data));

  return response;
};
