"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/haberler", label: "Haberler & Etkinlikler" },
  { href: "/egitim", label: "Eğitim & Kaynaklar" },
  { href: "/uyelik", label: "Üyelik" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* White band: logo + title */}
      <div className="bg-white w-full border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 py-3">
          <Link href="/">
            <Image src="/logo.png" alt="ÇRD Logo" width={144} height={144} unoptimized />
          </Link>
          <Link href="/" className="text-3xl sm:text-4xl font-bold text-slate-800 hover:text-indigo-700 transition-colors leading-tight">
            Çocuk Radyolojisi Derneği
          </Link>
        </div>
      </div>

      {/* Navy nav */}
      <nav className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1 h-11">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 h-full flex items-center text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "bg-white/15 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center justify-between h-11">
            <span className="text-slate-300 text-sm">Menü</span>
            <button
              className="p-2 text-slate-300 hover:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Menü"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 px-4 py-2 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2 px-3 rounded text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-white bg-white/15"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
