/* eslint-disable @next/next/no-img-element */
// Navbar altındaki karşılama şeridi: arka planda gerçek pediatrik radyoloji
// görüntüleri yatay olarak kayar, üstte kısa bir slogan durur.

const images = Array.from({ length: 15 }, (_, i) => `/slider/${String(i + 1).padStart(2, "0")}.jpg`);

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex h-full shrink-0 items-stretch" aria-hidden={hidden}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-full w-56 sm:w-64 object-cover shrink-0"
        />
      ))}
    </div>
  );
}

export default function RadiologyMarquee() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Kayan radyoloji görüntüleri (arka plan) */}
      <div className="absolute inset-0 flex items-center">
        <div className="crd-marquee flex h-full w-max items-stretch opacity-50">
          <Track />
          <Track hidden />
        </div>
      </div>

      {/* Görüntüleri hafif koyulaştır — slogan okunaklı kalsın */}
      <div className="pointer-events-none absolute inset-0 bg-slate-900/40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.45) 55%, transparent 100%)" }}
      />
      {/* Kenar yumuşatma */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent" />

      {/* Slogan */}
      <div className="relative text-center px-4 py-14 sm:py-20">
        <p className="text-indigo-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          Çocuk Radyolojisi Derneği · 2014
        </p>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Pediatrik Radyolojide Bilim ve Dayanışma
        </h2>
        <p className="text-slate-200 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
          Çocukların doğru, güvenli ve nitelikli görüntülenmesi için eğitim, araştırma ve mesleki iş birliği.
        </p>
      </div>
    </section>
  );
}
