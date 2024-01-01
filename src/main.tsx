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
import Profile from "./components/Profile.tsx";
import ProductPage from "./components/ProductPage.tsx";
import MensClothing from "./components/pages/MensClothing.tsx";
import WomensClothing from "./components/pages/WomensClothing.tsx";
import Jewelry from "./components/pages/Jewelry.tsx";
import Electronics from "./components/pages/Electronics.tsx";
import SignUp from "./components/SignUp.tsx";
import { supabase } from "./components/lib/helper/supabaseClient.ts";

async function fetchAllProds() {
  const { data, error } = await supabase
    .from("product")
    .select("id, mrp, title,category");

  if (error) throw error;
  return data;
}
async function fetchMensClothing() {
  const { data, error } = await supabase
    .from("product")
    .select("id, mrp, title,category")
    .eq("category", "MensClothing");

  if (error) throw error;
  return data;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} loader={fetchAllProds} />
      <Route path="/about" element={<About />} />
      <Route path="/cloths" element={<Cloths />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/electronics/product-page" element={<ProductPage />} />
      <Route
        path="/mensclothing"
        element={<MensClothing />}
        loader={fetchMensClothing}
      />
      <Route path="/womensclothing" element={<WomensClothing />} />
      <Route path="/jewelary" element={<Jewelry />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/sg" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
