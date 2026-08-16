"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { SearchField } from "@/components/search-field";
import { navItems } from "@/lib/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`bg-header text-mint ${isOpen ? "lg:static" : ""}`}>
      <Container>
        <div className="flex items-center justify-between gap-4 py-6 lg:py-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/Globo-Logo-white.svg"
              alt="Globomantics"
              width={220}
              height={40}
              className="h-auto w-[140px] border-r border-mint pr-3 sm:w-[180px] lg:w-[220px]"
              priority
            />
            <span className="hidden text-xs text-mint italic lg:inline">
              MANIACALLY TAKING TECH TO THE GLOBE
            </span>
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
            <div className="flex flex-col items-end">
              <SearchField id="desktop-search" className="mb-2 w-[228px]" />
              <nav aria-label="Primary">
                <ul className="flex items-center">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-3 py-3 text-sm text-mint transition-colors duration-300 hover:text-mint-hover"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              <span className="mx-8 hidden h-[90px] border-l border-mint xl:block" />
              <Link
                href="#"
                className="flex flex-col items-center text-sm text-mint transition-colors hover:text-white"
              >
                <Image
                  src="/images/avatar.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="mb-1"
                />
                Sign-in
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="relative block h-4 w-[22px]">
              <span
                className={`absolute top-0 left-0 h-0.5 w-full bg-white transition-transform ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute top-[7px] left-0 h-0.5 w-full bg-white transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div
            id="mobile-nav"
            className="border-t border-white py-5 lg:hidden"
          >
            <SearchField id="mobile-search" className="mx-auto mb-4 max-w-xs" />
            <nav aria-label="Mobile">
              <ul className="flex flex-col items-center">
                {navItems.map((item) => (
                  <li key={item.label} className="w-full">
                    <Link
                      href={item.href}
                      className="block py-3 text-center text-sm text-mint"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
