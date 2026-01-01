import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyProducts from "../components/MyProducts/MyProducts";
import BidsProduct from "../components/BidsProduct/BidsProduct";
import PrivetRoutes from "./PrivetRoutes";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import AllProducts from "../components/AllProducts/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>Error occurred!</div>,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myProducts",
        Component: MyProducts,
      },
      {
        path: "/allProducts",
        loader: () => fetch("http://localhost:3000/products"),
        Component: AllProducts,
      },
      {
        path: "/createProduct",
        element: (
          <PrivetRoutes>
            {" "}
            <CreateProduct />{" "}
          </PrivetRoutes>
        ),
      },
      {
        path: "/myBids",
        element: (
          <PrivetRoutes>
            {" "}
            <BidsProduct />{" "}
          </PrivetRoutes>
        ),
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/product/${params.id}`),
        element: (
          <PrivetRoutes>
            <ProductDetails></ProductDetails>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
