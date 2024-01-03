import { useLoaderData } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  mrp: number;
  img: string;
  category: string;
}
export default function ProductPage() {
  const product = useLoaderData() as Product;
  return (
    <>
      <div className="container">
        <div className="flex gap-6 my-20 ">
          <div className="w-2/5 flex justify-center">
            <img
              className="w-3/5 object-contain h-72"
              src={product.img}
              alt=""
            />
          </div>
          <div className="w-3/5">
            <h1 className="text-lg font-semibold mb-4">{product.title}</h1>
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
                <button className="btn w-48 mb-4 bg-black border-black hover:bg-black/80 text-primary rounded-none ">
                  Add to Cart
                </button>
                <button className="btn w-48 bg-primary border-black hover:text-black/70 hover:bg-primary hover:border-black  rounded-none ">
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
          <p>
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
