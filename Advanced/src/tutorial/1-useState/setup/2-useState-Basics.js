import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('helloWorld'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "hello, world") {
      setText("random title");
    } else {
      setText("hello, world");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
