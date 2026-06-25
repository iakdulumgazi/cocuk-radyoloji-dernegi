import Link from "next/link";
import { videos } from "@/lib/videos";

const categories = [
  {
    title: "Video Eğitimler",
    icon: "🎬",
    href: "/egitim/videolar",
    preview: null as string[] | null,
  },
  {
    title: "Vaka Arşivi",
    icon: "🩻",
    href: null,
    preview: [
      "Pediatrik beyin MRI vakaları",
      "Neonatal toraks BT örnekleri",
      "Çocuklarda batın ultrasonografisi",
      "Pediatrik kas-iskelet radyolojisi",
    ],
  },
  {
    title: "Kılavuzlar & Protokoller",
    icon: "📋",
    href: null,
    preview: [
      "Pediatrik MRI sedasyon protokolü",
      "Çocuklarda radyasyon doz optimizasyonu",
      "Yenidoğan görüntüleme kılavuzu",
      "Pediatrik kontrastlı inceleme rehberi",
    ],
  },
  {
    title: "Yayınlar & Makaleler",
    icon: "📄",
    href: null,
    preview: [
      "Türk Çocuk Radyolojisi Bülteni",
      "Üye yayın listesi",
      "Önerilen uluslararası dergiler",
      "Kongre bildiri arşivi",
    ],
  },
];

export default function EgitimPage() {
  const latestVideos = videos.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#1a2f5e" }}>Eğitim & Kaynaklar</h1>
      <div className="w-12 h-1 rounded mb-10" style={{ backgroundColor: "#c0392b" }} />

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat) => {
          if (cat.href) {
            return (
              <Link
                key={cat.title}
                href={cat.href}
                className="group border border-indigo-100 bg-indigo-50/40 rounded-xl p-6 hover:shadow-md hover:border-indigo-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h2 className="font-bold text-lg group-hover:text-indigo-700 transition-colors" style={{ color: "#1a2f5e" }}>
                      {cat.title}
                    </h2>
                  </div>
                  <span className="text-indigo-400 group-hover:text-indigo-600 text-lg transition-colors">→</span>
                </div>
                <ul className="space-y-2">
                  {latestVideos.map((v) => (
                    <li key={v.id} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-0.5 shrink-0" style={{ color: "#c0392b" }}>›</span>
                      <span className="line-clamp-1">{v.title}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-indigo-600 mt-4 font-medium">Tüm videolar için tıklayın →</p>
              </Link>
            );
          }

          return (
            <div key={cat.title} className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="font-bold text-lg" style={{ color: "#1a2f5e" }}>{cat.title}</h2>
              </div>
              <ul className="space-y-2">
                {cat.preview?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span style={{ color: "#c0392b" }}>›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
