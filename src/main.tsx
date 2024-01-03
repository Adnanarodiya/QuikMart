import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Params,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Profile from "./components/Profile.tsx";
import ProductPage from "./components/ProductPage.tsx";
import MensClothing from "./components/pages/MensClothing.tsx";
import WomensClothing from "./components/pages/WomensClothing.tsx";
import Jewelry from "./components/pages/Jewelry.tsx";
import Electronics from "./components/pages/Electronics.tsx";
import { supabase } from "./components/lib/helper/supabaseClient.ts";

async function fetchAllProds() {
  const { data, error } = await supabase
    .from("product")
    .select("id, mrp, title,category,img");

  if (error) throw error;
  return data;
}
async function fetchMensClothing() {
  const { data, error } = await supabase
    .from("product")
    .select("id, mrp, title,category,img")
    .eq("category", "MensClothing");

  if (error) throw error;
  return data;
}
async function fetchJewelry() {
  const { data, error } = await supabase
    .from("product")
    .select("id, mrp, title,category,img")
    .eq("category", "jewelry");

  if (error) throw error;
  return data;
}
// eslint-disable-next-line react-refresh/only-export-components
async function fetchWomenCloth() {
  const { data, error } = await supabase
    .from("product")
    .select("id, mrp, title,category,img")
    .eq("category", "WomenCloth");

  if (error) throw error;
  return data;
}
async function fetchElectronics() {
  const { data, error } = await supabase
    .from("product")
    .select("id, mrp, title,category,img")
    .eq("category", "electronics");

  if (error) throw error;
  return data;
}
async function fetchProduct({ params }: { params: Params<string> }) {
  if (!params.productId) throw new Response("Not Found", { status: 404 });

  const { data, error } = await supabase
    .from("product")
    .select("id, mrp, title,category,img")
    .eq("id", +params.productId)
    .single();

  if (error) throw new Response("Not Found", { status: 404 });
  return data;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} loader={fetchAllProds} />
      <Route path="/about" element={<About />} />

      <Route path="/profile" element={<Profile />} />
      <Route
        path="/product/:productId"
        element={<ProductPage />}
        loader={fetchProduct}
      />
      <Route
        path="/mensclothing"
        element={<MensClothing />}
        loader={fetchMensClothing}
      />
      <Route
        path="/womensclothing"
        element={<WomensClothing />}
        loader={fetchWomenCloth}
      />
      <Route path="/jewelary" element={<Jewelry />} loader={fetchJewelry} />
      <Route
        path="/electronics"
        element={<Electronics />}
        loader={fetchElectronics}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
