# Artistly.com - Performing Artist Booking Platform

This repository contains the frontend web demo for **Artistly.com**, a fictional platform designed to connect Event Planners with Artist Managers and performing artists. This project was developed as a frontend developer test assignment, focusing on **React.js**, **Next.js**, and **Tailwind CSS** best practices.

## Screenshots
![artists listing page SEO inspection from vercel dashboard](https://github.com/user-attachments/assets/cea65c1a-b994-40b5-98fb-58d0ff7b4e55)
*fig.1: Artists listing page SEO inspection from vercel dashboard*

![SEO for about us page](https://github.com/user-attachments/assets/b4bdd707-0491-496f-987e-76ac87cccd8a)
*fig.2: SEO for about us page*

## Project Requirements Implementation

| Area               | Expectation                                                | Implementation Details                                                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code Structure** | Neat folder hierarchy, modular component reuse             | ✅ Implemented: Organized under `src/` with `app/`, `components/`, `context/`, `data/`, `hooks/`, `lib/`, `services/`, and `types/`. Components like `ArtistCard`, `FilterBlock`, `Table`, and ShadCN UI are reused. |
| **Responsiveness** | Fully mobile responsive pages                              | ✅ Implemented: Tailwind responsive utilities used. Listing adapts to list/grid views; navigation uses `Sheet` for mobile; forms are mobile-optimized.                                                               |
| **Forms**          | Validated inputs, dropdowns with multi-checkbox selections | ✅ Implemented: `react-hook-form` with `yup` validation in `src/lib/validation/artist.ts`. Custom `MultiSelect` component for Categories and Languages. Contact form validation in `contact.ts`.                     |
| **Listing**        | Functional, visible filter logic                           | ✅ Implemented: `/artists` page filters by Category, Location, and Price. Uses React hooks with visual filter feedback.                                                                                              |
| **Hosting**        | Deployed on vercel.com                                     | ✅ Ready: Configured via `next.config.ts` and optimized for Vercel.                                                                                                                                                  |
| **SEO**            | Proper metadata, head tags, image alt tags                 | ✅ Implemented: Uses Next.js metadata API in `layout.tsx`, includes `alt` tags and semantic HTML.                                                                                                                    |
| **Comments**       | Inline comments & function headers                         | ✅ Implemented: JSDoc comments in form validation, data fetching, and authentication logic.                                                                                                                          |
| **React Skills**   | useState, useContext, useEffect usage                      | ✅ Implemented: State & filters via `useState`, auth via `useContext`, data fetching via `useEffect`. `useAuth` hook persists user info.                                                                             |
| **Data Handling**  | getStaticProps / getServerSideProps or equivalent          | ✅ Implemented using App Router (Next.js 15). Uses Server Components, `fetch` with revalidation, and Suspense.                                                                                                       |

---

## Next.js App Router vs Legacy Data Fetching

**Why `getStaticProps` and `getServerSideProps` are not used:**

Next.js 15 App Router offers:

* **Server Components**: Default server rendering
* **`fetch` with revalidation**: Replaces `getStaticProps`
* **Streaming/Suspense**: Better loading states

**How functionality is achieved:**

* **Static Generation**: Artist data with revalidation in `page.tsx`
* **SSR**: Auth & data fetching in `/dashboard`
* **Client State**: Filters and forms handled with hooks
* **Hybrid Rendering**: Optimal performance from server + client rendering

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Technical Stack](#technical-stack)
* [Folder Structure](#folder-structure)
* [Setup and Installation](#setup-and-installation)
* [Deployment](#deployment)
* [Evaluation Criteria](#evaluation-criteria)
* [Live Demo](#live-demo)
* [Author](#author)

---

## Project Overview

Artistly.com streamlines performing artist bookings. Event Planners browse and filter artist profiles and request bookings. Artist Managers onboard artists, manage leads, and use a dashboard for insights.

**Backend/database is out of scope.** Uses static JSON (`src/data/artists.ts`) and mock APIs.

---

## Features

### Homepage (`/`)

* Hero section (`hero.tsx`)
* Call-to-action (`call-to-action.tsx`)
* Category cards (`categories.tsx`)
* Navigation (`header.tsx`)

### Artist Listing Page (`/artists`)

* Responsive grid/list layout (`artist-card.tsx`)
* Filters by Category, Location, Price (`filter-block.tsx`)
* Data from mock API (`artistService.ts`)

### Artist Onboarding (`/onboarding`)

* Multi-section form (`onboarding.tsx`)
* Validated fields: Name, Bio, Category, Languages, Price, Location, Image, Availability
* Uses `react-hook-form` + `yup`

### Manager Dashboard (`/dashboard`)

* Table of bookings (`table.tsx`)
* Search & filter by artist
* Role-based access: Admin only (via `auth-context.tsx`, `useAuth.ts`)
* Auth redirects: `/not-authorized`, `/login`

### Additional Pages

* **About Us**: `/about-us` (`layout.tsx`)
* **Contact Us**: `/contact-us` (`contact.ts`)
* **Login**: `/login`
* **Signup**: `/signup`
* **Not Authorized**: `/not-authorized`

---

## Technical Stack

* **Framework**: Next.js (v15 App Router)
* **React**: Functional components, hooks, Context API
* **Styling**: Tailwind CSS (`globals.css`)
* **UI**: ShadCN UI components
* **Forms**: `react-hook-form` + `yup` for validation
* **Animations**: framer-motion
* **Data**: Static JSON & mock API (`artistService.ts`)
* **Auth**: In-memory using `auth-context.tsx`, `useAuth.ts`
* **TypeScript**: Strong typing (`types/artist.ts`)

---

## Folder Structure

```
artistly/
├── src/
│   ├── app/
│   │   ├── about-us/
│   │   ├── artists/
│   │   ├── contact-us/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── not-authorized/
│   │   ├── onboarding/
│   │   ├── signup/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── artist/
│   │   ├── common/
│   │   ├── form/
│   │   ├── layout/
│   │   └── ui/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   │   └── validation/
│   ├── services/
│   └── types/
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

---

## Setup and Installation

1. **Clone the repo**:

   ```bash
   git clone https://github.com/Mohammed6903/artistly
   cd artistly
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add environment variables** to `.env.local`:

   ```
   NEXT_PUBLIC_BASE_URL=
   NEXT_PUBLIC_ARTISTS_API_URL=https://685a52ac9f6ef9611155e080.mockapi.io/artists
   ```

4. **Start dev server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

Visit [http://localhost:3000](http://localhost:3000)

> 💡 Note: The app uses a [mock API](https://685a52ac9f6ef9611155e080.mockapi.io/artists) — requires an internet connection.

---

## Deployment

1. **Build the project**:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Deploy to Vercel**:

   ```bash
   npm i -g vercel
   vercel
   ```

---

## Evaluation Criteria

* ✅ App Router (Next.js 15) usage
* ✅ Functional React Components
* ✅ Tailwind CSS & responsive design
* ✅ Reusable components (ShadCN UI, common blocks)
* ✅ Validated forms with `yup` & `react-hook-form`
* ✅ Multi-select dropdowns (`multi-select.tsx`)
* ✅ Listing page filtering logic
* ✅ Mock API + JSON data integration
* ✅ Conditional rendering, auth guards
* ✅ SEO optimization
* ✅ Inline comments & JSDoc
* ✅ Performance optimizations with revalidation
* ✅ Smooth UI animations
* ✅ Type-safe TypeScript usage

---

## Live Demo

🔗 **[Artistly - Live Demo](https://artistly-lake-three.vercel.app/)**

---

## Author

**Mohammed Usmani**