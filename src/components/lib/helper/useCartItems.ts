import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export type Cart = {
  id: number;
  user_id: string | null;
  quantity: number | null;
  product: {
    title: string | null;
    mrp: string | null;
    img: string | null;
  } | null;
};

export function useCartItems(userId: string | undefined) {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    async function fetchCart() {
      if (!userId) return;
      const { data, error } = await supabase
        .from("cart")
        .select(
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
        )
        .eq("user_id", userId);

      if (error) throw error;
      setCart(data);
    }
    fetchCart();
  }, [userId]);

  return cart;
}
