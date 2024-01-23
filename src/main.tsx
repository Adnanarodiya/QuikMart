import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  // Params,
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
import NotFound from "./NotFound.tsx";
import { QueryData } from "@supabase/supabase-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BuyItNow from "./components/BuyItNow.tsx";

// async function fetchProduct({ params }: { params: Params<string> }) {
//   if (!params.productId) throw new Response("Not Found", { status: 404 });

//   const { data, error } = await supabase
//     .from("product")
//     .select("id, mrp, title,category,img")
//     .eq("id", +params.productId)
//     .single();

//   if (error) throw new Response("Not Found", { status: 404 });

//   return data;
// }

// TODO: Extract this into a queries.ts file
const cartQuery = supabase.from("cart").select(
  `
    id,
    user_id,
    quantity,
    product (
      title,
      mrp,
      img
    )
  `
);
export type CartItems = QueryData<typeof cartQuery>;

async function fetchCart() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await cartQuery.eq("user_id", user.id);

  if (error) throw new Response("Not Found", { status: 404 });

  return data;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} loader={fetchCart}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/profile" element={<Profile />} />
      <Route
        path="/product/:productId"
        element={<ProductPage />}
        // loader={fetchProduct}
        errorElement={<NotFound />}
      />
      <Route path="/mensclothing" element={<MensClothing />} />
      <Route path="/womensclothing" element={<WomensClothing />} />
      <Route path="/jewelary" element={<Jewelry />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/buyitnow" element={<BuyItNow />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);
