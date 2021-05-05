import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpg";

const Product = ({ title, url }) => {
  // url takes the image url if the image exists;
  // const url = image && image.url;
  // <img src={url||defaultImage} alt={name||'default'}/>
  const image = url && url;

  return (
    <article className="product">
      <img src={image || defaultImage} alt={title || "default"} />
      <h3>{title}</h3>
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

export default Product;
