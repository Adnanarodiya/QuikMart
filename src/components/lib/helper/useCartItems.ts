import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { QueryData } from "@supabase/supabase-js";

const cartQuery = supabase.from("cart").select(
  `
    id,
    user_id,
    quantity,
    product (
      title,
      mrp,
      img
    )
  `
);
export type CartItems = QueryData<typeof cartQuery>;

export function useCartItems(userId: string | undefined) {
  const [cart, setCart] = useState<CartItems>([]);

  useEffect(() => {
    updateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  async function updateCart() {
    if (!userId) return;
    const { data, error } = await cartQuery.eq("user_id", userId);

    if (error) throw error;
    setCart(data);
  }

  return {
    cart,
    updateCart,
  };
}
