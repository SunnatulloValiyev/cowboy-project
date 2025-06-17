"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogInIcon, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/about", label: "Biz haqimizda" },
    { href: "/contact", label: "Aloqa" },
  ];

  return (
    <header className="p-3 shadow-md">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold">Cowboy.uz</h1>

        {/* Desktop: Admin */}
        <div className="hidden md:flex gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm" className="px-2">
              <LogInIcon className="w-4 h-4 mr-1" /> Admin
            </Button>
          </Link>
        </div>

        {/* Burger icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-wrap gap-4 mb-5 w-full text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-2 py-1 rounded-md transition ${
              pathname === link.href
                ? "bg-gray-300 font-semibold"
                : "hover:bg-gray-200"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Cart button — alohida pastda */}
      <div className="mb-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 w-full"
        >
          <ShoppingCart className="w-4 h-4" />
          Cart (0)
        </Button>
      </div>

      {/* Mobile: Burger ochilganda faqat Admin */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-2">
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            <Button
              variant="outline"
              size="sm"
              className="w-full mx-auto flex justify-start items-center gap-1"
            >
              <LogInIcon className="w-4 h-4" />
              Admin
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
