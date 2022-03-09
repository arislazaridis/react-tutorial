import React from "react";
import "./fetchData.css";

function DisplayFetchData(props) {
  const { fetchData } = props;
  console.log(fetchData);

  return (
    <div className="displayData">
      {fetchData ? (
        <table>
          <thead>
            <th>PostId</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {fetchData.map((el) => {
              return (
                <tr key={el.email}>
                  <td>{el.postId}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
}

export default DisplayFetchData;
