// import { fetchUsers, addUser } from "./apis/users";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useState, useEffect } from "react";

const { useEffect } = require("react");

// const [users, setUsers] = useState();
// const { user, isAuthenticated } = useAuth0();

// const loadUsers = async () => {
//   const usersData = await fetchUsers();
//   setUsers(usersData);
// };

// useEffect(() => {
//   loadUsers();
// }, []);

// const isExistingUser = (userId, users) => {
//   if (isAuthenticated) {
//     users.some((u) => u.id === userId);
//   }
// };

// const createNewUser = (userId, userNickname) => {
//   if (isAuthenticated && !isExistingUser) {
//     addUser(userId, userNickname);
//   }
// };

// useEffect((user) => {
//   isExistingUser(user.sub, users);
//   createNewUser(user.sub, user.nickname);
// }, [user])

const [users, setUsers] = useState();
const { user, isAuthenticated } = useAuth0();
const userId = user.sub;

const loadUsers = async () => {
  const usersData = await fetchUsers();
  setUsers(usersData);
};

useEffect(() => {
  loadUsers();
}, []);

const onClick = (e) => {
  e.preventDefault();
  addUser(commentText, user.nickname, user.sub, recipeId);
  loadComments();
  setCommentText("");
};

const add = (isAuthenticated) => {
  return (
    isAuthenticated && (
      <div>
        <Authentication
          onClick={onClick}
          userNickname={user.nickname}
          userId={user.sub}
        />
      </div>
    )
  );
};

const filterUsers = (usersArray, userId) => {
  const filteredUsers = usersArray.filter((u) => u.userId === userId);
  return filteredUsers;
};

const filteredUsers = filterUsers(users, userId);

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
  <div className="authenticate-new-user">
    {renderComments(filteredComments)}
  </div>
);
