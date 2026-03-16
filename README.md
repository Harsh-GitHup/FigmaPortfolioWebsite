# 🌟 Futuristic Dark Portfolio Website

A stunning, modern portfolio website featuring a dark theme with neon green accents (#39ff14). Built with cutting-edge web technologies to showcase projects, skills, and professional experience with smooth animations and an immersive user experience.

![Portfolio Banner](https://img.shields.io/badge/Built%20With-React%20%7C%20TypeScript%20%7C%20Vite-39ff14?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 🎯 Live Demo

🚀 **[View Live Site](https://harshportfolio-beta.vercel.app/)** _(Deployed to Vercel - live URL)_

## ✨ Features

### 🎨 Design & UI
- **Futuristic Dark Theme** with vibrant neon green (#39ff14) accents
- **Smooth Animations** powered by Framer Motion
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Glassmorphism Effects** with backdrop blur
- **Interactive Hover Effects** and gradient backgrounds
- **Custom Grid Overlays** for a cyberpunk aesthetic

### 📱 Sections
1. **Hero Section** - Eye-catching landing with animated gradients and call-to-action buttons
2. **About Me** - Personal introduction with education and certification cards
3. **Tech Stack** - Comprehensive showcase of technical skills organized by category:
   - Backend & Security (Django, Flask, REST APIs, JWT, OAuth2)
   - Frontend Ecosystem (React, Angular, Tailwind CSS, Vite)
   - Data & Analytics (MySQL, MongoDB, Redis, Pandas)
   - DevOps & Cloud (Docker, AWS, GitHub Actions, Vercel)
4. **Projects** - Portfolio showcase with hover-reveal images
5. **Resume** - Professional experience and downloadable resume
6. **Contact** - Contact form with social links
7. **Footer** - Professional footer with links

### 🚀 Technical Features
- **React 18.3.1** with TypeScript for type safety
- **Vite 6.3.5** for lightning-fast build and development
- **Framer Motion** for fluid animations
- **Tailwind CSS 4** for modern styling
- **Radix UI** components for accessibility
- **Lucide React Icons** for beautiful iconography
- **SEO Optimized** structure
- **Fast Load Times** with optimized assets

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion (motion)** - Animation library
- **Vite 6.3.5** - Build tool

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Material UI** - Component library
- **Emotion** - CSS-in-JS

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static typing

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **pnpm**

### Clone the Repository
```bash
git clone https://github.com/Harsh-GitHup/FigmaPortfolioWebsite.git
cd FigmaPortfolioWebsite
```

### Install Dependencies
```bash
npm install
```
Or using pnpm:
```bash
pnpm install
```

## 🚀 Running the Project

### Development Server
Start the development server with hot reload:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Production Build
Build the project for production:
```bash
npm run build
```
This creates an optimized build in the `dist/` folder.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

```
FigmaPortfolioWebsite/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navigation bar
│   │   │   ├── Hero.tsx            # Landing section
│   │   │   ├── About.tsx           # About me section
│   │   │   ├── TechStack.tsx       # Skills showcase
│   │   │   ├── Projects.tsx        # Project portfolio
│   │   │   ├── Resume.tsx          # Experience section
│   │   │   ├── Contact.tsx         # Contact form
│   │   │   ├── Footer.tsx          # Footer
│   │   │   ├── ui/                 # Reusable UI components
│   │   │   └── figma/              # Figma design components
│   │   └── App.tsx                 # Main app component
│   ├── styles/                     # Additional styles
│   ├── index.css                   # Global styles
│   └── main.tsx                    # App entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── tailwind.config.ts              # Tailwind configuration
├── package.json                    # Dependencies
└── README.md                       # Documentation
```

## 🎨 Customization

### Color Scheme
The primary accent color is neon green (`#39ff14`). To change it:

1. Update the color values in components (search for `#39ff14`)
2. Modify Tailwind theme in `tailwind.config.ts`
3. Update gradient backgrounds in component files

### Content Updates

#### Update Personal Information
Edit `src/app/components/About.tsx`:
- Name, bio, education, certifications

#### Update Tech Stack
Edit `src/app/components/TechStack.tsx`:
- Modify the `categories` array to add/remove skills

#### Update Projects
Edit `src/app/components/Projects.tsx`:
- Modify the `projects` array with your actual projects
- Add GitHub links, live demo URLs, and project images

#### Update Contact Information
Edit `src/app/components/Contact.tsx` and `src/app/components/Footer.tsx`:
- Social media links
- Email address
- Contact form configuration

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"

Your site will be live in minutes with:
- ✅ Automatic HTTPS
- ✅ Auto-deploy on push
- ✅ Free custom domain support

### Deploy to Netlify
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Deploy to GitHub Pages
```bash
npm run build
# Upload the dist/ folder to GitHub Pages
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this portfolio:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Harsh Kesharwani**
- Portfolio: [Live URL](https://harsh-githup.github.io/My-Portfolio/)
- GitHub: [@Harsh-GitHup](https://github.com/Harsh-GitHup)
- LinkedIn: [@Harsh Kesharwani](https://www.linkedin.com/in/harshkesharwani)
- Email: harshkesharwani037@gmail.com

## 🙏 Acknowledgments

- Design inspiration from [Figma Community](https://www.figma.com/design/1mPSqTYseP9tZQBk0otEio/Futuristic-Dark-Portfolio-Website)
- Icons by [Lucide Icons](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- UI Components by [Radix UI](https://www.radix-ui.com/)

## 📊 Performance

- ⚡ Lighthouse Score: 95+ (Performance)
- ♿ Accessibility: WCAG AA Compliant
- 🎨 Modern CSS with Tailwind CSS 4
- 🚀 Optimized bundle size with Vite

## 🐛 Bug Reports

Found a bug? Please open an issue on [GitHub Issues](https://github.com/Harsh-GitHup/FigmaPortfolioWebsite/issues).

## 💡 Feature Requests

Have an idea? Feel free to open a feature request on [GitHub Issues](https://github.com/Harsh-GitHup/FigmaPortfolioWebsite/issues).

---

⭐ **Star this repo** if you find it helpful!




Made with ❤️ and ☕ by Harsh Kesharwani

## 📞 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harshkesharwani)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Harsh-GitHup)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/HarshKesha91325)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:harshkesharwani037@gmail.com)

</div>
