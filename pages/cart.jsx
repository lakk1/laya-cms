import { useEffect, useState } from "react";
import CartView from "@/components/CartView";
import UserLayout from "@/components/UserLayout";
import { getProduct } from "@/lib/db";

const CartPage = () => {
  return (
    <UserLayout>
      <CartView />
    </UserLayout>
  );
};

export default CartPage;
