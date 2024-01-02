import { useLoaderData } from "react-router-dom";
import ProductCard from "../productCard";

interface Product {
  id: number;
  title: string;
  mrp: number;
  img: string;
}

export default function WomensClothing() {
  const products = useLoaderData() as Product[];

  return (
    <>
      <div className="container">
        <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-4">
          {products.map((product) => (
            <ProductCard
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
