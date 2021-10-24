import React, { useState } from "react";

function ButtonForm({ label, type }) {
  return <button type={type}>{label}</button>;
}
function InputForm({ label, value, handleonChange, id, placeholder }) {
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} id={id} onChange={handleonChange} />
    </div>
  );
}

function Form() {
  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const handleonChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstname, username });
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="username"
        value={username}
        placeholder="username"
        id={1}
        handleonChange={(e) => handleonChange(e, setUsername)}
      />
      <InputForm
        label="firstname"
        value={firstname}
        placeholder="firstname"
        handleonChange={(e) => handleonChange(e, setFirstname)}
        id={2}
      />
      <ButtonForm type="submit" label="submit" />
    </form>
  );
}

export default Form;
