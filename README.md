# Nicolas Callegari - Cybersecurity Portfolio

A modern, professional portfolio website built with Next.js, React, and Tailwind CSS, showcasing cybersecurity expertise, projects, and professional development.

## Tech Stack

- **Framework:** Next.js 15+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Icons:** Lucide React
- **Deployment:** Vercel
- **Version Control:** Git/GitHub

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nicolas-portfolio.git
cd nicolas-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── HeroSection.tsx     # Hero/intro section
│   ├── AboutSection.tsx    # About me section
│   ├── SkillsSection.tsx   # Technical skills
│   ├── CertificationsSection.tsx  # Certs & training
│   ├── ProjectsSection.tsx # Featured projects
│   ├── SOCSection.tsx      # LetsDefend SOC training
│   ├── ContactSection.tsx  # Contact & CTA
│   └── Footer.tsx          # Footer
└── lib/
    └── constants.ts        # Static data & constants

public/
└── images/
    └── architecture-ong.png  # Infrastructure diagram
```

## Features

- Responsive design (mobile, tablet, desktop)
- Dark theme with green cybersecurity aesthetic
- Smooth scroll navigation
- Project showcase with technology tags
- Certifications tracking with progress bars
- SOC training progress visualization
- Contact section with email & LinkedIn links
- Optimized images with Next.js Image component

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and update values:

```bash
cp .env.example .env.local
```

### Adding Your Architecture Images

1. Place image files in `public/images/`
2. Reference in components using Next.js `Image` component:

```tsx
import Image from 'next/image';


```

## Deployment to Vercel

### Option 1: Via GitHub

1. Push repository to GitHub
2. Connect GitHub to Vercel
3. Vercel auto-deploys on push

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## Development

### Build for production:
```bash
npm run build
npm start
```

### Linting:
```bash
npm run lint
```

## Customization

- **Colors:** Edit Tailwind classes (green-500, etc.) in components
- **Text Content:** Update constants in `src/lib/constants.ts`
- **Social Links:** Modify `SOCIAL_LINKS` in constants.ts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is personal and not licensed for redistribution.

## Contact

- Email: nicolas.callegari@efrei.net
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/nicolas-callegari-9b2501252/)

---

Built with passion for cybersecurity excellence.