"use client";
import { useState } from "react";
import { POST_EXAMPLES } from "@/config";

function Card({ item }) {
  const [missing, setMissing] = useState(!item.src);
  const isVideo = /\.(mp4|webm|mov)$/i.test(item.src || "");
  return (
    <figure style={{ margin: 0, width: 260, flexShrink: 0 }}>
      <div style={{ position: "relative", width: 260, aspectRatio: "4 / 5", borderRadius: 18, overflow: "hidden", background: "#FFFFFF", border: "1px solid #DEDCD6", boxShadow: "0 1px 2px rgba(17,17,20,.06), 0 18px 36px -16px rgba(17,17,20,.2)" }}>
        {!missing && isVideo && (
          <video src={item.src} autoPlay loop muted playsInline preload="metadata" aria-label={item.label} onError={() => setMissing(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        )}
        {!missing && !isVideo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.src} alt={item.label} onError={() => setMissing(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        )}
        {missing && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 14px 12px" }}>
              <span style={{ width: 28, height: 28, borderRadius: 999, background: "#EEECE7", flexShrink: 0 }} />
              <span style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ width: 84, height: 7, borderRadius: 4, background: "#E2E0DA" }} />
                <span style={{ width: 52, height: 6, borderRadius: 4, background: "#EEECE7" }} />
              </span>
            </div>
            <div style={{ flex: 1, margin: "0 14px", borderRadius: 10, background: "#F6F5F2", border: "1.5px dashed #D4D1C9", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 16, color: "#6B6A72", fontSize: 13, fontWeight: 500 }}>
              {item.label || "Sponsored post example"}
            </div>
            <div style={{ display: "flex", gap: 8, padding: "12px 14px 16px" }}>
              <span style={{ width: 18, height: 18, borderRadius: 999, border: "1.5px solid #D4D1C9" }} />
              <span style={{ width: 18, height: 18, borderRadius: 999, border: "1.5px solid #D4D1C9" }} />
              <span style={{ width: 18, height: 18, borderRadius: 999, border: "1.5px solid #D4D1C9" }} />
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}

export default function PostExamples() {
  // Repeat the cards so one half of the strip is wider than any screen (no gap before the loop restarts).
  const SLOT = 280; // 260px card + 20px gap
  const copies = Math.max(1, Math.ceil(2600 / (SLOT * Math.max(1, POST_EXAMPLES.length))));
  const half = Array.from({ length: copies }, () => POST_EXAMPLES).flat();
  const list = [...half, ...half];
  const duration = half.length * 8;
  return (
    <section id="formats" aria-label="Sponsored post examples" style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="marquee" style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)" }}>
        <div className="track" style={{ display: "flex", gap: 20, width: "max-content", padding: "8px 10px", animationDuration: duration + "s" }}>
          {list.map((item, i) => <Card key={item.id + "-" + i} item={item} />)}
        </div>
      </div>
    </section>
  );
}
