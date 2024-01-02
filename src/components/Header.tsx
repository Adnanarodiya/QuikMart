import { Link } from "react-router-dom";
import SignUp from "./SignUp";

export default function Header() {
  return (
    <div className="navbar bg-base-100 sticky inset-0 z-10 backdrop-blur-md bg-opacity-80 backdrop-saturate-200 shadow-lg shadow-black/60 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/mensclothing">Men's Clothing</Link>
            </li>
            <li>
              <Link to="/womensclothing">Wonmen's Clothing</Link>
            </li>
            <li>
              <Link to="electronics">Electronic</Link>
            </li>
            <li>
              <Link to="jewelary">Jewelary</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <a>
                <SignUp />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          QuikMart
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <Link to="sg">
            <img src="/img/user.png" alt="sds" />
          </Link>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <img src="/img/cart.png" alt="" />
            <span className="badge badge-xs badge-primary indicator-item bg-slate-500"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
