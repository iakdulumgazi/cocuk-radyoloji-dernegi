import Link from "next/link";
import Image from "next/image";
import RadiologyPattern from "@/components/RadiologyPattern";
import RadiologyMarquee from "@/components/RadiologyMarquee";
import { events } from "@/lib/events";

const latest = events.slice(0, 3);

export default function HomePage() {
  return (
    <div>
      {/* Karşılama şeridi */}
      <RadiologyMarquee />

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
            {latest.map((e) => (
              <Link
                key={e.slug}
                href="/haberler"
                className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="bg-slate-50 overflow-hidden">
                  <Image
                    src={e.poster}
                    alt={`${e.topic} afişi`}
                    width={400}
                    height={300}
                    unoptimized
                    className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">Webinar</span>
                    <span className="text-xs text-slate-400">{e.date}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2 leading-snug group-hover:text-indigo-700 transition-colors">{e.topic}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{e.series}</p>
                  <span className="text-sm font-medium text-indigo-600 mt-4">Detaylar →</span>
                </div>
              </Link>
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
