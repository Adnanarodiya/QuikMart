// import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/helper/supabaseClient";
import ProductCard from "../productCard";

// interface Product {
//   id: number;
//   title: string;
//   mrp: number;
//   img: string;
// }

export default function Electronics() {
  // const products = useLoaderData() as Product[];
  const { data: products, isLoading } = useQuery({
    queryKey: ["electronics"],
    async queryFn() {
      const { data, error } = await supabase
        .from("product")
        .select("id, mrp, title,category,img")
        .eq("category", "electronics");

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <div className="container">
        <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-4">
          {products?.map((product) => (
            <ProductCard
              img={product.img!}
              key={product.id}
              title={product.title!}
              mrp={product.mrp!}
              link={`/product/${product.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
