import { Link, useLoaderData } from "react-router-dom";
import { useUser } from "./lib/helper/useUser";
import { supabase } from "./lib/helper/supabaseClient";
import toast from "react-hot-toast";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  mrp: number;
  img: string;
  category: string;
}
export default function ProductPage() {
  const user = useUser();
  const product = useLoaderData() as Product;
  const [quantity, setQuantity] = useState(1);
  const queryClient = useQueryClient();

  async function addToCart() {
    if (!user) return;
    const { data: cartProduct } = await supabase
      .from("cart")
      .select("*")
      .eq("product_id", product.id)
      .eq("user_id", user.id)
      .single();
    if (cartProduct) {
      const { data, error } = await supabase
        .from("cart")
        .update({
          quantity: quantity + (cartProduct?.quantity ?? 1),
        })
        .eq("product_id", product.id)
        .eq("user_id", user.id);

      queryClient.invalidateQueries({ queryKey: ["cart", user.id] });

      if (error) {
        toast.error("something went wrong pls try again.");
        return;
      }
      toast.success("Product added succesfully");
      console.log(data);
      return;
    }
    const { data, error } = await supabase
      .from("cart")
      .insert({
        product_id: product.id,
        user_id: user.id,
        quantity: quantity,
      })
      .eq("product_id", product.id)
      .eq("user_id", user.id);

    queryClient.invalidateQueries({ queryKey: ["cart", user.id] });

    if (error) {
      toast.error("something went wrong pls try again.");
      return;
    }
    toast.success("Product added succesfully");
    console.log(data);
  }
  // const refresh = () => window.location.reload(false);

  // const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="flex gap-6 my-20 flex-col md:flex-row">
          {/* <div>
            <ArrowLeftCircle
              onClick={() => navigate(-1)}
              size={40}
              className="hover:text-black/60 hover:cursor-pointer
              hover:scale-110 transform transition-all duration-700 ease-in-out
              "
            />
          </div> */}
          <div className="w-full md:w-2/5 flex justify-center">
            <img
              className="w-3/5 object-contain h-72"
              src={product.img}
              alt=""
            />
          </div>
          <div className=" w-full md:w-3/5">
            <h1 className="text' md:text-lg font-semibold mb-4">
              {product.title}.
            </h1>
            <p className="text-lg mb-4">₹{product.mrp}</p>
            <div className="mb-6 ">
              <input
                type="number"
                inputMode="numeric"
                className="w-12 border mr-3 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                value={quantity}
                min="1"
                max="20"
                defaultValue={1}
              />
              <label htmlFor="quantity">Quantity</label>
            </div>
            <div>
              <div className="flex flex-col">
                <button
                  className="btn w-full md:w-48 mb-4 bg-black border-black hover:bg-black/80 text-primary rounded-none "
                  onClick={() => {
                    if (!user) {
                      const modal = document.getElementById(
                        "my_modal_2"
                      ) as HTMLDialogElement;
                      modal.showModal();
                    } else {
                      addToCart();
                    }
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="btn w-full md:w-48 bg-primary border-black hover:text-black/70 hover:bg-primary hover:border-black  rounded-none "
                  onClick={() => {
                    if (!user) {
                      const modal = document.getElementById(
                        "my_modal_2"
                      ) as HTMLDialogElement;
                      modal.showModal();
                    }
                  }}
                >
                  <Link to={"/buyitnow"}> Buy it Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4">
            Category :-{" "}
            <span className=" ml-3 badge badge-lg rounded-none bg-gray-100">
              {" "}
              {product.category}
            </span>{" "}
          </p>
          <p className="text-sm md:text-base">
            discription :- Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ipsum non porro placeat doloribus ea. Ducimus ex quod nulla
            dolorem magni fuga itaque, nesciunt amet blanditiis magnam ea dolor.
            Nobis soluta quia quis ratione ullam vitae cum quae dolorem! A,
            expedita quam obcaecati iste facilis sequi delectus, iure iusto
            optio nemo labore, necessitatibus incidunt totam? Eligendi quod
            voluptatem minima tenetur rerum quasi veritatis provident dolore
            architecto labore obcaecati quaerat deleniti hic ipsam sequi autem
            aperiam, aspernatur temporibus laboriosam quas facilis minus?
            Praesentium reprehenderit fuga deserunt provident tempore aliquid
            impedit neque adipisci voluptates. Neque doloremque qui inventore
            quibusdam sapiente quidem?{" "}
          </p>
        </div>
      </div>
    </>
  );
}
