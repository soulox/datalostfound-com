# Quick Start Guide - DataLostFound.com

Get your Veeam MSP website up and running in minutes!

## Prerequisites

- Node.js 18 or higher
- npm, pnpm, or yarn
- Git (for deployment)

## Installation

1. **Navigate to project directory**
   ```bash
   cd datalostfound-com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:4321`

That's it! Your site is now running locally.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run deploy   # Deploy to Cloudflare (requires setup)
```

## Project Structure Overview

```
datalostfound-com/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Hero.astro
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   └── pages/          # Route pages (each .astro = a route)
│       ├── index.astro        # Home page (/)
│       ├── services.astro     # Services (/services)
│       ├── solutions.astro    # Solutions (/solutions)
│       ├── about.astro        # About (/about)
│       ├── contact.astro      # Contact (/contact)
│       ├── datacenter.astro   # Datacenter (/datacenter)
│       ├── partners.astro     # Partners (/partners)
│       ├── privacy.astro      # Privacy Policy (/privacy)
│       ├── terms.astro        # Terms of Service (/terms)
│       ├── 404.astro          # 404 Error page
│       └── api/
│           └── contact.ts     # Contact form API endpoint
├── public/              # Static assets (served as-is)
│   └── favicon.svg
├── package.json         # Dependencies and scripts
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── wrangler.toml        # Cloudflare Workers configuration
```

## Customization Quick Reference

### 1. Change Colors

Edit `tailwind.config.mjs`:
```javascript
colors: {
  'primary': '#00B336',        // Change this to your brand color
  'primary-dark': '#009929',
  // ...
}
```

### 2. Update Company Info

Edit `src/components/Footer.astro` for:
- Company name
- Contact information
- Social media links

Edit `src/pages/contact.astro` for:
- Phone number
- Email address
- Physical address

### 3. Modify Navigation

Edit `src/components/Header.astro`:
```javascript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  // Add or remove items here
];
```

### 4. Update Page Content

All page content is in `src/pages/*.astro` files. Edit them directly:
- **Homepage**: `src/pages/index.astro`
- **Services**: `src/pages/services.astro`
- **Solutions**: `src/pages/solutions.astro`
- etc.

### 5. Add Your Logo

1. Place your logo image in `public/`
2. Edit `src/components/Header.astro`
3. Replace the SVG logo with:
   ```astro
   <img src="/your-logo.png" alt="DataLostFound" class="h-10" />
   ```

### 6. Configure Contact Form

Edit `src/pages/api/contact.ts` to integrate with:
- SendGrid
- Mailgun
- Resend
- Or any email service

Example with SendGrid:
```typescript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'info@datalostfound.com',
  from: email,
  subject: `Contact from ${firstName} ${lastName}`,
  text: message,
};

await sgMail.send(msg);
```

## Common Tasks

### Add a New Page

1. Create `src/pages/your-page.astro`
2. Add frontmatter and content:
   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   ---
   
   <Layout title="Your Page Title">
     <h1>Your Content Here</h1>
   </Layout>
   ```
3. It's automatically available at `/your-page`

### Add a New Service

Edit `src/pages/services.astro` and add to the `services` array:
```javascript
{
  title: 'New Service',
  slug: 'new-service',
  description: 'Description here',
  features: ['Feature 1', 'Feature 2'],
  benefits: ['Benefit 1', 'Benefit 2']
}
```

### Change Homepage Hero

Edit `src/pages/index.astro`, find the `<Hero>` component:
```astro
<Hero
  title="Your New Title"
  subtitle="Your new subtitle"
  ctaText="Custom Button Text"
  ctaLink="/custom-link"
/>
```

## Deploy to Cloudflare

### Method 1: Cloudflare Pages (Easiest)

1. Push code to GitHub/GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to Cloudflare Dashboard → Pages
3. Click "Create a project"
4. Connect your repository
5. Configure:
   - Build command: `npm run build`
   - Build output: `dist`
6. Deploy!

### Method 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Build and deploy
npm run build
wrangler pages deploy ./dist
```

## Getting Help

- **Astro Docs**: https://docs.astro.build/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/

## Next Steps

1. ✅ Customize colors and branding
2. ✅ Add your logo
3. ✅ Update contact information
4. ✅ Configure contact form email integration
5. ✅ Add your company's specific services
6. ✅ Deploy to Cloudflare
7. ✅ Set up custom domain
8. ✅ Test on multiple devices

## Troubleshooting

### Port already in use
```bash
# Use different port
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript errors
The project includes TypeScript for better development experience. Most errors are auto-fixed by your editor.

---

**Ready to build something amazing?** Start customizing and make this website your own! 🚀

