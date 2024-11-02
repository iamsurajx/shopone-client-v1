import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./page/Home";
import Category from "./page/Category";
import Seller from "./page/Seller";
import ProductCard from "./components/ProductCard";
import Animation from "./components/Animation/Animation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories",
    element: <Category />,
  },
  {
    path: "/seller",
    element: <Seller />,
  },
  {
    path: "/product/:id",
    element: <ProductCard />,
  },
  {
    path: "/load",
    element: <Animation />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
