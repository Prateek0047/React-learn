import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return <div className="bg-red-400 text-3xl p-4 font-semibold">User: {userid}</div>;
}

export default User;
