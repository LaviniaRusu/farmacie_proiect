// "use client";

// import Image from "next/image";
// import { Expand, ShoppingCart } from "lucide-react";

// import { Product } from "@/types";
// import IconButton from "@/components/ui/icon-button";
// import Currency from "@/components/ui/currency";
// import { useRouter } from "next/navigation";
// import usePreviewModal from "@/hooks/use-preview-modal";
// import { MouseEventHandler } from "react";
// import useCart from "@/hooks/use-cart";

// interface ProductCardProps {
//   data: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
//   const router = useRouter();
//   const previewModal = usePreviewModal();
//   const cart = useCart();
//   const handleClick = () => {
//     router.push(`/product/${data?.id}`);
//   };
//   const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
//     event.stopPropagation();

//     previewModal.onOpen(data);
//   };
//   const onAddToCard: MouseEventHandler<HTMLButtonElement> = (event) => {
//     event.stopPropagation();
//     cart.addItem(data);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="
//         bg-white
//         group
//         cursor-pointer
//         rounded-xl
//         border
//         p-3
//         space-y-4
//       "
//     >
//       {/* Images and Actions */}
//       <div
//         className="
//           aspect-square
//           rounded-xl
//           bg-gray-100
//           relative
//         "
//       >
//         <Image
//           src={data?.images?.[0]?.url}
//           alt="Image"
//           fill
//           className="
//             aspect-square
//             object-cover
//             rounded-md
//           "
//         />

//         <div
//           className="
//             opacity-0
//             group-hover:opacity-100
//             transition
//             absolute
//             w-full
//             px-6
//             bottom-5
//           "
//         >
//           <div
//             className="
//               flex
//               gap-x-6
//               justify-center
//             "
//           >
//             <IconButton
//               onClick={onPreview}
//               icon={<Expand size={20} className="text-gray-600" />}
//             />

//             <IconButton
//               onClick={onAddToCard}
//               icon={<ShoppingCart size={20} className="text-gray-600" />}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Description */}
//       <div>
//         <p className="font-semibold text-lg">{data.name}</p>
//         <p className="text-sm text-gray-500">{data.category?.name}</p>
//       </div>

//       {/* Price */}
//       <div className="flex items-center justify-between">
//         <Currency value={data.price} />
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// //
"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="
        group
        cursor-pointer
        bg-white
        border border-blue-100
        rounded-xl
        overflow-hidden
        transition
        hover:shadow-lg
        hover:border-blue-300
      "
    >
      {/* IMAGE */}
      <div className="relative h-48 bg-blue-50">
        <Image
          src={data.images?.[0]?.url}
          alt={data.name}
          fill
          className="object-cover"
        />

        {/* ACTIONS */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-4
            bg-black/20
            opacity-0
            group-hover:opacity-100
            transition
          "
        >
          <IconButton
            onClick={onPreview}
            className="bg-white hover:bg-blue-50"
            icon={<Expand size={18} className="text-blue-600" />}
          />
          <IconButton
            onClick={onAddToCart}
            className="bg-white hover:bg-blue-50"
            icon={<ShoppingCart size={18} className="text-blue-600" />}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
          {data.name}
        </h3>

        <p className="text-xs text-gray-500">{data.category?.name}</p>

        <div className="pt-2">
          <Currency value={data.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
