# How this portfolio works

React + Vite portfolio for Sameer Yasir. Content is centralized in `src/data/portfolio.js`.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173/

## Routes

| URL | Page |
| --- | --- |
| `/` | Home portfolio |
| `/projects/dealioo` | Dealioo case study |
| `/projects/:projectId` | Other project case studies |

## Homepage order

1. Navbar
2. Hero (with featured Dealioo teaser)
3. Featured Projects
4. About
5. Technical Expertise
6. Experience
7. Contact
8. Footer

## Content source

Edit `src/data/portfolio.js` for profile, experience, projects, skills, and case-study copy.

CV download: `public/sameeryasir.cv.pdf`.
Case studies are text-only for now (no project screenshots).
