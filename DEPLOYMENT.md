# Infera Solutions - Deployment Guide

## Overview
This guide will walk you through deploying your Infera Solutions website to a hosting provider and connecting it to your GoDaddy domain.

## Recommended Hosting Options

### Option 1: Vercel (Recommended - Easiest)
**Best for:** Next.js applications (built by the creators of Next.js)
**Cost:** Free tier available, Pro at $20/month
**Advantages:**
- Zero configuration deployment
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Free SSL certificates

#### Steps to Deploy on Vercel:

1. **Create a Vercel account:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push your code to GitHub:**
   ```bash
   # Initialize git (if not done)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Create a repository on GitHub and push
   git remote add origin https://github.com/yourusername/infera-solutions.git
   git branch -M main
   git push -u origin main
   ```

3. **Import project to Vercel:**
   - Click "New Project" in Vercel dashboard
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Connect GoDaddy domain:**
   - In Vercel project settings, go to "Domains"
   - Add your domain (e.g., inferasolutions.com)
   - Vercel will provide DNS records

5. **Update GoDaddy DNS:**
   - Log in to GoDaddy
   - Go to your domain's DNS settings
   - Add the following records (provided by Vercel):
     - Type: A, Name: @, Value: [Vercel IP]
     - Type: CNAME, Name: www, Value: cname.vercel-dns.com
   - Wait 24-48 hours for DNS propagation

---

### Option 2: Netlify
**Best for:** Static sites and JAMstack applications
**Cost:** Free tier available, Pro at $19/month
**Advantages:**
- Easy continuous deployment
- Built-in forms and functions
- Split testing
- Free SSL

#### Steps to Deploy on Netlify:

1. **Create a Netlify account:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy via Git:**
   ```bash
   # Push to GitHub (same as Vercel steps above)
   ```

3. **Import project:**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

4. **Connect GoDaddy domain:**
   - In site settings, go to "Domain management"
   - Add custom domain
   - Follow DNS configuration instructions

---

### Option 3: DigitalOcean App Platform
**Best for:** More control and scalability
**Cost:** Starting at $5/month
**Advantages:**
- More server control
- Scalable infrastructure
- Database integration
- SSH access

#### Steps to Deploy on DigitalOcean:

1. **Create a DigitalOcean account:**
   - Go to [digitalocean.com](https://digitalocean.com)
   - Sign up and add payment method

2. **Create an App:**
   - Go to Apps section
   - Click "Create App"
   - Connect to your GitHub repository
   - Configure:
     - Build command: `npm run build`
     - Run command: `npm start`
     - HTTP Port: 3000

3. **Connect domain:**
   - In app settings, add your domain
   - DigitalOcean will provide DNS records

4. **Update GoDaddy DNS:**
   - Add A record pointing to DigitalOcean IP
   - Add CNAME for www subdomain

---

## Connecting Your GoDaddy Domain

### General DNS Configuration Steps:

1. **Log in to GoDaddy:**
   - Go to [godaddy.com](https://godaddy.com)
   - Navigate to "My Products" → "Domains"
   - Click on your domain

2. **Manage DNS:**
   - Click "DNS" or "Manage DNS"
   - You'll see existing DNS records

3. **Add/Edit Records:**
   
   **For Vercel/Netlify:**
   - Delete existing A records
   - Add new A record:
     - Type: A
     - Name: @
     - Value: [Hosting provider's IP]
     - TTL: 600
   - Add CNAME for www:
     - Type: CNAME
     - Name: www
     - Value: [Hosting provider's CNAME]
     - TTL: 1 Hour

4. **SSL Certificate:**
   - All recommended providers offer free SSL
   - Automatically configured after DNS propagation

5. **Wait for Propagation:**
   - DNS changes take 24-48 hours
   - Check status at [whatsmydns.net](https://whatsmydns.net)

---

## Environment Variables

If you need to add environment variables (API keys, etc.):

### Vercel:
- Go to Project Settings → Environment Variables
- Add variables for Production, Preview, and Development

### Netlify:
- Go to Site Settings → Environment Variables
- Add key-value pairs

### DigitalOcean:
- Go to App Settings → Environment Variables
- Add variables

---

## Custom Configuration

### Next.js Configuration
If you need custom domains or redirects, edit `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add custom domain
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ],
      },
    ]
  },
  // Add redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
```

---

## Post-Deployment Checklist

- [ ] Website loads on custom domain
- [ ] SSL certificate is active (https://)
- [ ] All pages render correctly
- [ ] Forms submit properly
- [ ] Mobile responsive design works
- [ ] SEO meta tags are correct
- [ ] Google Analytics added (if needed)
- [ ] Set up monitoring/analytics

---

## Updating Your Website

After initial deployment, updates are automatic:

1. **Make changes locally**
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. **Automatic deployment** triggers on all platforms

---

## Cost Summary

| Provider | Free Tier | Pro Tier | Best For |
|----------|-----------|----------|----------|
| Vercel | ✓ | $20/mo | Next.js apps, easiest setup |
| Netlify | ✓ | $19/mo | Static sites, forms |
| DigitalOcean | ✗ | $5-12/mo | More control, scaling |

---

## Troubleshooting

### DNS not resolving:
- Wait 24-48 hours for propagation
- Clear browser cache
- Try incognito/private browsing
- Check DNS at whatsmydns.net

### Build failures:
- Check build logs in hosting dashboard
- Ensure all dependencies in package.json
- Verify Node.js version compatibility

### SSL issues:
- Wait for DNS to propagate
- Force SSL renewal in hosting settings
- Ensure domain is correctly configured

---

## Support

For hosting support:
- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Netlify:** [netlify.com/support](https://netlify.com/support)
- **DigitalOcean:** [digitalocean.com/support](https://digitalocean.com/support)

For GoDaddy domain support:
- **GoDaddy:** [godaddy.com/help](https://godaddy.com/help)

---

## Recommendation

**For Infera Solutions, I recommend Vercel** because:
1. Zero configuration for Next.js
2. Best performance and global CDN
3. Automatic HTTPS and SSL
4. Free tier is generous
5. One-click deployments from GitHub
6. Made by the creators of Next.js

The deployment process takes about 10 minutes from start to finish!
