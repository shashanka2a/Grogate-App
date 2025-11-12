# Grogate App - Next.js

A production-ready Next.js application for connecting local farmers with communities.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with fonts and metadata
│   │   ├── page.tsx      # Landing page
│   │   ├── pitch-deck/   # Pitch deck route
│   │   ├── app/          # Mobile app demo route
│   │   └── logo/         # Logo showcase route
│   ├── components/       # React components
│   │   ├── app/         # Mobile app screens
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Other components
│   ├── styles/          # Global styles
│   └── data/            # Mock data
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS v4
- ✅ ESLint
- ✅ Optimized font loading with `next/font`
- ✅ SEO metadata
- ✅ Production-ready configuration

## Build for Production

```bash
npm run build
npm start
```

## Key Changes from Vite

- Migrated from Vite to Next.js
- Converted hash-based routing to Next.js App Router
- Updated all imports to remove version tags
- Added "use client" directives to components using hooks
- Implemented `next/font` for Google Fonts
- Added SEO metadata in layout
- Removed Vite-specific files

## Notes

- All components using React hooks, events, or browser APIs are marked with `'use client'`
- Fonts (Lora and Manrope) are loaded via `next/font` for optimal performance
- Images should use `next/image` for optimization (ImageWithFallback component available)
- The app uses Tailwind CSS v4 with custom theme variables
