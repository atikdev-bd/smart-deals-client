import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyProducts = () => {
  const { user } = useAuth();

  const [myProduct, setMyProduct] = useState([]);
 

  const axiosSecure = useAxiosSecure();


  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/products?email=${user?.email}`)
        .then((data) => {
          
          setMyProduct(data.data);
        })

        .then(() => {});
    }
  }, [user, axiosSecure]);

  const handleDeleteProduct = (id) => {
 
    axiosSecure
      .delete(`/product/${id}`)
      .then((data) => {
        if (data?.data?.deletedCount) {
          const afterDeleteProducts = myProduct.filter((p) => p?._id !== id);
          const sortedProducts = afterDeleteProducts.sort(
            (a, b) => b.price_max - a.price_max,
          );
          setMyProduct(sortedProducts);
         
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Deleted Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "top-right",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        My Products: <span className="text-purple-600">10</span>
      </h1>

      <div className="bg-white max-w-11/12 mx-auto shadow rounded-xl p-4 overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3">SL No</th>
              <th className="p-3">Image</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {myProduct.map((product, index) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-md">
                    <img src={product.image} alt="" />
                  </div>
                </td>
                <td className="p-3">{product.title}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.price_max}</td>
                <td className="p-3">
                  <span className="px-3 py-1 text-sm bg-yellow-200 text-yellow-700 rounded-full">
                    {product.status}
                  </span>
                </td>
                <td className="p-3 flex justify-center space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
                  >
                    Delete
                  </button>
                  <button className="px-3 py-1 bg-green-500 text-white rounded-md text-sm">
                    Make Sold
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
