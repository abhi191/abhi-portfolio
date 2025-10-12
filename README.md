# Your Personal Portfolio Website - A Simple Guide

Hello! This is a guide to help you understand and easily update your personal portfolio website. You don't need to be a professional coder to make changes. Think of this as your website's instruction manual!

---

## 1. What is this project?

This is the code for your beautiful, minimalist portfolio website. It's built to be simple and clean. It has two main pages:

1.  **Homepage:** Where you introduce yourself and showcase your featured work.
2.  **About Me Page:** A dedicated space to share your story, experience, and personality.

---

## 2. Where are all the files? (The Website's Filing Cabinet)

All the website's files are organized to be as clear as possible. Here’s a quick tour:

-   `README.md`
    -   You're reading it right now! It's the main guide.

-   `index.html`
    -   Think of this as the main "frame" or "skeleton" of your website. We use it to set up important things like **colors and fonts**. You won't need to edit it often.

-   `App.tsx`
    -   This file is the "traffic cop." It decides which page to show the visitor (the Homepage or the About Me page).

-   `components/` (folder)
    -   This is the most important folder! It contains all the reusable "building blocks" of your website. When you want to change text or images, you'll most likely be editing a file in here.

    -   `Header.tsx`: The navigation bar at the very top of your site.
    -   `Footer.tsx`: The section at the very bottom with your social media links.
    -   `Hero.tsx`: The big, welcoming intro section on the homepage ("Hi, myself Abhinav").
    -   `FeaturedSection.tsx`: The card that showcases your "E-Commerce Platform Redesign" project.
    -   `AboutPage.tsx`: The *entire* "About Me" page is inside this one file.
    -   `icons.tsx`: This file holds the code for the small icons used on the site (like the menu icon, LinkedIn icon, etc.).

---

## 3. How to Make Changes (The Fun Part!)

Here’s how you can customize the most common parts of your website.

### A. Changing Text

To change any text, just find the file where it lives and edit it directly.

-   **To change the homepage intro text:**
    1.  Open the file: `components/Hero.tsx`.
    2.  Find the text you want to change, for example: `<p>A multi-disciplinary designer...</p>`.
    3.  Replace the text inside the `<p>` and `</p>` tags with your own words.

-   **To change the "About Me" page text:**
    1.  Open the file: `components/AboutPage.tsx`.
    2.  All the text for that page is here. You can edit your bio, design philosophy, and job history.

### B. Changing Colors

All your website's main colors are defined in **one single place** for easy editing.

1.  Open the file: `index.html`.
2.  Look for a section that starts with `<script> tailwind.config = { ... } </script>`.
3.  Inside, you will see a `colors` section:
    ```javascript
    colors: {
      'brand-background': '#F5F3ED', // The main page background
      'brand-card': '#EAE6DD',       // The background of cards/sections
      'brand-dark': '#1C1C1C',       // The main text color
      'brand-accent': '#D97D5D',     // The highlight/accent color
    },
    ```
4.  To change a color, simply replace the 6-digit color code (e.g., `#F5F3ED`) with a new one. You can find new color codes using a tool like [Google's Color Picker](https://www.google.com/search?q=color+picker).

### C. Changing Fonts (Typography)

Just like colors, the fonts are also set up in `index.html`.

1.  Open the file: `index.html`.
2.  Find the line that starts with `<link href="https://fonts.googleapis.com/css2?..."`. This line imports your fonts from Google Fonts. You can visit [Google Fonts](https://fonts.google.com/) to find new fonts and replace this link.
3.  Next, look inside the `tailwind.config` script again. You'll see a `fontFamily` section that gives your fonts simple names:
    ```javascript
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    }
    ```
    This tells the site to use the "Inter" font for most text.

### D. Changing Spacing (Padding & Margins)

Spacing is controlled by special keywords called "classes." It might look a bit technical, but the idea is simple:

-   `p-` means **padding** (space *inside* an element).
-   `m-` means **margin** (space *outside* an element, pushing other things away).
-   The number after the dash tells you *how much* space. A bigger number means more space (e.g., `p-8` is more padding than `p-4`).
-   You can also add a letter for direction: `t` (top), `b` (bottom), `l` (left), `r` (right).
    -   Example: `mt-8` means "add a margin to the **t**op of 8 units."

When you're editing a file like `Hero.tsx`, you'll see these classes inside `className="..."`. You can change the numbers to adjust spacing.

### E. Changing Buttons and Links

-   **To change a button's text:** Find the button (e.g., the "Resume" button is in `components/Header.tsx`) and change the text between the `<button>` and `</button>` tags.

-   **To change a button's color:** Look for its `className`. It will have a class like `bg-brand-dark` (for background color) and `text-white` (for text color). You can change `bg-brand-dark` to `bg-brand-accent` to use your accent color!

-   **To update a link:**
    1.  Links are made with an `<a>` tag.
    2.  Find the link you want to change (e.g., the social media links in `components/Footer.tsx`).
    3.  Look for `href="#"`. Replace the `#` with the full URL you want to link to.
    4.  Example: `href="https://www.linkedin.com/in/your-profile-name"`

---

We hope this guide helps you feel confident in personalizing your website. Don't be afraid to experiment!
