import Link from "next/link";
import RadiologyPattern from "@/components/RadiologyPattern";

const news = [
  {
    id: 1,
    date: "15 Haziran 2026",
    title: "7. Ulusal Çocuk Radyolojisi Kongresi",
    summary: "Bu yıl İstanbul'da düzenlenecek kongremizde pediatrik görüntüleme alanındaki son gelişmeler ele alınacak.",
    tag: "Kongre",
  },
  {
    id: 2,
    date: "3 Mayıs 2026",
    title: "Yenidoğan Nöroradyoloji Kursu",
    summary: "Uzman eğitimciler eşliğinde pratik uygulamalı yenidoğan beyin MRI kursu — kayıtlar açıldı.",
    tag: "Kurs",
  },
  {
    id: 3,
    date: "20 Nisan 2026",
    title: "Pediatrik MSK Radyoloji Webinarı",
    summary: "Çocuklarda kas-iskelet sistemi görüntülemesi üzerine online eğitim serisi başlıyor.",
    tag: "Webinar",
  },
];

const tagColors: Record<string, string> = {
  Kongre: "bg-indigo-100 text-indigo-700",
  Kurs: "bg-rose-100 text-rose-700",
  Webinar: "bg-violet-100 text-violet-700",
};

export default function HomePage() {
  return (
    <div>
      {/* Latest News */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Son Haberler & Etkinlikler</h2>
              <div className="w-10 h-0.5 bg-rose-500 mt-2 rounded" />
            </div>
            <Link href="/haberler" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              Tümünü gör →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <article key={n.id} className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[n.tag]}`}>{n.tag}</span>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2 leading-snug group-hover:text-indigo-700 transition-colors">{n.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{n.summary}</p>
                </div>
                <div className="px-6 pb-5">
                  <Link href="/haberler" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                    Devamını oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ background: "radial-gradient(ellipse at 30% 50%, #6366f1 0%, transparent 60%)" }} />
        <RadiologyPattern className="absolute inset-0 w-full h-full text-white opacity-[0.06] pointer-events-none" />
        <div className="relative max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Derneğimize Üye Olun</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Türkiye&apos;nin önde gelen pediatrik radyologlarıyla aynı platformda yer alın.
          </p>
          <Link
            href="/uyelik"
            className="inline-block px-8 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 transition-colors text-white"
          >
            Üyelik Başvurusu
          </Link>
        </div>
      </section>
    </div>
  );
}
