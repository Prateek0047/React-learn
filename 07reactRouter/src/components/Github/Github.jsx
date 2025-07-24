import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() { 
  const data = useLoaderData();
  // const [data, setData] = useState([]);        //another method
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Prateek0047")
      .then((response) => response.json())
      .then((data2) => {
        console.log(data2);
        setData2(data2);
      });
  }, []);

  return (
    <div className="text-3xl font-serif bg-red-400 p-4">
      Github followers: {data.followers}
      <img src={data2.avatar_url} alt="Github pfp" width={150} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
