import { useState, useEffect } from "react";
import axios from "axios";

const useDataFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  useEffect(() => {
    if (id === 1) {
      setId("");
    } else {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          console.log(res);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idFromButtonClick]);

  return handleClick, posts, idFromButtonClick, setId, id;
};

export default useDataFetch;
