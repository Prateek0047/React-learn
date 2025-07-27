import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
// import UserContextProvider from "./Context/UserContextProvider";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please log in </div>;
  return <div> welcome {user.username}</div>;
}

export default Profile;
