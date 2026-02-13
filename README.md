# CAD Master

A modern, responsive website for CAD (Computer-Aided Design) training and courses. Built with Next.js, React Three Fiber for 3D graphics, and Tailwind CSS.

## Features

- **Interactive 3D Hero Section** - Engaging mechanical 3D scene using React Three Fiber
- **Course Catalog** - Comprehensive training programs in SolidWorks, CATIA, AutoCAD, Fusion360, and 3D Printing
- **Responsive Design** - Fully responsive layout optimized for all devices
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- **Dark/Light Theme** - Theme support with next-themes

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **3D Graphics:** React Three Fiber, Drei
- **UI Components:** shadcn/ui, Radix UI
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vivekkumars21/CAD-MASTER.git
   cd CAD-MASTER
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── hero-section.tsx  # Hero with 3D scene
│   ├── courses-section.tsx
│   ├── testimonials-section.tsx
│   └── ...
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## License

This project is private and proprietary.
