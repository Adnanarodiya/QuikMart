import ProductCard from "../productCard";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/helper/supabaseClient";

export default function MensClothing() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["mens_clothing"],
    async queryFn() {
      const { data, error } = await supabase
        .from("product")
        .select("id, mrp, title,category,img")
        .eq("category", "Men's Clothing");

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
