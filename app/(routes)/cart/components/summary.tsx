////inainte de cantitate
// "use client";

// import axios from "axios";
// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import toast from "react-hot-toast";

// import Button from "@/components/ui/button";
// import Currency from "@/components/ui/currency";
// import useCart from "@/hooks/use-cart";

// const Summary = () => {
//   const searchParams = useSearchParams();

//   const items = useCart((state) => state.items);
//   const removeAll = useCart((state) => state.removeAll);

//   useEffect(() => {
//     if (searchParams.get("success")) {
//       toast.success("Payment completed.");
//       removeAll();
//     }

//     if (searchParams.get("canceled")) {
//       toast.error("Something went wrong.");
//     }
//   }, [searchParams, removeAll]);

//   const totalPrice = items.reduce((total, item) => {
//     return total + Number(item.price);
//   }, 0);

//   const onCheckout = async () => {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
//         {
//           productIds: items.map((item) => item.id),
//         }
//       );

//       window.location = response.data.url;
//     } catch (error) {
//       toast.error("Something went wrong.");
//     }
//   };

//   return (
//     <div
//       className="
//         mt-16
//         rounded-lg
//         bg-gray-50
//         px-4
//         py-6
//         sm:p-6
//         lg:col-span-5
//         lg:mt-0
//         lg:p-8
//       "
//     >
//       <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           <div className="text-base font-medium text-gray-900">Order total</div>

//           <Currency value={totalPrice} />
//         </div>
//       </div>

//       <Button
//         onClick={onCheckout}
//         disabled={items.length === 0}
//         className="w-full mt-6"
//       >
//         Checkout
//       </Button>
//     </div>
//   );
// };

// export default Summary;
///cod inainte de stcks//// cod ininte de orders per user
// "use client";

// import axios from "axios";
// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import toast from "react-hot-toast";

// import Button from "@/components/ui/button";
// import Currency from "@/components/ui/currency";
// import useCart from "@/hooks/use-cart";

// const Summary = () => {
//   const searchParams = useSearchParams();

//   const items = useCart((state) => state.items);
//   const removeAll = useCart((state) => state.removeAll);

//   useEffect(() => {
//     if (searchParams.get("success")) {
//       toast.success("Payment completed.");
//       removeAll();
//     }

//     if (searchParams.get("canceled")) {
//       toast.error("Something went wrong.");
//     }
//   }, [searchParams, removeAll]);

//   const totalPrice = items.reduce((total, item) => {
//     return total + Number(item.price) * item.quantity;
//   }, 0);

//   const totalItems = items.reduce((total, item) => {
//     return total + item.quantity;
//   }, 0);

//   const hasInvalidStock = items.some(
//     (item) => item.quantity > Number(item.stock) || Number(item.stock) <= 0,
//   );

//   const onCheckout = async () => {
//     if (hasInvalidStock) {
//       toast.error(
//         "Some products exceed available stock or are no longer available.",
//       );
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
//         {
//           items: items.map((item) => ({
//             productId: item.id,
//             quantity: item.quantity,
//           })),
//         },
//       );

//       window.location.href = response.data.url;
//     } catch (error: any) {
//       const message = error?.response?.data || "Something went wrong.";

//       toast.error(message);
//     }
//   };

//   return (
//     <div
//       className="
//         mt-16
//         rounded-lg
//         bg-gray-50
//         px-4
//         py-6
//         sm:p-6
//         lg:col-span-5
//         lg:mt-0
//         lg:p-8
//       "
//     >
//       <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between">
//           <div className="text-sm text-gray-600">Products in cart</div>
//           <div className="text-sm font-medium text-gray-900">{totalItems}</div>
//         </div>

//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           <div className="text-base font-medium text-gray-900">Total</div>
//           <Currency value={totalPrice} />
//         </div>

//         {hasInvalidStock && (
//           <p className="text-sm text-red-600">
//             Some products exceed available stock.
//           </p>
//         )}
//       </div>

//       <Button
//         onClick={onCheckout}
//         disabled={items.length === 0 || hasInvalidStock}
//         className="w-full mt-6"
//       >
//         Checkout
//       </Button>
//     </div>
//   );
// };

