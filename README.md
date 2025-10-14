# Your Personal Portfolio Website - A Simple Guide

Hello! This is a guide to help you understand and easily update your personal portfolio website. You don't need to be a professional coder to make changes. Think of this as your website's instruction manual!

---

## 1. What is this project?

This is the code for your beautiful, minimalist portfolio website. It's built to be simple and clean. It has three main views:

1.  **Homepage:** Where you introduce yourself and showcase your featured work.
2.  **About Me Page:** A dedicated space to share your story, experience, and personality.
3.  **Project Detail Page:** A full case study page for each of your projects, which can be individually password-protected.

---

## 2. Where are all the files? (The Website's Filing Cabinet)

All the website's files are organized to be as clear as possible. Here’s a quick tour:

-   `README.md`
    -   You're reading it right now! It's the main guide.

-   `index.html`
    -   Think of this as the main "frame" or "skeleton" of your website. We use it to set up important things like **colors, fonts, and custom animations**.

-   `App.tsx`
    -   This file is the "traffic cop." It decides which page to show the visitor and handles the logic for displaying the password prompt.

-   `data/projects.ts`
    -   **This is where all your project content and passwords live!** This is a key file for you to edit.

-   `components/` (folder)
    -   This folder contains all the reusable "building blocks" of your website.

    -   `Header.tsx`: The navigation bar at the very top of your site.
    -   `Footer.tsx`: The section at the very bottom with your social media links.
    -   `Hero.tsx`: The big, welcoming intro section on the homepage.
    -   `FeaturedSection.tsx`: The list of project cards on the homepage.
    -   `ProjectPage.tsx`: The template that displays your detailed case study.
    -   `AboutPage.tsx`: The *entire* "About Me" page is inside this one file.
    -   `PasswordPrompt.tsx`: The pop-up that asks for a password.
    -   `icons.tsx`: This file holds the code for the small icons used on the site.

---

## 3. How to Make Changes (The Fun Part!)

Here’s how you can customize the most common parts of your website.

### A. Editing Your Project Case Studies

All the content for your projects is located in a single, easy-to-edit file.

1.  Open the file: `data/projects.ts`.
2.  Inside, you'll see an array called `projects`. Each item in this array is an object `{...}` that represents one project.
3.  You can edit the text and image URLs for each field to build your case study.

Here's a breakdown of the fields for a single project:

-   `id`: A unique number for the project (e.g., 1, 2, 3...).
-   `password`: (Optional) The password for this specific project.
-   `title`: The project's title.
-   `description`: The short summary that appears on the homepage project card.
-   `metrics`: The key results that show up on the homepage card and the project detail page.
-   `imageUrl`: The URL for the large image on the homepage project card.
-   `imagePosition`: Where the image appears on the card (`'left'` or `'right'`).

**Detailed Page Content:**

-   `heroImage`: The main banner image at the top of the case study page.
-   `role`: Your role on the project.
-   `timeline`: The duration of the project.
-   `overview`: A short paragraph introducing the project on its detail page.
-   `problemStatement`: The main problem you were solving.
-   `goals`: A list of project goals.
-   `process`: Describe your design process.
-   `challenges`: What were the main challenges you faced?
-   `solution`: Describe the final solution.
-   `learnings`: Key takeaways from the project.

To add a new project, simply copy an existing project object, paste it at the end of the array (before the closing `];`), change its `id`, and update all the content.

### B. Setting Project Passwords (Individual & Optional)

You can set a unique password for each project. If you don't add a password, the project will be public and accessible to anyone.

**How to set a password for a project:**

1.  Open the file: `data/projects.ts`.
2.  Find the project object you want to protect.
3.  Add a `password` property to it, right after the `id`. For example:
    ```javascript
    {
      id: 1,
      password: 'my-secret-password-123',
      title: 'E-commerce Redesign',
      // ... rest of the project data
    }
    ```
4.  Save the file. That project is now password-protected.

**To make a project public:**

Simply make sure the project object **does not** have a `password` property.

```javascript
// This project is PUBLIC
{
  id: 2,
  // No password property here
  title: 'SaaS Dashboard for Data Analytics',
  // ... rest of the project data
}
```

### C. Changing Text

To change any other text, just find the file where it lives and edit it directly.

