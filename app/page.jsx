import StepImage from "@/components/StepImage";
import Globe from "@/components/Globe";
import Lock from "@/components/Lock";
import * as CONFIG from "@/config";

const { TELEGRAM_URL } = CONFIG;
// Set CALL_URL in config.js (Calendly, Cal.com...) to show the "Book a 15 min call" button.
const CALL_URL = CONFIG.CALL_URL || "";
const CONTACT_EMAIL = CONFIG.CONTACT_EMAIL || "";
const NETWORK_URL = CONFIG.NETWORK_URL || "https://discord.gg/AyMx6ejPzQ";

export default function Home() {
  return (
<div className="m" style={{ background: "#F6F5F2", color: "#111114", fontFamily: "Geist, Inter, system-ui, sans-serif", fontSize: "16px", lineHeight: "1.55", overflow: "hidden" }}>

<div style={{ background: "#111114", color: "#F1F0EE", textAlign: "center", padding: "10px 24px", fontSize: "14px" }}>
<a href={NETWORK_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#F1F0EE", fontWeight: "500" }}>Run a meme or news page? <span style={{ color: "#C1F222", fontWeight: "600" }}>Join the network →</span></a>
</div>
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
<h1 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "800", fontSize: "clamp(42px, 5.6vw, 70px)", lineHeight: "1.03", letterSpacing: "-0.045em", maxWidth: "900px" }}>Your brand on the pages degens actually read.</h1>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "18px", maxWidth: "560px" }}>Native sponsored posts on verified Instagram meme and news pages. Built for crypto brands. Paid in USDC and USDT.</p>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "4px" }}>
<a href={TELEGRAM_URL} style={{ color: "#111114", padding: "14px 22px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 0 rgba(255,255,255,.2) inset, 0 2px 6px rgba(17,17,20,.12)", backgroundColor: "#C1F222" }}>DM on Telegram</a>
</div>
{CONTACT_EMAIL && (<p style={{ margin: "0", fontSize: "14px", color: "#4B4B52" }}>or email us at <a href={"mailto:" + CONTACT_EMAIL} style={{ color: "#111114", textDecoration: "underline", textUnderlineOffset: "3px" }}>{CONTACT_EMAIL}</a></p>)}
</div>
</section>

<section id="formats" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "72px", paddingBottom: "96px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08", maxWidth: "680px", marginBottom: "32px" }}>Formats that read like the feed, not like an ad.</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
<h3 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>News carousel</h3>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px" }}>A viral news-style story built around your brand, written in the page&apos;s own format.</p>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
<h3 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>Top 10 list</h3>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px" }}>Evergreen list carousels that get pushed by the Explore page and saved by readers.</p>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
<h3 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>Meme post</h3>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px" }}>A native meme with your brand or promo code, posted on pages your audience already follows.</p>
</div>
</div>
</section>

