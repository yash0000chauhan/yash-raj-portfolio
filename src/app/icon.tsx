import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0d14",
          color: "#c9d4ff",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Y
      </div>
    ),
    size
  );
}
