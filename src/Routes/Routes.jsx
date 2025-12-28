import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyProducts from "../components/MyProducts/MyProducts";
import BidsProduct from "../components/BidsProduct/BidsProduct";
import PrivetRoutes from "./PrivetRoutes";
import CreateProduct from "../components/CreateProduct/CreateProduct";

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
    ],
  },
]);
