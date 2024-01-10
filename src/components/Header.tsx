import { Link, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { useUser } from "./lib/helper/useUser";
import { useState } from "react";
import { useCartItems } from "./lib/helper/useCartItems";

import { CartPop } from "./cart";

export default function Header() {
  const user = useUser();
  const cart = useCartItems(user?.id);
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
          {isOpen && (
            <div className="fixed top-0 left-0 h-screen w-full md:w-96  bg-black text-white z-10 ">
              <div className="flex justify-end p-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost bg-gray-700/40 hover:bg-gray-700/60 "
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="  text-base leading-9 w-full"
                onClick={handleClick}
              >
                <li className="hover:bg-white hover:text-black px-8">
                  <Link to="/">ALL</Link>
                </li>
                <li className="hover:bg-white hover:text-black px-8">
                  <Link to="/electronics">ELECTRONICS</Link>
                </li>
                <li className="hover:bg-white hover:text-black px-8">
                  <Link to="/jewelary">JEWELRY</Link>
                </li>
                <li className="hover:bg-white hover:text-black px-8">
                  <Link to="/mensclothing">MEN'S CLOTHING</Link>
                </li>
                <li className="hover:bg-white hover:text-black px-8">
                  <Link to="/womensclothing">WOMEN'S CLOTHING</Link>
                </li>
                <li className="hover:bg-white hover:text-black px-8">
                  <Link to="/about">ABOUT</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          QuikMart
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              {cart.map((item) => (
                <div key={item.id}>
                  <p>{item.product?.title}</p>
                </div>
              ))}
            </div>
          </div> */}
          {/* <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
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
          </div> */}
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
                {cart.reduce((acc, item) => {
                  return acc + item.quantity!;
                }, 0)}
              </span>
            </div>
          </div>
          {isCart && (
            <CartPop
              cart={cart}
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
          <a onClick={() => navigate("/")}>
            <SignUp />
          </a>
        )}
      </div>
    </div>
  );
}
