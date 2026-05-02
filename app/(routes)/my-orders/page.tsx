// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import prismadb from "@/src/lib/prismadb";

// const MyOrdersPage = async () => {
//   const { userId } = await auth();

//   if (!userId) {
//     redirect("/sign-in");
//   }

//   const orders = await prismadb.order.findMany({
//     include: {
//       orderItems: {
//         include: {
//           product: {
//             include: {
//               images: true,
//             },
//           },
//         },
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return (
//     <div className="mx-auto max-w-5xl px-4 py-10">
//       <h1 className="mb-8 text-3xl font-bold">My Orders</h1>

//       {orders.length === 0 ? (
//         <div className="rounded-lg border p-8 text-center">
//           <p className="text-gray-600">Nu ai comenzi încă.</p>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => {
//             const total = order.orderItems.reduce((sum, item) => {
//               return sum + Number(item.product?.price ?? 0);
//             }, 0);

//             return (
//               <div key={order.id} className="rounded-lg border p-6 shadow-sm">
//                 <div className="mb-4 flex items-center justify-between border-b pb-4">
//                   <div>
//                     <p className="font-semibold">
//                       Comandă #{order.id.slice(0, 8)}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       {new Date(order.createdAt).toLocaleDateString("ro-RO")}
//                     </p>
//                   </div>

//                   <div className="text-right">
//                     <p className="font-semibold">
//                       {order.isPaid ? "Plătită" : "În așteptare"}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Total: {total.toFixed(2)} lei
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   {order.orderItems.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex items-center justify-between gap-4"
//                     >
//                       <div className="flex items-center gap-4">
//                         {item.product?.images?.[0]?.url && (
//                           <img
//                             src={item.product.images[0].url}
//                             alt={item.product.name}
//                             className="h-16 w-16 rounded-md object-cover"
//                           />
//                         )}

//                         <div>
//                           <p className="font-medium">
//                             {item.product?.name ?? "Produs șters"}
//                           </p>
//                           <p className="text-sm text-gray-500">Cantitate: 1</p>
//                         </div>
//                       </div>

//                       <p className="font-medium">
//                         {item.product?.price
//                           ? `${Number(item.product.price).toFixed(2)} lei`
//                           : ""}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyOrdersPage;
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/src/lib/prismadb";

const MyOrdersPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const orders = await prismadb.order.findMany({
    where: {
      userId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">My Orders</h1>

      {orders.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">
          <p className="text-gray-600">Nu ai comenzi încă.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const total = order.orderItems.reduce((sum, item) => {
              return sum + Number(item.product?.price ?? 0);
            }, 0);

            return (
              <div key={order.id} className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-semibold">
                      Comandă #{order.id.slice(0, 8)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString("ro-RO")}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">
                      {order.isPaid ? "Plătită" : "În așteptare"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Total: {total.toFixed(2)} lei
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {order.orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        {item.product?.images?.[0]?.url && (
                          <img
                            src={item.product.images[0].url}
                            alt={item.product.name}
                            className="h-16 w-16 rounded-md object-cover"
                          />
                        )}

                        <div>
                          <p className="font-medium">
                            {item.product?.name ?? "Produs șters"}
                          </p>
                          <p className="text-sm text-gray-500">Cantitate: 1</p>
                        </div>
                      </div>

                      <p className="font-medium">
                        {item.product?.price
                          ? `${Number(item.product.price).toFixed(2)} lei`
                          : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
