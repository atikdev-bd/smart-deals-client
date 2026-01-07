import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Banner from "../Header/Banner";
import RecentProducts from "../RecentProducts/RecentProducts";

const recentProductPromise = fetch(
  "http://localhost:3000/recent-products"
).then((res) => res.json());

const Home = () => {
  const user = useContext(AuthContext);

  console.log(user.user);

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
