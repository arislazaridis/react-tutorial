import React from "react";
import Person from "./Person";
function ListRendering() {
  const persons = [
    { id: 1, name: "aris", age: 27, nationality: "greek" },
    { id: 2, name: "kwstas", age: 32, nationality: "greek" },
    { id: 4, name: "viki", age: 21, nationality: "greek" },
    { id: 5, name: "aris", age: 29, nationality: "greek" },
    { id: 6, name: "giannis", age: 29, nationality: "greek" },
  ];

  const dataPersons = persons.map((item, index) => (
    <Person key={index.id} name={item.name} />
  ));
  return <div>{dataPersons}</div>;
}

export default ListRendering;
