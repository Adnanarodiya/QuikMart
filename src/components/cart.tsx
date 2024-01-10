import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Cart } from "./lib/helper/useCartItems";

interface Props {
  isCart: boolean;
  cart: Cart[];
  handleClicked: () => void;
}

export function CartPop({ isCart, cart, handleClicked }: Props) {
  useEffect(() => {
    if (isCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCart]);

  return createPortal(
    <div className="fixed top-0 right-0 h-screen w-full md:w-96 bg-white backdrop-blur-3xl border-2 z-10 overflow-auto">
      <div className="flex justify-end p-2 relative ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost bg-gray-700/40 hover:bg-gray-700/60 "
          onClick={handleClicked}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
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
        className="  text-base leading-9 w-full "
        onClick={handleClicked}
      >
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id}>
                <div className="flex gap-6 border-b-2 w-11/12 mx-auto ">
                  <div>
                    <img
                      className="w-12 m-4 object-cover"
                      src={
                        item.product?.img ??
                        "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="font-bold mt-4 w-4/5">
                      {item.product?.title}
                    </p>
                    <div className="flex gap-4">
                      <p className="italic">Mrp:- ₹{item.product?.mrp}</p>
                      <p>Quantity :- {item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="m-6">
            <p>your cart is currently empty.</p>
          </div>
        )}
      </ul>
    </div>,
    document.body
  );
}
