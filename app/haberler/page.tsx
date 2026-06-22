const events = [
  {
    id: 1,
    type: "Kongre",
    date: "15–18 Haziran 2026",
    title: "7. Ulusal Çocuk Radyolojisi Kongresi",
    location: "İstanbul Kongre Merkezi, İstanbul",
    desc: "Pediatrik görüntüleme, nöroradyoloji, MSK ve kardiyak radyoloji oturumlarını içeren yıllık ulusal kongremiz.",
    tag: "Kayıt Açık",
    tagColor: "#16a34a",
  },
  {
    id: 2,
    type: "Kurs",
    date: "3–4 Mayıs 2026",
    title: "Yenidoğan Nöroradyoloji Kursu",
    location: "Ankara — Hacettepe Üniversitesi",
    desc: "Yenidoğan beyin MRI yorumlama üzerine interaktif, vaka bazlı pratik kurs.",
    tag: "Kayıt Açık",
    tagColor: "#16a34a",
  },
  {
    id: 3,
    type: "Webinar",
    date: "20 Nisan 2026",
    title: "Pediatrik MSK Radyoloji Webinar Serisi",
    location: "Online",
    desc: "Çocuklarda kas-iskelet sistemi görüntülenmesine odaklanan 4 haftalık online eğitim.",
    tag: "Tamamlandı",
    tagColor: "#6b7280",
  },
  {
    id: 4,
    type: "Kurs",
    date: "8 Mart 2026",
    title: "Pediatrik Abdominal Radyoloji Kursu",
    location: "İzmir — Ege Üniversitesi",
    desc: "Çocuklarda batın görüntülemesi, ultrasonografi ve BT uygulamaları.",
    tag: "Tamamlandı",
    tagColor: "#6b7280",
  },
];

const typeColors: Record<string, string> = {
  Kongre: "#1a2f5e",
  Kurs: "#c0392b",
  Webinar: "#7c3aed",
};

export default function HaberlerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#1a2f5e" }}>Haberler & Etkinlikler</h1>
      <div className="w-12 h-1 rounded mb-10" style={{ backgroundColor: "#c0392b" }} />

      <div className="space-y-6">
        {events.map((e) => (
          <div key={e.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-bold px-2 py-1 rounded text-white"
                  style={{ backgroundColor: typeColors[e.type] ?? "#1a2f5e" }}
                >
                  {e.type}
                </span>
                <span className="text-sm text-gray-500">{e.date}</span>
              </div>
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full border"
                style={{ color: e.tagColor, borderColor: e.tagColor }}
              >
                {e.tag}
              </span>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">{e.title}</h2>
            <p className="text-sm text-gray-500 mb-2">📍 {e.location}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
