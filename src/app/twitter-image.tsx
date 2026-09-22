import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.title}`;

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(160deg, #0a0b12 0%, #121225 55%, #1a1230 100%)",
          color: "#f4f4f8",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9eb6ff",
          }}
        >
          {site.title}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 980 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 28, color: "#c6c8d6", maxWidth: 900 }}>
            {site.headline}
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#8b90a6" }}>{site.secondary}</div>
      </div>
    ),
    size
  );
}
