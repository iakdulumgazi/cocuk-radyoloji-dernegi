import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Sosyal paylaşım kartı (WhatsApp, X, Facebook vb. link önizlemesi)
export const alt = "Çocuk Radyolojisi Derneği — Society of Pediatric Radiology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logo, geist] = await Promise.all([
    readFile(join(process.cwd(), "assets/og-logo.png")),
    readFile(join(process.cwd(), "assets/Geist-Regular.ttf")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 50,
          padding: "0 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #312e81 100%)",
          fontFamily: "Geist",
        }}
      >
        {/* Logoyu beyaz daire rozet içine al (logonun beyaz köşeleri dairede kaybolur) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 340,
            height: 340,
            flexShrink: 0,
            borderRadius: 340,
            background: "#ffffff",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={300} height={300} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 660 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#a5b4fc",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Society of Pediatric Radiology · 2014
          </div>
          <div style={{ fontSize: 74, fontWeight: 700, color: "#ffffff", lineHeight: 1.05 }}>
            Çocuk Radyolojisi
          </div>
          <div style={{ fontSize: 74, fontWeight: 700, color: "#f87171", lineHeight: 1.05 }}>
            Derneği
          </div>
          <div style={{ fontSize: 28, color: "#cbd5e1", marginTop: 24 }}>
            Pediatrik radyolojide bilim, eğitim ve dayanışma
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: geist, style: "normal", weight: 400 }],
    }
  );
}
