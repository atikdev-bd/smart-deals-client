import React, { use } from "react";
import ProductCard from "../ProductCard/ProductCard";

const RecentProducts = ({ recentProductsPromise }) => {
  const latestProducts = use(recentProductsPromise);

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-4xl text-center mt-6 font-bold">
        Recent <span className="text-primary">Products</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {latestProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
