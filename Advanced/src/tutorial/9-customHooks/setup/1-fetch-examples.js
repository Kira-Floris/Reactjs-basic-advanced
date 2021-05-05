import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";
const url = "https://course-api.netlify.app/api/javascript-store-products";

const CustomHooks = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <>
      <section>
        <h1>Data</h1>
        <h2>{loading ? "loading..." : "data"}</h2>
      </section>
    </>
  );
};

export default CustomHooks;