-   **To change the homepage intro text:** Open `components/Hero.tsx`.
-   **To change the "About Me" page text:** Open `components/AboutPage.tsx`.

### D. Changing Colors

All your website's main colors are defined in **one single place**.

1.  Open `index.html`.
2.  Look for a section that starts with `<script> tailwind.config = { ... } </script>`.
3.  Inside, you will see a `colors` section. Replace the 6-digit color codes with new ones.

### E. Changing Fonts (Typography)

Fonts are also set up in `index.html`.

1.  Find the `<link href="https://fonts.googleapis.com/css2?..."` line. You can visit [Google Fonts](https://fonts.google.com/) to find new fonts and replace this link.
2.  Update the font names inside the `tailwind.config` script in the `fontFamily` section.

### F. Understanding the Styling (A Guide to CSS & Tailwind)

This website is styled using **Tailwind CSS**, a modern way to handle styling. Instead of writing separate CSS files, we apply special "classes" directly to the HTML elements. This makes it fast and easy to build and modify layouts. Here's a breakdown of the concepts used.

#### 1. What are Utility Classes? (The Core of Tailwind)

Think of utility classes as tiny, single-purpose instructions. You combine them to build complex styles.

-   `text-center`: This tells the element to align its text to the center.
-   `font-bold`: This makes the text bold.
-   `bg-brand-dark`: This sets the `background-color` to our custom "dark" color.
-   `p-8`: This applies `padding` of a specific size (8 units) on all sides.
-   `mt-10`: This adds `margin-top` of 10 units.

When you see something like `<h1 class="text-4xl font-extrabold tracking-tighter">`, you are just combining several of these utility classes to style the `<h1>` element. To discover what a class does, you can search for it in the official [Tailwind CSS Documentation](https://tailwindcss.com/docs).

#### 2. Making the Website Responsive (For Different Screen Sizes)

You'll often see classes with prefixes like `sm:`, `md:`, and `lg:`. These are **responsive modifiers**. They apply a style *only* on screens of a certain size or larger. This is how we make the website look good on both mobile phones and large desktop monitors.

The default styles (without a prefix) apply to mobile first.

**Example from `Header.tsx`:**
```html
<nav class="hidden md:flex">...</nav>
```
-   `hidden`: By default (on small screens), this navigation menu is hidden.
-   `md:flex`: Once the screen is "medium" size (768px) or wider, it changes to `display: flex`, making the menu visible.

#### 3. Adding Interactivity (Hover and Focus Effects)

Similar to responsive modifiers, you'll see prefixes like `hover:`, `focus:`, and `group-hover:`. These are called **state variants** and they apply styles when a user interacts with an element.

-   `hover:opacity-90`: When you move your mouse over this element, its opacity will change to 90%.
-   `focus:ring-2`: When you click on an input field, a colored ring will appear around it to show that it's active.

**A slightly more advanced example is `group-hover`:**

In `FeaturedSection.tsx`, the project card `<div>` has a class called `group`.
```html
<div class="block group rounded-3xl ...">
  ...
  <div class="... group-hover:text-brand-accent">
    <span>View Case Study</span>
    <ArrowRightIcon class="... group-hover:translate-x-1" />
  </div>
</div>
```
-   `group`: This "names" the parent card as a group.
-   `group-hover:text-brand-accent`: Now, from *anywhere inside the card*, if you hover over the `group` (the parent card), the "View Case Study" text will change color.
-   `group-hover:translate-x-1`: Similarly, when you hover over the card, the arrow icon will move slightly to the right.

#### 4. Our Custom CSS (For Animations)

For a few special effects like the page-load and scroll-in animations, we use a small amount of custom CSS. You can find this inside the `<style>` section of `index.html`.

-   `.animate-fade-in-up`: This class applies a fade-in-from-bottom animation. We use it on the hero section text.
-   `.scroll-animate`: This is the starting state for elements that will animate when you scroll to them. It makes them invisible and slightly moved down.
-   `.scroll-animate.is-visible`: This is the final state. When you scroll an element into view, a script adds the `is-visible` class, which makes it fade in and move up into its final position. This combined selector (`.scroll-animate` AND `.is-visible`) is what triggers the transition.

By understanding these concepts, you can now look at any element in the code, read its classes, and have a good idea of how it will look and behave!

---

We hope this guide helps you feel confident in personalizing your website. Don't be afraid to experiment!