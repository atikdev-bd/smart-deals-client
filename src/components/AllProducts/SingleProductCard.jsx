import React from "react";
import { Link } from "react-router";

const SingleProductCard = ({ product }) => {
  const { _id } = product;
  // console.log(product);
  return (
    <div>
      <div className="card bg-base-100 w-full mt-16 shadow-sm hover:shadow-xl duration-300">
        <figure>
          {product?.image ? (
            <img
              className="w-108 h-[276.4px] px-2 py-4 border border-amber-400 rounded-2xl"
              src={product.image}
              alt={product.category}
            />
          ) : (
            <div className="w-108 h-[276.4px] px-2 py-4 border border-amber-400 rounded-2xl flex items-center justify-center bg-gray-100">
              No Image
            </div>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.title} <span>[{product.condition}]</span>
          </h2>
          <p>
            Price:{" "}
            <span className="font-bold text-lg">${product.price_max}</span>
          </p>
          <div className="card-actions">
            <Link to={`/product/${_id}`} className="btn btn-primary w-full">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
