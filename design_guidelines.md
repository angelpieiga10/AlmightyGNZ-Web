# Design Guidelines for Almighty Gnz E-Commerce Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from MyProtein's clean, athletic aesthetic with a focus on performance and energy. This is an e-commerce experience where visual appeal drives conversion while maintaining excellent usability.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Primary Red: 0 85% 50% (energetic, athletic red for CTAs and accents)
- Pure White: 0 0% 100% (clean backgrounds, text on red)
- Dark Text: 0 0% 15% (readable body text)
- Light Gray: 0 0% 96% (section backgrounds, subtle separators)

**Supporting Colors:**
- Success Green: 140 65% 45% (cart confirmations, stock indicators)
- Warning Orange: 25 95% 55% (limited stock alerts)
- Border Gray: 0 0% 88% (card borders, dividers)

### B. Typography
**Font Stack:**
- Primary: 'Inter' or 'Roboto' from Google Fonts (clean, modern, athletic)
- Headings: Bold weights (700-800) for impact
- Body: Regular (400) and Medium (500) for hierarchy
- Sizes: Scale from 14px (mobile body) to 48px (hero headlines)

### C. Layout System
**Tailwind Spacing Primitives:** Use units of 2, 4, 6, 8, 12, and 16 for consistent rhythm
- Component padding: p-4 (mobile), p-6 to p-8 (desktop)
- Section spacing: py-12 to py-16 (mobile), py-20 to py-24 (desktop)
- Card gaps: gap-4 (mobile), gap-6 to gap-8 (desktop)

**Grid System:**
- Products: 1 column (< 640px), 2 columns (640-1024px), 3-4 columns (> 1024px)
- Max container width: max-w-7xl with px-4 horizontal padding

### D. Component Library

**Hero Section:**
- Full-width banner with athletic lifestyle image (athlete training/supplements in action)
- Bold headline with slogan overlay
- High-contrast red CTA button with white text
- Background image darkened (overlay) for text readability
- Height: 70vh on desktop, 50vh on mobile

**Navigation Bar:**
- Sticky header with white background and subtle shadow
- Logo left, navigation center/right
- Cart icon with live badge count (red circle with white number)
- Mobile: Hamburger menu with slide-in drawer
- Link hover: Red underline animation

**Product Cards:**
- White background with light gray border
- Product image at top (aspect ratio 4:3)
- Padding: p-4 to p-6
- Product name (bold, 18px)
- Short description (gray text, 14px)
- Price (bold, red, 20px)
- Red "Add to Cart" button (full width, rounded corners)
- Hover: Subtle shadow lift effect

**Shopping Cart:**
- Item rows with thumbnail image left
- Product details center (name, price)
- Quantity controls right (- button, number, + button in gray)
- Remove item link (small, gray, underline on hover)
- Subtotal and total section: Right-aligned, bold numbers
- Shipping info with small icon
- Red "Proceed to Checkout" button

**Checkout Form:**
- Clean, single-column layout
- Input fields with labels above
- Border: Light gray, focused: Red border
- Validation messages in red below fields
- Form sections grouped with subtle background differences
- Green confirmation screen with checkmark icon

**Footer:**
- Dark background (very dark gray, not black)
- White text for contrast
- Three-column layout on desktop: About, Links, Contact
- Social media icons (grayscale, hover: red)
- Copyright centered at bottom

### E. Interactions & Animations
**Use sparingly:**
- Button hover: Slight darkening and scale (1.02)
- Card hover: Shadow elevation
- Add to cart: Brief scale pulse on button click
- Cart badge: Bounce animation when count updates
- Form validation: Smooth slide-in of error messages
- NO complex scroll animations or parallax

## Images

**Hero Image:**
- Large, impactful hero image required
- Subject: Athletic person preparing/drinking supplement, gym environment, or active lifestyle shot
- Treatment: Subtle dark overlay (rgba(0,0,0,0.3)) for text contrast
- Placement: Full-width background of hero section

**Product Images:**
- Placeholder images showing supplement containers
- Clean white/light background
- Product centered, well-lit
- Consistent aspect ratio across all products (4:3)
- Alt text: "[Product Name] - [Weight] supplement container"

**Optional Supporting Images:**
- Testimonial section: Small circular customer photos
- About/Trust section: Lab certification or quality assurance imagery

## Accessibility & Quality Standards
- Semantic HTML5 elements throughout
- Focus states: Red outline (2px) on all interactive elements
- Alt text on all images describing product/context
- Aria-labels for icon buttons (cart, social media)
- Keyboard navigation: Tab order follows visual flow
- Color contrast ratio: Minimum 4.5:1 for body text
- Form labels properly associated with inputs
- Error messages announced to screen readers

## Mobile-First Responsive Strategy
**Breakpoints:**
- Mobile: < 640px (single column, stacked navigation)
- Tablet: 640-1024px (2 columns, condensed spacing)
- Desktop: > 1024px (3-4 columns, full features)

**Mobile Optimizations:**
- Touch-friendly buttons (min 44px height)
- Simplified navigation (hamburger menu)
- Larger product images on mobile
- Sticky cart summary on checkout
- One-tap phone/email links in footer

This design creates an energetic, trustworthy e-commerce experience that drives conversions while maintaining excellent usability and accessibility standards.