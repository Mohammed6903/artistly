# Artistly.com - Performing Artist Booking Platform

This repository contains the frontend web demo for Artistly.com, a fictional platform designed to connect Event Planners with Artist Managers and performing artists. This project was developed as a frontend developer test assignment, focusing on React.js, Next.js, and Tailwind CSS best practices.

## Screenshots
![artists listing page SEO inspection from vercel dashboard](https://github.com/user-attachments/assets/cea65c1a-b994-40b5-98fb-58d0ff7b4e55)
*fig.1: Artists listing page SEO inspection from vercel dashboard*

![SEO for about us page](https://github.com/user-attachments/assets/b4bdd707-0491-496f-987e-76ac87cccd8a)
*fig.2: SEO for about us page*


## Project Requirements Implementation

The following table demonstrates how each requirement has been implemented in this project:

| Area | Expectation | Implementation Details |
|------|-------------|------------------------|
| **Code Structure** | Neat folder hierarchy, modular component reuse | ✅ **Implemented**: Organized folder structure with `app/`, `components/`, `context/`, `lib/`, and `types/` directories. Modular components like `ArtistCard`, `FilterBlock`, `Table`, and ShadCN UI components are reused across multiple pages. |
| **Responsiveness** | Pages should be fully mobile responsive | ✅ **Implemented**: All pages use Tailwind CSS responsive utilities. Artist listing adapts from grid to list view on mobile, navigation uses mobile-friendly Sheet component, and all forms are optimized for mobile viewing. |
| **Forms** | Validated inputs, dropdowns with multi-checkbox selections | ✅ **Implemented**: Artist onboarding form uses `react-hook-form` with `yup` validation schemas. Multi-select dropdowns implemented via custom `MultiSelect` component for Categories and Languages. Contact form also includes validation. |
| **Listing** | Filter logic should be visible & functional | ✅ **Implemented**: Artist listing page features comprehensive filtering by Category, Location, and Price Range with real-time results. Filter state management using React hooks with clear visual feedback. |
| **Hosting** | Deployed correctly on vercel.com | ✅ **Ready**: Project configured for Vercel deployment with `next.config.ts` and build optimizations. Instructions provided in deployment section. |
| **SEO** | Proper head tags, metadata, image alt tags | ✅ **Implemented**: Next.js metadata API used for page titles, descriptions, and OpenGraph tags. Image alt attributes included throughout. Semantic HTML structure maintained. |
| **Comments** | Basic inline comments & function headers | ✅ **Implemented**: Key functions and complex logic include JSDoc comments and inline explanations, particularly in form validation, data fetching, and authentication logic. |
| **React Skills** | Demonstrated use of useState, useContext, useEffect | ✅ **Implemented**: `useState` for form state and filters, `useContext` for authentication state management to demonstrate how we can persist data between various pages, `useEffect` for data fetching and side effects throughout the application. The useAuth hook uses useContext to remember user data and make access control possible (only admin users can access /dashboard page)|
| **Data Handling** | Demonstrated use of getStaticProps, getServerSideProps where applicable | ✅ **Modern Implementation**: Using Next.js 15 App Router which replaces these functions with Server Components and `fetch` with revalidation. See detailed explanation below. |

### Next.js App Router vs Legacy Data Fetching

**Why `getStaticProps` and `getServerSideProps` are not used:**

In Next.js 15 App Router (used in this project), `getStaticProps` and `getServerSideProps` have been replaced with more powerful and flexible patterns:

- **Server Components**: Components that run on the server by default, providing the functionality of `getServerSideProps` without the complexity
- **`fetch` with revalidation**: Used in `app/artists/page.tsx` with `{ next: { revalidate: 3600 } }` to achieve static generation with revalidation (replacing `getStaticProps`)
- **Streaming and Suspense**: Better loading states and progressive rendering

**How this project demonstrates equivalent functionality:**
- **Static Generation**: Artist data is fetched with revalidation in `ArtistsPageWrapper` component
- **Server-Side Rendering**: Authentication checks and data fetching happen on the server
- **Client-Side State**: Interactive filtering and form state managed with React hooks
- **Hybrid Approach**: Combines server and client rendering for optimal performance

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Folder Structure](#folder-structure)
- [Setup and Installation](#setup-and-installation)
- [Deployment](#deployment)
- [Evaluation Criteria](#evaluation-criteria)
- [Live Demo](#live-demo)
- [Author](#author)

## Project Overview

Artistly.com aims to streamline the process of booking performing artists for various events. Event Planners can easily browse artist profiles, filter based on their preferences, and initiate booking requests. Artist Managers, on the other hand, can onboard new artists, manage incoming booking leads, and track their artists' engagements through a dedicated dashboard.

This demo focuses purely on the frontend engineering quality, demonstrating effective use of React + Next.js for routing, responsiveness, UI rendering, and a well-organized folder structure. Backend and database logic are out of scope for this assignment; static JSON files and mock APIs are used for data handling.

## Features

The application is built across 3-4 key pages, providing a core set of functionalities:

### Homepage (/)
- Overview of the platform
- Includes a hero section, call-to-action (CTA) to explore artists
- Displays 3-4 artist category cards (e.g., Singers, Dancers, Speakers, DJs)
- Basic navigation to other pages

### Artist Listing Page (/artists)
- Displays artists in a flexible grid layout (adapts to list view on mobile)
- Each artist card shows: Artist Name, Category, Price Range, Location, and an "Ask for Quote" CTA
- Comprehensive filtering options by: Category, Location, and Price Range
- Data is fetched from a mock API (https://685a52ac9f6ef9611155e080.mockapi.io/artists)

### Artist Onboarding Form (/onboarding)
- A multi-section form for artists to submit their details
- Input fields include: Name, Description (Bio), Category (with multi-select dropdown), Languages Spoken (multi-select), Price Range, Location, Profile Image Upload (optional), and Availability
- Includes robust form validation using react-hook-form and yup
- Form submission logs data to the console, simulating a successful API call

### Manager Dashboard Page (/dashboard) - Optional, implemented
- A simple table displaying a list of "hired" artist submissions
- Each row shows: Artist Name, Category, Location, Fee Range, Status, and associated Event
- Features search and filter functionalities for the directory
- Demonstrates conditional rendering and data mapping from a static JSON file (hiredArtistsData)
- **Authentication**: This page is protected. Only users with the 'admin' role can access it after logging in. If a non-admin user attempts to access it, they are redirected to a "Not Authorized" page. If no user is logged in, they are redirected to the login page. Also, this route is not shown on the website to hide it from normal users.

## Technical Stack

- **Framework**: Next.js (v15 App Router)
- **React**: Functional Components, Hooks (useState, useContext, useEffect), Context API for authentication
- **Styling**: Tailwind CSS for rapid and responsive UI development
- **UI Components**: ShadCN UI for accessible and customizable components (Button, Card, Input, Textarea, DropdownMenu, Sheet, Popover, RadioGroup, Select, Separator, Skeleton, Badge, Command, Dialog, Label, MultiSelect)
- **Form Management**: react-hook-form for efficient form handling and validation
- **Schema Validation**: yup for defining and validating form schemas
- **Animations**: framer-motion for smooth page transitions and UI element animations
- **Data Fetching**: Mock API (https://685a52ac9f6ef9611155e080.mockapi.io/artists) and static JSON data
- **Authentication**: Basic in-memory user authentication using React Context

## Folder Structure

The project follows a logical and modular folder structure:

```
artistly/
├── app/
│   ├── about-us/           # About Us page and its layout
│   ├── artists/            # Artist listing page, client-side logic, and loading states
│   ├── contact-us/         # Contact Us page with form
│   ├── dashboard/          # Manager dashboard page
│   ├── login/              # User login page
│   ├── not-authorized/     # Page for unauthorized access
│   ├── onboarding/         # Artist onboarding form page
│   ├── signup/             # User signup page
│   ├── globals.css         # Global Tailwind CSS imports and custom utilities
│   └── layout.tsx          # Root layout with ThemeProvider and AuthProvider
│   └── page.tsx            # Homepage
├── components/
│   ├── artist/             # Artist-specific components (e.g., ArtistCard)
│   ├── common/             # Reusable UI sections (e.g., Hero, Categories, CallToAction, Table, FeaturedArtists)
│   ├── form/               # Form-related components (e.g., Dropdown, FilterBlock, OnboardingForm)
│   ├── layout/             # Header and Footer components
│   └── ui/                 # ShadCN UI components (Badge, Button, Card, Command, Dialog, DropdownMenu, Input, Label, MultiSelect, Popover, RadioGroup, Select, Separator, Sheet, Skeleton, Textarea)
├── context/                # React Context providers (AuthContext, ThemeProvider)
├── data/                   # Static data files (artists.ts)
├── lib/
│   ├── utils.ts            # Utility functions (cn for Tailwind class merging)
│   └── validation/         # Yup schemas for form validation (artist.ts, contact.ts)
├── public/                 # Static assets (images, SVGs)
├── .eslintrc.mjs           # ESLint configuration
├── next.config.ts          # Next.js configuration (e.g., image remote patterns)
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
└── tsconfig.json           # TypeScript configuration
└── types/                  # TypeScript custom type definitions (artist.ts)
```

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mohammed6903/artistly
   cd artistly
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Populate .env.local file:**
    for SEO links, I am using env variable for dealing with changing domains.
    ```bash
    NEXT_PUBLIC_BASE_URL=
    ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser to see the result.

> **Note**: I created and used a mock api for this application on mockapi.io. Ensure your internet connection is active to fetch data from https://685a52ac9f6ef9611155e080.mockapi.io/artists.

## Deployment

The application is designed for easy deployment on Vercel.

1. **Build the project:**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Deploy to Vercel:**
   - Ensure you have a Vercel account
   - Install the Vercel CLI: `npm i -g vercel`
   - From the project root, run `vercel`
   - Follow the prompts to link your project and deploy

## Evaluation Criteria

This project addresses the following evaluation criteria:

- **Next.js (v15 App Router)**: Correct usage of the App Router for page routing and layouts
- **React Functional Components**: Consistent use of functional components and modern React patterns
- **Tailwind CSS**: Comprehensive application of Tailwind CSS for styling and responsive design across all pages, ensuring a fully mobile-responsive experience
- **ShadCN UI**: Effective integration and customization of ShadCN UI components
- **Responsiveness**: Pages are fully mobile-responsive, adapting layouts and elements for optimal viewing on various devices
- **Forms**:
  - Validated inputs using react-hook-form and yup
  - Implementation of multi-checkbox dropdowns (MultiSelect component)
  - Good form UX
- **Listing (Artist Listing Page)**:
  - Functional filter logic (Category, Location, Price Range)
  - Component reuse for ArtistCard and FilterBlock
  - Dynamic grid-to-list layout transition on mobile
- **Data Handling**: Use of mock API (fetch in ArtistsPageWrapper) and static JSON files (hiredArtistsData)
- **Conditional Rendering**: Demonstrated in the Manager Dashboard (e.g., loading states, no results message, authentication checks)
- **Reusable Components**: Emphasis on creating and reusing common UI components (Card, Button, Table, FilterBlock, etc.)
- **Authentication**: Basic in-memory authentication and role-based access control for the Dashboard page
- **SEO**: Proper head tags, metadata, and image alt tags are included for key pages (about-us, artists, onboarding)
- **Comments**: Basic inline comments and function headers are included where necessary for clarity
- **Performance Optimization**: Includes revalidate option in fetch for static data caching (ArtistsPageWrapper)
- **Animations**: Uses framer-motion for subtle and engaging animations

## Live Demo

[Artistly](https://artistly-lake-three.vercel.app/)

## Author

Mohammed Usmani
