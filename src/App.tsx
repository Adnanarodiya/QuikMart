// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// import { useCallback } from "react";
// import Asdf from "./components/asdf";

// const autoplayOptions = {
//   delay: 4000,
// };

// function App() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     Autoplay(autoplayOptions),
//   ]);

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     <>
//       <div className="navbar bg-base-300 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80   sticky inset-0 z-10  shadow-lg shadow-black/40 mb-6">
//         <div className="container">
//           <div className="navbar-start">
//             <a className="btn btn-ghost text-xl">QuikMart</a>
//           </div>

//           <div className="navbar-center hidden md:flex">
//             <ul className="menu menu-horizontal px-1">
//               <li>
//                 <a>Home</a>
//               </li>
//               <li>
//                 <details>
//                   <summary>Categoreys</summary>
//                   <ul className="p-2 w-40">
//                     <li>
//                       <a>Submenu 1</a>
//                     </li>
//                     <li>
//                       <a>Submenu 2</a>
//                     </li>
//                   </ul>
//                 </details>
//               </li>
//               <li>
//                 <a>About Us</a>
//               </li>
//             </ul>
//           </div>
//           <div className="navbar-end flex">
//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle"
//               >
//                 <div className="indicator">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                   <span className="badge badge-sm indicator-item">8</span>
//                 </div>
//               </div>
//               <div
//                 tabIndex={0}
//                 className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
//               >
//                 <div className="card-body">
//                   <span className="font-bold text-lg">8 Items</span>
//                   <span className="text-info">Subtotal: $999</span>
//                   <div className="card-actions">
//                     <button className="btn btn-primary btn-block">
//                       View cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar"
//               >
//                 <div className="w-10 rounded-full">
//                   <img
//                     alt="Tailwind CSS Navbar component"
//                     src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//                   />
//                 </div>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//               >
//                 <li>
//                   <a className="justify-between">
//                     Profile
//                     <span className="badge">New</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a>Settings</a>
//                 </li>
//                 <li>
//                   <a>Login</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="embla relative mb-6 p-3">
//         <div className="embla__viewport" ref={emblaRef}>
//           <div className="embla__container">
//             <div className="embla__slide">
//               <img src="img/ad.jpg" alt="" />
//             </div>
//             <div className="embla__slide">
//               <img src="img/ad 2.jpg" alt="" />
//             </div>
//             <div className="embla__slide">
//               <img src="img/ad 3.webp" alt="" />
//             </div>
//             <div className="embla__slide">
//               <img src="img/ad 4.webp" alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="   absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <button className="embla__prev btn btn-circle" onClick={scrollPrev}>
//             ❮
//           </button>
//           <button className="embla__next btn btn-circle" onClick={scrollNext}>
//             ❯
//           </button>
//         </div>
//       </div>
//       <div>
//         <div className="p-3 bg-white shadow-xl m-4 rounded-lg">
//           <div>
//             <h3 className="text-2xl text-black my-5 font-bold">
//               Best of Electronics
//             </h3>
//           </div>
//           <div className="flex gap-4">
//             <Asdf
//               img="img/camera.webp"
//               discrption="cameras"
//               tittle="Shop Now"
//             />
//             <Asdf
//               img="img/projector.webp"
//               discrption=" projectors"
//               tittle="From ₹9,999"
//             />
//             <Asdf
//               img="img/mouse.webp"
//               discrption="wirewless keyboard & mouse"
//               tittle="From ₹169"
//             />
//             <Asdf
//               img="img/adapter.webp"
//               discrption="USB Gadgets"
//               tittle="From ₹179"
//             />
//             <Asdf
//               img="img/powerBank.webp"
//               discrption="Premium PowerBank"
//               tittle="Shop Now"
//             />
//             <Asdf
//               img="img/printer.webp"
//               discrption="printers"
//               tittle="From ₹3,999"
//             />
//           </div>
//         </div>
//         <div className="p-3 bg-white shadow-xl m-4 rounded-lg">
//           <div>
//             <h3 className="text-2xl text-black my-5 font-bold">
//               Best of Electronics
//             </h3>
//           </div>
//           <div className="flex gap-4">
//             <Asdf
//               img="img/camera.webp"
//               discrption="cameras"
//               tittle="Shop Now"
//             />
//             <Asdf
//               img="img/projector.webp"
//               discrption=" projectors"
//               tittle="From ₹9,999"
//             />
//             <Asdf
//               img="img/mouse.webp"
//               discrption="wirewless keyboard & mouse"
//               tittle="From ₹169"
//             />
//             <Asdf
//               img="img/adapter.webp"
//               discrption="USB Gadgets"
//               tittle="From ₹179"
//             />
//             <Asdf
//               img="img/powerBank.webp"
//               discrption="Premium PowerBank"
//               tittle="Shop Now"
//             />
//             <Asdf
//               img="img/printer.webp"
//               discrption="printers"
//               tittle="From ₹3,999"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
