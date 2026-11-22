# Margin landing page

Next.js site, ready to deploy on Vercel.

## Add your media

1. **Clips** (the scrolling strip under the hero): drop your vertical MP4s in `public/clips/`
   named `clip-1.mp4` to `clip-5.mp4`. To use other names, more clips or different labels,
   edit `CLIPS` in `config.js`.
2. **Step images** (the 3 "Live in 48h" cards): drop square images in `public/steps/`
   named `step-1.jpg` to `step-3.jpg`, or edit `STEP_IMAGES` in `config.js`.
3. **Logo**: replace `public/logo.png` (keep the same name).

Until a file is there, its slot shows a clean dashed placeholder with the expected file name.

## Run it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Put it online

Push this folder to a GitHub repo, then import it on vercel.com (it detects Next.js by itself).
Or run `npm run build` to check the production build locally first.
