import React, { useEffect } from "react";
import "./fetchData.css";
import { useState } from "react";
import DisplayFetchData from "./DisplayFetchData";

function FetchData() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  const showComments = () => {
    console.log("show comments");
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(async (res) => {
        const fetchComments = await res.json();
        setDisplay(true);
        setData(
          fetchComments
            .filter((el, index) => index < 5)
            .map((el) => {
              return {
                name: el.name,
                postId: el.postId,
                email: el.email,
              };
            })
        );
      })
      .catch((er) => {
        console.log(er);
        setDisplay(false);
      });
  };

  return (
    <div className="fetchData">
      <h1>Mock Data Comments</h1>
      <button onClick={showComments}>Display</button>
      {display ? <DisplayFetchData fetchData={data} /> : null}
    </div>
  );
}

export default FetchData;
