# Your Personal Portfolio Website - A Simple Guide

Hello! This is a guide to help you understand and easily update your personal portfolio website. You don't need to be a professional coder to make changes. Think of this as your website's instruction manual!

---

## 1. What is this project?

This is the code for your beautiful, minimalist portfolio website. It's built to be simple and clean. It has three main page types with unique, shareable URLs:

1.  **Homepage (`/#/`):** Where you introduce yourself and showcase your featured work.
2.  **About Me Page (`/#/about`):** A dedicated space to share your story, experience, and personality.
3.  **Project Detail Page (`/#/projects/your-project-name`):** A full case study page for each of your projects, which can be individually password-protected.

---

## 2. Where are all the files? (The Website's Filing Cabinet)

All the website's files are organized to be as clear as possible. Here’s a quick tour:

-   `README.md`
    -   You're reading it right now! It's the main guide.
-   `project-input.md`
    -   **The easiest way to add a new project!** This is a simple text template you can fill out.
-   `public/` (folder)
    -   **This is where all your images and assets go!** You will need to create this folder. See the "How to Manage Local Images" section below for instructions.

-   `index.html`
    -   Think of this as the main "frame" or "skeleton" of your website. We use it to set up important things like **colors, fonts, and custom animations**.

-   `App.tsx`
    -   This file is the "traffic cop." It reads the URL in the browser's address bar to decide which page to show the visitor and handles the logic for displaying the password prompt.
    
-   `data/` (folder)
    -   This folder holds all your content.
    -   `types.ts`: This important file defines the "blueprint" or structure for a project (what fields it has, like `title`, `slug`, `description`, etc.).
    -   `about.ts`: **This file holds all the content for your "About Me" page.**
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
    -   `AboutPage.tsx`: The template for the "About Me" page.
    -   `PasswordPrompt.tsx`: The pop-up that asks for a password.
    -   `icons.tsx`: This file holds the code for the small icons used on the site.

---

## 3. How to Make Changes (The Fun Part!)

### A. How to Manage Local Images (Your `public` Folder)

To use your own images for projects, your profile picture, or logos, you'll need to use a special folder called `public`.

**What is the `public` folder?**
Think of it as your website's main "assets drawer." Any file you put in here (like a `.jpg`, `.png`, or `.svg`) can be directly accessed by the browser. It's the standard and correct way to handle static files.

**Step 1: Create the `public` Folder**
- In the main directory of your project (at the same level as `index.html` and the `components` folder), create a new folder.
- **Name it `public`**.

**Step 2: Organize Your Images (Recommended)**
- Inside the `public` folder, it's a good idea to create sub-folders to keep things tidy. For example:
  - `public/profile-image.jpg`
  - `public/logos/company-a.svg`
  - `public/project-assets/google-ecommerce/hero.png`
  - `public/project-assets/google-ecommerce/image-1.jpg`

**Step 3: How to Use an Image in Your Code**
- When you need to use an image, you reference it with a path that starts with a **single forward slash (`/`)**. This slash tells the browser to look in the `public` folder.
- You **do not** include `public` in the path itself.

**Examples:**
- To use `public/profile-image.jpg`, the path in your code is: `'/profile-image.jpg'`
- To use `public/logos/company-a.svg`, the path is: `'/logos/company-a.svg'`
- To use `public/project-assets/google-ecommerce/hero.png`, the path is: `'/project-assets/google-ecommerce/hero.png'`

---
### B. The Easy Way to Add a New Project (Recommended for Beginners)

We've created a super simple way to add new projects without touching any code!

1.  **Open the `project-input.md` file.** This is a plain text template with instructions.
2.  **Fill it out.** Follow the examples in the file to add your project's title, description, overview, and all the content for your case study. You can add images, lists, videos, and more using simple tags like `[IMAGE: ...]` and `[VIDEO: ...]`.
3.  **Give it to the AI.** Once you're done, simply provide the contents of your filled-out `project-input.md` file to the AI assistant and ask it to "create a new project from this text." It will handle all the code creation for you!

This is the fastest and safest way to add new work to your portfolio.

---

### C. The Advanced Way: Editing the Code Directly

If you're comfortable with code, you can still add and edit projects manually. Your portfolio is set up so that each project is its own separate file.

#### Step 1: Create a New Project File
1.  Go to the `data/projects/` folder.
2.  To create a new project, the easiest way is to **duplicate an existing project file** (like `1-google-ecommerce.ts`).
3.  Rename your new file. It's good practice to start the filename with a number to help with ordering (e.g., `10-my-new-project.ts`).

#### Step 2: Edit Your Project's Top-Level Content
1.  Open your new project file. You'll see a structure with fields like `id`, `slug`, `title`, etc. **Carefully edit the content for each field.**
2.  Make sure the `id` is a **unique number** that no other project uses.
3.  **Add a Unique URL Slug:** Each project needs a unique, URL-friendly identifier called a `slug`. This is what will appear in the browser's address bar (e.g., `/#/projects/my-new-project-slug`).
    -   It must be all lowercase.
    -   Use hyphens (`-`) instead of spaces.
    -   Make it descriptive but not too long.
    -   **Every project must have a unique slug!**
4.  **Customize Project Details:** The header of your project page is fully customizable. Use the `details` array to add as many key-value pairs as you need.
    ```javascript
    details: [
      { label: 'Role', value: 'Lead UX Designer, Researcher' },
      { label: 'Timeline', value: '6 Months (Jan 2024 - Jun 2024)' },
      { label: 'Platform', value: 'Web & Mobile' },
      // Add more details as needed!
    ],
    ```

