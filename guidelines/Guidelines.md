# Portfolio Website Guidelines

This document outlines the design and development guidelines for the Figma Portfolio Website project.

---

## General Guidelines

### Code Quality
* Write clean, maintainable, and well-documented code
* Refactor code as you go to keep it organized and readable
* Use meaningful variable and function names that clearly describe their purpose
* Keep file sizes small and modular - put helper functions and components in their own files
* Follow consistent naming conventions throughout the project

### Layout and Positioning
* Only use absolute positioning when necessary
* Opt for responsive and well-structured layouts using flexbox and grid by default
* Ensure all layouts are mobile-first and responsive across all device sizes
* Use CSS Grid for overall page layouts and Flexbox for component-level layouts
* Maintain consistent spacing using a defined spacing scale (8px base unit)

### Performance
* Optimize images and assets for web (use WebP format where possible)
* Lazy load images and components below the fold
* Minimize bundle sizes by code-splitting and tree-shaking unused code
* Use CSS variables for theming to avoid repetitive styles

### Accessibility
* Ensure all interactive elements are keyboard accessible
* Provide appropriate ARIA labels and roles where needed
* Maintain sufficient color contrast ratios (WCAG AA minimum)
* Include alt text for all images
* Use semantic HTML elements

---

## Design System Guidelines

### Typography
* Base font size: 16px
* Font family: Use a modern sans-serif (e.g., Inter, Poppins, or system fonts)
* Heading scale:
  * H1: 48px (3rem) - Page titles
  * H2: 36px (2.25rem) - Section headings
  * H3: 28px (1.75rem) - Subsection headings
  * H4: 20px (1.25rem) - Card titles
  * Body: 16px (1rem)
  * Small: 14px (0.875rem)
* Line height: 1.5 for body text, 1.2 for headings
* Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Color Palette
* Primary: #6366F1 (Indigo) - Main brand color for CTAs and emphasis
* Secondary: #8B5CF6 (Purple) - Accent color for highlights
* Background: #FFFFFF (White) - Main background
* Surface: #F9FAFB (Light gray) - Card and section backgrounds
* Text Primary: #111827 (Dark gray) - Main text color
* Text Secondary: #6B7280 (Medium gray) - Supporting text
* Border: #E5E7EB (Light gray) - Borders and dividers
* Success: #10B981 (Green)
* Warning: #F59E0B (Amber)
* Error: #EF4444 (Red)

### Dark Mode (Optional)
* Background: #0F172A (Dark blue-gray)
* Surface: #1E293B (Slightly lighter)
* Text Primary: #F1F5F9 (Off-white)
* Text Secondary: #94A3B8 (Light gray)

### Spacing Scale
Use consistent spacing throughout the design:
* xs: 4px
* sm: 8px
* md: 16px
* lg: 24px
* xl: 32px
* 2xl: 48px
* 3xl: 64px
* 4xl: 96px

### Breakpoints
* Mobile: 320px - 640px
* Tablet: 641px - 1024px
* Desktop: 1025px - 1440px
* Large Desktop: 1441px+

---

## Component Guidelines

### Button Component
The Button component is a fundamental interactive element designed to trigger actions or navigate users through the application.

#### Usage
* Use buttons for important actions: form submissions, confirmations, navigation
* Button labels should be clear, concise, and action-oriented (e.g., "View Project", "Contact Me", "Download CV")
* Always provide visual feedback on hover and active states

