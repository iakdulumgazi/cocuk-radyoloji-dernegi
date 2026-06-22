const benefits = [
  "Ulusal kongre ve kurslara indirimli katılım",
  "Vaka arşivi ve eğitim materyallerine erişim",
  "Dernek bültenine ücretsiz abonelik",
  "Çok merkezli araştırma çalışmalarına dahil olma",
  "Meslektaş ağı ve mentörlük programı",
  "Uluslararası dernek iş birlikleri",
];

const steps = [
  {
    no: "1",
    title: "Formu İndirin & Doldurun",
    desc: "Üye kayıt formunu indirin, eksiksiz doldurun ve imzalayın.",
  },
  {
    no: "2",
    title: "Aidatı Ödeyin",
    desc: "Dernek aidatını aşağıdaki banka hesabına yatırın ve dekontu saklayın.",
  },
  {
    no: "3",
    title: "Evrakları Gönderin",
    desc: "Doldurulmuş form, banka dekontu ve diploma/uzmanlık belgesini e-posta ile iletin.",
  },
];

export default function UyelikPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">Üyelik</h1>
      <div className="w-10 h-0.5 bg-rose-500 rounded mb-10" />

      {/* Steps */}
      <div className="mb-14">
        <h2 className="text-lg font-semibold text-slate-700 mb-6">Başvuru Adımları</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.no} className="border border-slate-100 rounded-2xl p-6 bg-slate-50">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center mb-4">
                {s.no}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Download */}
      <div className="mb-10 p-6 rounded-2xl border border-indigo-100 bg-indigo-50 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <div className="font-semibold text-slate-800 mb-1">Üye Kayıt Formu</div>
          <div className="text-sm text-slate-500">Formu indirin, doldurun ve imzalayın.</div>
        </div>
        <a
          href="/uye-kayit-formu.pdf"
          download="ÇRD-Üye-Kayıt-Formu.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          PDF İndir
        </a>
      </div>

      {/* Required documents */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-slate-700 mb-4">Gerekli Evraklar</h2>
        <ul className="space-y-2">
          {[
            "Doldurulmuş ve imzalanmış üye kayıt formu",
            "Güncel aidatın ödendiğine dair banka dekontu",
            "Tıp fakültesi diploması ve uzmanlık belgesi",
          ].map((doc) => (
            <li key={doc} className="flex items-start gap-3 text-slate-600 text-sm">
              <span className="mt-0.5 text-indigo-500">›</span>
              {doc}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          Evrakları{" "}
          <a href="mailto:cocukradyolojidernegi@gmail.com" className="text-indigo-600 hover:underline">
            cocukradyolojidernegi@gmail.com
          </a>{" "}
          adresine e-posta ile gönderin.
        </p>
      </div>

      {/* Bank info */}
      <div className="rounded-2xl border border-slate-200 p-6 bg-white">
        <h2 className="text-lg font-semibold text-slate-700 mb-4">Banka Hesap Bilgileri</h2>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="text-sm text-slate-400 w-32">Banka</span>
            <span className="text-sm font-medium text-slate-700">Türkiye Halk Bankası — Erciyes Üniversitesi Şubesi</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="text-sm text-slate-400 w-32">Hesap Adı</span>
            <span className="text-sm font-medium text-slate-700">Çocuk Radyolojisi Derneği</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="text-sm text-slate-400 w-32">IBAN</span>
            <span className="text-base font-bold tracking-wider text-slate-800 font-mono">
              TR74 0001 2001 2410 0012 1000 05
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
