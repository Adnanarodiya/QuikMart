import { useLoaderData } from "react-router-dom";
import { useUser } from "./lib/helper/useUser";
import { supabase } from "./lib/helper/supabaseClient";
import toast from "react-hot-toast";

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
  async function addToCart() {
    if (!user) return;
    const { data, error } = await supabase.from("cart").insert({
      product_id: product.id,
      user_id: user.id,
    });
    if (error) {
      toast.error("something went wrong pls try again.");
      return;
    }
    toast.success("Product added succesfully");
    console.log(data);
  }

  return (
    <>
      <div className="container">
        <div className="flex gap-6 my-20 flex-col md:flex-row">
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
                className="w-12 border mr-3 text-center"
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
                <button className="btn w-full md:w-48 bg-primary border-black hover:text-black/70 hover:bg-primary hover:border-black  rounded-none ">
                  Buy it Now
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