// export default Summary;
// "use client";

// import axios from "axios";
// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { useUser } from "@clerk/nextjs";
// import toast from "react-hot-toast";

// import Button from "@/components/ui/button";
// import Currency from "@/components/ui/currency";
// import useCart from "@/hooks/use-cart";

// const Summary = () => {
//   const searchParams = useSearchParams();
//   const { user, isLoaded } = useUser();

//   const items = useCart((state) => state.items);
//   const removeAll = useCart((state) => state.removeAll);

//   useEffect(() => {
//     if (searchParams.get("success")) {
//       toast.success("Payment completed.");
//       removeAll();
//     }

//     if (searchParams.get("canceled")) {
//       toast.error("Something went wrong.");
//     }
//   }, [searchParams, removeAll]);

//   const totalPrice = items.reduce((total, item) => {
//     return total + Number(item.price) * item.quantity;
//   }, 0);

//   const totalItems = items.reduce((total, item) => {
//     return total + item.quantity;
//   }, 0);

//   const hasInvalidStock = items.some(
//     (item) => item.quantity > Number(item.stock) || Number(item.stock) <= 0,
//   );

//   const onCheckout = async () => {
//     if (!isLoaded) {
//       return;
//     }

//     if (!user?.id) {
//       toast.error("Trebuie să fii autentificat pentru a plasa comanda.");
//       return;
//     }

//     if (hasInvalidStock) {
//       toast.error(
//         "Some products exceed available stock or are no longer available.",
//       );
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
//         {
//           userId: user.id,
//           items: items.map((item) => ({
//             productId: item.id,
//             quantity: item.quantity,
//           })),
//         },
//       );

//       window.location.href = response.data.url;
//     } catch (error: any) {
//       const message = error?.response?.data || "Something went wrong.";
//       toast.error(message);
//     }
//   };

//   return (
//     <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
//       <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

//       <div className="mt-6 space-y-4">
//         <div className="flex items-center justify-between">
//           <div className="text-sm text-gray-600">Products in cart</div>
//           <div className="text-sm font-medium text-gray-900">{totalItems}</div>
//         </div>

//         <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//           <div className="text-base font-medium text-gray-900">Total</div>
//           <Currency value={totalPrice} />
//         </div>

//         {hasInvalidStock && (
//           <p className="text-sm text-red-600">
//             Some products exceed available stock.
//           </p>
//         )}
//       </div>

//       <Button
//         onClick={onCheckout}
//         disabled={items.length === 0 || hasInvalidStock || !isLoaded}
//         className="w-full mt-6"
//       >
//         Checkout
//       </Button>
//     </div>
//   );
// };

// export default Summary;
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
  const searchParams = useSearchParams();
  const { user, isLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * item.quantity;
  }, 0);

  const totalItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const hasInvalidStock = items.some(
    (item) => item.quantity > Number(item.stock) || Number(item.stock) <= 0,
  );

  const onCheckout = async () => {
    if (isLoading) return;

    if (!isLoaded) return;

    if (!user?.id) {
      toast.error("Trebuie să fii autentificat pentru a plasa comanda.");
      return;
    }

    if (items.length === 0) {
      toast.error("Coșul este gol.");
      return;
    }

    if (hasInvalidStock) {
      toast.error(
        "Some products exceed available stock or are no longer available.",
      );
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          userId: user.id,
          items: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        },
      );

      window.location.href = response.data.url;
    } catch (error: any) {
      const message = error?.response?.data || "Something went wrong.";
      toast.error(message);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Products in cart</div>
          <div className="text-sm font-medium text-gray-900">{totalItems}</div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Total</div>
          <Currency value={totalPrice} />
        </div>

        {hasInvalidStock && (
          <p className="text-sm text-red-600">
            Some products exceed available stock.
          </p>
        )}
      </div>

      <Button
        onClick={onCheckout}
        disabled={
          items.length === 0 || hasInvalidStock || !isLoaded || isLoading
        }
        className="w-full mt-6"
      >
        {isLoading ? "Redirecting..." : "Checkout"}
      </Button>
    </div>
  );
};

export default Summary;
