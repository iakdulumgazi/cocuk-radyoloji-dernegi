import Image from "next/image";

export default function HakkimizdaPage() {
  const board = [
    { name: "Prof. Dr. Ahmet SIĞIRCI", role: "Başkan", photo: "/board/sigirci.jpeg" },
    { name: "Doç. Dr. Evrim ÖZMEN", role: "Başkan Yardımcısı", photo: "/board/ozmen.jpg" },
    { name: "Doç. Dr. Zehra Filiz KARAMAN", role: "Genel Sekreter", photo: "/board/karaman.jpg" },
    { name: "Prof. Dr. Mehmet ÖZTÜRK", role: "Sayman", photo: "/board/ozturk.jpg" },
    { name: "Doç. Dr. İsmail AKDULUM", role: "Üye", photo: "/board/akdulum.png" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Hakkımızda</h1>
      <div className="w-10 h-0.5 bg-rose-500 rounded mb-10" />

      <div className="mb-14">
        <p className="text-slate-600 leading-relaxed text-lg mb-4">
          Çocuk Radyolojisi Derneği, Türkiye&apos;de pediatrik radyoloji alanında çalışan uzmanları bir araya getirmek, bilimsel gelişimi desteklemek ve eğitim faaliyetleri düzenlemek amacıyla <strong>2014</strong> yılında kurulmuştur.
        </p>
        <p className="text-slate-500 leading-relaxed">
          Derneğimiz; kongre, kurs ve sempozyumlar düzenleyerek üyelerimizin mesleki gelişimine katkı sağlamakta, ulusal ve uluslararası kuruluşlarla iş birliği yaparak Türkiye&apos;deki çocuk radyolojisini dünya standartlarına taşımayı hedeflemektedir.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div className="rounded-2xl p-6 border-l-4 border-indigo-600 bg-indigo-50">
          <h2 className="font-bold text-lg mb-3 text-indigo-700">Misyonumuz</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Pediatrik radyoloji alanında bilimsel araştırmaları teşvik etmek, eğitim programları aracılığıyla uzmanlık gelişimini desteklemek ve hasta güvenliğini ön planda tutan görüntüleme uygulamalarını yaygınlaştırmak.
          </p>
        </div>
        <div className="rounded-2xl p-6 border-l-4 border-rose-500 bg-rose-50">
          <h2 className="font-bold text-lg mb-3 text-rose-600">Vizyonumuz</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Türkiye&apos;de çocuk radyolojisini uluslararası standartlarda temsil eden, etkin bir bilimsel topluluk oluşturmak ve bu alanda en güvenilir referans kuruluş olmak.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-slate-800">Yönetim Kurulu</h2>
      <div className="w-10 h-0.5 bg-rose-500 rounded mb-8" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {board.map((m) => (
          <div key={m.name} className="border border-slate-100 rounded-2xl p-5 text-center hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-slate-100">
              <Image
                src={m.photo}
                alt={m.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="font-semibold text-slate-800 text-sm leading-snug">{m.name}</div>
            <div className="text-xs mt-1 text-rose-500 font-medium">{m.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
