// "use client";

// import { Product } from "@/types";
// import Currency from "@/components/ui/currency";
// import Button from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import { MouseEventHandler } from "react";
// import useCart from "@/hooks/use-cart";

// interface InfoProps {
//   data: Product;
// }

// const Info: React.FC<InfoProps> = ({ data }) => {
//   const cart = useCart();

//   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
//     event.stopPropagation();
//     cart.addItem(data);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

//       <div className="mt-3 flex items-end justify-between">
//         <p className="text-2xl text-gray-900">
//           <Currency value={data.price} />
//         </p>
//       </div>

//       <hr className="my-4 border-gray-300" />

//       <div className="flex flex-col gap-y-6">
//         <div className="flex items-center gap-x-4">
//           <h3 className="font-semibold text-blue-700">Forma farmaceutică:</h3>
//           <div>{data?.pharmaceuticalForm?.name}</div>
//         </div>

//         <div className="flex items-center gap-x-4">
//           <h3 className="font-semibold text-blue-700">Doza:</h3>
//           <div>{data?.dosage?.value}</div>
//         </div>

//         <div className="flex items-center gap-x-4">
//           <h3 className="font-semibold text-blue-700">Categorie vârstă:</h3>
//           <div>{data?.dosage?.name}</div>
//         </div>

//         <div className="mt-10 flex items-center gap-x-3">
//           <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
//             Adaugă în coș
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
  const isOutOfStock = Number(data?.stock ?? 0) <= 0;

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    if (isOutOfStock) {
      return;
    }

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

      <hr className="my-4 border-gray-300" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-blue-700">Forma farmaceutică:</h3>
          <div>{data?.pharmaceuticalForm?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-blue-700">Doza:</h3>
          <div>{data?.dosage?.value}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-blue-700">Categorie vârstă:</h3>
          <div>{data?.dosage?.name}</div>
        </div>

        {isOutOfStock ? (
          <p className="text-sm font-semibold text-red-600">
            Produsul nu mai este disponibil
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            În stoc: <span className="font-semibold">{data.stock}</span>
          </p>
        )}

        <div className="mt-10 flex items-center gap-x-3">
          <Button
            className="flex items-center gap-x-2"
            onClick={onAddToCart}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? "Stoc epuizat" : "Adaugă în coș"}
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
