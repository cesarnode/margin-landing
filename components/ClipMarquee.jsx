"use client";
import { useState } from "react";
import { CLIPS } from "@/config";

function Slot({ clip }) {
  const [missing, setMissing] = useState(!clip.src);
  const file = String(clip.src || "clip.mp4").split("/").pop();
  return (
    <figure style={{ margin: 0, width: 220, flexShrink: 0 }}>
      <div style={{ position: "relative", width: 220, aspectRatio: "9 / 16", borderRadius: 18, overflow: "hidden", background: "#1A1A1F", boxShadow: "0 1px 2px rgba(17,17,20,.06), 0 18px 36px -16px rgba(17,17,20,.35)" }}>
        {!missing && (
          <video src={clip.src} autoPlay loop muted playsInline preload="metadata" aria-label={clip.label} onError={() => setMissing(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        )}
        {missing && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, border: "1.5px dashed #3A3A40", borderRadius: 18, color: "#A3A1A8" }}>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#A3A1A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5 3.5-5 3.5z" fill="#A3A1A8" /></svg>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11 }}>{file}</div>
          </div>
        )}
      </div>
    </figure>
  );
}

export default function ClipMarquee() {
  // One "half" of the strip must be wider than the widest screen (2600px here),
  // otherwise a gap appears on the right before the loop restarts.
  const SLOT = 240; // 220px card + 20px gap
  const copies = Math.max(1, Math.ceil(2600 / (SLOT * Math.max(1, CLIPS.length))));
  const half = Array.from({ length: copies }, () => CLIPS).flat();
  const list = [...half, ...half];
  const duration = half.length * 8; // seconds, keeps the same speed whatever the number of clips
  return (
    <section id="formats" aria-label="Sample clips" style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="marquee" style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)" }}>
        <div className="track" style={{ display: "flex", gap: 20, width: "max-content", padding: "8px 10px", animationDuration: duration + "s" }}>
          {list.map((clip, i) => <Slot key={clip.id + "-" + i} clip={clip} />)}
        </div>
      </div>
    </section>
  );
}
