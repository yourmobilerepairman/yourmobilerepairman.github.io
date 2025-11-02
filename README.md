# Your Mobile Repairman Website

A modern, responsive static website built with React, TypeScript, Vite, React Router, and TailwindCSS for Your Mobile Repairman business.

## Features

- **React + TypeScript**: Type-safe React application
- **TailwindCSS**: Utility-first CSS framework for modern styling
- **React Router**: Client-side routing for seamless navigation
- **Responsive Design**: Mobile-first design that works on all devices
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with logo and menu
│   │   ├── Footer.tsx       # Footer with copyright information
│   │   ├── Layout.tsx       # Main layout wrapper
│   │   └── Hero.tsx         # Hero section component for page titles
│   ├── pages/
│   │   ├── Home.tsx         # Home page with business information
│   │   ├── Specials.tsx     # Current specials and promotions
│   │   └── Contact.tsx      # Contact information and social media
│   ├── App.tsx              # Main app with routing configuration
│   └── index.css            # Global styles and Tailwind imports
├── public/
│   ├── logo.png            # Business logo
│   └── hero-default.jpg    # Default hero image
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Customization

### Update Business Information

1. **Home Page**: Edit `src/pages/Home.tsx` to update your business description and services
2. **Contact Information**: Edit `src/pages/Contact.tsx` to add your actual:
   - Email address
   - Phone number
   - Social media links
   - Business hours

3. **Specials**: Edit `src/pages/Specials.tsx` to add, remove, or update current promotions

### Update Logo and Images

1. Replace `public/logo.png` with your business logo
2. Replace `public/hero-default.jpg` with your preferred hero background image
3. Update the `Hero` component in pages to use custom images per page:

```tsx
<Hero title="Page Title" image="/custom-hero.jpg" />
```

## Building for Production

Build the site for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

This site is configured for deployment to GitHub Pages. To deploy:

```bash
npm run deploy
```

This command will:
1. Build the production version of your site
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://yourmobilerepairman.github.io`

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "gh-pages" branch
4. Your site will be published at your GitHub Pages URL

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages

## Technologies Used

- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **TailwindCSS 4** - Utility-first CSS framework
- **gh-pages** - GitHub Pages deployment

## Browser Support

This site works in all modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Copyright Your Mobile Repairman. All rights reserved.
