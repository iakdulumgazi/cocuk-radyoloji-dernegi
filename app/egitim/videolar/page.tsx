"use client";

import { useState } from "react";
import Link from "next/link";
import { videos } from "@/lib/videos";

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  const months = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

export default function VideolarPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedDesc, setExpandedDesc] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-2">
        <Link href="/egitim" className="text-sm text-indigo-600 hover:text-indigo-800">← Eğitim & Kaynaklar</Link>
      </div>
      <h1 className="text-3xl font-bold text-slate-800 mt-3">Video Eğitimler</h1>
      <div className="w-10 h-0.5 bg-rose-500 rounded mb-4" />
      <p className="text-slate-500 mb-10 text-sm">
        {videos.length} video ·{" "}
        <a
          href="https://www.youtube.com/@%C3%87ocukRadyolojisiDerne%C4%9Fi/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          YouTube kanalına git →
        </a>
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => {
          const isActive = activeId === v.id;
          const isDescOpen = expandedDesc === v.id;

          return (
            <div
              key={v.id}
              className="rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all"
            >
              {/* Thumbnail veya embed */}
              {isActive ? (
                <div className="aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setActiveId(v.id)}
                  className="group relative w-full aspect-video bg-slate-900 overflow-hidden block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1"><path d="M8 5v14l11-7z"/></svg>
                    </span>
                  </span>
                </button>
              )}

              {/* Bilgi */}
              <div className="p-4">
                <p className="text-xs text-slate-400 mb-1">{formatDate(v.published)}</p>
                <h3 className="text-sm font-semibold text-slate-800 leading-snug">
                  {v.title}
                </h3>

                {/* Açıklama */}
                {v.description && (
                  <div className="mt-3">
                    <button
                      onClick={() => setExpandedDesc(isDescOpen ? null : v.id)}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      {isDescOpen ? "Açıklamayı gizle ▲" : "Açıklamayı gör ▼"}
                    </button>
                    {isDescOpen && (
                      <pre className="mt-2 text-xs text-slate-600 whitespace-pre-wrap font-sans leading-relaxed border-t border-slate-100 pt-2">
                        {v.description}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
