import Link from "next/link";
import { videos } from "@/lib/videos";

export const metadata = {
  title: "Video Eğitimler | Çocuk Radyolojisi Derneği",
};

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  const months = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

export default function VideolarPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-2">
        <Link href="/egitim" className="text-sm text-indigo-600 hover:text-indigo-800">← Eğitim & Kaynaklar</Link>
      </div>
      <h1 className="text-3xl font-bold text-slate-800 mt-3">Video Eğitimler</h1>
      <div className="w-10 h-0.5 bg-rose-500 rounded mb-4" />
      <p className="text-slate-500 mb-10 text-sm">
        YouTube kanalımızdaki tüm eğitim videoları aşağıda listelenmiştir.{" "}
        <a
          href="https://www.youtube.com/@%C3%87ocukRadyolojisiDerne%C4%9Fi/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Kanala git →
        </a>
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <a
            key={v.id}
            href={`https://www.youtube.com/watch?v=${v.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <div className="relative bg-slate-900 aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-400 mb-1">{formatDate(v.published)}</p>
              <h3 className="text-sm font-semibold text-slate-800 leading-snug line-clamp-3 group-hover:text-indigo-700 transition-colors">
                {v.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
