import type { MenuItem } from "./types";

export const NAVIGATION_MENUS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Partner",
    subMenuHeading: ["Partner"],
    subMenu: [
      {
        name: "Sky Exchange",
        href: "/active-ipos",
        group: "Partner",
      },
      {
        name: "Go Exchange 777",
        href: "/recently-listed",
        group: "Partner",
      },
      {
        name: "Go Exchange",
        href: "/recently-listed",
        group: "Partner",
      },
    ],
    gridCols: 1,
    layout: "grouped",
  },
  {
    name: "Online Betting Site",
    subMenuHeading: ["Online Betting Site"],
    subMenu: [
      {
        name: "Online Cricket ID",
        href: "/active-ipos",
        group: "Mainboard IPOs",
      },
      {
        name: "Online Betting ID",
        href: "/recently-listed",
        group: "Online Betting Site",
      },
      {
        name: "Mahakal Online Book",
        href: "/recently-listed",
        group: "Online Betting Site",
      },
      {
        name: "Tiger Exchange 247",
        href: "/recently-listed",
        group: "Online Betting Site",
      },
    ],
    gridCols: 1,
    layout: "grouped",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
] as const satisfies MenuItem[];

export type NavigationMenu = (typeof NAVIGATION_MENUS)[number];
