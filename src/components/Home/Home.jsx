import React, { Suspense } from "react";
import { AuthContext } from "../../context/AuthContext";
import Banner from "../Header/Banner";
import RecentProducts from "../RecentProducts/RecentProducts";

const recentProductPromise = fetch(
  "http://localhost:3000/recent-products",
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <RecentProducts
          recentProductsPromise={recentProductPromise}
        ></RecentProducts>
      </Suspense>
    </div>
  );
};

export default Home;
