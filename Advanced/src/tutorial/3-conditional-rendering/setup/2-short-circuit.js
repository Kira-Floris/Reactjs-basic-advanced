import React from "react";

const ShortCircuit = () => {
  const [text, setText] = React.useState("t");
  const [isError, setIsError] = React.useState(false);
  // const firstvalue = text || "hello, world"; //returns a  'hello, world' if text is empty
  // const secondvalue = text && "Hello World"; //returns a value if both text and.. are not empty
  return (
    <>
    <h1>Short Circuit and Tertiary conditions</h1>
      {/* <h1>{firstvalue}</h1>
      <h1>{secondvalue}</h1> */}
      {/* {!text&&<h1>And</h1>} */}
      {/* <h1>AND: {text && "Hello, World"}</h1> */}
      <h1>OR: {text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <p>No error</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
