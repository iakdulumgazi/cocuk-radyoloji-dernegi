import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-white mb-3">Çocuk Radyolojisi Derneği</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              2014 yılında kurulan derneğimiz, Türkiye&apos;de çocuk radyolojisinin gelişimine katkı sağlamaktadır.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/haberler" className="hover:text-white transition-colors">Haberler & Etkinlikler</Link></li>
              <li><Link href="/egitim" className="hover:text-white transition-colors">Eğitim & Kaynaklar</Link></li>
              <li><Link href="/uyelik" className="hover:text-white transition-colors">Üyelik</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li>cocukradyolojidernegi@gmail.com</li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim Formu</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Çocuk Radyolojisi Derneği. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
