# Myanmar Calendar (React + Vite)

<p align="center">
  <img src="./src/assets/mockup.jpg" alt="Myanmar Calendar Mockup" width="100%">
</p>

A modern, high-performance Myanmar Calendar application built with **React 18** and **Vite**. This project features a professional UI, multilingual support (EN/MM), and accurate public holiday tracking from 2021 to 2026.

---

## ✨ Features

-   **📅 Live Thingyan Countdown:** A real-time countdown timer specifically for the Myanmar Water Festival (Thingyan), dynamically calculated for 2026.
-   **✅ Accurate Holidays:** Verified public holidays (2021-2026) including complex lunar-based dates (Thingyan, Thadingyut, Tazaungdaing).
-   **🌍 Multilingual Support:** Seamlessly toggle between **English** and **Myanmar (Unicode)** with zero layout shift.
-   **🌓 Theme Switching:** Professional **Dark/Light Mode** support with CSS variable-driven styling.
-   **🎨 Modern UI/UX:** Built with **Inter font**, custom SVG iconography, and staggered entry animations for a premium feel.
-   **🦊 Cross-Browser Optimized:** Specifically tuned for font rendering consistency and layout stability between Chrome and Firefox.
-   **🛠️ Senior-Level Code:** Fully documented with **JSDoc** for maximum maintainability and team collaboration.

## 🚀 Live Demo

Check out the live application here:  
👉 [https://shoon007.github.io/mm-calendar](https://shoon007.github.io/mm-calendar)

## 🛠️ Tech Stack

-   **Frontend:** React 18, Vite
-   **Styling:** CSS3 (Custom Properties, Keyframes, Grid/Flexbox)
-   **Deployment:** GitHub Pages
-   **Documentation:** JSDoc

## 📦 Installation & Setup

1.  Clone the repository:
    ```bash
    git clone [https://github.com/shoon007/mm-calendar](https://github.com/shoon007/mm-calendar)
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Build for production:
    ```bash
    npm run build
    ```

## 📄 Documentation & Standards

This project follows professional documentation standards to ensure high code quality:

- **JSDoc:** All utility functions (date conversions, digit formatting) are fully documented.
- **Clean Code:** Focuses on functional programming principles and reusable components.

**Example JSDoc implementation:**
```javascript
/**
 * Converts English digits to Myanmar Unicode digits.
 * @param {number|string} num - The value to be converted.
 * @returns {string} - The converted Myanmar digit string.
 */