<section id="compare" style={{ background: "#FFFFFF", borderTop: "1px solid #DEDCD6", borderBottom: "1px solid #DEDCD6" }}>
<div style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px", paddingBottom: "96px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08", maxWidth: "680px", marginBottom: "40px" }}>Clip farms spam burner accounts. We put your brand on pages people actually read.</h2>
<div className="cmp" style={{ border: "1px solid #DEDCD6", borderRadius: "14px", overflow: "hidden" }}>
<div className="cmphead" style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", background: "#F6F5F2", borderBottom: "1px solid #DEDCD6", fontSize: "13px", fontWeight: "600" }}>
<div style={{ padding: "12px 20px" }}></div><div style={{ padding: "12px 20px", color: "#111114", borderLeft: "1px solid #DEDCD6", background: "#EEECE7" }}>Margin</div><div style={{ padding: "12px 20px", color: "#4B4B52", borderLeft: "1px solid #DEDCD6" }}>Clip farms and burner accounts</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderBottom: "1px solid #DEDCD6" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Accounts</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Established meme and news pages, audience verified before every campaign</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Thousands of throwaway burner accounts</div></div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderBottom: "1px solid #DEDCD6" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Audience</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>US/UK adult audiences, insights checked on every page</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Random algo noise</div></div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderBottom: "1px solid #DEDCD6" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Format</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Native posts written by the page in its own style</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Recycled content spammed on repeat</div></div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderBottom: "1px solid #DEDCD6" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Approval</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>You approve every post before it goes live</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Posted blind, zero control</div></div>
<div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr" }}><div style={{ padding: "18px 20px", fontWeight: "600", fontSize: "15px" }}>Billing</div><div style={{ padding: "18px 20px", fontSize: "15px", fontWeight: "500", borderLeft: "1px solid #DEDCD6", background: "#FAFAF8", display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Fixed price per post, settled in USDC or USDT</span></div><div style={{ padding: "18px 20px", color: "#4B4B52", fontSize: "15px", borderLeft: "1px solid #DEDCD6" }}>Inflated / unverified numbers</div></div>
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
<p style={{ margin: "0", fontSize: "17px", color: "#A3A1A8", maxWidth: "460px" }}>Tell us your target GEOs. Today we run meme and news pages with verified adult audiences in the US and UK.</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}><span style={{ border: "1px solid #3A3A40", color: "#F1F0EE", borderRadius: "999px", padding: "8px 14px", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap" }}>US and UK</span></div>
<a href={TELEGRAM_URL} style={{ alignSelf: "flex-start", fontWeight: "600", color: "#FFFFFF", marginTop: "4px", width: "237px", height: "53px", fontSize: "19px", fontFamily: "Geist, Inter, sans-serif" }}>Tell us your GEO →</a>
</div>
</div>
</section>

<section id="how" style={{ background: "#FFFFFF", borderTop: "1px solid #DEDCD6" }}>
<div style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px", paddingBottom: "32px" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08" }}>Live in days.</h2>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "16px 16px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
<StepImage index={0} />
<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 6px" }}><span style={{ fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>Brief and budget</span></div>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px", padding: "0 6px" }}>Lock formats, target GEOs, price per post and creative red lines in one straight call.</p>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "16px 16px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
<StepImage index={1} />
<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 6px" }}><span style={{ fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>Live in days</span></div>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px", padding: "0 6px" }}>Pages write the post in their own style. You approve it, then it goes live within a few days.</p>
</div>
<div style={{ background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "14px", padding: "16px 16px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
<StepImage index={2} />
<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0 6px" }}><span style={{ fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.02em" }}>USDC and USDT settlement</span></div>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "15px", padding: "0 6px" }}>Fixed price per post, agreed upfront. Every payout is logged with its tx hash.</p>
</div>
</div>
</div>
</section>

<section style={{ background: "#FFFFFF", borderBottom: "1px solid #DEDCD6" }}>
<div className="split" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "64px", paddingBottom: "96px", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "56px", alignItems: "center" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08" }}>Every post in one sheet.</h2>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "17px" }}>Live Google Sheet, shared with your team. Posts, reach, views, engagement, payouts.</p>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Reach, views and engagement from native Instagram insights</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Audience insights checked before every campaign</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Every USDC and USDT payout with its tx hash</span></div>
</div>
</div>
<div style={{ border: "1px solid #DEDCD6", borderRadius: "14px", overflow: "hidden", boxShadow: "0 24px 48px -16px rgba(17,17,20,.16)" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #DEDCD6", background: "#F6F5F2" }}>
<div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}><span style={{ width: "10px", height: "10px", borderRadius: "3px", background: "#B9B6AE", display: "inline-block" }}></span>margin_campaign_tracker</div>
<div style={{ fontFamily: "'Geist Mono', monospace", fontSize: "10px", color: "#4B4B52", border: "1px solid #DEDCD6", background: "#FFFFFF", padding: "3px 8px", borderRadius: "6px" }}>SAMPLE SHEET</div>
</div>
<div style={{ overflowX: "auto", background: "#FFFFFF" }}>
<table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: "600px" }}>
<thead><tr style={{ textAlign: "left", background: "#FAF9F7" }}>
<th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600" }}>Post</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600" }}>Page</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600", textAlign: "right" }}>Reach</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600", textAlign: "right" }}>Views</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", fontWeight: "600", textAlign: "right" }}>Engagement</th><th style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", fontWeight: "600", textAlign: "right" }}>Price (USDC)</th>
</tr></thead>
<tbody style={{ fontFamily: "'Geist Mono', monospace" }}>
<tr><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", color: "#4B4B52" }}>#001 Carousel</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6" }}>@page_a</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>96,400</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>182,300</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>6.1%</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", textAlign: "right" }}>450</td></tr>
<tr><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", color: "#4B4B52" }}>#002 Static</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6" }}>@page_b</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>71,800</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>118,900</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>4.8%</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", textAlign: "right" }}>350</td></tr>
<tr><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", color: "#4B4B52" }}>#003 Reel</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6" }}>@page_c</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>88,200</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>241,600</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", borderRight: "1px solid #DEDCD6", textAlign: "right" }}>5.4%</td><td style={{ padding: "11px 14px", borderBottom: "1px solid #DEDCD6", textAlign: "right" }}>500</td></tr>
<tr><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6", color: "#4B4B52" }}>#004 Carousel</td><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6" }}>@page_d</td><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6", textAlign: "right", color: "#4B4B52" }}>scheduled</td><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6", textAlign: "right", color: "#4B4B52" }}>·</td><td style={{ padding: "11px 14px", borderRight: "1px solid #DEDCD6", textAlign: "right", color: "#4B4B52" }}>·</td><td style={{ padding: "11px 14px", textAlign: "right" }}>400</td></tr>
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
<div style={{ display: "flex", gap: "14px", padding: "16px 0", borderTop: "1px solid #2E2E34" }}><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "3px" }}><path d="M3 8.4l3 3 7-7" /></svg><div><div style={{ fontWeight: "600", color: "#FFFFFF" }}>No public client list</div><div style={{ color: "#A3A1A8", fontSize: "15px" }}>Your name never shows up in our sales material unless you approve it.</div></div></div><div style={{ display: "flex", gap: "14px", padding: "16px 0", borderTop: "1px solid #2E2E34" }}><svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "3px" }}><path d="M3 8.4l3 3 7-7" /></svg><div><div style={{ fontWeight: "600", color: "#FFFFFF" }}>Zero leaks</div><div style={{ color: "#A3A1A8", fontSize: "15px" }}>Campaigns, pages and partners stay between us.</div></div></div>
</div>
</div>
</div>
</section>

