# Sarankumar S | Senior Portfolio Website

A production-ready, recruiter-focused personal portfolio website built with React 18, TypeScript, Material-UI (MUI), and Framer Motion. This website is highly optimized for performance, accessibility, SEO, and visual excellence (including a premium dark/light mode with glassmorphism design tokens).

## 🚀 Live Demo & Repository
* **GitHub Repository:** [https://github.com/sarankumar-selvaraj/saran_portfolio](https://github.com/sarankumar-selvaraj/saran_portfolio)

---

## 🛠️ Tech Stack & Features

* **Core:** React 18, TypeScript, Vite
* **UI Library:** Material UI (MUI) v9
* **Animations:** Framer Motion (smooth scroll, transitions, hover animations, scroll reveal)
* **Routing:** React Router DOM (HashRouter for compatibility with GitHub Pages)
* **Themes:** Custom Light & Dark Themes (with persistent state storage)
* **Design Pattern:** Clean Architecture (separated domain entities, custom themes, components)
* **Aesthetics:** Glassmorphism card overlays, custom gradients, responsive flex grids, modern typography (`Plus Jakarta Sans` & `Outfit`)

---

## 📂 Folder Structure
The project follows this strict architecture directory:
```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── common/         # Reusable elements (GlassCard, ThemeToggle, ScrollReveal)
│   ├── layout/         # Frame layout (Navbar, Footer, Layout wraps)
│   └── sections/       # Portfolio landing sections (Hero, About, Skills, etc.)
├── configs/            # Hardcoded static data configuration
├── entities/           # TypeScript Domain Interfaces
├── hooks/              # Custom React hooks (useThemeMode, useScrollDirection)
├── pages/              # Page modules (Home Dashboard)
├── routes/             # App routing setup
├── theme/              # Custom MUI Theme configuration
├── utils/              # Standard utility helpers
├── App.tsx             # Root React App Component
└── main.tsx            # App execution mount point
```

---

## ⚡ Setup & Installation

Follow these steps to run the portfolio website locally:

### 1. Clone the repository
```bash
git clone https://github.com/sarankumar-selvaraj/saran_portfolio.git
cd saran_portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will automatically start on `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
The production-ready assets will be compiled into the `dist/` directory.

---

## 🌎 Deployment to GitHub Pages

This project is pre-configured for deployment to GitHub Pages. Follow these instructions:

### Step 1: Install `gh-pages` package
```bash
npm install -D gh-pages
```

### Step 2: Configure scripts in `package.json`
Add the following scripts to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Run Deployment Command
Make sure your git repository has a remote pointing to GitHub:
```bash
npm run deploy
```
This will automatically build the React project and push the assets to the `gh-pages` branch on GitHub, publishing your site.

---

## 👤 Profile & Experience Details

* **Name:** Sarankumar S
* **Role:** Programmer Analyst | React Native Developer | MERN Stack Developer
* **Experience:** 3+ Years at SRM Tech
* **Location:** Chennai, Tamil Nadu
* **Key Projects:**
  * **HealthMate:** Multi-stakeholder Healthcare Super App (Doctor, Patient, Lab, Pharmacy, Hospital)
  * **SmartMeet:** AI-powered Speech-to-Text Meeting Summarization and Workspace Dashboard
  * **SmartMeet TDIP:** QR-pairing IoT companion classroom recording configuration app
* **Engineering Achievements:** Unified Authentication System, AWS S3 upload pipeline, local offline Redux Persist synchronization, multi-language UI, custom PDF rendering system.
