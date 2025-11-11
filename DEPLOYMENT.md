# Deployment Guide - DataLostFound.com

This guide covers deploying your Astro site to Cloudflare Workers/Pages.

## Option 1: Cloudflare Pages (Recommended)

Cloudflare Pages is the easiest way to deploy Astro sites to the Cloudflare network.

### Steps:

1. **Push your code to Git** (GitHub, GitLab, or Bitbucket)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages → Create a project
   - Connect your Git repository
   - Select your repository

3. **Configure Build Settings**
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 or higher

4. **Environment Variables** (if needed)
   Add any environment variables in the Cloudflare Pages settings

5. **Deploy**
   - Click "Save and Deploy"
   - Your site will be built and deployed automatically
   - Every git push will trigger a new deployment

### Custom Domain Setup

1. In Cloudflare Pages, go to your project
2. Navigate to "Custom domains"
3. Add `datalostfound.com`
4. Follow the DNS configuration instructions
5. Cloudflare will automatically provision an SSL certificate

## Option 2: Cloudflare Workers (Advanced)

If you need more control, you can deploy directly using Wrangler CLI.

### Prerequisites

```bash
npm install -g wrangler
```

### Login to Cloudflare

```bash
wrangler login
```

### Configure wrangler.toml

The `wrangler.toml` file is already configured. Update it if needed:

```toml
name = "datalostfound-com"
compatibility_date = "2024-01-01"

[site]
bucket = "./dist"
```

### Build and Deploy

```bash
# Build the site
npm run build

# Deploy to Cloudflare Workers
wrangler pages deploy ./dist
```

### Production Deployment

```bash
# Deploy to production
wrangler pages deploy ./dist --project-name=datalostfound-com --branch=main
```

## Configuration Options

### Switching Between Static and SSR

#### Static Mode (Fastest, most pages)
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  // ...
});
```

#### Hybrid Mode (Static + Some SSR pages)
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'hybrid', // Currently configured
  adapter: cloudflare(),
  // ...
});
```

Pages that need SSR should use:
```javascript
export const prerender = false;
```

#### Server Mode (All SSR)
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  // ...
});
```

## Environment Variables

### Local Development

Create `.dev.vars` file:
```
CONTACT_EMAIL=info@datalostfound.com
```

### Production

Set in Cloudflare Dashboard:
- Go to Workers & Pages → Your site → Settings → Environment Variables
- Add your variables

## Custom Contact Form Integration

The contact form (`/api/contact`) needs to be configured to actually send emails.

### Options:

#### 1. SendGrid
```bash
npm install @sendgrid/mail
```

Update `src/pages/api/contact.ts`:
```typescript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

#### 2. Resend
```bash
npm install resend
```

#### 3. Cloudflare Email Workers
Use Cloudflare's email routing and Workers to send emails directly

#### 4. External Service (Formspree, Basin, etc.)
Update the form action in `src/pages/contact.astro`

## Performance Optimization

### Image Optimization

Astro automatically optimizes images. Place images in `public/` or `src/assets/`:

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/image.jpg';
---

<Image src={myImage} alt="Description" />
```

### Caching

Cloudflare automatically caches static assets. For dynamic content, configure:

```javascript
// In API routes
export const config = {
  runtime: 'edge',
  cache: {
    ttl: 60, // Cache for 60 seconds
  }
};
```

## Monitoring

### Analytics

Add Cloudflare Web Analytics:

```astro
<!-- In Layout.astro -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

### Error Tracking

Consider adding:
- Sentry for error tracking
- Cloudflare Workers Analytics
- Custom logging

## SSL/TLS

Cloudflare provides automatic SSL certificates. Ensure:
- SSL/TLS encryption mode is set to "Full (strict)"
- Always Use HTTPS is enabled
- Automatic HTTPS Rewrites is enabled

## Security Headers

Add security headers in Cloudflare dashboard or via `_headers` file:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Backup and Rollback

Cloudflare Pages keeps all deployments. To rollback:
1. Go to Deployments tab
2. Find the working deployment
3. Click "Rollback to this deployment"

## Continuous Deployment

Every push to your main branch automatically deploys to production. For staging:

1. Create a `staging` branch
2. Cloudflare will create a preview URL automatically
3. Test before merging to main

## Troubleshooting

### Build Fails

```bash
# Check locally first
npm run build
```

### Function Size Issues

If edge functions are too large:
- Remove unused dependencies
- Use dynamic imports
- Split into multiple functions

### 404 Errors

Ensure `_redirects` file exists if needed:
```
/* /index.html 200
```

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Astro Docs: https://docs.astro.build/
- Community: Cloudflare Discord, Astro Discord

## Next Steps

1. ✅ Deploy to Cloudflare Pages
2. ✅ Configure custom domain
3. ✅ Set up contact form email integration
4. ✅ Add analytics
5. ✅ Configure SEO meta tags
6. ✅ Test on mobile devices
7. ✅ Set up monitoring
8. ✅ Create content strategy

