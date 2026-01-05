# Vario Advisors Website

A modern website for Vario Advisors built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
vario-advisors/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── accredited-investor/ # Accredited Investor page
│   ├── resources/         # Resources page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components (Header, Footer)
├── lib/                  # Utility functions and config
│   ├── fonts.ts          # Font configuration
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── fonts/            # Custom font files
│   └── images/           # Images and assets
└── styles/               # Global styles
    └── globals.css       # Global CSS with Tailwind imports
```

## Brand Guidelines

- **Colors**: Dark Navy (#011E35), Blue (#005EB8), Light Blue (#BDDEFD)
- **Fonts**: Baskerville (primary), Poppins (secondary)
- **Typography**: See STYLE-GUIDELINES.md for detailed typography rules

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Fonts**: Google Fonts (Baskervville, Poppins)

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

# vario-advisors
