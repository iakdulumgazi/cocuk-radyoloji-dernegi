import Image from "next/image";
import { events, WebinarEvent } from "@/lib/events";

function parseDate(dateStr: string): Date {
  const months: Record<string, number> = {
    "Ocak": 0, "Şubat": 1, "Mart": 2, "Nisan": 3, "Mayıs": 4, "Haziran": 5,
    "Temmuz": 6, "Ağustos": 7, "Eylül": 8, "Ekim": 9, "Kasım": 10, "Aralık": 11,
  };
  const [day, month, year] = dateStr.split(" ");
  return new Date(Number(year), months[month] ?? 0, Number(day));
}

function EventCard({ e }: { e: WebinarEvent }) {
  return (
    <article
      key={e.slug}
      className="grid sm:grid-cols-[200px_1fr] gap-5 sm:gap-6 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
    >
      <a href={e.poster} target="_blank" rel="noopener noreferrer" className="block bg-slate-50">
        <Image
          src={e.poster}
          alt={`${e.topic} afişi`}
          width={400}
          height={560}
          unoptimized
          className="w-full h-56 sm:h-full object-cover object-top"
        />
      </a>
      <div className="p-5 sm:py-6 sm:pr-6 sm:pl-0">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">Webinar</span>
          <span className="text-xs text-slate-400">{e.date} · {e.time}</span>
        </div>
        <h2 className="text-lg font-bold text-slate-800 leading-snug">{e.topic}</h2>
        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{e.series}</p>
        <div className="mt-4 space-y-3 text-sm">
          {e.moderators.length > 0 && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-rose-500">Moderatör</span>
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
            Kayıt İçin Tıklayınız <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function HaberlerPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = events.filter((e) => parseDate(e.date) >= today);
  const past = events.filter((e) => parseDate(e.date) < today);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Haberler & Etkinlikler</h1>
      <div className="w-10 h-0.5 bg-rose-500 rounded mb-10" />

      {upcoming.length > 0 && (
        <section className="mb-14">
          <h2 className="text-lg font-semibold text-slate-700 mb-6">Yaklaşan Etkinlikler</h2>
          <div className="space-y-8">
            {upcoming.map((e) => <EventCard key={e.slug} e={e} />)}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-slate-500 mb-6 flex items-center gap-3">
            Geçmiş Etkinlikler
            <span className="flex-1 h-px bg-slate-200" />
          </h2>
          <div className="space-y-8 opacity-80">
            {past.map((e) => <EventCard key={e.slug} e={e} />)}
          </div>
        </section>
      )}

      {upcoming.length === 0 && past.length === 0 && (
        <p className="text-slate-500">Henüz etkinlik bulunmamaktadır.</p>
      )}

    </div>
  );
}
