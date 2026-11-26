import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://getmargin.fun"),
  title: "Margin | Sponsored posts on crypto meme and news pages",
  description: "Native sponsored posts on verified Instagram meme and news pages. Built for crypto brands. Paid in USDC and USDT.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://getmargin.fun",
    siteName: "Margin",
    title: "Margin | Sponsored posts on crypto meme and news pages",
    description: "Native sponsored posts on verified Instagram meme and news pages. Built for crypto brands. Paid in USDC and USDT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Margin | Sponsored posts on crypto meme and news pages",
    description: "Native sponsored posts on verified Instagram meme and news pages. Built for crypto brands. Paid in USDC and USDT.",
  },
  // Paste the code Google Search Console gives you (HTML tag method) here, then push:
  // verification: { google: "XXXXXXXXXXXX" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
