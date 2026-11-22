// =====================================================================
//  EDIT HERE: your clips and step images.
//  Put your files in /public/clips and /public/steps, then point to them
//  below with a path starting with "/". A full https URL also works.
// =====================================================================

// Vertical 9:16 videos for the scrolling strip under the hero.
// Short MP4s (5 to 10 s, 720p, under 3 MB each) load fastest.
export const CLIPS = [
  { id: 1, src: "/clips/clip-1.mp4", label: "Meme / degen Reel" },
  { id: 2, src: "/clips/clip-2.mp4", label: "Streamer clip" },
  { id: 3, src: "/clips/clip-3.mp4", label: "Crypto / trading clip" },
  { id: 4, src: "/clips/clip-4.mp4", label: "Big win reaction" },
  { id: 5, src: "/clips/clip-5.mp4", label: "Story repost" },
];

// Square images for the 3 "Live in 48h" cards (jpg, png or webp).
export const STEP_IMAGES = [
  { id: 1, src: "/steps/step-1.jpg", alt: "Brief and budget" },
  { id: 2, src: "/steps/step-2.jpg", alt: "Pages go live in 48h" },
  { id: 3, src: "/steps/step-3.jpg", alt: "USDC settlement" },
];

// Where every button points.
export const TELEGRAM_URL = "https://t.me/cesarnode";
