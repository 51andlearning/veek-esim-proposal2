import { ImageResponse } from "next/og";

export const alt = "Veek · Travel eSIM Opportunity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F172A",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Inter, Arial, sans-serif",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(3,105,161,0.45) 0, transparent 55%), radial-gradient(circle at 80% 90%, rgba(56,189,248,0.35) 0, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              color: "#0A0A0A",
              padding: "14px 28px",
              borderRadius: 999,
              fontWeight: 900,
              fontSize: 56,
              letterSpacing: -3,
              lineHeight: 1,
              display: "flex",
            }}
          >
            veek
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#38bdf8",
              fontWeight: 600,
              display: "flex",
            }}
          >
            Travel eSIM Proposal
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
              display: "flex",
            }}
          >
            A $4.4B opportunity hiding inside your existing customer journey.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#cbd5e1",
              maxWidth: 900,
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            Your-branded, itinerary-aware travel eSIM with loyalty earn and burn.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#94a3b8",
            fontSize: 20,
          }}
        >
          <div style={{ display: "flex" }}>Prepared by Veek</div>
          <div style={{ display: "flex" }}>Confidential</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
