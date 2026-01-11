# 🚀 Futuristic 3D Notes App

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![React](https://img.shields.io/badge/React-18-61dafb.svg?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg?style=flat&logo=typescript) ![Vite](https://img.shields.io/badge/Vite-4.0-646cff.svg?style=flat&logo=vite)

**A futuristic 3D note-taking application built with React, submitted as the final project for the "Belajar Membuat Aplikasi Web dengan React" (Dicoding Frontend Developer) course.**

This project reimagines the standard note-taking experience with a **"Bright Future"** aesthetic, featuring immersive 3D interactions, glassmorphism UI, and smooth motion design.

---

## ✨ Key Features

-   **🎨 Futuristic Design System**: High-key bright theme (Silver/White) accented with Neon Cyan (`#00f2ff`) and Electric Purple (`#bc13fe`).
-   **🧊 3D Glassmorphism**: Advanced UI elements using frosted glass effects (`backdrop-filter`) combined with 3D perspective layouts.
-   **✨ Interactive Animations**:
    -   Cards tilt and rotate in 3D space on hover.
    -   Smooth staggered entrance animations for lists.
    -   Dynamic rotating radial gradient backgrounds.
-   **⚡ Essential Tools**:
    -   **Create & Archive**: Easily manage active and archived notes.
    -   **Smart Search**: Real-time filtering of notes.
    -   **Responsive**: Fully optimized for desktop and mobile viewports.

## 🛠️ Technology Stack

This project leverages modern web technologies for performance and experience:

-   **Core**: [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Chakra UI](https://chakra-ui.com/) (Custom Theming)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/futuristic-3d-notes.git
    cd futuristic-3d-notes
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components (Navbar, Cards, Forms)
├── config/              # Configuration files (Theme, Constants)
├── schemas/             # Zod validation schemas
├── stores/              # Redux state management slices
├── types/               # TypeScript type definitions
├── utils/               # Helper functions (Date formatting)
├── App.tsx              # Main application layout with 3D context
└── main.tsx             # Entry point
```

## 📝 Dicoding Submission Details

-   **Course**: Belajar Membuat Aplikasi Web dengan React
-   **Theme**: Personal Notes App (Redesigned)
-   **Criteria Met**:
    -   [x] React Functional Components
    -   [x] State Management (Redux/Context not mandatory but used)
    -   [x] Search & Filter
    -   [x] Archive & Delete Functionality
    -   [x] Validation (Zod)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
*Created with ❤️ by Dava*.
