import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Cloths from "./components/Cloths.tsx";
import Electronics from "./components/Electronics.tsx";
import Profile from "./components/Profile.tsx";
import ProductPage from "./components/ProductPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cloths" element={<Cloths />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/electronics/product-page" element={<ProductPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
