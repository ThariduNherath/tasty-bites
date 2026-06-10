# Tasty Bites

A polished restaurant landing page built with React, Vite, Tailwind CSS, and Framer Motion. This project showcases a modern food ordering interface with responsive navigation, animated menu interactions, and a persistent shopping cart.

---

## 🚀 Project Overview

Tasty Bites is a single-page restaurant web app that includes:
- Responsive hero section with call-to-action buttons
- Menu category filtering and featured dishes
- Animated add-to-cart UI with quantity controls
- Persistent cart state using React Context and localStorage
- Testimonials, about, and contact sections
- Mobile-friendly navigation with hamburger menu

---

## 🧱 Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- react-intersection-observer
- ESLint

---

## ⚙️ Installation

From the project root:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal to view the app.

---

## 📦 Available Scripts

- `npm run dev` - start the development server
- `npm run build` - build the production bundle
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint checks

---

## 📁 Project Structure

```text
tasty-bites/
├── public/
│   └── ... static assets
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   ├── data/
│   │   │   └── menuData.js
│   │   ├── hooks/
│   │   │   ├── useCart.js
│   │   │   └── useScrollAnimation.js
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── Footer.jsx
│   │   ├── Sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   ├── UI/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Modal.jsx
│   │   └── utils/
│   │       ├── animations.js
│   │       └── scrollAnimations.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## ✨ Key Components

- `src/App.jsx` — root layout and page composition
- `src/components/Layout/Header.jsx` — responsive navigation, cart toggle, and mobile menu
- `src/components/Sections/Menu.jsx` — menu filters, item cards, and add-to-cart buttons
- `src/components/Layout/Cart.jsx` — animated cart panel with item quantity controls
- `src/components/context/CartContext.jsx` — cart state management and persistence
- `src/components/data/menuData.js` — menu content, categories, and testimonials
- `src/components/hooks/useScrollAnimation.js` — scroll-based reveal animation helper

---

## 🎯 Features

- Responsive desktop and mobile UI
- Menu filtering by category
- Add/remove items and adjust quantities in cart
- Cart total calculation and persistence in localStorage
- Smooth animations using Framer Motion
- Scroll reveal effects with react-intersection-observer
- Reusable UI components and clean folder structure

---

## 🛠️ Cart and State Behavior

The cart uses React Context and reducer logic to support:
- adding items to cart
- removing items
- updating item quantities
- clearing the cart
- toggling cart visibility
- saving cart state in `localStorage`

---

## 💡 Development Notes

- Tailwind CSS is used for styling with utility-first classes.
- `lucide-react` provides clean icon components.
- `CartProvider` wraps the app in `src/App.jsx` so the cart state is available globally.
- `menuData.js` contains example dishes, categories, and testimonial content.

---

## 📌 Future Improvements

- Add a backend API for real menu data and order submissions
- Include contact form validation
- Add checkout/payment workflow
- Improve accessibility and keyboard navigation

---

## 📄 License

This project is currently configured as a private package. Update the license field in `package.json` if you make it public.
