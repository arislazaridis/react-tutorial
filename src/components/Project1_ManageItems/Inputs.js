import React, { useState } from "react";

function List({ items, removeItem, clearItems, editItems }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1px 0",
            }}
          >
            <p style={{ marginRight: "10px" }}>
              <li>{title}</li>
            </p>
            <button type="button" onClick={() => removeItem(id)}>
              delete
            </button>
            <button type="button" onClick={() => editItems(id)}>
              edit
            </button>
          </div>
        );
      })}
    </div>
  );
}

//component button
function ButtonInput({ label, type }) {
  return <button>{label}</button>;
}

//component gia input
function Input({ value, handleInput }) {
  return <input value={value} onChange={handleInput} />;
}

//form inputs
function Inputs() {
  const [item, SetItem] = useState();
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: item };
          }
          return item;
        })
      );
      SetItem("");
      setEditID(null);
      setIsEditing(false);
      alert(true, "success", "value changed");
    }
    console.log(item);
    const newItem = { id: new Date().getTime().toString(), title: item };
    SetItem("");

    setList([...list, newItem]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editItems = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    SetItem(specificItem.title);
  };

  const clearItems = ({ list }) => {
    if (list.length < 1) {
      alert("No items in list");
    }
    setList([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input value={item} handleInput={(e) => SetItem(e.target.value)} />
        <ButtonInput type="submit" label="add" />
        {list.length > 0 && (
          <div>
            <List
              items={list}
              removeItem={removeItem}
              editItems={editItems}
            ></List>
          </div>
        )}
      </div>
      <button type="button" onClick={() => clearItems({ list })}>
        clear List
      </button>
    </form>
  );
}

export default Inputs;
