import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import SingleProductCard from "./SingleProductCard";

const AllProducts = () => {
  const allProducts = useLoaderData();

  console.log(allProducts);

  return (
    <div>
      <h1 className="text-center text text-4xl  mt-6 font-bold">
        All <span className="text-primary">Product</span>
      </h1>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={<h1>Loading....</h1>}>
          {allProducts.map((product) => (
            <SingleProductCard
              key={product._id}
              product={product}
            ></SingleProductCard>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default AllProducts;
