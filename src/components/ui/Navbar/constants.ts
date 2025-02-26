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
    subMenuHeading: ["Mainboard IPOs", "Upcoming IPOs"],
    subMenu: [
      {
        name: "Active IPOs",
        desc: "Currently open for subscription",
        href: "/active-ipos",
        iconName: "Activity",
        group: "Mainboard IPOs",
      },
      {
        name: "Recently Listed",
        desc: "IPOs listed in last 30 days",
        href: "/recently-listed",
        iconName: "LineChart",
        group: "Mainboard IPOs",
      },
      {
        name: "Upcoming IPOs",
        desc: "IPOs opening soon",
        href: "/upcoming-ipos",
        iconName: "Calendar",
        group: "Upcoming IPOs",
      },
      {
        name: "IPO Calendar",
        desc: "Schedule of upcoming listings",
        href: "/ipo-calendar",
        iconName: "CalendarDays",
        group: "Upcoming IPOs",
      },
    ],
    gridCols: 2,
    layout: "grouped",
  },
  {
    name: "Online Betting Site",
    subMenuHeading: ["Mainboard IPOs", "Upcoming IPOs"],
    subMenu: [
      {
        name: "Active IPOs",
        desc: "Currently open for subscription",
        href: "/active-ipos",
        iconName: "Activity",
        group: "Mainboard IPOs",
      },
      {
        name: "Recently Listed",
        desc: "IPOs listed in last 30 days",
        href: "/recently-listed",
        iconName: "LineChart",
        group: "Mainboard IPOs",
      },
      {
        name: "Upcoming IPOs",
        desc: "IPOs opening soon",
        href: "/upcoming-ipos",
        iconName: "Calendar",
        group: "Upcoming IPOs",
      },
      {
        name: "IPO Calendar",
        desc: "Schedule of upcoming listings",
        href: "/ipo-calendar",
        iconName: "CalendarDays",
        group: "Upcoming IPOs",
      },
    ],
    gridCols: 2,
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
