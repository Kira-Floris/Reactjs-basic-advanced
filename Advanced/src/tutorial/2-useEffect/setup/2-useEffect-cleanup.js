import React, { useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = React.useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    // when the size changes, it triggers many Events,
    // it can be prevented by return a removeEventListener of 
    // the same function, named the cleanup 
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1>UseEffect CleanUp</h1>
      <h2>Window</h2>
      <h3>{size}</h3>
    </>
  );
};

export default UseEffectCleanup;
