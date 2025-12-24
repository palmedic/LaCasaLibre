# La Casa Libre

A Next.js website for La Casa Libre - a home that runs itself, so you can live as you choose.

## Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

- `app/` - Next.js app directory containing pages and layouts
  - `page.tsx` - Main homepage component
  - `layout.tsx` - Root layout component
  - `globals.css` - Global styles
  - `page.css` - Homepage-specific styles
- `public/` - Static assets (images, etc.)
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- CSS - Styling

## Features

- Responsive design
- Optimized images with Next.js Image component
- Static site generation for optimal performance
- TypeScript for type safety
