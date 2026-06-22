export default function IletisimPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2 text-slate-800">İletişim</h1>
      <div className="w-10 h-0.5 bg-rose-500 rounded mb-10" />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <h2 className="text-lg font-semibold text-slate-700 mb-6">İletişim Bilgileri</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="text-xl mt-0.5">📧</span>
              <div>
                <div className="font-medium text-slate-600 text-sm">E-posta</div>
                <a href="mailto:cocukradyolojidernegi@gmail.com" className="text-sm text-indigo-600 hover:underline">
                  cocukradyolojidernegi@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl mt-0.5">📍</span>
              <div>
                <div className="font-medium text-slate-600 text-sm">Adres</div>
                <div className="text-sm text-slate-500 leading-relaxed">
                  Çocuk Radyolojisi Derneği<br />
                  Kayseri, Türkiye
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-slate-700 mb-4">Sosyal Medya</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/cocukradyolojisi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram — @cocukradyolojisi
              </a>
              <a
                href="https://www.youtube.com/@%C3%87ocukRadyolojisiDerne%C4%9Fi/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90 bg-red-600"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube — Çocuk Radyolojisi Derneği
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-lg font-semibold text-slate-700 mb-6">Mesaj Gönderin</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Ad Soyad *</label>
              <input type="text" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Adınız Soyadınız" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">E-posta *</label>
              <input type="email" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="e-posta@ornek.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Konu</label>
              <input type="text" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Konu başlığı" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Mesaj *</label>
              <textarea rows={5} className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Mesajınız..." required />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
