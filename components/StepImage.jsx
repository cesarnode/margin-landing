"use client";
import { useState } from "react";
import { STEP_IMAGES } from "@/config";

export default function StepImage({ index }) {
  const im = STEP_IMAGES[index] || {};
  const [missing, setMissing] = useState(!im.src);
  const file = String(im.src || `step-${index + 1}.jpg`).split("/").pop();
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", borderRadius: 10, overflow: "hidden", background: "#F6F5F2" }}>
      {!missing && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={im.src} alt="" onError={() => setMissing(true)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      )}
      {missing && (
        <div style={{ position: "absolute", inset: 0, border: "1.5px dashed #C4C1B9", borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, color: "#6B6A72" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8A8890" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="2" /><path d="M21 15l-5-5L5 21" /></svg>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11 }}>{file}</div>
        </div>
      )}
    </div>
  );
}
