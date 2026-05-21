# Customer Inquiry Management System

A single-screen dashboard developed for service representatives to manage customer inquiries efficiently. Built using a modern, scalable architecture optimized for rapid data processing and high usability.

## Tech Stack & Architecture

- **Framework:** React 19 (TypeScript) with Vite
- **Styling:** Tailwind CSS
- **Routing & State Synchronization:** React Router DOM

---

## Architectural Decisions & Engineering Highlights

### 1. State Management: URL-First Strategy

Instead of over-engineering the application with heavy global state libraries (like Redux or Zustand), this system utilizes **the URL as the single source of truth** for operational parameters.

- **URL Synchronization:** Active search strings, status filters, category scopes, sorting variables, and the open inquiry identifier (`selectedId`) are managed via React Router's `useSearchParams`.
- **Engineering Benefits:** This strategy eliminates data synchronization bugs, has excellent rendering performance, and enables immediate deep-linking capabilities (e.g., one can copy and share a URL).

### 2. High-Density Layout: Slide-Over Drawer

- **The Problem with Side-by-Side Splits:** Squeezing a high-density data table to 60% width when viewing file inquiries introduces massive horizontal scrolling friction and text truncation.
- **The Solution:** The main workspace presents a 100% full-width data stage. When a row is selected, a focused slide-over drawer (`max-w-xl`) absolute-positions itself over the right margin.

### 3. Clear Separation of Concerns (Custom Hooks)

All filtering, string matching, and sorting calculations are isolated inside a custom data layer hook: `useInquiries.ts`.

- **Production Readiness:** The UI components remain completely decoupled from data manipulation rules. If a real backend API or a caching library like **TanStack Query** is introduced down the road, it can be swapped into the custom hook natively without modifying a the component code.

## Getting Started

```
npm install
npm run dev
```

---

## Tradeoffs

### 1. URL State vs. In-Memory State (Zustand/Redux)

- Stored the active filter, search, and selected inquiry ID parameters directly in the browser URL query strings using React Router.

- Trade-off: Reading and writing to the URL requires primitive string parsing (e.g., handling empty parameters, converting IDs) which adds slightly more boilerplate in our custom hook compared to a pure in-memory JavaScript object.

- Why it was worth it: Storing state in the URL gives us Deep Linking and Browser History out of the box. A user can refresh the page, use the back/forward buttons, or Slack a link to a teammate, and they will see the exact same filtered view and open record.

### 2. Client-Side Filtering vs. Immediate Server Integration

- Implemented all filtering, sorting, and item selection purely in JavaScript on a local dataset inside a custom hook.

- Trade-off: The frontend is responsible for the computation of the data layout, which would become a performance bottleneck if the dataset grew to thousands of rows.

- Why it was worth it: Given the scope of the assignment, this kept the codebase entirely self-contained, light, and easy to run locally without complex backend dependencies. Moreover, the logic was abstracted entirely into a single custom hook (useInquiries), meaning the UI components are completely decoupled from how the data is filtered. When a backend is introduced, the hook can be modified to handle API calls without touching the component code.

### 3. Tailwind CSS vs. Styled Components / CSS Modules

- Used utility-first Tailwind CSS classes for all styling.

- Trade-off: The HTML markup can become visually busy and cluttered with long string configurations.

- Why it was worth it: It allowed for rapid, responsive layout development without creating separate CSS files or adding runtime performance overhead.

---

## Features to add

- Debounce client side search to ease the load on the backend.
- Allow for multi column sorting (not just by one column at a time).
- Add a calendar date-range filter for better filtering.
- Save UI conf in Zustand store + localstorage, for example theme settings, dense/spacious rows etc.
- Add keyboard shortcuts like Ctrl+f to search, arrow keys to navigate the table, ESC to close the drawer etc.
- Once a backend is in place, use Tanstack Query to manage server state.
- Once a backend is in place, support pagination.
