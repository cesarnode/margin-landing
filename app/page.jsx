import ClipMarquee from "@/components/ClipMarquee";
import StepImage from "@/components/StepImage";
import Globe from "@/components/Globe";
import Lock from "@/components/Lock";
import * as CONFIG from "@/config";

const { TELEGRAM_URL } = CONFIG;
// Set CALL_URL in config.js (Calendly, Cal.com...) to show the "Book a 15 min call" button.
const CALL_URL = CONFIG.CALL_URL || "";

export default function Home() {
  return (
<div className="m" style={{ background: "#F6F5F2", color: "#111114", fontFamily: "Geist, Inter, system-ui, sans-serif", fontSize: "16px", lineHeight: "1.55", overflow: "hidden" }}>

<header style={{ position: "sticky", top: "0", zIndex: "10", background: "#F6F5F2", borderBottom: "1px solid #DEDCD6" }}>
<div className="navbar" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "14px", paddingBottom: "14px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "16px" }}>
<a href="#top" aria-label="Margin home" style={{ justifySelf: "start", display: "inline-flex", alignItems: "center", padding: "6px 0" }}><img src="/logo.png" alt="Margin" style={{ height: "30px", width: "auto", display: "block" }} /></a>
<nav className="navlinks" style={{ display: "flex", gap: "30px", fontSize: "14px", fontWeight: "500" }}>
<a href="#formats" style={{ color: "#4B4B52" }}>Formats</a>
<a href="#geo" style={{ color: "#4B4B52" }}>GEO</a>
<a href="#how" style={{ color: "#4B4B52" }}>How it works</a>
<a href="#pricing" style={{ color: "#4B4B52" }}>Pricing</a>
</nav>
<a href={TELEGRAM_URL} style={{ justifySelf: "end", background: "#C1F222", color: "#111114", borderRadius: "10px", fontWeight: "600", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 0 rgba(255,255,255,.2) inset, 0 2px 6px rgba(17,17,20,.12)", minHeight: "40px", padding: "9px 16px", fontSize: "14px" }}>Start a campaign</a>
</div>
</header>

<section id="top" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "88px", textAlign: "center" }}>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
<h1 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "800", fontSize: "clamp(42px, 5.6vw, 70px)", lineHeight: "1.03", letterSpacing: "-0.045em", maxWidth: "900px" }}>Your brand where degens actually scroll.</h1>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "18px", maxWidth: "560px" }}>Logo placements &amp; custom Reels on active IG pages. Built for iGaming &amp; crypto. Pay per verified view in USDC &amp; USDT.</p>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "4px" }}>
<a href={TELEGRAM_URL} style={{ color: "#111114", padding: "14px 22px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 0 rgba(255,255,255,.2) inset, 0 2px 6px rgba(17,17,20,.12)", backgroundColor: "#C1F222" }}>DM on Telegram</a>
</div>
</div>
</section>

<ClipMarquee />

<section id="compare" style={{ background: "#FFFFFF", borderTop: "1px solid #DEDCD6", borderBottom: "1px solid #DEDCD6" }}>
<div style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px", paddingBottom: "96px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08", maxWidth: "680px", marginBottom: "40px" }}>Clip farms spam 10,000 clips. We put your brand on pages people actually watch.</h2>
<div className="cmp" style={{ border: "1px solid #DEDCD6", borderRadius: "14px", overflow: "hidden" }}>
<div className="cmphead" style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", background: "#F6F5F2", borderBottom: "1px solid #DEDCD6", fontSize: "13px", fontWeight: "600" }}>
<div style={{ padding: "12px 20px" }}></div><div style={{ padding: "12px 20px", color: "#111114", borderLeft: "1px solid #DEDCD6", background: "#EEECE7" }}>Margin</div><div style={{ padding: "12px 20px", color: "#4B4B52", borderLeft: "1px solid #DEDCD6" }}>Clip farms</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderBottom: "1px solid #DEDCD6" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Accounts</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Curated IG Reels pages, checked active before launch</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Thousands of throwaway burner accounts</div></div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderBottom: "1px solid #DEDCD6" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Audience</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>iGaming &amp; crypto / degen feeds with real buyer intent</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Random algo noise</div></div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderBottom: "1px solid #DEDCD6" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Page bans</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Auto-swapped at zero extra cost if restricted</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Your headache mid-campaign</div></div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderBottom: "1px solid #DEDCD6" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Pre-launch sign-off</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>You approve every clip before posting</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Posted blind, zero control</div></div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Billing</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Verified views, settled in USDC &amp; USDT with tx hash</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Inflated / unverified numbers</div></div>
</div>
</div>
</section>

