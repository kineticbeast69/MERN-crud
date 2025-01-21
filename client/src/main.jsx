import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// all the pages and components are here
import "./index.css";
import App from "./App.jsx";
import AddPage from "./pages/addPage.jsx";
import UpdatePage from "./pages/updatePage.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <AddPage />,
  },
  {
    path: "/update/:userID",
    element: <UpdatePage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <Toaster position={"top-center"} />
  </StrictMode>
);
