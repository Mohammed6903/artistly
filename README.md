# Artistly.com - Performing Artist Booking Platform

This repository contains the frontend web demo for Artistly.com, a fictional platform designed to connect Event Planners with Artist Managers and performing artists. This project was developed as a frontend developer test assignment, focusing on React.js, Next.js App Router, and Tailwind CSS best practices.

## Screenshots
![artists listing page SEO inspection from vercel dashboard](https://github.com/user-attachments/assets/cea65c1a-b994-40b5-98fb-58d0ff7b4e55)
*fig.1: Artists listing page SEO inspection from vercel dashboard*

![SEO for about us page](https://github.com/user-attachments/assets/b4bdd707-0491-496f-987e-76ac87cccd8a)
*fig.2: SEO for about us page*


## Project Requirements Implementation

## ✅ Project Requirements Implementation

| Area               | Expectation                                    | Implementation Details |
|--------------------|------------------------------------------------|------------------------|
| **Code Structure** | Neat, modular structure                        | ✅ Follows scalable pattern: `app/`, `components/`, `context/`, `hooks/`, `services/`, `lib/`, `types/` |
| **Responsiveness** | Mobile-first, adaptive layout                  | ✅ Tailwind utilities used, mobile Sheet nav, responsive cards/forms |
| **Forms**          | Validated, multi-select dropdowns              | ✅ Built with `react-hook-form`, `yup`, and custom `MultiSelect` |
| **Listing**        | Filterable, interactive list UI                | ✅ `/artists` page filters by category, location, price |
| **Hosting**        | Live, Vercel-deployable                        | ✅ Vercel-ready with build config and metadata |
| **SEO**            | Metadata, OG tags, alt text                    | ✅ Dynamic metadata using Next.js App Router API |
| **Comments**       | Inline + JSDoc for complex logic               | ✅ Present in forms, hooks, and service logic |
| **React Skills**   | Demonstrated hooks & context usage             | ✅ Uses `useState`, `useEffect`, `useContext`, and custom `useAuth` |
| **Data Handling**  | Uses server/client components & caching        | ✅ Uses fetch with revalidation and loading.tsx fallback |

---

## ⚙️ Modern Data Handling in Next.js App Router

In App Router (Next.js 13+), traditional `getStaticProps` / `getServerSideProps` are replaced by:

- **Server Components** (e.g., `app/artists/page.tsx`)
- **`fetch` with revalidation** (`{ next: { revalidate: 60 } }`)
- **Streaming + Suspense** (via `loading.tsx`)

This project uses server fetches with revalidation for static data and loading states for client interactivity.

---

## 📁 Folder Structure

```bash
artistly/
├── app/                    # All routes & pages
│   ├── about-us/           # Static About page
│   ├── artists/            # Artist listing + client logic + loading
│   ├── contact-us/         # Contact form page
│   ├── dashboard/          # Admin-only dashboard
│   ├── login/              # Login page
│   ├── not-authorized/     # Unauthorized fallback page
│   ├── onboarding/         # Artist onboarding form
│   ├── signup/             # Signup page
│   ├── layout.tsx          # Global layout with providers
│   ├── page.tsx            # Homepage
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── artist/             # ArtistCard
│   ├── common/             # Hero, CTA, Table, Categories, etc.
│   ├── form/               # Form utilities (FilterBlock, MultiSelect, etc.)
│   ├── layout/             # Header, Footer
│   └── ui/                 # ShadCN base UI components
├── context/                # Auth + Theme providers
├── hooks/                  # Custom hooks like `useAuth`
├── services/               # API service layer (`artistService.ts`)
├── data/                   # Static dataset (artists.ts)
├── lib/
│   ├── config.ts           # Env variables (BASE_URL, API endpoints)
│   ├── utils.ts            # Utility helpers
│   └── validation/         # Yup schemas
├── public/                 # Static assets (og-image.jpg, icons)
├── .eslintrc.mjs           # ESLint config
├── next.config.ts          # Next.js config
├── package.json            # Project metadata
├── tsconfig.json           # TypeScript config with `baseUrl: "src"`
└── README.md               # You're here!
````

---

## 🧪 Setup and Installation

```bash
# Clone the repo
git clone https://github.com/Mohammed6903/artistly
cd artistly

# Install dependencies
npm install

# Setup environment
touch .env.local
```

Inside `.env.local`:

```
NEXT_PUBLIC_BASE_URL=https://your-deployed-url.com or http://localhost:3000
NEXT_PUBLIC_ARTISTS_API_URL=https://685a52ac9f6ef9611155e080.mockapi.io/artists
```

Then run:

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## 🧾 Features

### Homepage (`/`)

* Hero section
* CTA with category cards
* Navigation to artists page

### Artist Listing (`/artists`)

* Grid layout
* Filter by category/location/price
* Loading state (`loading.tsx`)
* Fetched from MockAPI

### Onboarding Form (`/onboarding`)

* Multi-step form
* Validated with `yup`
* Multi-select fields for category & language
* Simulated form submission

### Manager Dashboard (`/dashboard`)

* Protected admin route
* Displays hired artists in table format
* Role-based access (admin only)
* Search/filter logic

### Login / Signup / Not Authorized

* In-memory user system (Context API)
* Role-based routing logic

---

<<<<<<< HEAD
## 🧰 Tech Stack

| Tech                | Purpose                                   |
| ------------------- | ----------------------------------------- |
| **Next.js**         | App Router, SSR/SSG with fetch + caching  |
| **React**           | Component architecture, state management  |
| **Tailwind CSS**    | Utility-first styling                     |
| **ShadCN UI**       | UI primitives (cards, dialogs, inputs...) |
| **Yup**             | Form schema validation                    |
| **React Hook Form** | Form control and state                    |
| **Framer Motion**   | Page transitions and animations           |
| **MockAPI.io**      | Simulated artist dataset API              |

---

## 🚀 Deployment (Vercel)

```bash
npm run build
npx vercel
```

Follow CLI prompts to deploy.

---

## 🎯 Evaluation Highlights

* ✅ App Router & modern data patterns
* ✅ Fully mobile responsive
* ✅ Custom ShadCN UI integration
* ✅ Filter logic, reusable components, form UX
* ✅ Role-based protected routes
* ✅ SEO-ready with metadata and OG tags
* ✅ Clean folder structure with service abstraction

---

## 🔗 Live Demo

[https://artistly-lake-three.vercel.app/](https://artistly-lake-three.vercel.app/)

---

## 👨‍💻 Author

**Mohammed Usmani**
Frontend Developer | React + Next.js Enthusiast
[GitHub: Mohammed6903](https://github.com/Mohammed6903)
=======
Mohammed Usmani
>>>>>>> 6dffb3f70f5ca02ffa0a1fa28d92744b2e5f95b4
