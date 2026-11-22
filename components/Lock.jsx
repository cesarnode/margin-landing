"use client";
import { useEffect, useRef } from "react";

export default function Lock() {
  const ref = useRef(null);
  useEffect(() => {
    const state = { lraf: null };

  const cv = ref.current; if (!cv || !cv.getContext) return;
  const ctx = cv.getContext('2d');
  const body = [], hot = [], st = 0.05;
  const X0 = -0.8, X1 = 0.8, Y0 = -0.9, Y1 = 0.3, Z = 0.28;
  const inKey = (x, y) => (x * x + (y + 0.2) * (y + 0.2) <= 0.13 * 0.13) || (Math.abs(x) <= 0.055 && y <= -0.2 && y >= -0.56);
  for (let x = X0; x <= X1 + 1e-6; x += st) for (let y = Y0; y <= Y1 + 1e-6; y += st) { (inKey(x, y) ? hot : body).push([x, y, Z]); body.push([x, y, -Z]); }
  for (let z = -Z + st; z < Z - 1e-6; z += st) { for (let y = Y0; y <= Y1 + 1e-6; y += st) { body.push([X0, y, z]); body.push([X1, y, z]); } for (let x = X0 + st; x < X1 - 1e-6; x += st) { body.push([x, Y0, z]); body.push([x, Y1, z]); } }
  const R = 0.5, tr = 0.1, legTop = 0.75, center = [];
  for (let y = Y1; y <= legTop; y += 0.04) { center.push([-R, y, -Math.PI / 2]); center.push([R, y, Math.PI / 2]); }
  for (let t = 0; t <= Math.PI; t += 0.04 / R) center.push([-R * Math.cos(t), legTop + R * Math.sin(t), null, t]);
  for (const c of center) {
    for (let k = 0; k < 10; k++) {
      const phi = k / 10 * Math.PI * 2, cz = Math.sin(phi) * tr, cr = Math.cos(phi) * tr;
      if (c[3] === undefined) hot.push([c[0] + Math.sign(c[0]) * cr, c[1], cz]);
      else { const t = c[3]; hot.push([c[0] - Math.cos(t) * cr, c[1] + Math.sin(t) * cr, cz]); }
    }
  }
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let ang = 0.5; const tilt = -0.18, ct = Math.cos(tilt), stl = Math.sin(tilt), yMid = 0.2;
  const draw = () => {
    const w = cv.clientWidth; if (!w) { state.lraf = requestAnimationFrame(draw); return; }
    const dpr = Math.min(window.devicePixelRatio || 1, 2), px = Math.round(w * dpr);
    if (cv.width !== px) { cv.width = px; cv.height = px; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, w);
    const ca = Math.cos(ang), sa = Math.sin(ang), S = w * 0.3, cx = w / 2, cy = w / 2;
    const proj = (p) => { const x = p[0] * ca + p[2] * sa, z1 = -p[0] * sa + p[2] * ca, y0 = p[1] - yMid, y = y0 * ct - z1 * stl, z = y0 * stl + z1 * ct; const f = 3.4 / (3.4 - z); return [cx + x * S * f, cy - y * S * f, z, f]; };
        ctx.fillStyle = '#7A7880';
    for (const p of body) { const q = proj(p); ctx.globalAlpha = 0.16 + 0.5 * (q[2] + 0.9) / 1.8; ctx.beginPath(); ctx.arc(q[0], q[1], 1.05 * q[3], 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = '#FFFFFF';
    for (const p of hot) { const q = proj(p); ctx.globalAlpha = 0.35 + 0.6 * (q[2] + 0.9) / 1.8; ctx.beginPath(); ctx.arc(q[0], q[1], 1.25 * q[3], 0, Math.PI * 2); ctx.fill(); }
    ctx.globalAlpha = 1;
    if (!reduce) { ang += 0.008; state.lraf = requestAnimationFrame(draw); }
  };
   state.lraf = requestAnimationFrame(draw);
    return () => { if (state.lraf) cancelAnimationFrame(state.lraf); };
  }, []);
  return <canvas ref={ref} role="img" aria-label="Rotating padlock made of dots" style={{ width: "100%", maxWidth: 440, aspectRatio: "1 / 1", display: "block" }} />;
}
