import React, { useState } from "react";

function App() {
  const [onMouse, setOnMouse] = useState(false);
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function inputOnChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function onClickHandle(event) {
    setHeadingText(name);

    event.preventDefault();
  }

  function onObject() {
    setOnMouse(true);
  }

  function offObject() {
    setOnMouse(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={onClickHandle}>
        <input
          onChange={inputOnChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: onMouse ? "black" : "white" }}
          onMouseOver={onObject}
          onMouseLeave={offObject}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
