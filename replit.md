# Almighty Gnz - E-Commerce Website

## Overview
Almighty Gnz is a premium sports supplements e-commerce website featuring a bold, athletic design with the iconic gorilla mascot. The site specializes in protein, creatine, pre-workout, and recovery supplements for serious athletes.

## Branding
- **Logo**: Powerful gorilla mascot with red, black, and white color scheme
- **Colors**: Bold red (#DC2626), pure black (#0D0D0D), and white for high contrast
- **Typography**: Inter and Roboto fonts for a modern, athletic look
- **Style**: Intense, powerful aesthetic targeting gym enthusiasts and bodybuilders

## Recent Changes (October 21, 2025)
- Integrated custom Almighty Gnz branding with gorilla logo throughout the site
- Updated hero section with cinematic athlete imagery and prominent logo display
- Replaced all product images with branded Almighty Gnz supplement containers
- Enhanced color scheme to bold red, black, and white for maximum impact
- Updated navbar to feature the gorilla logo
- Redesigned footer with inverted dark theme
- Enhanced typography with bolder, more impactful fonts

## Project Architecture

### Frontend (React + Vite + TypeScript)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **Components**: Shadcn UI component library
- **State Management**: React Context for cart functionality
- **Data Fetching**: TanStack Query (React Query v5)

### Pages
1. **Home** (`/`) - Hero banner with gorilla logo + product grid
2. **Cart** (`/cart`) - Shopping cart with quantity controls
3. **Checkout** (`/checkout`) - Form validation with order review
4. **Confirmation** (`/confirmation`) - Order success screen
5. **Contact** (`/contact`) - Contact form with company info

### Key Features
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Live Cart Counter**: Real-time badge updates in navbar
- **Form Validation**: Zod schema validation with react-hook-form
- **Responsive Design**: Mobile-first approach (breakpoints: 640px, 1024px)
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Shipping Calculator**: Free shipping over $50, $5.99 flat rate below

### Backend (Express + TypeScript)
- **Server**: Express.js with Vite integration
- **Storage**: In-memory storage (MemStorage) for cart and products
- **Schema**: Drizzle ORM with Zod validation

## User Preferences
- Focus on bold, high-contrast design
- Emphasis on premium quality and power
- Athletic and intense brand personality

## Brand Assets Location
All custom branding images are stored in `attached_assets/branding/`:
- `logo.jpg` - Main gorilla logo (transparent background)
- `logo-red-bg.jpg` - Logo with red background for hero
- `hero-athlete.jpg` - Cinematic athlete holding Almighty Gnz product
- `product-protein.jpg` - White chocolate protein container
- `product-creatine.jpg` - Creatine supplement container
- `product-preworkout.jpg` - Pre-workout supplement container
- `product-bcaa.jpg` - BCAA recovery supplement container
