import axios from "./index";

export const fetchUsers = async () => {
  const response = await axios.get("/users");
  const users = response.data;
  return users;
};
