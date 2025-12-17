import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-sm">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white border border-gray-200 rounded-xl pl-5 pr-4 py-2
                  text-sm text-gray-700 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400
                  shadow-sm transition-all"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};
export default SearchInput;
