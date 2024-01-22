import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { useUser } from "./lib/helper/useUser";
import { useState } from "react";

import { CartPop } from "./cart";
import SideBar from "./sideBar";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "./lib/helper/supabaseClient";
import { QueryData } from "@supabase/supabase-js";

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

export default function Header() {
  const user = useUser();
  const { data: cart } = useQuery({
    queryKey: ["cart", user?.id],
    async queryFn({ queryKey: [, uid] }) {
      if (!uid) throw new Error();
      const { data, error } = await cartQuery.eq("user_id", uid);
      if (error) throw error;
      return data;
    },
  });
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClicked = () => {
    setIsCart(!isCart);
  };

  return (
    <div className="navbar bg-base-100 sticky inset-0 z-10 backdrop-blur-md bg-opacity-80 backdrop-saturate-200 shadow-lg shadow-black/60 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {isOpen && <SideBar handleClick={handleClick} />}
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          QuikMart
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div
              tabIndex={0}
              role="button"
              className=" indicator"
              onClick={handleClicked}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {!user && "0"}

                {cart?.reduce((acc, item) => {
                  return acc + item.quantity!;
                }, 0)}
              </span>
            </div>
          </div>
          {isCart && (
            <CartPop
              cart={cart ?? []}
              handleClicked={handleClicked}
              isCart={isCart}
            />
          )}
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between" to="/profile">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>
                  <SignUp />
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <a
            className="btn bg-black text-white hover:bg-black/80"
            onClick={() => navigate("/")}
          >
            <SignUp />
          </a>
        )}
      </div>
    </div>
  );
}
