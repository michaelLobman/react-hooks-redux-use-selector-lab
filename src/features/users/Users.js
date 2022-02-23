import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector(state => state.users)
  const userCount = useSelector(state => state.users.length)

  const userListItems = users.map(user => <li key={user.username}>{user.username}</li>)

  console.log(users)
  return (
    <div>
      <ul>
        Users!
        {userListItems}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
      <p>Total Users: {userCount}</p>
    </div>
  );
}

export default Users;
