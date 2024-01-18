import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
interface Props {
  handleClick: VoidFunction;
}
export default function SideBar({ handleClick }: Props) {
  return createPortal(
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
    </div>,
    document.body
  );
}