#### Variants
* **Primary Button**
  * Purpose: Main call-to-action
  * Visual Style: Filled with primary color (#6366F1), white text
  * Usage: One primary button per section for the most important action
  * Padding: 12px 24px
  * Border radius: 8px
  * Hover: Darken by 10%

* **Secondary Button**
  * Purpose: Supporting or alternative actions
  * Visual Style: Outlined with primary color, transparent background
  * Usage: Can appear alongside primary button for less critical actions
  * Padding: 12px 24px
  * Border: 2px solid primary color
  * Border radius: 8px
  * Hover: Light background fill

* **Tertiary/Text Button**
  * Purpose: Least emphasized actions
  * Visual Style: Text-only with primary color, no border or background
  * Usage: For subtle actions like "Learn more" or "See details"
  * Padding: 8px 16px
  * Hover: Underline

### Card Component
Cards are used to display portfolio projects and content sections.

#### Usage
* Use cards to group related information
* Each card should have a clear visual hierarchy
* Include a hover effect to indicate interactivity

#### Structure
* Image/thumbnail at the top (16:9 aspect ratio preferred)
* Title (H4)
* Brief description (1-2 sentences)
* Tags/technologies (small pills or badges)
* CTA button or link
* Padding: 24px
* Border radius: 12px
* Shadow: Subtle elevation on hover
* Background: Surface color

### Navigation Component
The navigation should be clean, accessible, and consistent across all pages.

#### Desktop Navigation
* Fixed/sticky header at the top
* Logo on the left
* Menu items center or right-aligned
* Maximum of 5-6 main navigation items
* Include a prominent CTA button (e.g., "Contact" or "Hire Me")

#### Mobile Navigation
* Hamburger menu icon (top-right)
* Slide-in or overlay menu
* Large touch targets (minimum 44x44px)
* Close button clearly visible

### Form Components
Forms should be simple and user-friendly.

#### Input Fields
* Label above each input
* Clear placeholder text
* Border radius: 8px
* Border: 1px solid border color
* Padding: 12px 16px
* Focus state: Primary color border with subtle shadow
* Error state: Red border with error message below

#### Validation
* Real-time validation for immediate feedback
* Clear error messages that explain how to fix the issue
* Success indicators when input is valid

### Footer Component
* Background: Dark color (primary or dark gray)
* Contains: Social links, copyright, contact info
* Layout: Grid layout for desktop, stacked for mobile
* Padding: 48px vertical

---

## Portfolio-Specific Guidelines

### Hero Section
* Full-width, eye-catching design
* Include a professional photo or illustration
* Clear headline introducing yourself
* Brief tagline or value proposition
* Primary CTA button prominently displayed
* Height: 80-100vh on desktop, adapt for mobile

### Projects Section
* Display projects in a grid (3 columns desktop, 2 tablet, 1 mobile)
* Each project card should include:
  * Project thumbnail/preview image
  * Project title
  * Short description (1-2 sentences)
  * Technologies/tools used (as badges)
  * "View Project" link or button
* Option to filter projects by category or technology
* Consistent card heights or masonry layout

### About Section
* Personal photo or avatar
* Bio (2-3 paragraphs)
* Skills list with visual indicators (icons or progress bars)
* Downloadable CV/resume button
* Background: Alternate color from main background

### Contact Section
* Contact form with fields: Name, Email, Message
* Alternative contact methods: Email link, LinkedIn, GitHub
* Social media icons
* Consider adding a success message after form submission

### Animations and Interactions
* Subtle fade-in animations on scroll for sections
* Smooth scrolling between sections
* Hover effects on interactive elements
* Page transitions should be smooth but not distracting
* Use CSS transitions (300-400ms duration) for most interactions
* Avoid excessive animations that may cause motion sickness

### Images and Media
* All images should be optimized and compressed
* Use lazy loading for images below the fold
* Project screenshots should be high quality but optimized
* Consider using a lightbox/modal for viewing larger project images
* Maintain consistent aspect ratios for project thumbnails

---

## Figma-to-Code Best Practices

### Component Naming
* Use clear, descriptive component names in Figma that match code conventions
* Group related elements in frames
* Use auto-layout in Figma to ensure responsive behavior translates to code

### Design Tokens
* Define colors, typography, and spacing as variables in Figma
* Export and use these as CSS variables or design tokens in code
* Keep design tokens synchronized between Figma and code

### Responsive Design
* Design mobile, tablet, and desktop versions in Figma
* Use constraints and auto-layout to define responsive behavior
* Test responsive behavior in code matches Figma designs

---

## Technology Stack Recommendations

* **Framework**: React, Next.js, or Vue.js for modern component-based architecture
* **Styling**: Tailwind CSS, CSS Modules, or Styled Components
* **Animations**: Framer Motion or GSAP for smooth animations
* **Forms**: React Hook Form or Formik for form handling
* **Deployment**: Vercel, Netlify, or GitHub Pages
* **Version Control**: Git with clear, descriptive commit messages

---

## Additional Guidelines

### SEO Optimization
* Include proper meta tags (title, description, OG tags)
* Use semantic HTML with proper heading hierarchy
* Add structured data (JSON-LD) for better search visibility
* Ensure fast page load times
* Create descriptive URLs

### Browser Support
* Support latest 2 versions of major browsers (Chrome, Firefox, Safari, Edge)
* Graceful degradation for older browsers
* Test on both desktop and mobile browsers

### Documentation
* Comment complex logic in code
* Maintain a README with setup instructions
* Document component props and usage
* Keep this guidelines document updated as the project evolves

---

**Last Updated**: 2026-02-07 15:53:55