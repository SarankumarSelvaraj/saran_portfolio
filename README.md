# Sarankumar S | Portfolio Website

A production-ready, recruiter-focused personal portfolio website built with React 18, TypeScript, Material-UI (MUI), and Framer Motion. Optimised for performance, accessibility, SEO, and visual excellence — featuring a premium dark/light mode with glassmorphism design tokens.

## 🚀 Live Demo & Repository

- **Live Site:** [saran-portfolio-alpha.vercel.app](https://saran-dev-portfolio.vercel.app)
- **GitHub Repository:** [https://github.com/SarankumarSelvaraj/saran_portfolio](https://github.com/SarankumarSelvaraj/saran_portfolio)

---

## 🛠️ Tech Stack & Features

- **Core:** React 18, TypeScript, Vite
- **UI Library:** Material UI (MUI) v9
- **Animations:** Framer Motion (smooth scroll, transitions, hover animations, scroll reveal)
- **Routing:** React Router DOM (HashRouter for GitHub Pages compatibility)
- **Themes:** Custom Light & Dark Themes with persistent state storage
- **Design Pattern:** Clean Architecture — separated domain entities, custom themes, components
- **Aesthetics:** Glassmorphism card overlays, custom gradients, responsive flex grids, modern typography (`Plus Jakarta Sans` & `Outfit`)

---

## 📂 Folder Structure

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── common/         # Reusable elements (GlassCard, ThemeToggle, ScrollReveal)
│   ├── layout/         # Frame layout (Navbar, Footer, Layout wraps)
│   └── sections/       # Portfolio sections (Hero, About, Skills, Experience, etc.)
├── configs/            # Static data configuration (portfolioData.ts)
├── entities/           # TypeScript domain interfaces
├── hooks/              # Custom React hooks (useScrollDirection)
├── pages/              # Page modules (Home)
├── routes/             # App routing setup
├── theme/              # Custom MUI theme configuration
├── utils/              # Utility helpers
├── App.tsx             # Root React component
└── main.tsx            # App entry point
```

---

## ⚡ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/SarankumarSelvaraj/saran_portfolio.git
cd saran_portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

The app will start on `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

Production assets are compiled into the `dist/` directory.

---

## 🌎 Deployment to GitHub Pages

### Step 1: Install `gh-pages`

```bash
npm install -D gh-pages
```

### Step 2: Add scripts to `package.json`

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Deploy

```bash
npm run deploy
```

This builds the project and pushes assets to the `gh-pages` branch.

---

## 👤 Profile & Experience

- **Name:** Sarankumar S
- **Role:** Software Engineer | React Native | MERN Stack | Full-Stack Developer
- **Experience:** 3+ Years at SRM Tech, Chennai
- **Location:** Chennai, Tamil Nadu
- **Email:** sarankselvaraj@gmail.com
- **LinkedIn:** [linkedin.com/in/sarankumar-s-649979219](https://linkedin.com/in/sarankumar-s-649979219)

### Key Projects

| Project                        | Description                                                                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **SmartMeet**                  | AI-powered meeting intelligence platform — Admin/User web portals, cross-platform mobile app, real-time WebSocket transcription, IoT device management |
| **SmartMeet TDIP**             | React Native faculty app for SRM University smart classrooms — QR-based IoT device pairing, crash-safe recording, dual-token auth                      |
| **HealthMate**                 | 5-app healthcare super-app ecosystem (Doctor, Patient, Hospital, Lab, Pharmacy) — Firebase OTP auth, AWS S3, Google Maps, FCM                          |
| **SmartMeet TIPS Middleware**  | Node.js/Express microservice automating Google Meet recording ingestion through a 14-status pipeline with AI voice identification                      |
| **SRM Global Chatbot Builder** | Visual no-code chatbot designer on a React Flow canvas with live in-browser preview and versioned REST API                                             |

### Engineering Achievements

- **Unified Auth System** — Firebase Phone + Email OTP with role-based JWT sessions and RTK Query auto-refresh interceptors
- **AWS S3 Upload Pipeline** — Centralised document upload (prescriptions, lab reports, recordings) across 6 products
- **Offline Resilience** — redux-persist + network detection keeping sessions alive across connectivity loss
- **Reusable Component Library** — 50+ shared UI components cutting per-feature build time by ~60%
- **Silent JWT Refresh** — RTK Query 401 → refreshToken → retry, zero forced re-logins
- **Multi-Language Support** — English and Tamil i18n via i18next across all screens
- **PDF Generation** — react-native-html-to-pdf branded prescriptions uploaded directly to AWS S3
