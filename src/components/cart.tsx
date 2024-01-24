import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CartItems } from "./lib/helper/useCartItems";
import { Trash2 } from "lucide-react";
import { supabase } from "./lib/helper/supabaseClient";
import toast from "react-hot-toast";
import { useUser } from "./lib/helper/useUser";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  isCart: boolean;
  cart: CartItems;
  handleClicked: VoidFunction;
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
  const user = useUser();
  const formatter = new Intl.NumberFormat("en-In");
  const queryClient = useQueryClient();

  async function deleteCart(id: number) {
    const { error } = await supabase.from("cart").delete().eq("id", id);
    if (error) {
      console.log(error);
      return;
    } else {
      toast.success("Product removed succesfully");
      queryClient.invalidateQueries({ queryKey: ["cart", user?.id] });
    }
  }

  return createPortal(
    <div className="fixed top-0 right-0 h-screen w-full md:w-96 bg-white backdrop-blur-3xl border-2 z-10 ">
      <div className="flex justify-between items-center p-2 relative ">
        <div>
          <h1 className="text-xl font-bold">Cart </h1>
        </div>
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
      <div className="overflow-auto h-[calc(100%-13rem)]">
        <ul
          tabIndex={0}
          className="  text-base leading-9 w-full "
          // onClick={handleClicked}
        >
          {cart.length > 0 ? (
            <div className="flex flex-col gap-3">
              {cart.map((item) => (
                <div key={item.id}>
                  <div
                    className="flex border-b-2 w-11/12 mx-auto text-center items-center
                  justify-center   "
                  >
                    <div>
                      <img
                        className="max-w-20 min-h-20 w-20 h-20 object-contain"
                        src={
                          item.product?.img ??
                          "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="w-4/5 ml-4 text-start">
                      <p className="font-bold top-10  truncate mr-4">
                        {item.product?.title}
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="italic">
                          Mrp:- ₹ {formatter.format(item.product!.mrp!)}
                        </p>
                        <p>Quantity :- {item.quantity}</p>

                        <Trash2
                          onClick={() => deleteCart(item.id)}
                          className="hover:text-red-600 hover:delay-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bottom-0 fixed w-full bg-white">
                <div className="mx-4 flex justify-between">
                  <div className="font-semibold">Sub-Total</div>
                  <div>
                    ₹{" "}
                    {formatter.format(
                      cart.reduce((acc, item) => {
                        return acc + item.product!.mrp! * item.quantity!;
                      }, 0)
                    )}
                  </div>
                </div>

                <div className="m-4">
                  <button className="btn bg-neutral hover:bg-neutral/80 text-primary w-full rounded-none ">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="m-4 text-lg italic">
                your cart is currently empty.
              </p>
              <div className="bottom-0 fixed w-full">
                <div className=" m-4  flex justify-between">
                  <div className="font-semibold">Sub-Total</div>
                  <div>
                    ₹{" "}
                    {formatter.format(
                      cart.reduce((acc, item) => {
                        return acc + item.product!.mrp! * item.quantity!;
                      }, 0)
                    )}
                  </div>
                </div>

                <div className="m-4">
                  <button className=" bg-neutral/50 hover:bg-neutral/50 cursor-not-allowed text-primary w-full rounded-none ">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>,
    document.body
  );
}
