import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { CartItems } from "./main";

export default function Layout() {
  const cart = useLoaderData() as CartItems;
  return (
    <div>
      <Toaster />
      <Header cart={cart} />
      <Outlet />
    </div>
  );
}