<section id="geo" style={{ background: "#111114", color: "#F1F0EE" }}>
<div className="split" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px", paddingBottom: "96px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "56px", alignItems: "center" }}>
<div style={{ display: "flex", justifyContent: "center" }}>
<Globe />
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08", color: "#FFFFFF" }}><span style={{ display: "block" }}>UA by GEO.</span><span style={{ display: "block", color: "#A3A1A8" }}>Acquire real users where your markets convert.</span></h2>
<p style={{ margin: "0", fontSize: "17px", color: "#A3A1A8", maxWidth: "460px" }}>User acquisition doesn't have to live and die by paid ad bans. Tell us your target GEOs — we match active Reels pages with real reach in those regions.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}><span style={{ border: "1px solid #3A3A40", color: "#F1F0EE", borderRadius: "999px", padding: "8px 14px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap" }}>US &amp; UK</span><span style={{ border: "1px solid #3A3A40", color: "#F1F0EE", borderRadius: "999px", padding: "8px 14px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap" }}>LatAm &amp; Brazil</span><span style={{ border: "1px solid #3A3A40", color: "#F1F0EE", borderRadius: "999px", padding: "8px 14px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap" }}>Europe</span><span style={{ border: "1px solid #3A3A40", color: "#F1F0EE", borderRadius: "999px", padding: "8px 14px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap" }}>Asia &amp; Global</span></div>
<a href={TELEGRAM_URL} style={{ alignSelf: "flex-start", fontWeight: "600", color: "#FFFFFF", marginTop: "4px", width: "237px", height: "53px", fontSize: "19px", fontFamily: "Geist, Inter, sans-serif" }}>Tell us your GEO →</a>
</div>
</div>
</section>

<section id="how" style={{ background: "#FFFFFF", borderTop: "1px solid #DEDCD6" }}>
<div style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px", paddingBottom: "32px" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08" }}>Live in 48h.</h2>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "16px 16px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
<StepImage index={0} />
<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 6px" }}><span style={{ fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>Brief &amp; budget</span></div>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px", padding: "0 6px" }}>Lock format, target GEOs, capped CPM, and creative red lines in one straight call.</p>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "16px 16px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
<StepImage index={1} />
<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 6px" }}><span style={{ fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>Live in 48h</span></div>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px", padding: "0 6px" }}>Once brief and budget are locked, you approve every edit — approved Reels go live within 48h.</p>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "16px 16px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
<StepImage index={2} />
<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 6px" }}><span style={{ fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>USDC &amp; USDT settlement</span></div>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px", padding: "0 6px" }}>Pay strictly for verified views. Every payout is logged with its tx hash.</p>
</div>
</div>
</div>
</section>

