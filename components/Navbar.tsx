"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/haberler", label: "Haberler & Etkinlikler" },
  { href: "/egitim", label: "Eğitim & Kaynaklar" },
  { href: "/uyelik", label: "Üyelik" },
  { href: "/iletisim", label: "İletişim" },
];

const itemClass = (active: boolean) =>
  `px-4 h-11 flex items-center whitespace-nowrap text-sm font-medium transition-colors ${
    active ? "bg-white/15 text-white" : "text-slate-300 hover:text-white hover:bg-white/10"
  }`;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Başta hepsi görünür; istemcide ölçüm yapılınca sığmayanlar menüye taşınır.
  const [visibleCount, setVisibleCount] = useState(links.length);

  const navRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  // Hangi linkler yatay sığıyor hesapla; gerisi "daha fazla" menüsüne gider.
  const recalc = useCallback(() => {
    const row = rowRef.current;
    const measure = measureRef.current;
    if (!row || !measure) return;
    const available = row.clientWidth;
    const linkNodes = Array.from(measure.querySelectorAll<HTMLElement>("[data-mw]"));
    const moreNode = measure.querySelector<HTMLElement>("[data-more]");
    const moreW = moreNode ? moreNode.offsetWidth : 48;
    const widths = linkNodes.map((n) => n.offsetWidth);

    const fit = (reserve: number) => {
      let total = 0;
      let count = 0;
      for (const w of widths) {
        if (total + w <= available - reserve) {
          total += w;
          count++;
        } else break;
      }
      return count;
    };

    let count = fit(0);
    if (count < links.length) count = fit(moreW); // taşma varsa hamburger yeri ayır
    setVisibleCount(count);
  }, []);

  useEffect(() => {
    recalc();
    const ro = new ResizeObserver(recalc);
    if (rowRef.current) ro.observe(rowRef.current);
    window.addEventListener("resize", recalc);
    // Fontlar yüklenince genişlikler değişebilir → tekrar ölç
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(recalc);
    }
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, [recalc]);

  // Sayfa değişince menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  // Dışarı tıklayınca menüyü kapat
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const visible = links.slice(0, visibleCount);
  const overflow = links.slice(visibleCount);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Beyaz bant: logo + başlık */}
      <div className="bg-white w-full border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 sm:gap-4 py-3">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="ÇRD Logo"
              width={144}
              height={144}
              unoptimized
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36"
            />
          </Link>
          <Link
            href="/"
            className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-800 hover:text-indigo-700 transition-colors leading-tight"
          >
            Çocuk Radyolojisi Derneği
          </Link>
        </div>
      </div>

      {/* Lacivert menü (priority+) */}
      <nav ref={navRef} className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={rowRef} className="relative h-11">
            {/* Görünür satır */}
            <div className="flex items-center h-11">
              {visible.map((l) => (
                <Link key={l.href} href={l.href} className={itemClass(pathname === l.href)}>
                  {l.label}
                </Link>
              ))}

              {overflow.length > 0 && (
                <button
                  onClick={() => setOpen((o) => !o)}
                  className="px-3 h-11 ml-auto flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Menü"
                  aria-expanded={open}
                >
                  {/* Görünür liste boşsa "Menü" yazısını da göster */}
                  {visible.length === 0 && <span className="text-sm font-medium">Menü</span>}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {open ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              )}
            </div>

            {/* Gizli ölçüm satırı — genişlik hesaplamak için */}
            <div
              ref={measureRef}
              aria-hidden="true"
              className="absolute top-0 left-0 flex items-center h-11 invisible pointer-events-none"
            >
              {links.map((l) => (
                <span key={l.href} data-mw className="px-4 h-11 flex items-center whitespace-nowrap text-sm font-medium">
                  {l.label}
                </span>
              ))}
              <span data-more className="px-3 h-11 flex items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" />
              </span>
            </div>
          </div>
        </div>

        {/* Açılır taşma menüsü */}
        {open && overflow.length > 0 && (
          <div className="border-t border-white/10 bg-slate-800 px-2 py-2 space-y-1">
            {overflow.map((l) => (
              <Link
                key={l.href}
                href={l.href}
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
