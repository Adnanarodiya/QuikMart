import { useLoaderData } from "react-router-dom";
import Asdf from "../asdf";

interface Product {
  id: number;
  // created_at: Date;
  // isnew: boolean;
  title: string;
  mrp: number;
  img: string;
}

export default function Jewelry() {
  const products = useLoaderData() as Product[];

  return (
    <>
      <div className="container">
        <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-4">
          {products.map((product) => (
            <Asdf
              img={product.img}
              key={product.id}
              title={product.title}
              mrp={product.mrp}
              link="/electronics/product-page"
            />
          ))}
        </div>
      </div>
    </>
  );
}
