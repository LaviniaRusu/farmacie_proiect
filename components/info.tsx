// "use client";
// import { Product } from "@/types";
// import Currency from "./ui/currency";
// import Button from "./ui/button";
// import { ShoppingCart } from "lucide-react";

// interface InfoProps {
//   data: Product;
// }

// const Info: React.FC<InfoProps> = ({ data }) => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
//       <div className="mt-3 flex items-end justify-between">
//         <p className="text-2xl text-gray-900">
//           <Currency value={data?.price} />
//         </p>
//       </div>
//       <hr className="my-4" />
//       <div className="flex flex-col gap-y-6">
//         <div className="flex items-center gap-x-4">
//           <h3 className="font-semibold text-black">Forma farmaceutica:</h3>
//           <div>{data?.pharmaceuticalForm?.name}</div>
//         </div>
//         <div className="flex items-center gap-x-4">
//           <h3 className="font-semibold text-black">Doza:</h3>
//           <div>{data?.dosage?.value}</div>
//         </div>
//         <div className="flex items-center gap-x-4">
//           <h3 className="font-semibold text-black">Categorie varsta:</h3>
//           <div>{data?.dosage?.name}</div>
//         </div>

//         <div className="mt-10 flex items-center gap-x-3">
//           <Button className="flex items-center gap-x-2 " onClick={onAddToCard}>
//             Add To Cart
//             <ShoppingCart />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;
"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Forma farmaceutică:</h3>
          <div>{data?.pharmaceuticalForm?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Doza:</h3>
          <div>{data?.dosage?.value}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Categorie vârstă:</h3>
          <div>{data?.dosage?.name}</div>
        </div>

        <div className="mt-10 flex items-center gap-x-3">
          <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
            Adaugă în coș
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
