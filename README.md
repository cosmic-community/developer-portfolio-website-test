# Developer Portfolio Website

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=300&fit=crop&auto=format)

A modern, responsive developer portfolio website built with Next.js 15 and powered by Cosmic CMS. Showcase your projects, skills, work experience, and testimonials in a professional, SEO-optimized format.

## ✨ Features

- **Dynamic Project Gallery** - Showcase your best work with detailed project pages
- **Skills Visualization** - Display your technical skills with proficiency indicators
- **Professional Timeline** - Chronological work experience presentation
- **Client Testimonials** - Build trust with authentic client feedback
- **Responsive Design** - Optimized for all devices and screen sizes
- **SEO Optimized** - Built-in metadata and structured data
- **Fast Performance** - Server-side rendering with Next.js 15
- **Easy Content Management** - Update content through Cosmic CMS dashboard

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6889217aace967af4dfaaab7&clone_repository=6889239cace967af4dfaaae5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **React Icons** - Icon library for UI elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the portfolio content model

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Cosmic credentials:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

## 📚 Cosmic SDK Examples

```typescript
// Fetch all projects
const projects = await cosmic.objects
  .find({ type: 'projects' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Get single project by slug
const project = await cosmic.objects
  .findOne({ type: 'projects', slug: projectSlug })
  .depth(1)

// Fetch skills with proficiency levels
const skills = await cosmic.objects
  .find({ type: 'skills' })
  .props(['title', 'metadata'])
  .sort('-metadata.proficiency_level')
```

## 🎨 Cosmic CMS Integration

This portfolio integrates with your Cosmic CMS content model:

- **Projects** - Technical projects with descriptions, technologies, and links
- **Skills** - Technical skills with proficiency levels and categories
- **Work Experience** - Professional timeline with roles and achievements
- **Testimonials** - Client feedback and recommendations

All content is dynamically fetched and rendered, making it easy to update your portfolio through the Cosmic dashboard.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Netlify

1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify
3. Set up environment variables in Netlify dashboard

### Environment Variables

Set these variables in your hosting platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (if using write operations)

<!-- README_END -->