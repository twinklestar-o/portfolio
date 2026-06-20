<<<<<<< Updated upstream
# twinklestar-o

Personal website, focus on portofolio projects. Simple, Clean, and Fast. Made with **Astro**, feel free to fork.

[https://twinklestar-o.github.io](https://twinklestar-o.github.io/)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
=======
# Ruth Fidia Siregar - Developer Portfolio

A production-ready personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Dark/Light Mode**: Elegant dark-first interface with a global toggle.
- **Interactive Timeline**: Visualizing professional experience and education.
- **Project Showcase**: Detailed cards highlighting roles, technical approaches, and tech stacks.
- **Glassmorphism UI**: Modern aesthetic with subtle micro-interactions.
- **Technical SEO**: Metadata, JSON-LD, sitemap, and robots.txt included.
- **Print Optimization**: Recruiter-friendly printable layout.

## 🛠️ Tech Stack

- **Frontend**: React (TypeScript), Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Actions + GitHub Pages

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets (CV, favicon, SEO)
├── src/
│   ├── components/         # Reusable UI components
│   ├── data/
│   │   └── portfolio.ts    # SINGLE SOURCE OF TRUTH (Content)
│   ├── sections/           # Large page sections
│   ├── App.tsx             # Main application logic
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── .github/workflows/      # CI/CD deployment
├── index.html
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## ⚙️ Content Management (Ruth)

To update the website content (Experience, Projects, Skills, etc.), edit only the `src/data/portfolio.ts` file. All components render dynamically from this data. No need to touch the component logic.

## 📦 Local Setup

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## 🚀 Deployment to GitHub Pages

1. **Repository Settings**:
   - Go to your GitHub Repository Settings > Pages.
   - Set "Source" to "GitHub Actions".

2. **Vite Configuration**:
   - In `vite.config.ts`, update the `base` property if your site is not at the root domain:
     ```ts
     base: '/YOUR_REPOSITORY_NAME/',
     ```
   - In `public/sitemap.xml` and `public/robots.txt`, replace `USERNAME` and `REPOSITORY` with your actual info.

3. **Push to Main**:
   - Once you push to the `main` branch, the GitHub Action will automatically build and deploy your site.

## 📝 TODO Checklist

- [ ] Update social links in `src/data/portfolio.ts`.
- [ ] Replace `public/CV_Ruth_Fidia_Siregar.pdf` with your actual CV file.
- [ ] Add project repository/demo links in `src/data/portfolio.ts` if available.
- [ ] Review confidential project information before public deployment.
>>>>>>> Stashed changes
