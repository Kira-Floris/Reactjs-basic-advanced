import React,{ useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpg";
import { useFetch } from "../../9-customHooks/setup/2-useFetch";
const url = "https://jsonplaceholder.typicode.com/photos";

// React.memo for rerendering a list, checking changes only, checks props
// useCallBack for rerendereing a single item without rerendering the while list
// useMemo checks values without rerendering

// const calculateMostExpensive=(data)=>{
//   return (data.reduce((total, item)=>{
//     const price = item.fields.price;
//     if(price>=total){
//       total=price;
//     }
//     return total;
//   },0)/100);
// }

const Index = () => {
  const [count, setCount] = useState(0);
  const { products } = useFetch(url);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(()=>{
    setCart(cart+1);
  }, [cart])

// const mostExpensive=useMemo(()=>calculateMostExpensive(products),[products,])

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1 style={{marginTop:'3rem'}}>cart:{cart}</h1>
      {/* <h1>Most expensive:{mostExpesnsive}</h1> */}
      <h2>products</h2>
      <BigList products={products} addToCart={addToCart} />
    </div>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  // console.log('big list called')
  return (
    <section className="products">
      {products.map((product) => {
        return <Product key={product.id} {...product} addToCart={addToCart} />;
      })}
    </section>
  );
});

const Product = ({ title, url, addToCart }) => {
  const image = url && url;
// console.count('single item called')
  return (
    <article className="product">
      <img src={image || defaultImage} alt={title || "default"} />
      <h3>{title}</h3>
      <button className='btn' onClick={addToCart}>Add To cart</button>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
Product.defaultProps = {
  title: "default",
  url: defaultImage
};

export default Index;
