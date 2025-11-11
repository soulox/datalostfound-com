# DataLostFound.com - Veeam Backup MSP Website

A modern, high-performance website for a Veeam Backup MSP reseller, built with Astro and deployed to Cloudflare Workers.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro for optimal performance
- **Cloudflare Workers**: Optimized for edge deployment
- **Responsive Design**: Beautiful UI that works on all devices
- **Veeam-Inspired**: Professional design similar to Veeam's website
- **SEO Optimized**: Built-in SEO best practices
- **Fast Loading**: Minimal JavaScript, maximum performance

## 📦 Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Workers/Pages
- **UI Components**: React (for interactive components)
- **TypeScript**: Full type safety

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment to Cloudflare

1. Install Wrangler CLI (if not already installed):
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
npm run deploy
```

Or use Cloudflare Pages through the dashboard:
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Deploy!

## 📁 Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── layouts/      # Page layouts
│   ├── pages/        # Route pages
│   └── styles/       # Global styles
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.mjs`:

```javascript
colors: {
  'primary': '#00B336',      // Veeam green
  'primary-dark': '#009929',
  'secondary': '#0052CC',
  // ... more colors
}
```

### Content

All page content can be edited in the `src/pages/` directory:
- `index.astro` - Homepage
- `services.astro` - Services page
- `solutions.astro` - Solutions page
- `about.astro` - About page
- `contact.astro` - Contact page

## 📄 Pages

- **Home** (`/`) - Main landing page with hero, services overview, and CTAs
- **Services** (`/services`) - Detailed service offerings
- **Solutions** (`/solutions`) - Industry-specific solutions
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information

## 🔧 Configuration

### Cloudflare Adapter

The site is configured to use the Cloudflare adapter with SSR capabilities. You can switch to static mode by changing `output` in `astro.config.mjs`:

```javascript
export default defineConfig({
  output: 'static', // or 'hybrid' for mixed static/SSR
  // ...
});
```

## 📞 Support

For issues or questions, please contact the development team.

## 📝 License

All rights reserved © DataLostFound.com

