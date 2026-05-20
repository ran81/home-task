# Customer Inquiry Management System

An enterprise-grade, single-screen dashboard developed for service representatives to manage customer inquiries efficiently. Built using a modern, scalable architecture optimized for rapid data processing and high usability.

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 (TypeScript) with Vite
- **Styling:** Tailwind CSS (Utility-first, responsive grid architecture)
- **Routing & State Synchronization:** React Router DOM (v6+)

---

## 🏗️ Architectural Decisions & Engineering Highlights

### 1. State Management: The "Zero-Redux" URL-First Strategy

Instead of over-engineering the application with heavy global state libraries (like Redux or Zustand), this system utilizes **the URL as the single source of truth** for operational parameters.

- **URL Synchronization:** Active search strings, status filters, category scopes, sorting variables, and the open file identifier (`selectedId`) are managed via React Router's `useSearchParams`.
- **Engineering Benefits:** This strategy eliminates data synchronization bugs, yields excellent rendering performance, and enables immediate deep-linking capabilities (e.g., a representative can copy and share a URL, and a colleague will see the exact same filtered table with the identical file drawer open).

### 2. High-Density Layout: Absolute Slide-Over Drawer

- **The Problem with Side-by-Side Splits:** Squeezing a high-density data table to 60% width when viewing file files introduces massive horizontal scrolling friction and text truncation.
- **The Solution:** The main workspace presents a 100% full-width data stage. When an item is selected, a focused **Slide-Over Drawer** (`max-w-xl`) absolute-positions itself over the right margin. This maximizes data visibility while a subtle backdrop blur retains peripheral visual context for the representative.

### 3. Clear Separation of Concerns (Custom Hooks)

All filtering, string matching, and sorting calculations are isolated inside a clean custom data layer hook: `useInquiries.ts`.

- **Production Readiness:** The UI components remain completely decoupled from data manipulation rules. If a real backend API or a caching library like **TanStack Query** is introduced down the road, it can be swapped into the custom hook natively without modifying a single line of component code.

---

## 📁 Directory Structure

```text
src/
├── components/          # Functional UI Layout blocks
│   ├── InquiryDetails.tsx     # Absolute overlay context file drawer & timeline
│   ├── InquiryFilters.tsx     # Combined search filters & sort deck
│   └── InquiryListTable.tsx   # Enterprise tabular layout view
├── hooks/               # Core data processing & URL interceptors
│   └── useInquiries.ts        # Filtering, sorting, and state synchronization
├── mock/                # Local data models
│   └── data.ts                # Mock inquiry telemetry datasets
├── types/               # Strict type files
│   └── inquiry.ts             # Status, Category, and Profile interfaces
├── App.tsx              # Core orchestration frame
├── main.tsx             # Global app bootstrap & Router binding
└── index.css            # Tailwind layer configurations
```

## 🚀 Getting Started

```
npm install
npm run dev
```
