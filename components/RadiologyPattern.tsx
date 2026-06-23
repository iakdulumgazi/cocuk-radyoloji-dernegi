// Çocuk radyolojisi pratiğini çağrıştıran soyut çizgi-sanatı motifi.
// Gerçek hasta görüntüsü DEĞİL — US konisi, DICOM nişangâhı, kesit halkaları
// ve doppler dalga formu gibi tıbbi görüntülemeyi anımsatan stilize şekiller.
// Renk `currentColor`'dan gelir; opaklık ve renk dışarıdan className ile verilir.

export default function RadiologyPattern({
  id = "rad-motif",
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={id} width="200" height="200" patternUnits="userSpaceOnUse">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Ultrason konisi (sektör) + iç arklar */}
            <path d="M46 24 L28 76 M46 24 L64 76" />
            <path d="M31 67 Q46 78 61 67" />
            <path d="M35 54 Q46 62 57 54" />
            <path d="M39 41 Q46 46 53 41" />

            {/* Kesit halkaları (eş merkezli) */}
            <circle cx="156" cy="48" r="7" />
            <circle cx="156" cy="48" r="15" />
            <circle cx="156" cy="48" r="23" />

            {/* DICOM nişangâhı (crosshair reticle) */}
            <circle cx="150" cy="150" r="20" />
            <path d="M150 120 v12 M150 168 v12 M120 150 h12 M168 150 h12" />

            {/* Doppler dalga formu */}
            <path d="M20 150 q9 -22 18 0 t18 0 t18 0" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