#### Step 3: Configure the Homepage Card
You can control how the project card appears on the homepage.
- **Hiding Metrics:** By default, the key metrics you define will be shown. If you prefer to hide them:
    ```javascript
    export const myProject: Project = {
      // ... other properties
      showMetricsOnCard: false, // <-- Add this line
      // ... rest of project data
    };
    ```
    To show them again, set this to `true` or remove the line entirely.

#### Step 4: Building Your Case Study Content
Your case study is built from a series of "content blocks." Here are all the available blocks you can use in the `sections` array of your project file.

- **Heading (`heading`)**: For titles and subtitles.
  ```javascript
  { type: 'heading', level: 3, content: 'My Heading', color: 'blue' }
  ```
- **Paragraph (`paragraph`)**: For your main text. You can add highlights like `==yellow:this==` or make text `**bold**`.
  ```javascript
  { type: 'paragraph', content: 'This is the main text.' }
  ```
- **Image (`image` & `fullWidthImage`)**: To display images. `fullWidthImage` breaks out of the main text column.
  ```javascript
  { type: 'image', src: '/path/to/image.jpg', caption: 'Optional caption.', isExpandable: true }
  { type: 'fullWidthImage', src: '/path/to/image.jpg', caption: 'Full width!' }
  ```
- **List (`list`)**: For ordered (numbered) or unordered (bulleted) lists.
  ```javascript
  { type: 'list', style: 'ordered', items: ['First item', 'Second item'] }
  ```
- **Two Columns (`twoColumn`)**: Places content side-by-side on larger screens.
  ```javascript
  { type: 'twoColumn', columns: [
      { blocks: [{ type: 'paragraph', content: 'Left column text.' }] },
      { blocks: [{ type: 'image', src: '/path/to/image.jpg' }] }
  ]}
  ```
- **Metric Cards (`metricCards`)**: A grid of cards to showcase key results.
  ```javascript
  { type: 'metricCards', metrics: [{ value: '+20%', label: 'Success', color: 'green' }] }
  ```
- **Table (`table`)**: For structured data.
  ```javascript
  { type: 'table', headers: ['Feature', 'Status'], rows: [['Onboarding', 'Complete']] }
  ```
- **Carousel (`carousel`)**: An interactive slideshow for images.
  ```javascript
  { type: 'carousel', slides: [{ src: '/path/to/image1.jpg', caption: 'Slide 1' }] }
  ```
- **Quote (`quote`)**: For pull quotes or testimonials.
  ```javascript
  { type: 'quote', text: 'This was a game-changer.', author: 'CEO', color: 'green' }
  ```
- **Video (`video`)**: Embeds a YouTube or Vimeo video.
  ```javascript
  { type: 'video', url: 'https://www.youtube.com/watch?v=your_video_id', caption: 'Promo video' }
  ```
- **Call to Action (`callToAction`)**: A colorful block to link to external resources.
  ```javascript
  { type: 'callToAction', title: 'View Prototype', text: 'Explore the design on Figma.', buttonText: 'Open Figma', buttonUrl: '#', color: 'blue' }
  ```
- **Message Bar (`messageBar`)**: An informational bar to highlight key points.
  ```javascript
  { type: 'messageBar', title: 'Key Takeaway', text: 'This feature was critical for success.', color: 'blue' }
  ```

---

## 4. Customizing Your Website's Look & Feel

You have several easy ways to change the visual style of your portfolio.

### A. Changing Your Colors and Fonts
Open `index.html`. Inside the first `<script>` tag, you'll find the `tailwind.config` section. This is your main style controller.

-   **To change a color:** Find the `colors` section and edit the hex codes. For example, to change the main accent color, edit `'brand-accent': '#A15DD9'`.
-   **To add a new highlight color:** Add a new pair of `'highlight-NAME-bg'` and `'highlight-NAME-text'` colors.
-   **To change fonts:** Edit the `fontFamily` section.

### B. Customizing Project Page Backgrounds
Each project page can have a beautiful gradient background.

1.  **Define the Gradient:** In `index.html`, find the `/* --- Custom Project Page Gradient Backgrounds --- */` section. You can add new CSS classes here (e.g., `.gradient-orange`).
2.  **Apply it to a Project:** In your project file (e.g., `1-google-ecommerce.ts`), add the `gradientBackgroundColor` property and set its value to the name of your new gradient (without the "gradient-" prefix).
    ```javascript
    gradientBackgroundColor: 'purple', // This will apply the .gradient-purple class
    ```

### C. Customizing Heading Colors
You can apply custom colors to the titles and headings on your project pages. The color name (e.g., `'blue'`) maps to the text color you defined in `index.html` (e.g., `'highlight-blue-text'`).

-   **Main Project Title (H1):** In the project file, add `titleColor`.
    ```javascript
    title: 'E-commerce Redesign',
    titleColor: 'purple',
    ```
-   **Section Title (H2):** In the project file, inside a `sections` item, add `titleColor`.
    ```javascript
    sections: [{
      title: 'The Problem',
      titleColor: 'blue',
      // ... blocks
    }]
    ```
-   **Subheadings (H2, H3, H4):** For a `heading` content block, add a `color` property.
    ```javascript
    { 
      type: 'heading', 
      level: 3, 
      content: 'Key Findings', 
      color: 'green' 
    }
    ```

---

## 5. Setting up for Local Development

To run this website on your own computer outside of the development environment, you don't need any complex tools.

1.  Make sure you have [Node.js](https://nodejs.org/) installed.
2.  Open your terminal in the project's main folder.
3.  Install a simple server package by running: `npm install -g serve`
4.  Start the server by running: `serve .`
5.  Open your web browser and go to the local address the terminal gives you!
