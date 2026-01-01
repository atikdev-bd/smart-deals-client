import React from "react";
import { Link } from "react-router";

const CreateProduct = () => {
  const option = (
    <>
      <option value="electronics">Electronics</option>
      <option value="fashion">Fashion</option>
      <option>Furniture</option>
      <option>Home & Living</option>
      <option>Kitchen & Dining</option>
      <option>Beauty & Personal Care</option>
      <option>Health & Wellness</option>
      <option>Grocery & Essentials</option>
      <option>Sports & Outdoors</option>
      <option>Toys & Baby Products</option>
      <option>Books & Education</option>
      <option>Music</option>
      <option>Gaming</option>
      <option>Mobile Accessories</option>
      <option>Computer Accessories</option>
      <option>Home Appliances</option>
      <option>Automotive</option>
      <option>Tools & Hardware</option>
      <option>Office Supplies</option>
      <option>Stationery</option>
      <option>Pet Supplies</option>
      <option>Gardening & Plants</option>
      <option>Gift Items</option>
      <option>Handicrafts</option>
      <option>Travel & Luggage</option>
      <option>Lighting & Electrical</option>
      <option>Cleaning Supplies</option>
      <option>Storage & Organization</option>
      <option>Safety & Security</option>
      <option>Industrial & Machinery</option>
      <option>Wholesale Products</option>
    </>
  );

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const minPrice = e.target.minPrice.value;
    const maxPrice = e.target.maxPrice.value;
    const condition = e.target.condition.value;
    const productImg = e.target.url.value;
    const contact = e.target.contact.value;
    const sellerName = e.target.sellerName.value;
    const sellerEmail = e.target.sellerEmail.value;
    const sellerImage = e.target.sellerImage.value;
    const location = e.target.location.value;
    const usingTime = e.target.usingTime.value;
    const description = e.target.description.value;

    const ProductInfo = {
      title,
      category,
      minPrice,
      maxPrice,
      condition,
      productImg,
      sellerName,
      contact,
      sellerEmail,
      sellerImage,
      location,
      usingTime,
      description,
    };

    console.log(ProductInfo);
  };

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
        <form
          onSubmit={handleCreateProduct}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Title */}
          <div>
            <h1>
              <label className="label">Title</label>
            </h1>
            <input
              type="title"
              name="title"
              placeholder="e.g. Yamaha FZ Guitar for Sale"
              className="input"
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">Category</label>
            <select name="category" className="input">
              {option}
            </select>
          </div>

          {/* Min Price */}
          <div>
            <label className="label">Min Price You want to Sale ($)</label>
            <input
              type="number"
              name="minPrice"
              placeholder="e.g. 18.5"
              className="input"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="label">Max Price You want to Sale ($)</label>
            <input
              type="number"
              name="maxPrice"
              placeholder="Optional"
              className="input"
            />
          </div>

          {/* Condition */}
          <div>
            <label className="label">Product Condition</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="condition" value="brand new" />
                Brand New
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="condition" value="used" />
                Used
              </label>
            </div>
          </div>

          {/* Usage Time */}
          <div>
            <label className="label">Product Usage Time</label>
            <input
              type="text"
              name="usingTime"
              placeholder="e.g. 1 year 3 month"
              className="input"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label">Product Image URL</label>
            <input
              type="Url"
              name="url"
              placeholder="https://..."
              className="input"
            />
          </div>

          {/* Seller Name */}
          <div>
            <label className="label">Seller Name</label>
            <input
              type="text"
              name="sellerName"
              placeholder="e.g. Artisan Roasters"
              className="input"
            />
          </div>

          {/* Seller Email */}
          <div>
            <label className="label">Seller Email</label>
            <input
              type="email"
              name="sellerEmail"
              placeholder="email@example.com"
              className="input"
            />
          </div>

          {/* Seller Contact */}
          <div>
            <label className="label">Seller Contact</label>
            <input
              type="number"
              name="contact"
              placeholder="+880..."
              className="input"
            />
          </div>

          {/* Seller Image */}
          <div>
            <label className="label">Seller Image URL</label>
            <input
              type=" url"
              name="sellerImage"
              placeholder="https://..."
              className="input"
            />
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, Country"
              className="input"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="label">
              Simple Description about your Product
            </label>
            <textarea
              rows="4"
              name="description"
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
