// Navbar altındaki karşılama şeridi: arka planda MR / BT / US / floroskopi /
// röntgen modalitelerini çağrıştıran stilize çizgi-sanatı görseller yatay olarak
// kayar (gerçek hasta görüntüsü DEĞİL), üstte kısa bir slogan durur.

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function MR() {
  return (
    <svg viewBox="0 0 120 120" {...stroke} width="100%" height="100%">
      <ellipse cx="60" cy="58" rx="42" ry="48" />
      <ellipse cx="60" cy="58" rx="34" ry="40" />
      <path d="M60 18 V98" />
      <path d="M40 40 q8 6 0 12 q-8 6 0 12" />
      <path d="M34 60 q8 5 0 10" />
      <path d="M80 40 q-8 6 0 12 q8 6 0 12" />
      <path d="M86 60 q-8 5 0 10" />
      <path d="M54 54 q6 6 0 12" />
      <path d="M66 54 q-6 6 0 12" />
    </svg>
  );
}

function CT() {
  return (
    <svg viewBox="0 0 120 120" {...stroke} width="100%" height="100%">
      <circle cx="60" cy="60" r="46" />
      <circle cx="60" cy="60" r="40" />
      <circle cx="60" cy="90" r="7" />
      <path d="M60 97 v6 M53 86 l-5 -3 M67 86 l5 -3 M54 95 l-6 4 M66 95 l6 4" />
      <path d="M42 62 q-9 7 0 16 q7 -4 5 -11 q-1 -5 -5 -5" />
      <path d="M78 62 q9 7 0 16 q-7 -4 -5 -11 q1 -5 5 -5" />
      <circle cx="56" cy="80" r="2.5" />
      <circle cx="64" cy="80" r="2.5" />
    </svg>
  );
}

function US() {
  return (
    <svg viewBox="0 0 120 120" {...stroke} width="100%" height="100%">
      <path d="M60 14 L26 104 M60 14 L94 104" />
      <path d="M30 94 Q60 108 90 94" />
      <path d="M37 74 Q60 86 83 74" />
      <path d="M44 54 Q60 62 76 54" />
      <circle cx="58" cy="56" r="6" />
      <path d="M62 60 q11 2 9 13 q-2 8 -12 7 q-7 -1 -6 -9" />
    </svg>
  );
}

function Fluoro() {
  return (
    <svg viewBox="0 0 120 120" {...stroke} width="100%" height="100%">
      <path d="M60 16 V104" />
      <path d="M54 32 h12 M54 46 h12 M54 60 h12 M54 74 h12" />
      <path d="M60 30 Q34 40 30 66" />
      <path d="M60 41 Q32 53 30 80" />
      <path d="M60 52 Q34 65 35 88" />
      <path d="M60 30 Q86 40 90 66" />
      <path d="M60 41 Q88 53 90 80" />
      <path d="M60 52 Q86 65 85 88" />
      <path d="M52 72 q-8 8 0 16 q8 6 12 -2" />
    </svg>
  );
}

function Xray() {
  return (
    <svg viewBox="0 0 120 120" {...stroke} width="100%" height="100%">
      <path d="M46 106 q14 -9 28 0" />
      <path d="M50 98 L41 44 M41 44 V24" />
      <path d="M56 100 L50 36 M50 36 V14" />
      <path d="M61 101 L61 32 M61 32 V10" />
      <path d="M66 100 L72 36 M72 36 V14" />
      <path d="M71 98 L81 44 M81 44 V24" />
      <circle cx="50" cy="36" r="2" />
      <circle cx="61" cy="32" r="2" />
      <circle cx="72" cy="36" r="2" />
    </svg>
  );
}

const modalities = [
  { label: "MR", Icon: MR },
  { label: "BT", Icon: CT },
  { label: "US", Icon: US },
  { label: "Floroskopi", Icon: Fluoro },
  { label: "Röntgen", Icon: Xray },
];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {modalities.map((m, i) => (
        <div key={i} className="mx-7 sm:mx-10 flex flex-col items-center gap-2 shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24">
            <m.Icon />
          </div>
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function RadiologyMarquee() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Kayan modalite görselleri */}
      <div className="absolute inset-0 flex items-center">
        <div className="crd-marquee flex w-max items-center text-white/[0.13]">
          <Track />
          <Track hidden />
        </div>
      </div>

      {/* Kenar yumuşatma */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent" />
      {/* Merkez koyulaştırma — slogan okunaklı kalsın */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(15,23,42,0.65) 0%, transparent 70%)" }}
      />

      {/* Slogan */}
      <div className="relative text-center px-4 py-12 sm:py-16">
        <p className="text-indigo-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          Society of Pediatric Radiology · 2014
        </p>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Pediatrik Radyolojide Bilim ve Dayanışma
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
          Çocukların doğru, güvenli ve nitelikli görüntülenmesi için eğitim, araştırma ve mesleki iş birliği.
        </p>
      </div>
    </section>
  );
}
