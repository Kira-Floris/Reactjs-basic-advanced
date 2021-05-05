import { useState, useEffect } from "react";
import Product from "./Product";
import { useFetch } from "../../9-customHooks/setup/2-useFetch";
const url = "https://jsonplaceholder.typicode.com/photos";

const Index = () => {
  const { products } = useFetch(url);
  console.log(products)
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;