import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="card bg-base-100 w-full mt-16 shadow-sm hover:shadow-xl duration-300">
      <figure>
        <img
          className="w-108 h-[276.4px] px-2 py-4 border border-amber-400  rounded-2xl"
          src={product.image}
          alt={product.category}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title} <span>[{product.usage}]</span>
        </h2>
        <p>
          Price: <span className="font-bold text-lg">${product.price_max}</span>
        </p>
        <div className="card-actions">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
