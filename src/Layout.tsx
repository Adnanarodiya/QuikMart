import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <Toaster />
      <Header />
      <Outlet />
    </div>
  );
}
