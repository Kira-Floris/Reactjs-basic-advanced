import React from "react";

// renders on all the page

const UseEffectBasics = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
      // console.log(value)
    }
  },[value]);
  console.log("render component");
  return (
    <>
      <h1>useEffect Basics</h1>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
