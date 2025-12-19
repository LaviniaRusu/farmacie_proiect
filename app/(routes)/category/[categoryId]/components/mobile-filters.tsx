// "use client";

// import { useState } from "react";
// import { Plus, X } from "lucide-react";
// import { Dialog } from "@headlessui/react";

// import { Dosage, PharmaceuticalForm } from "@/types";
// import Button from "@/components/ui/button";
// import IconButton from "@/components/ui/icon-button";
// import Filter from "./filter";

// interface MobileFiltersProps {
//   pharmaceuticalForm: PharmaceuticalForm[];

//   dosages: Dosage[];
// }

// const MobileFilters: React.FC<MobileFiltersProps> = ({
//   dosages,
//   pharmaceuticalForm,
// }) => {
//   const [open, setOpen] = useState(false);

//   const onOpen = () => setOpen(true);
//   const onClose = () => setOpen(false);

//   return (
//     <>
//       {/* Open button */}
//       <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
//         Filters
//         <Plus size={20} />
//       </Button>

//       <Dialog
//         open={open}
//         as="div"
//         className="relative z-40 lg:hidden"
//         onClose={onClose}
//       >
//         {/* Background */}
//         <div className="fixed inset-0 bg-black bg-opacity-25" />

//         {/* Panel */}
//         <div className="fixed inset-0 z-40 flex">
//           <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
//             {/* Close button */}
//             <div className="flex items-center justify-end px-4">
//               <IconButton icon={<X size={15} />} onClick={onClose} />
//             </div>

//             {/* Filters */}
//             <div className="p-4">
//               <Filter valueKey="dosageId" name="Doza" data={dosages} />
//               <Filter
//                 valueKey="pharmaceuticalFormId"
//                 name="Forma farmaceutica"
//                 data={pharmaceuticalForm}
//               />
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </>
//   );
// };

// export default MobileFilters;
"use client";

import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";

import { Dosage, PharmaceuticalForm } from "@/types";
import Button from "@/components/ui/button";
import Filter from "./filter";

interface MobileFiltersProps {
  pharmaceuticalForm: PharmaceuticalForm[];
  dosages: Dosage[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  dosages,
  pharmaceuticalForm,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* OPEN BUTTON */}
      <Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 lg:hidden"
      >
        Filtre
        <SlidersHorizontal size={18} />
      </Button>

      {open && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          />

          {/* PANEL */}
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 h-16 ">
              <span className="text-lg font-semibold"></span>
              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="px-6 py-6 space-y-6 overflow-y-auto">
              <Filter valueKey="dosageId" name="Doza" data={dosages} />

              <Filter
                valueKey="pharmaceuticalFormId"
                name="Forma farmaceutica"
                data={pharmaceuticalForm}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileFilters;
