# Bonsen — Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion animations for engaging interactions
- **Form Validation** - Client-side validation with error handling
- **Accessibility** - WCAG compliant with ARIA attributes and keyboard navigation
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Performance** - Optimized images, lazy loading, and code splitting

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form
- **State Management**: React Query

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd monochrome-canvas

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable React components
├── constants/           # Animation and validation constants
├── data/                # Content and configuration
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
└── index.css            # Global styles
```

## Deployment

Build the project for production:

```bash
npm run build
```

Deploy the `dist` folder to your hosting provider (Netlify, Vercel, etc.)

## License

This project is open source and available under the MIT License.
