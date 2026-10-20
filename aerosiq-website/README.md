# Aerosiq Marketing Agency - Official Website

A modern, fast, and fully responsive website for **Aerosiq Marketing Agency**. Built with React and Vite, this project features a modular architecture, smooth scrolling, and a premium dark-mode design with neon accents.

## 🚀 Features

- **React + Vite:** Lightning-fast development and optimized production builds.
- **Modular Components:** Easy to maintain and scale.
- **Central Data Configuration:** Update services, social links, and contact info from a single file.
- **Fully Responsive:** Looks perfect on mobile, tablet, and desktop.
- **SEO Optimized:** Includes Meta tags, Open Graph tags, and semantic HTML.
- **Floating WhatsApp Button:** Fixed to the bottom right for instant client communication.
- **Interactive UI:** Sticky image scrolling in the services section and hover effects.

## 📁 Folder Structure

```text
aerosiq-website/
│
├── index.html                  # Main HTML file (SEO meta tags & fonts)
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation
│
└── src/
    ├── main.jsx                # React entry point (imports global CSS)
    ├── App.jsx                 # Main layout assembling all components
    │
    ├── assets/                 # Store local images/icons here
    │
    ├── styles/
    │   └── global.css          # All the custom CSS styling
    │
    ├── data/
    │   └── siteData.js         # ⭐ CENTRAL CONFIG: Edit links, numbers & services here
    │
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Stats.jsx
        ├── Services.jsx
        ├── About.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── FloatingWhatsApp.jsx
