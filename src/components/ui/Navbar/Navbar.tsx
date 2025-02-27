"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { NAVIGATION_MENUS } from "./constants";
import { throttle } from "lodash";
import { cn } from "@/lib/utils";
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import { Button } from "../moving-border";

const Logo = () => (
  <Link href="/" className="block text-base md:text-xl whitespace-nowrap lg:text-2xl font-inter font-semibold">
    Yatri Book
  </Link>
);

const DesktopNavigation = () => (
  <nav className="hidden lg:flex items-center gap-2">
    <ul className="flex items-center gap-2 text-base">
      {NAVIGATION_MENUS.map((menu) => (
        <DesktopMenu key={menu.name} menu={menu} />
      ))}
    </ul>
  </nav>
);

const MobileNavigation = () => (
  <nav className="flex lg:hidden items-center gap-2">
    <MobMenu Menus={NAVIGATION_MENUS} />
  </nav>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={cn(
        "nav-container",
        isScrolled ? "nav-scrolled" : "bg-background",
        "py-1 transition-transform duration-300 shadow-sm",
        !isVisible && "-translate-y-full"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between max-w-full">
          <Logo />

          <DesktopNavigation />

          <div className="flex items-center gap-2 md:gap-4">
            <MobileNavigation />
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <Link
                href="/"
                className="social-icon-link group"
                aria-label="WhatsApp"
              >
                <div className="social-icon-wrapper">
                  <FaWhatsapp className="social-icon text-whatsapp group-hover:scale-110 size-4 md:size-5" />
                </div>
              </Link>
              <Link
                href="/"
                className="social-icon-link group"
                aria-label="Telegram"
              >
                <div className="social-icon-wrapper">
                  <FaTelegram className="social-icon text-telegram group-hover:scale-110 size-4 md:size-5" />
                </div>
              </Link>
              <Link
                href="/"
                className="social-icon-link group"
                aria-label="Instagram"
              >
                <div className="social-icon-wrapper instagram-gradient">
                  <FaInstagram className="social-icon text-foreground group-hover:scale-110 size-4 md:size-5" />
                </div>
              </Link>
            </div>
            <Button
              borderRadius="1.75rem"
              className="bg-primaryBtn-to font-semibold shadow-md"
            >
              GET ID NOW
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
