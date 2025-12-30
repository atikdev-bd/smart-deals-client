import React from "react";
import { Link } from "react-router";

const CreateProduct = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <Link to="/" className="text-sm text-gray-500 mb-4 hover:underline">
          ← Back To Products
        </Link>
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create <span className="text-purple-600">A Product</span>
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Title */}
          <div>
            <h1>
              <label className="label">Title</label>
            </h1>
            <input
              type="text"
              placeholder="e.g. Yamaha FZ Guitar for Sale"
              className="input"
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">Category</label>
            <select className="input">
              <option>Select a Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Music</option>
            </select>
          </div>

          {/* Min Price */}
          <div>
            <label className="label">Min Price You want to Sale ($)</label>
            <input type="number" placeholder="e.g. 18.5" className="input" />
          </div>

          {/* Max Price */}
          <div>
            <label className="label">Max Price You want to Sale ($)</label>
            <input type="number" placeholder="Optional" className="input" />
          </div>

          {/* Condition */}
          <div>
            <label className="label">Product Condition</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="condition" />
                Brand New
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="condition" />
                Used
              </label>
            </div>
          </div>

          {/* Usage Time */}
          <div>
            <label className="label">Product Usage Time</label>
            <input
              type="text"
              placeholder="e.g. 1 year 3 month"
              className="input"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label">Product Image URL</label>
            <input type="text" placeholder="https://..." className="input" />
          </div>

          {/* Seller Name */}
          <div>
            <label className="label">Seller Name</label>
            <input
              type="text"
              placeholder="e.g. Artisan Roasters"
              className="input"
            />
          </div>

          {/* Seller Email */}
          <div>
            <label className="label">Seller Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input"
            />
          </div>

          {/* Seller Contact */}
          <div>
            <label className="label">Seller Contact</label>
            <input type="text" placeholder="+880..." className="input" />
          </div>

          {/* Seller Image */}
          <div>
            <label className="label">Seller Image URL</label>
            <input type="text" placeholder="https://..." className="input" />
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="label">Location</label>
            <input type="text" placeholder="City, Country" className="input" />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="label">
              Simple Description about your Product
            </label>
            <textarea
              rows="4"
              placeholder="Write something about your product..."
              className="input"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90"
            >
              Create A Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
