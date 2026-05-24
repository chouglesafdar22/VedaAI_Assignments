# VedaAI - Assignment Dashboard

A modern and responsive Assignment Dashboard UI built using Next.js, TypeScript, and Tailwind CSS based on the provided Figma designs.

## Overview

This project is a frontend implementation of the VedaAI Assignment Dashboard.

The application includes:
- Responsive dashboard layout
- 0 State Screen (No Assignments)
- Filled State Screen (Assignments Available)
- Desktop & Mobile Navigation
- Reusable Component Architecture

---

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### UI & Icons
- React Icons
- Next/Image

---

## Features

- Responsive UI for Desktop & Mobile
- Sidebar Navigation
- Mobile Navbar
- Bottom Navigation Bar
- Assignment Cards
- Search & Filter UI
- Reusable Components
- Clean Component Structure

---

## Screens Implemented

### 1. 0 State Screen
Displays empty state when no assignments are available.

### 2. Filled State Screen
Displays assignment cards with fake/static data.

---

## Folder Structure

```bash
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── SideBar.tsx
│   │   ├── Navbar.tsx
│   │   ├── MoblieNavbar.tsx
│   │   ├── BottomNavbar.tsx
│   │   ├── Button.tsx
│   │   ├── Menu.tsx
|   |
|   ├── Filter.tsx
|   ├── AssignmentCard.tsx
```

---

## Installation

Clone the repository:

```bash
git clone <your-repository-link>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Deployment

This project is deployed using Vercel.

---

## Notes

- This project mainly focuses on frontend implementation and responsive UI.
- Static/fake data has been used for assignment cards.
- Components are designed to be reusable and scalable.

---

## Author

Safdar Chougle
Full Stack / MERN Stack Developer
