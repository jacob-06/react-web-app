import React from "react";

function ProductCard(props) {
  return (
    <div className="contact-card product">
      <h3>{props.product}</h3>
      <p style={{ display: props.price ? "block" : "none" }}>
        price : {props.price}
      </p>
      <p style={{ color: !props.description && "#888888" }}>
        {props.description}
      </p>
    </div>
  );
}

export default ProductCard;
