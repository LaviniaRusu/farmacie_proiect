// // "use client";

// // import Link from "next/link";
// // import { cn } from "@/lib/utils";
// // import { useParams, usePathname } from "next/navigation";

// // export function MainNavbar({
// //   className,
// //   ...props
// // }: React.HTMLAttributes<HTMLElement>) {
// //   const pathname = usePathname();
// //   const params = useParams();

// //   const routes = [
// //     {
// //       href: `/`,
// //       label: "Acasa",
// //       active: pathname === "/",
// //     },
// //     {
// //       href: `/category`,
// //       label: "Categorii de produse",
// //       active: pathname === "/category",
// //     },
// //     {
// //       href: `/contact`,
// //       label: "Contact",
// //       active: pathname === "/contact",
// //     },

// //     {
// //       href: `/about`,
// //       label: "Despre noi",
// //       active: pathname === "/about",
// //     },
// //   ];

// //   return (
// //     <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
// //       {routes.map((route) => (
// //         <Link
// //           key={route.href}
// //           href={route.href}
// //           className={cn(
// //             "text-sm font-medium transition-colors hover:text-primary",
// //             route.active
// //               ? "text-blue-600 dark:text-white"
// //               : "text-muted-foreground"
// //           )}
// //         >
// //           {route.label}
// //         </Link>
// //       ))}
// //     </nav>
// //   );
// // }
// "use client";

// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { usePathname } from "next/navigation";

// export function MainNavbar({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLElement>) {
//   const pathname = usePathname();

//   const routes = [
//     {
//       href: `/`,
//       label: "Acasa",
//       active: pathname === "/",
//     },
//     {
//       href: `/category`,
//       label: "Categorii de produse",
//       active: pathname.startsWith("/category"),
//     },
//     {
//       href: `/contact`,
//       label: "Contact",
//       active: pathname === "/contact",
//     },
//     {
//       href: `/about`,
//       label: "Despre noi",
//       active: pathname === "/about",
//     },
//   ];

//   return (
//     <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
//       {routes.map((route) => (
//         <Link
//           key={route.href}
//           href={route.href}
//           className={cn(
//             "text-sm font-medium transition-colors",
//             route.active
//               ? "text-blue-600"
//               : "text-muted-foreground hover:text-primary"
//           )}
//         >
//           {route.label}
//         </Link>
//       ))}
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MainNavbarProps extends React.HTMLAttributes<HTMLElement> {
  mobile?: boolean;
}

export function MainNavbar({
  mobile = false,
  className,
  ...props
}: MainNavbarProps) {
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Acasa",
      active: pathname === "/",
    },
    {
      href: `/category`,
      label: "Categorii de produse",
      active: pathname.startsWith("/category"),
    },
    {
      href: `/contact`,
      label: "Contact",
      active: pathname === "/contact",
    },
    {
      href: `/about`,
      label: "Despre noi",
      active: pathname === "/about",
    },
  ];

  return (
    <nav
      className={cn(
        mobile
          ? "flex flex-col gap-4"
          : "flex items-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            mobile ? "text-base font-medium py-2" : "text-sm font-medium",
            "transition-colors",
            route.active
              ? "text-blue-600"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
