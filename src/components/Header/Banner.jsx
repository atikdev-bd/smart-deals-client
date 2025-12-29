import React from "react";
import { GoSearch } from "react-icons/go";

const Banner = () => {
  return (
    <div className="md:w-full h-134.75 bg-gradient-to-r from-[#ffe6fd] to-[#e0f8f5]">
      <div className="text-center pt-12">
        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold">
          Deal your{" "}
          <span className="text-primary">
            Products <br />
          </span>{" "}
          in a <span className="text-primary">Smart</span> way !
        </h1>
        <p className=" text-[16px] md:text-[20px] text-gray-600 mt-4">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>
        <div className="join bg-white shadow-lg md:w-[550px] h-[48px] mt-[78px] rounded-full ">
          <input
            className=" join-item w-full border-none px-2 focus:outline-none"
            placeholder="Search For Products, Categories..."
          />
          <button className=" btn rounded-r-full h-[48px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none">
            <GoSearch size={26} />
          </button>
        </div>
        <div className=" flex justify-center items-center gap-4 mt-8">
          <button className="btn btn-primary">Watch All Products</button>
          <button className="btn btn-primary">Post an Product</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
