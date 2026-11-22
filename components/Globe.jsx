"use client";
import { useEffect, useRef } from "react";

export default function Globe() {
  const ref = useRef(null);
  useEffect(() => {
    const state = { raf: null };

  const cv = ref.current; if (!cv || !cv.getContext) return;
  const ctx = cv.getContext('2d');
  const P = Math.PI;
  const LAND = [[],[[-90,-62],[-60,-25]],[[-120,-75],[-73,-20],[10,28],[45,65],[95,105]],[[-125,-75],[-55,-22],[20,30],[52,70],[75,145],[150,160]],[[-180,-170],[-165,-85],[-82,-62],[-55,-22],[13,180]],[[-180,-172],[-165,-95],[-78,-60],[-50,-40],[-24,-13],[5,180]],[[-160,-95],[-80,-60],[-7,-2],[5,18],[21,138],[155,163]],[[-130,-57],[-10,-6],[-5,2],[4,140],[142,144],[156,160]],[[-125,-53],[-5,135],[142,146]],[[-125,-70],[-66,-60],[-9,3],[0,7],[10,18],[13,28],[41,48],[53,130],[140,146]],[[-123,-76],[-9,-1],[12,17],[21,24],[26,60],[60,122],[126,129],[133,141]],[[-118,-80],[-10,22],[25,34],[34,62],[62,122],[130,132]],[[-115,-97],[-83,-80],[-14,33],[35,49],[54,121]],[[-106,-97],[-84,-75],[-17,36],[39,59],[68,90],[90,120],[120,122]],[[-105,-88],[-78,-65],[-16,39],[42,53],[73,84],[94,109],[120,123]],[[-90,-83],[-75,-60],[-17,51],[75,80],[98,109],[120,126]],[[-82,-52],[-13,48],[80,82],[98,103],[105,107],[122,126]],[[-80,-50],[9,42],[95,106],[109,119],[120,128]],[[-80,-40],[9,41],[100,106],[110,117],[119,123],[131,151]],[[-80,-35],[12,40],[105,115],[115,127],[138,148]],[[-77,-38],[13,41],[48,50],[130,137],[141,143]],[[-71,-39],[12,38],[44,50],[122,146]],[[-70,-41],[14,36],[43,48],[114,151]],[[-71,-48],[15,33],[113,153]],[[-72,-52],[18,28],[115,124],[130,152]],[[-73,-57],[140,150],[174,178]],[[-74,-63],[145,148],[170,174]],[[-75,-66],[167,169]],[[-74,-68],[-61,-58]],[],[[-65,-57]],[[-180,-60],[-30,180]],[[-160,-60],[-20,160]],[[-180,180]],[[-180,180]],[[-180,180]]];
  const isLand = (lat, lon) => { const r = Math.min(35, Math.max(0, Math.floor((90 - lat) / 5))); for (const iv of LAND[r]) { if (lon >= iv[0] && lon <= iv[1]) return true; } return false; };
  const v = (la, lo) => { la *= P / 180; lo *= P / 180; return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)]; };
  const pts = [], N = 16000, ga = P * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) { const y = 1 - (i / (N - 1)) * 2, t = ga * i; const lat = Math.asin(y) * 180 / P; const lon = ((t * 180 / P) % 360 + 540) % 360 - 180; if (isLand(lat, lon)) pts.push(v(lat, lon)); }
  const C = { ny: v(40.7, -74), mia: v(25.8, -80.2), la: v(34, -118.2), tor: v(43.6, -79.4), mex: v(19.4, -99.1), bog: v(4.7, -74.1), sp: v(-23.5, -46.6), ba: v(-34.6, -58.4), lon: v(51.5, -0.1), mad: v(40.4, -3.7), ber: v(52.5, 13.4), lag: v(6.5, 3.4), dub: v(25.2, 55.3), mum: v(19, 72.8), sg: v(1.3, 103.8), tok: v(35.7, 139.7), syd: v(-33.9, 151.2), man: v(14.6, 121) };
  const pairs = [['ny','lon'],['mia','sp'],['lon','dub'],['dub','mum'],['mum','sg'],['sg','tok'],['la','tok'],['mex','mad'],['bog','ba'],['lag','lon'],['ber','dub'],['sg','syd'],['tor','ber'],['man','dub'],['ny','mex']];
  const slerp = (a, b, t) => { const d = Math.acos(Math.max(-1, Math.min(1, a[0]*b[0]+a[1]*b[1]+a[2]*b[2]))); if (d < 1e-4) return a.slice(); const s1 = Math.sin((1 - t) * d) / Math.sin(d), s2 = Math.sin(t * d) / Math.sin(d), lift = 1 + 0.2 * Math.sin(P * t) * (d / P + 0.3); return [(a[0]*s1+b[0]*s2)*lift, (a[1]*s1+b[1]*s2)*lift, (a[2]*s1+b[2]*s2)*lift]; };
  const arcs = pairs.map(([a, b], i) => ({ path: Array.from({ length: 49 }, (_, k) => slerp(C[a], C[b], k / 48)), off: i / pairs.length }));
  const hubs = Object.values(C);
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DOT = '#8A8890', SEA = '#1A1A1F', RIM = '#2E2E34', MINT = '#F1F0EE', MINT2 = '#FFFFFF';
  let rot = 0.9; const tilt = 0.32, ct = Math.cos(tilt), st = Math.sin(tilt);
  const draw = (time) => {
    const w = cv.clientWidth; if (!w) { state.raf = requestAnimationFrame(draw); return; }
    const dpr = Math.min(window.devicePixelRatio || 1, 2), px = Math.round(w * dpr);
    if (cv.width !== px) { cv.width = px; cv.height = px; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, w);
    const R = w * 0.44, cx = w / 2, cy = w / 2, cr = Math.cos(rot), sr = Math.sin(rot);
    const T = (p) => { const x = p[0]*cr + p[2]*sr, z1 = -p[0]*sr + p[2]*cr, y = p[1]*ct - z1*st, z = p[1]*st + z1*ct; return [cx + x*R, cy - y*R, z]; };
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2*P); ctx.fillStyle = SEA; ctx.fill(); ctx.strokeStyle = RIM; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = DOT;
    for (const p of pts) { const q = T(p); if (q[2] <= 0) continue; ctx.globalAlpha = 0.18 + 0.72*q[2]; const r = 0.55 + 0.7*q[2]; ctx.beginPath(); ctx.arc(q[0], q[1], r, 0, 2*P); ctx.fill(); }
    ctx.globalAlpha = 1;
    const now = reduce ? 0.7 : (time || 0) / 4600;
    for (const a of arcs) {
      const ph = reduce ? 1 : ((now + a.off) % 1) * 1.6, head = Math.min(1, ph), tail = Math.max(0, ph - 0.6);
      const i0 = Math.floor(tail * 48), i1 = Math.floor(head * 48); if (i1 <= i0) continue;
      const fade = reduce ? 1 : (ph > 1 ? 1 - (ph - 1) / 0.6 : 1);
      for (let pass = 0; pass < 2; pass++) {
        ctx.beginPath(); let on = false;
        for (let k = i0; k <= i1; k++) { const q = T(a.path[k]); if (q[2] < -0.05) { on = false; continue; } if (!on) { ctx.moveTo(q[0], q[1]); on = true; } else ctx.lineTo(q[0], q[1]); }
        ctx.lineCap = 'round'; ctx.globalAlpha = fade * (pass ? 0.95 : 0.25); ctx.strokeStyle = pass ? MINT2 : MINT; ctx.lineWidth = pass ? 1.4 : 5; ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    const pulse = reduce ? 0.4 : ((time || 0) / 1600) % 1;
    for (const h of hubs) { const q = T(h); if (q[2] < 0.05) continue; ctx.globalAlpha = 0.25 * q[2]; ctx.fillStyle = MINT; ctx.beginPath(); ctx.arc(q[0], q[1], 9, 0, 2*P); ctx.fill(); ctx.globalAlpha = (1 - pulse) * q[2]; ctx.strokeStyle = MINT; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(q[0], q[1], 4 + pulse*13, 0, 2*P); ctx.stroke(); ctx.globalAlpha = 1; ctx.fillStyle = MINT2; ctx.beginPath(); ctx.arc(q[0], q[1], 3.4, 0, 2*P); ctx.fill(); }
    if (!reduce) { rot -= 0.0018; state.raf = requestAnimationFrame(draw); }
  };
   state.raf = requestAnimationFrame(draw);
    return () => { if (state.raf) cancelAnimationFrame(state.raf); };
  }, []);
  return <canvas ref={ref} role="img" aria-label="Rotating world map with highlighted hubs in the Americas, Europe, Africa, the Middle East and Asia" style={{ width: "100%", maxWidth: 480, aspectRatio: "1 / 1", display: "block" }} />;
}
