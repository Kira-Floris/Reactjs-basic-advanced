const Book = (props) => {
  // const { title, detail} = props.book;
  const { title, detail } = props;

  const clickHandler = (e) => {
    console.log(e.target);
    alert("hello, " + title);
  };

  const complexExample = (tit) => {
    alert("hey, " + tit);
  };

  return (
    <article onMouseOver={()=>{console.log(detail)}}>
      <h2>{title.toUpperCase()}</h2>
      <h3>{detail}</h3>
      <button type="button" onDoubleClick={clickHandler}>
        More Details
      </button>
      <button type="button" onClick={() => complexExample(title)}>
        {/* when u pass args in a function, use ()=> before calling the function,
        or else it will do the action onLoad of route not on onClick event */}
        Complex
      </button>
      {props.children}
    </article>
  );
};

export default Book;