import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOUt = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/allProducts">All Products</NavLink>
      </li>
      {user && (
        <>
          <li>
            {" "}
            <NavLink to="/myProducts">MY Products</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/myBids">My Bids</NavLink>
          </li>
        </>
      )}
      <li>
        {" "}
        <NavLink to="/createProduct">Create Product</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar lg:px-8 md:px-7 px-2 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" font-bold font-mono   md:text-3xl lg:text-4xl">
          Smart <span className="text-primary">Deals</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-mono text-[17px]">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? (
          <button onClick={handleSignOUt} className="btn">
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary text-white">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
