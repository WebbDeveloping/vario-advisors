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
- **Components**: See STYLE-GUIDELINES.md for component usage guidelines

## Component Library

This project uses [shadcn/ui](https://ui.shadcn.com/) components built on [Radix UI](https://www.radix-ui.com/) primitives and styled with Tailwind CSS.

### Why shadcn/ui + Radix UI?

- **Predictable styling**: All components use Tailwind CSS classes, making it easy for AI tools to generate consistent code
- **Accessibility**: Radix UI primitives provide WCAG-compliant accessible components out of the box
- **Customizable**: Components are copied into your codebase, so you own and can modify the code
- **Modern stack**: Industry-standard combination for React applications

### Adding Components

To add a new shadcn/ui component:

```bash
npx shadcn@latest add [component-name]
```

Components are installed in `components/ui/` and become part of your codebase.

### Using Components

```tsx
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Use with Tailwind classes
<Button className="bg-brand hover:bg-brand-dark">Click me</Button>
```

For detailed component usage guidelines, color tokens, and best practices, see [STYLE-GUIDELINES.md](./STYLE-GUIDELINES.md).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Baskervville, Poppins)

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
