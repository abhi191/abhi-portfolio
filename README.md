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
    
-   `data/` (folder)
    -   This folder holds all your content.
    -   `types.ts`: This important file defines the "blueprint" or structure for a project (what fields it has, like `title`, `description`, etc.).
    -   `projects/` (folder): **This is where all your project files live!** Each project has its own file here.
        -   `1-google-ecommerce.ts`: An example project file.
        -   `index.ts`: This file gathers all your individual projects and puts them in a list for the website to display.

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

### A. How to Add or Edit a Project

Your portfolio is now set up so that each project is its own separate file. This makes it super clean and easy to manage.

#### Step 1: Create a New Project File
1.  Go to the `data/projects/` folder.
2.  To create a new project, the easiest way is to **duplicate an existing project file** (like `1-google-ecommerce.ts`).
3.  Rename your new file. It's good practice to start the filename with a number to help with ordering (e.g., `4-my-new-project.ts`).

#### Step 2: Edit Your Project's Content
1.  Open your new project file.
2.  You'll see a structure with fields like `id`, `title`, `description`, etc. **Carefully edit the content for each field.**
3.  Make sure the `id` is a **unique number** that no other project uses.

Here's a breakdown of the fields:

-   `id`: A unique number for the project (e.g., 1, 2, 3...).
-   `password`: (Optional) The password for this specific project.
-   `company`: The name of the company (e.g., 'Google').
-   `companyLogoUrl`: The path or data URI for the company's logo.
-   `title`: The project's title.
-   `description`: The short summary that appears on the homepage project card.
-   `metrics`: The key results that show up on the homepage card and the project detail page.
-   `imageUrl`: The URL for the large image on the homepage project card.
-   `imagePosition`: Where the image appears on the card (`'left'` or `'right'`).
-   ...and all the other fields for the detailed case study page.

#### Step 3: Add Your New Project to the Main List
1.  Now, open the file `data/projects/index.ts`. This file controls which projects appear on your site and in what order.
2.  At the top of the file, **import your new project**. Give your project a unique variable name (like `myNewProject`) and provide the correct path to the file you created.
    ```javascript
    // Add this line at the top with the other imports
    import { myNewProject } from './4-my-new-project'; 
    ```
3.  Finally, add your new variable (`myNewProject`) to the `projects` array. The order of projects in this array is the order they will appear on your homepage.
    ```javascript
    export const projects: Project[] = [
      googleEcommerceProject,
      vmwareDashboardProject,
      oracleHealthcareProject,
      myNewProject, // <-- Add your new project here
    ];
    ```
That's it! Your new project will now appear on your website.

### B. Setting Project Passwords (Individual & Optional)

You can set a unique password for each project. If you don't add a password, the project will be public and accessible to anyone.

**How to set a password for a project:**

1.  Open the specific project's file (e.g., `data/projects/1-google-ecommerce.ts`).
2.  Add a `password` property to it, right after the `id`. For example:
    ```javascript
    export const googleEcommerceProject: Project = {
      id: 1,
      password: 'my-secret-password-123',
      company: 'Google',
      // ... rest of the project data
    };
    ```
3.  Save the file. That project is now password-protected.

**To make a project public:**

Simply make sure the project object in its file **does not** have a `password` property.

### C. Changing Text

To change any other text, just find the file where it lives and edit it directly.

-   **To change the homepage intro text:** Open `components/Hero.tsx`.
-   **To change the "About Me" page text:** Open `components/AboutPage.tsx`.

### D. Updating Project Company & Logos

Each project card can display a small "chip" with the company's logo and name. This is controlled within each project's file in `data/projects/`.

For each project, you have two fields:
- `company`: The company's name, as text.
- `companyLogoUrl`: The URL for the logo image.

There are two ways to provide a logo URL:

#### Method 1: Linking to an SVG File (Recommended)
This is the easiest way to manage your logos.

1.  **Create a `logos` folder:** In your project's main directory, create a new folder called `logos`. This is where you will store your logo image files.
2.  **Add your SVG:** Place your company logo file (e.g., `new-company.svg`) inside the `logos` folder. For best results, use a simple, monochrome SVG.
3.  **Update the project file:** Open the specific project's file, find your project, and update the `companyLogoUrl` to be the path to your file. The path should start with a `/`.

    ```javascript
    // Inside data/projects/4-my-new-project.ts
    {
      //...
      company: 'New Company',
      companyLogoUrl: '/logos/new-company.svg', // <-- Update this path
      title: 'A Brand New Project',
      // ...
    }
    ```

#### Method 2: Embedding the SVG as a Data URI (Advanced)
This is the method currently used in the template so it works without extra files. A "data URI" is a long string of text that contains all the information for the image. This is useful for small, simple icons.

1.  **Get your SVG code:** Open your SVG file in a text editor and copy its entire code.
2.  **Convert it:** Use an online tool to convert your SVG code into a data URI. A good search term is "**SVG to data URI encoder**".
3.  **Update the project file:** Paste the very long data URI string as the value for `companyLogoUrl`.

### E. Changing Colors

All your website's main colors are defined in **one single place**.

1.  Open `index.html`.
2.  Look for a section that starts with `<script> tailwind.config = { ... } </script>`.
3.  Inside, you will see a `colors` section. Replace the 6-digit color codes with new ones.

### F. Changing Fonts & Styling

The instructions for changing fonts and understanding the website's styling (using Tailwind CSS) have not changed. Please refer to the previous version of this README for that detailed guide.

---

We hope this guide helps you feel confident in personalizing your website. Don't be afraid to experiment!