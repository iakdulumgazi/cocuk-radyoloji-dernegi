const categories = [
  {
    title: "Vaka Arşivi",
    icon: "🩻",
    items: [
      "Pediatrik beyin MRI vakaları",
      "Neonatal toraks BT örnekleri",
      "Çocuklarda batın ultrasonografisi",
      "Pediatrik kas-iskelet radyolojisi",
    ],
  },
  {
    title: "Kılavuzlar & Protokoller",
    icon: "📋",
    items: [
      "Pediatrik MRI sedasyon protokolü",
      "Çocuklarda radyasyon doz optimizasyonu",
      "Yenidoğan görüntüleme kılavuzu",
      "Pediatrik kontrastlı inceleme rehberi",
    ],
  },
  {
    title: "Video Eğitimler",
    icon: "🎬",
    items: [
      "Pediatrik beyin gelişimi MRI",
      "Çocuklarda kalça USG tekniği",
      "Neonatal kranial USG yorumlama",
      "Pediatrik toraks radyolojisi webinarları",
    ],
  },
  {
    title: "Yayınlar & Makaleler",
    icon: "📄",
    items: [
      "Türk Çocuk Radyolojisi Bülteni",
      "Üye yayın listesi",
      "Önerilen uluslararası dergiler",
      "Kongre bildiri arşivi",
    ],
  },
];

export default function EgitimPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#1a2f5e" }}>Eğitim & Kaynaklar</h1>
      <div className="w-12 h-1 rounded mb-4" style={{ backgroundColor: "#c0392b" }} />
      <p className="text-gray-500 mb-12 max-w-2xl">
        Derneğimiz üyelerine özel eğitim materyalleri, vaka arşivleri ve kılavuzlar aşağıda listelenmiştir. Tüm içeriklere erişim için üyelik gerekmektedir.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="font-bold text-lg" style={{ color: "#1a2f5e" }}>{cat.title}</h2>
            </div>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span style={{ color: "#c0392b" }}>›</span>
                  <span className="hover:underline cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Member login CTA */}
      <div
        className="mt-12 rounded-xl p-8 text-center text-white"
        style={{ backgroundColor: "#1a2f5e" }}
      >
        <h3 className="text-xl font-bold mb-3">Tüm İçeriklere Erişin</h3>
        <p className="text-blue-200 mb-6">Vaka arşivi ve eğitim materyallerine erişmek için üye girişi yapın.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#"
            className="px-6 py-2 rounded-lg font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors"
          >
            Üye Girişi
          </a>
          <a
            href="/uyelik"
            className="px-6 py-2 rounded-lg font-semibold bg-white transition-colors hover:bg-gray-100"
            style={{ color: "#1a2f5e" }}
          >
            Üye Ol
          </a>
        </div>
      </div>
    </div>
  );
}