<section id="pricing" style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px" }}>
<div style={{ display: "flex", justifyContent: "center" }}>
<div style={{ width: "100%", maxWidth: "560px", background: "#FFFFFF", border: "1px solid #DEDCD6", borderRadius: "18px", padding: "36px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "18px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(26px, 2.6vw, 32px)", lineHeight: "1.1" }}>Your budget. Your GEOs.</h2>
<p style={{ margin: "0", color: "#4B4B52", fontSize: "16px" }}>Start with a few posts to test an angle, then scale what converts. No minimum lock-in.</p>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>No CPA, no RevShare</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Fixed price per post, agreed upfront</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Pages selected for your target GEOs</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>You approve every post before it goes live</span></div>
<div style={{ display: "flex", gap: "10px" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#111114" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: "0", marginTop: "4px" }}><path d="M3 8.4l3 3 7-7" /></svg><span>Full report after the campaign: reach, views, engagement</span></div>
</div>
<a href={TELEGRAM_URL} style={{ background: "#C1F222", color: "#111114", padding: "14px 22px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 0 rgba(255,255,255,.2) inset, 0 2px 6px rgba(17,17,20,.12)", marginTop: "4px" }}>Plan my campaign</a>
</div>
</div>
</section>

<section style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "96px", paddingBottom: "24px" }}>
<div style={{ background: "#111114", borderRadius: "22px", padding: "clamp(40px, 6vw, 72px) 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
<h2 style={{ margin: "0", fontFamily: "Geist, Inter, sans-serif", fontWeight: "700", letterSpacing: "-0.035em", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.08", color: "#FFFFFF", maxWidth: "640px" }}>Launch your campaign this week.</h2>
<p style={{ margin: "0", fontSize: "17px", color: "#A3A1A8", maxWidth: "480px" }}>Drop your target GEO and budget on Telegram. No account managers, no corporate runaround.</p>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "4px" }}>
<a href={TELEGRAM_URL} style={{ background: "#C1F222", color: "#111114", padding: "14px 22px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 0 rgba(255,255,255,.2) inset, 0 2px 6px rgba(17,17,20,.12)" }}>DM on Telegram</a>
{CALL_URL && (<a href={CALL_URL} style={{ background: "transparent", color: "#F1F0EE", border: "1px solid #3A3A40", padding: "14px 22px", borderRadius: "10px", fontWeight: "600", fontSize: "15px", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>Book a 15 min call</a>)}
</div>
{CONTACT_EMAIL && (<p style={{ margin: "0", fontSize: "14px", color: "#A3A1A8" }}>or email us at <a href={"mailto:" + CONTACT_EMAIL} style={{ color: "#F1F0EE", textDecoration: "underline", textUnderlineOffset: "3px" }}>{CONTACT_EMAIL}</a></p>)}
</div>
</section>

<footer style={{ maxWidth: "1160px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "24px", paddingBottom: "40px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", fontSize: "13px", color: "#4B4B52" }}>
<img src="/logo.png" alt="Margin" style={{ height: "20px", width: "auto", display: "block" }} />
<a href={NETWORK_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "500", color: "#111114" }}>Run a meme or news page? Join the network →</a>
<div>18+ · © 2026 getmargin.fun</div>
</footer>

</div>
  );
}
