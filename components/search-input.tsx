// import { Search } from "lucide-react";

// const SearchInput = () => {
//   return (
//     <div className="w-full flex justify-center">
//       <div className="relative w-full max-w-sm">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full bg-white border border-gray-200 rounded-xl pl-5 pr-4 py-2
//                   text-sm text-gray-700 placeholder-gray-400
//                   focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400
//                   shadow-sm transition-all"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//       </div>
//     </div>
//   );
// };
// export default SearchInput;
// "use client";

// import { Search } from "lucide-react";

// interface SearchInputProps {
//   value: string;
//   onChange: (value: string) => void;
// }

// const SearchInput = ({ value, onChange }: SearchInputProps) => {
//   return (
//     <div className="relative w-64">
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder="Caută produse..."
//         className="w-full bg-white border border-gray-200 rounded-xl
//                    pl-4 pr-10 py-2 text-sm
//                    focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//     </div>
//   );
// };

// export default SearchInput;
"use client";

import { Search } from "lucide-react";
import { useSearch } from "@/components/search-context";

const SearchInput = () => {
  const { search, setSearch } = useSearch();

  return (
    <div className="relative w-64">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Caută produse..."
        className="w-full bg-white border rounded-xl pl-4 pr-10 py-2"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  );
};

export default SearchInput;
