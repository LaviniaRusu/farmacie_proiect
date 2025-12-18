// "use client";

// import Image from "next/image";
// import { X } from "lucide-react";

// import IconButton from "@/components/ui/icon-button";
// import Currency from "@/components/ui/currency";
// import useCart from "@/hooks/use-cart";
// import { Product } from "@/types";

// interface CartItemProps {
//   data: Product;
// }

// const CartItem: React.FC<CartItemProps> = ({ data }) => {
//   const cart = useCart();

//   const onRemove = () => {
//     cart.removeItem(data.id);
//   };

//   return (
//     <li className="flex py-6 border-b">
//       {/* Image */}
//       <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
//         <Image
//           fill
//           src={data.images[0].url}
//           alt={data.name}
//           className="object-cover object-center"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//         {/* Remove button */}
//         <div className="absolute right-0 top-0 z-10">
//           <IconButton onClick={onRemove} icon={<X size={15} />} />
//         </div>

//         <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//           <div className="flex justify-between">
//             <p className="text-lg font-semibold text-black">{data.name}</p>
//           </div>

//           <div className="mt-1 flex text-sm">
//             <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
//               {data.pharmaceuticalForm.name}
//             </p>
//           </div>

//           <Currency value={data.price} />
//         </div>
//       </div>
//     </li>
//   );
// };

// export default CartItem;
"use client";

import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-lg">
      {/* Image */}
      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>

        <p className="text-sm text-gray-500 mt-1">
          {data.pharmaceuticalForm.name}
        </p>
      </div>

      {/* Price + remove */}
      <div className="flex items-center gap-6">
        <span className="text-lg font-bold text-gray-900">
          <Currency value={data.price} />
        </span>

        <IconButton
          onClick={onRemove}
          className="hover:bg-gray-100"
          icon={<X size={18} className="text-gray-500" />}
        />
      </div>
    </li>
  );
};

export default CartItem;
