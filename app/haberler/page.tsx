import Image from "next/image";
import { events } from "@/lib/events";

export default function HaberlerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Haberler & Etkinlikler</h1>
      <div className="w-10 h-0.5 bg-rose-500 rounded mb-10" />

      <div className="space-y-8">
        {events.map((e) => (
          <article
            key={e.slug}
            className="grid sm:grid-cols-[200px_1fr] gap-5 sm:gap-6 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Afiş */}
            <a
              href={e.poster}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-50"
            >
              <Image
                src={e.poster}
                alt={`${e.topic} afişi`}
                width={400}
                height={560}
                unoptimized
                className="w-full h-56 sm:h-full object-cover object-top"
              />
            </a>

            {/* Bilgiler */}
            <div className="p-5 sm:py-6 sm:pr-6 sm:pl-0">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">
                  Webinar
                </span>
                <span className="text-xs text-slate-400">
                  {e.date} · {e.time}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-800 leading-snug">{e.topic}</h2>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">{e.series}</p>

              <div className="mt-4 space-y-3 text-sm">
                {e.moderators.length > 0 && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                      Moderatör
                    </span>
                    {e.moderators.map((p) => (
                      <div key={p.name} className="mt-0.5">
                        <span className="font-medium text-slate-700">{p.name}</span>
                        {p.affil && <span className="block text-xs text-slate-400">{p.affil}</span>}
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {e.speakers.length > 1 ? "Konuşmacılar" : "Konuşmacı"}
                  </span>
                  {e.speakers.map((p) => (
                    <div key={p.name} className="mt-0.5">
                      <span className="font-medium text-slate-700">{p.name}</span>
                      {p.affil && <span className="block text-xs text-slate-400">{p.affil}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {e.register && (
                <a
                  href={e.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
                >
                  Kayıt İçin Tıklayınız
                  <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
