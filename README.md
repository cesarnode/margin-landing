# Margin landing page

Next.js site, ready to deploy on Vercel.

## Add your media

1. **Post examples** (the scrolling strip under the hero): drop your 4:5 images or short MP4s
   in `public/examples/`, then set each `src` in `POST_EXAMPLES` in `config.js`
   (for example `/examples/post-1.jpg`). Empty `src` shows a neutral placeholder.
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
