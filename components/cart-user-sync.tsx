"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import useCart from "@/hooks/use-cart";

const CartUserSync = () => {
  const { user, isLoaded } = useUser();
  const setUserId = useCart((state) => state.setUserId);

  useEffect(() => {
    if (!isLoaded) return;

    setUserId(user?.id ?? null);
  }, [isLoaded, user?.id, setUserId]);

  return null;
};

export default CartUserSync;
