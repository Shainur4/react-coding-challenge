import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/productDetail/:prodId", element: <ProductDetail /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
