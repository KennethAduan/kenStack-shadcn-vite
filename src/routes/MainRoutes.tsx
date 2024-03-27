import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