<section style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDCD6" }}>
<div className="split" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "64px", paddingBottom: "96px", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "56px", alignItems: "center" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08" }}>Every view in one sheet.</h2>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "17px" }}>Live Google Sheet, shared with your team. Clips, views, payouts, tx hashes.</p>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Views from native platform analytics</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Bots and weird spikes cut before billing</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Every USDC &amp; USDT payout with its tx hash</span></div>
</div>
</div>
<div style={{ border: "1px solid #DEDCD6", borderRadius: "14px", overflow: "hidden", boxShadow: "0 24px 48px -16px rgba(17,17,20,.16)" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #DEDCD6", background: "#F6F5F2" }}>
<div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}><span style={{ width: "10px", height: "10px", borderRadius: "3px", background: "#B9B6AE", display: "inline-block" }}></span>margin_campaign_tracker</div>
<div style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#4B4B52", border: "1px solid #DEDCD6", background: "#FFFFFF", padding: "3px 8px", borderRadius: "6px" }}>SAMPLE SHEET</div>
</div>
<div style={{ overflowX: "auto", background: "#FFFFFF" }}>
<table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: "520px" }}>
<thead><tr style={{ textAlign: "left", background: "#FAF9F7" }}>
<th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600" }}>Clip</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600" }}>Page</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600", textAlign: "right" }}>Verified views</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600", textAlign: "right" }}>USDC / USDT</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", fontWeight: "600" }}>Tx</th>
</tr></thead>
<tbody style={{ fontFamily: "'Geist Mono', monospace" }}>
<tr><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", color: "#4B4B52" }}>#001</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6" }}>@page_a</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>142,800</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>571.20</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", color: "#4B4B52" }}>0x4f…a21</td></tr>
<tr><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", color: "#4B4B52" }}>#002</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6" }}>@page_b</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>98,400</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>393.60</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", color: "#4B4B52" }}>0x9c…0be</td></tr>
<tr><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", color: "#4B4B52" }}>#003</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6" }}>@page_c</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>76,200</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>304.80</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", color: "#4B4B52" }}>0x1d…77e</td></tr>
<tr><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6", color: "#4B4B52" }}>#004</td><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6" }}>@page_d</td><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6", textAlign: "right", color: "#4B4B52" }}>tracking…</td><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6", textAlign: "right", color: "#4B4B52" }}>pending</td><td style={{ padding: "11px 14px", color: "#4B4B52" }}>·</td></tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section id="private" style={{ background: "#111114", color: "#F1F0EE" }}>
<div className="split" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px", paddingBottom: "96px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "56px", alignItems: "center" }}>
<div style={{ display: "flex", justifyContent: "center" }}>
<Lock />
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08", color: "#FFFFFF" }}><span style={{ display: "block" }}>100% private.</span><span style={{ display: "block", color: "#A3A1A8" }}>100% confidential.</span></h2>
<p style={{ margin: "0", fontSize: "17px", color: "#A3A1A8", maxWidth: "440px" }}>Zero public flexing, zero leaks. Run bold campaigns and edgy angles with full peace of mind.</p>
<div style={{ marginTop: "8px" }}>
<div style={{ display: "flex", gap: "14px", padding: "16px 0", borderTop: "1px solid #2E2E34", backgroundColor: "transparent" }}><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "3px" }}><path d="M3 8.4l3 3 7-7" /></svg><div><div style={{ fontWeight: "600", color: "#FFFFFF" }}>NDA by default</div><div style={{ color: "#A3A1A8", fontSize: "15px" }}>Signed before the first brief.</div></div></div><div style={{ display: "flex", gap: "14px", padding: "16px 0", borderTop: "1px solid #2E2E34" }}><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "3px" }}><path d="M3 8.4l3 3 7-7" /></svg><div><div style={{ fontWeight: "600", color: "#FFFFFF" }}>No public client list</div><div style={{ color: "#A3A1A8", fontSize: "15px" }}>Your name never shows up in our sales material.</div></div></div><div style={{ display: "flex", gap: "14px", padding: "16px 0", borderTop: "1px solid #2E2E34" }}><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "3px" }}><path d="M3 8.4l3 3 7-7" /></svg><div><div style={{ fontWeight: "600", color: "#FFFFFF" }}>Zero leaks</div><div style={{ color: "#A3A1A8", fontSize: "15px" }}>Campaigns, pages and partners stay between us.</div></div></div>
</div>
</div>
</div>
</section>

<section id="pricing" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px" }}>
<div style={{ display: "flex", justifyContent: "center" }}>
<div style={{ width: "100%", maxWidth: "560px", background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "18px", padding: "36px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "18px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(26px, 2.6vw, 32px)", lineHeight: "1.1" }}>Your budget. Your GEOs.</h2>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "16px" }}>Start lean to test an angle, then scale what converts. No minimum lock-in.</p>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>No CPA, no RevShare. Your players and users stay yours.</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Capped CPM agreed upfront</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Pay only for verified views</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Unused budget sent back in USDC or USDT</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Live within 48h once brief and budget are locked</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>You approve every clip &amp; placement before it goes live</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Free page swap if an IG account gets restricted mid-run</span></div>
</div>
<a href={TELEGRAM_URL} style={{ background: "#C1F222", color: "#111114", padding: "14px 22px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 0 rgba(255,255,255,.2) inset, 0 2px 6px rgba(17,17,20,.12)", marginTop: "4px" }}>Plan my campaign</a>
</div>
</div>
</section>

<section style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px", paddingBottom: "24px" }}>
<div style={{ background: "#111114", borderRadius: "22px", padding: "clamp(40px, 6vw, 72px) 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08", color: "#FFFFFF", maxWidth: "640px" }}>Launch your campaign in 48h.</h2>
<p style={{ margin: "0", fontSize: "17px", color: "#A3A1A8", maxWidth: "480px" }}>Drop your target GEO and budget on Telegram. No account managers, no corporate runaround.</p>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "4px" }}>
<a href={TELEGRAM_URL} style={{ background: "#C1F222", color: "#111114", padding: "14px 22px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 0 rgba(255,255,255,.2) inset, 0 2px 6px rgba(17,17,20,.12)" }}>DM on Telegram</a>
{CALL_URL && (<a href={CALL_URL} style={{ background: "transparent", color: "#F1F0EE", border: "1px solid #3A3A40", padding: "14px 22px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Book a 15 min call</a>)}
</div>
</div>
</section>

<footer style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "24px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", fontSize: "13px", color: "#4B4B52" }}>
<img src="/logo.png" alt="Margin" style={{ height: "20px", width: "auto", display: "block" }} />
<a href={TELEGRAM_URL} style={{ fontWeight: "500", color: "#111114" }}>Own an IG page with reach? Apply on Telegram →</a>
<div>18+ · © 2026 getmargin.fun</div>
</footer>

</div>
  );
}
