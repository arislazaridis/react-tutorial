import React, { useState, useEffect } from "react";
import axios from "axios";
import useDataFetch from "./useDataFetch";

function DataFetching(props) {
  //   const [posts, setPosts] = useState([]);
  //   const [id, setId] = useState(1);
  //   const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  //   const handleClick = () => {
  //     setIdFromButtonClick(id);
  //   };
  //   useEffect(() => {
  //     if (id === 1) {
  //       setId("");
  //     } else {
  //       axios
  //         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //         .then((res) => {
  //           console.log(res);
  //           setPosts(res.data);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   }, [idFromButtonClick]);

  const { handleClick, posts, setId, id } = useDataFetch();

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Find Title
      </button>
      {/* <div>{posts.title}</div> */}
    </div>
  );
}

export default DataFetching;


