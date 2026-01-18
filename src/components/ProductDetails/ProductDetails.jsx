import React, { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const ProductDetails = () => {
  const { user } = useAuth();

  const openBidsModal = useRef(null);
  const [bidsProduct, setBidsProduct] = useState([]);

  const {
    _id: productId,
    title,
    price_max,
    min_price,
    condition,
    price_min,
    email,
    location,
    seller_name,
    description,
    seller_contact,
    usage,
    created_at,
    category,
  } = useLoaderData();

  /// get data with Axios

  useEffect(() => {
    axios(`http://localhost:3000/bids/${productId}`).then((data) => {
      setBidsProduct(data?.data);
    });
  }, [productId]);

  /// use useEffect of get specific bids data by id
  // useEffect(() => {
  //   fetch(`http://localhost:3000/bids/${productId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBidsProduct(data);
  //     });
  // }, [productId]);

  //  use function for showModal
  const handleOpenBidsModal = () => {
    openBidsModal.current.showModal();
  };

  // use function for get from information
  const handleBidsSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const contract = e.target.number.value;
    const ProductsBids = {
      product: productId,
      product_name: title,
      buyer_name: name,
      buyer_contact: contract,
      buyer_image: user?.photoURL,
      buyer_email: email,
      bid_price: price,
      product_min_price: min_price,
      status: "Pending",
    };

    e.target.reset();

    // save data to server side to mongodb using Post method
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(ProductsBids),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Bids Successfully");
          openBidsModal.current.close();
          ProductsBids._id = data.insertedId;
          const newBids = [...bidsProduct, ProductsBids];
          const sortedBidsPrice = newBids.sort(
            (a, b) => b.bid_price - a.bid_price,
          );
          setBidsProduct(sortedBidsPrice);
        }
      });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back */}
        <Link to="/" className="text-sm text-gray-500 mb-4 hover:underline">
          ← Back To Products
        </Link>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Image Section */}
          <div>
            <div className="w-full h-[260px] sm:h-[340px] lg:h-[420px] bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>
            {/* Description */}
            <div className="mt-2 bg-white shadow rounded-xl p-3 sm:p-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                Product Description
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                <p>
                  <span className="font-medium text-purple-600">
                    Condition:
                  </span>{" "}
                  {condition}
                </p>
                <p>
                  <span className="font-medium text-purple-600">
                    Usage Time:
                  </span>{" "}
                  {usage}
                </p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-4">
            {/* Title */}
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              {title}
            </h1>

            {/* Category */}
            <span className="inline-block text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
              {category}
            </span>

            {/* Price Card */}
            <div className="bg-white shadow rounded-xl p-4">
              <p className="text-lg sm:text-xl font-semibold text-green-600">
                {` $${price_min} - ${price_max}`}
              </p>
              <p className="text-xs text-gray-500">Price starts from</p>
            </div>

            {/* Product Details */}
            <div className="bg-white shadow rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Product Details
              </h3>
              <p className="text-sm text-gray-600 break-all">
                <span className="font-medium">Product ID:</span> {productId}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Posted:</span> {created_at}
              </p>
            </div>

            {/* Seller Info */}
            <div className="bg-white shadow rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-3">
                Seller Information
              </h3>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-medium text-gray-800">{seller_name}</p>
                  <p className="text-xs text-gray-500">{email}</p>
                </div>
              </div>

              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Location:</span> {location}
                </p>
                <p>
                  <span className="font-medium">Contact:</span> {seller_contact}
                </p>
              </div>

              <span className="inline-block mt-2 bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                On Sale
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={handleOpenBidsModal}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition"
            >
              I Want Buy This Product
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog
              ref={openBidsModal}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className=" relative modal-action">
                  <form className="" method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn absolute   -bottom-1.5 -right-0.5 mt-0  px-5 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
                      <MdClose size={20} />
                    </button>
                  </form>
                </div>
                {/* Title */}

                <h2 className="text-lg sm:text-xl font-semibold mt-4 text-gray-900 text-center mb-6">
                  Give Seller Your Offered Price
                </h2>

                {/* Form */}
                <form onSubmit={handleBidsSubmit} className="space-y-4">
                  {/* Buyer Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600">
                        Buyer Name
                      </label>
                      <input
                        type="text"
                        readOnly
                        defaultValue={user?.displayName}
                        name="name"
                        placeholder="Your name"
                        className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-gray-600">
                        Buyer Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        placeholder="Your Email"
                        className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Offered Price */}
                  <div>
                    <label className="text-sm text-gray-600">
                      Place your Price
                    </label>
                    <input
                      type="price"
                      name="price"
                      placeholder="e.g. Artisan Roasters"
                      className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {/* Contact Info */}
                  <div>
                    <label className="text-sm text-gray-600">
                      Contact Info
                    </label>
                    <input
                      type="number"
                      name="number"
                      required
                      placeholder="e.g. +1-555-1234"
                      className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                    <button
                      type="submit"
                      className="btn px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                    >
                      Submit Bid
                    </button>
                  </div>
                </form>

                {/*  */}
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Bids For This Products:
            <span className="text-purple-600 ml-2">{bidsProduct?.length}</span>
          </h2>

          {/* Table Container */}
          <div className="bg-white shadow rounded-xl overflow-x-auto">
            <table className="min-w-full border-collapse">
              {/* Table Head */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                    SL No
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                    Seller
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                    Bid Price
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y">
                {bidsProduct.map((bids, index) => (
                  <tr key={bids?._id} className="hover:bg-gray-50 transition">
                    {/* SL No */}
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {index + 1}
                    </td>

                    {/* Product */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-md" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {bids?.product_name}
                          </p>
                          <p className="text-xs text-gray-500">{`$${price_min} - ${price_max}`}</p>
                        </div>
                      </div>
                    </td>

                    {/* Seller */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full">
                          <img
                            className="w-28 rounded-full"
                            src={bids?.buyer_image}
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {bids?.buyer_name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {bids?.buyer_email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Bid Price */}
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">
                      {bids?.bid_price}
                    </td>
                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        <button className="px-3 py-1 text-xs rounded border border-green-500 text-green-600 hover:bg-green-50">
                          Accept Offer
                        </button>
                        <button className="px-3 py-1 text-xs rounded border border-red-500 text-red-600 hover:bg-red-50">
                          Reject Offer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
