import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const BidsProduct = () => {
  const { user } = useContext(AuthContext);
  const [myBids, setMyBids] = useState([]);
  console.log(myBids);
  useEffect(() => {
    fetch(`http://localhost:3000/bids?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyBids(data);
      });
  }, [user?.email]);

  const handleBidDelete = (id) => {
    fetch(`http://localhost:3000/bids/${id} `, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Bids Deleted Successfully");
          const remainingBids = myBids.filter((bid) => bid._id !== id);
          const sortedBids = remainingBids.sort(
            (a, b) => b.bid_price - a.bid_price
          );
          setMyBids(sortedBids);
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl text-center mt-6 font-bold mb-2 ">
        MY Bids:
        <span className="text-primary">{myBids.length}</span>
      </h1>
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
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y">
            {myBids.map((bid, index) => (
              <tr className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>

                {/* Product */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-md" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {bid.product_name}
                      </p>
                      <p className="text-xs text-gray-500">{bid?.min_price}</p>
                    </div>
                  </div>
                </td>

                {/* Seller */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full">
                      <img
                        className="w-28 rounded-full"
                        src={bid.buyer_image}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {bid.buyer_name}
                      </p>
                      <p className="text-xs text-gray-500">{bid.buyer_email}</p>
                    </div>
                  </div>
                </td>

                {/* Bid Price */}
                <td className="px-4 py-3 text-sm font-medium text-gray-800">
                  {bid.bid_price}
                </td>
                <td>
                  <p>pending</p>
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleBidDelete(bid._id)}
                      className="px-3 py-1 text-xs rounded border border-red-500 text-red-600 hover:bg-red-50"
                    >
                      Delete Bid
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidsProduct;
