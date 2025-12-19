// "use client";

// import qs from "query-string";
// import { useRouter, useSearchParams } from "next/navigation";

// import { Dosage, PharmaceuticalForm } from "@/types";
// import Button from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface FilterProps {
//   data: (Dosage | PharmaceuticalForm)[];
//   name: string;
//   valueKey: string;
// }

// const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const selectedValue = searchParams.get(valueKey);

//   const onClick = (id: string) => {
//     const current = qs.parse(searchParams.toString());

//     const query = {
//       ...current,
//       [valueKey]: id,
//     };

//     if (current[valueKey] === id) {
//       query[valueKey] = null;
//     }

//     const url = qs.stringifyUrl(
//       {
//         url: window.location.href,
//         query,
//       },
//       { skipNull: true }
//     );

//     router.push(url);
//   };

//   return (
//     <div className="mb-8">
//       <h3 className="text-lg font-semibold">{name}</h3>

//       <hr className="my-4" />

//       <div className="flex flex-wrap gap-2">
//         {data.map((filter) => (
//           <div key={filter.id} className="flex items-center">
//             <Button
//               className={cn(
//                 "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
//                 selectedValue === filter.id && "bg-black text-white"
//               )}
//               onClick={() => onClick(filter.id)}
//             >
//               {filter.name}
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filter;
//////////////////mif
// "use client";

// import qs from "query-string";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Dosage, PharmaceuticalForm } from "@/types";
// import { cn } from "@/lib/utils";

// interface FilterProps {
//   data: (Dosage | PharmaceuticalForm)[];
//   name: string;
//   valueKey: string;
// }

// const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const selectedValue = searchParams.get(valueKey);

//   const onClick = (id: string) => {
//     const current = qs.parse(searchParams.toString());

//     const query = {
//       ...current,
//       [valueKey]: id,
//     };

//     if (current[valueKey] === id) {
//       query[valueKey] = null;
//     }

//     const url = qs.stringifyUrl(
//       { url: window.location.href, query },
//       { skipNull: true }
//     );

//     router.push(url);
//   };

//   return (
//     <div className="mb-10">
//       <h3 className="text-base font-semibold text-gray-900 mb-4">{name}</h3>

//       <div className="space-y-3">
//         {data.map((filter) => {
//           const active = selectedValue === filter.id;

//           return (
//             <button
//               key={filter.id}
//               onClick={() => onClick(filter.id)}
//               className={cn(
//                 "flex items-center gap-3 text-sm transition",
//                 active
//                   ? "text-blue-600 font-medium"
//                   : "text-gray-700 hover:text-blue-600"
//               )}
//             >
//               <span
//                 className={cn(
//                   "flex h-5 w-5 items-center justify-center rounded border",
//                   active
//                     ? "border-blue-600 bg-blue-600 text-white"
//                     : "border-gray-300 bg-white"
//                 )}
//               >
//                 {active && "✓"}
//               </span>

//               {filter.name}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Filter;
"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { Dosage, PharmaceuticalForm } from "@/types";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: (Dosage | PharmaceuticalForm)[];
  name: string;
  valueKey: string;
}

// type guard
const isDosage = (item: Dosage | PharmaceuticalForm): item is Dosage => {
  return "value" in item;
};

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-10">
      <h3 className="text-base font-semibold text-gray-900 mb-4">{name}</h3>

      <div className="space-y-3">
        {data.map((filter) => {
          const active = selectedValue === filter.id;

          return (
            <button
              key={filter.id}
              onClick={() => onClick(filter.id)}
              className={cn(
                "flex items-center gap-3 text-sm transition",
                active
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600"
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded border",
                  active
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 bg-white"
                )}
              >
                {active && "✓"}
              </span>

              <span>
                {filter.name}
                {isDosage(filter) && (
                  <span className="text-gray-500 ml-1">({filter.value})</span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
