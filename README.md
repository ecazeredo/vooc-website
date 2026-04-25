# Vancouver Olive Oil Company - Developer & Owner Guide

This project is a high-converting marketing website designed to drive foot traffic to the Kitsilano tasting room.

## How to Edit Content

### 1. Update Products or Pairings
All product data, tasting notes, and suggested uses live in:
`src/data/websiteData.ts`

To add a new flavored oil or change a tasting note, simply update the `PRODUCTS` array in that file. It will automatically reflect on the Catalog page and individual Product pages.

### 2. Update Store Hours & Info
Store hours, address, and holiday schedules are managed in the same file:
`src/data/websiteData.ts` -> `STORE_INFO` object.

### 3. Change Images
We use Unsplash placeholders for development. To swap with real photos:
1. Upload your photos to the `public` folder.
2. In `src/data/websiteData.ts`, update the image URLs for products.
3. In `src/pages/Home.tsx` or `src/pages/About.tsx`, replace the Unsplash URLs with your local paths.

Refer to `IMAGE_PROMPTS.md` for AI-generated image suggestions if you need new assets.

## Project Philosophy
- **NO Cart/E-commerce**: The site is designed to get people to visit the PHYSICAL store.
- **Mobile First**: Optimized for local users on their phones.
- **Sensory Copy**: High focus on "tasting" through words.

## Deployment
This is a standard React + Tailwind + Vite project. You can deploy it to any static hosting (Vercel, Netlify, Github Pages).
If deploying to a custom domain, remember to update the `SEO` component base URL in `src/components/SEO.tsx`.
