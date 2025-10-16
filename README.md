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

### A. The Easy Way to Add a New Project (Recommended for Beginners)

We've created a super simple way to add new projects without touching any code!

1.  **Open the `project-input.md` file.** This is a plain text template with instructions.
2.  **Fill it out.** Follow the examples in the file to add your project's title, description, overview, and all the content for your case study. You can add images, lists, videos, and more using simple tags like `[IMAGE: ...]` and `[VIDEO: ...]`.
3.  **Give it to the AI.** Once you're done, simply provide the contents of your filled-out `project-input.md` file to the AI assistant and ask it to "create a new project from this text." It will handle all the code creation for you!

This is the fastest and safest way to add new work to your portfolio.

---

### B. The Advanced Way: Editing the Code Directly

If you're comfortable with code, you can still add and edit projects manually. Your portfolio is set up so that each project is its own separate file.

#### Step 1: Create a New Project File
1.  Go to the `data/projects/` folder.
2.  To create a new project, the easiest way is to **duplicate an existing project file** (like `1-google-ecommerce.ts`).
3.  Rename your new file. It's good practice to start the filename with a number to help with ordering (e.g., `4-my-new-project.ts`).

#### Step 2: Edit Your Project's Content
1.  Open your new project file. You'll see a structure with fields like `id`, `slug`, `title`, etc. **Carefully edit the content for each field.**
2.  Make sure the `id` is a **unique number** that no other project uses.
3.  **Add a Unique URL Slug:** Each project needs a unique, URL-friendly identifier called a `slug`. This is what will appear in the browser's address bar (e.g., `/#/projects/my-new-project-slug`).
    -   It must be all lowercase.
    -   Use hyphens (`-`) instead of spaces.
    -   Make it descriptive but not too long.
    -   **Every project must have a unique slug!**
    ```javascript
    export const myNewProject: Project = {
      id: 4,
      slug: 'my-new-project-slug', // <-- Add this required field!
      // ... rest of project data
    };
    ```
4.  Fill out the top-level details like `title`, `description`, and the `metrics` for the homepage card.

#### Step 3: Customize Your Project Page Details (Role, Timeline, etc.)
The header of your project page (with details like your role and the project timeline) is now fully customizable. Instead of fixed fields, you can create your own labels and add as many details as you need.

In your project file, find the `details` section. It's an array where you can add your own custom label/value pairs.

*Code Example:*
```javascript
// --- BEFORE (Old way) ---
// role: 'Lead UX Designer',
// timeline: '6 Months',

// --- AFTER (New, flexible way) ---
details: [
  { label: 'Role', value: 'Lead UX Designer & Researcher' },
  { label: 'Months', value: '6 Months (Jan - Jun 2024)' }, // You can change 'Timeline' to 'Months'!
  { label: 'Platform', value: 'Web & Mobile' }, // You can add new details!
  { label: 'Team', value: 'Product, Engineering, Marketing' }
],
```
This gives you complete control to define the details that matter most for each specific project.

#### Step 4: Add Your New Project to the Main List
1.  Now, open the file `data/projects/index.ts`. This file controls which projects appear on your site and in what order.
2.  At the top of the file, **import your new project**.
    ```javascript
    // Add this line at the top with the other imports
    import { myNewProject } from './4-my-new-project'; 
    ```
3.  Finally, add your new project to the `projects` array. The order of projects in this array is the order they will appear on your homepage.
    ```javascript
    export const projects: Project[] = [
      googleEcommerceProject,
      vmwareDashboardProject,
      oracleHealthcareProject,
      myNewProject, // <-- Add your new project here
    ];
    ```
That's it! Your new project will now appear on your website.

### C. Building Your Case Study (Content Blocks)

This is where you have the most creative control! The case study page is built from a series of flexible content blocks.

In your project file (e.g., `4-my-new-project.ts`), all the content for the case study lives inside the `sections` array. A `section` is just a headline followed by a series of content blocks.

**The basic structure looks like this:**

```javascript
sections: [
  {
    title: 'The First Section Headline',
    blocks: [
      // ... content blocks go here ...
    ]
  },
  {
    title: 'The Second Section Headline',
    blocks: [
      // ... more content blocks go here ...
    ]
  }
]
```

To build your case study, you simply add different types of blocks to the `blocks` array for each section.

**Pro Tip:** Open the file `data/projects/1-google-ecommerce.ts`. It contains an example of every single content block described below. You can copy and paste the code for any block you want to use!

---

#### Content Block Types You Can Use:

**1. Paragraph**
For any standard text. Add a new block for each new paragraph.

**Text Highlighting:** You can draw attention to specific parts of your text using highlights.
-   **Default Highlight:** Wrap your text in double equal signs, like `==this==`, for a standard yellow highlight.
-   **Colored Highlights:** To use a specific color, add the color name followed by a colon, like `==red:this text will be red==`.

The built-in colors are `red`, `yellow`, `green`, `blue`, and `gray`. You can also **add your own custom colors!** See section **H. Adding Custom Highlight Colors** below for instructions.

*Code Example:*
```javascript
{ 
  type: 'paragraph', 
  content: 'This paragraph demonstrates the ==highlight feature==. You can use different colors like ==green:success== or ==red:danger== to add emphasis.' 
}
```

**2. Lists (Bulleted or Numbered)**
Perfect for project goals, key learnings, or any list of items.

*Code Example (Bulleted):*
```javascript
{ 
  type: 'list', 
  style: 'unordered', // or 'ordered' for a numbered list
  items: [
    "First list item.",
    "Second list item.",
    "Third list item."
  ]
}
```

**3. Image with Optional Caption**
To display a standard, centered image. You can optionally make it "expandable," meaning a user can click it to see it in a full-screen view.

*Code Example:*
```javascript
{ 
  type: 'image', 
  src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0', // URL for the image
  caption: 'This is an optional caption for the image.',
  isExpandable: true // Add this line to make the image clickable!
}
```

**4. Full-Width Image**
Perfect for high-impact mockups. This block breaks out of the text container to span a much wider area. It can also be made expandable.

*Code Example:*
```javascript
{ 
  type: 'fullWidthImage', 
  src: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37',
  caption: 'This is an optional caption for the full-width image.',
  isExpandable: true // Make it clickable!
}
```

**5. Image Carousel**
An interactive slideshow. **Images in a carousel are always expandable** into a full-screen lightbox view by default.

*Code Example:*
```javascript
{ 
  type: 'carousel', 
  slides: [
    { 
      src: 'https://...image-url-1.com', 
      caption: 'Slide 1: This is the first caption.' 
    },
    { 
      src: 'https://...image-url-2.com', 
      caption: 'Slide 2: A different caption.' 
    },
    { 
      src: 'https://...image-url-3.com' // Caption is optional
    }
  ]
}
```

**6. Quote**
Perfect for highlighting user testimonials, stakeholder feedback, or key pull quotes.

*Code Example:*
```javascript
{ 
  type: 'quote', 
  text: 'This new design has transformed our workflow and saved us hours every week.',
  author: 'John Smith, Project Stakeholder' // Author is optional
}
```

**7. Video Embed**
Embed a video from platforms like YouTube or Vimeo. The block automatically converts standard video links into the correct embeddable format.

*Code Example:*
```javascript
{ 
  type: 'video', 
  url: 'https://www.youtube.com/watch?v=your_video_id',
  caption: 'This is an optional caption for the video.'
}
```

**8. Two-Column Layout**
A powerful way to place content side-by-side. Each column can contain any other block type (like paragraphs or an image).

*Code Example:*
```javascript
{ 
  type: 'twoColumn', 
  columns: [
    { // Left Column
      blocks: [
        { type: 'paragraph', content: 'This text will appear in the left column.' },
        { type: 'paragraph', content: 'You can add multiple blocks here.' }
      ]
    },
    { // Right Column
      blocks: [
        { type: 'image', src: 'https://...your-image-url.com' }
      ]
    }
  ]
}
```

**9. Metric Cards**
Great for showcasing the final results and impact of your project in a visually appealing way. You can optionally add a color to each card to add more visual meaning.

*Code Example:*
```javascript
{ 
  type: 'metricCards', 
  metrics: [
    { value: '+40%', label: 'Increase in Conversion Rate', color: 'green' },
    { value: '-25%', label: 'Reduction in Support Tickets', color: 'green' },
    { value: '+85%', label: 'Growth in Mobile Revenue', color: 'blue' },
    { value: '75%', label: 'Faster Checkout Time', color: 'yellow' },
    { value: '-40%', label: 'Reduction in Support Calls', color: 'red' },
    { value: '50k+', label: 'Active Users' }, // Default gray color
  ]
}
```
Available colors are: `green`, `blue`, `yellow`, and `red`. If you don't specify a color, it will default to the standard gray.

**10. Table**
Use this for structured data, like a competitive analysis.

*Code Example:*
```javascript
{ 
  type: 'table', 
  headers: ['Feature', 'Competitor A', 'Competitor B', 'Our Solution'], 
  rows: [
    ['Guest Checkout', 'Yes', 'No', 'Yes (Streamlined)'],
    ['Mobile Performance', 'Good', 'Average', 'Excellent'],
    ['Return Process', 'Complex', 'Easy', 'One-click returns']
  ]
}
```

---
### D. How to Edit the "About Me" Page

The content for your "About Me" page is all stored in a single, easy-to-edit file.

1.  **Open the file `data/about.ts`**.
2.  Inside this file, you'll find all the text for the intro, your design philosophy, your career journey, etc. Simply edit the text within the quotes (`'...'`) to update the content.

**Changing Your Profile Picture:**
This is the most common change you'll want to make.

1.  **Add your photo to the project.** The best practice is to create a folder named `public` at the top level of your project. Place your image file (e.g., `my-photo.jpg`) inside this `public` folder.
2.  **Update the path.** In `data/about.ts`, find the line that starts with `profileImageUrl`.
3.  **Change the value** to the path of your new image. The path should start with a `/`.

*Code Example in `data/about.ts`:*
```javascript
// BEFORE:
profileImageUrl: 'https://...some-long-unsplash-url.com',

// AFTER:
profileImageUrl: '/my-photo.jpg',
```
That's it! The website will now display your photo.

---

### E. Setting Project Passwords

You can set a unique password for each project.

1.  Open the specific project's file (e.g., `data/projects/1-google-ecommerce.ts`).
2.  Add a `password` property to it, right after the `slug`.
    ```javascript
    export const myProject: Project = {
      id: 4,
      slug: 'my-new-project-slug',
      password: 'my-secret-password-123',
      // ... rest of the project data
    };
    ```
3.  To make a project public, simply make sure it **does not** have a `password` property.

**Important Security Note:** Passwords are **not** stored or cached in the browser. This is a security feature. Users will be required to enter the password **every single time** they visit a protected page, whether they clicked a link or used a direct URL.

### F. Updating Project Company & Logos

Each project card can display a "chip" with the company's logo and name.

#### Method 1: Linking to an SVG File (Recommended)
1.  Create a `logos` folder in your project's main directory.
2.  Add your SVG file (e.g., `new-company.svg`) to this folder.
3.  In your project file, update the `companyLogoUrl` to the path of your file.
    ```javascript
    companyLogoUrl: '/logos/new-company.svg', // <-- Update this path
    ```

#### Method 2: Embedding the SVG as a Data URI (Advanced)
This is useful for small icons. You can use an online "SVG to data URI encoder" to convert your SVG code into a long string and paste it as the `companyLogoUrl`.

### G. Changing Colors & Fonts

To change colors or fonts, open `index.html` and find the `<script> tailwind.config = { ... } </script>` section. You can edit the color codes and font families in there.

### H. Adding Custom Highlight Colors

You can define your own reusable colors for the text highlighting feature.

1.  **Open `index.html`**.
2.  Find the `<script>` tag containing `tailwind.config`.
3.  Inside `theme.extend.colors`, you'll see a commented section called `-- Custom Text Highlight Colors --`.
4.  To add a new color (e.g., `purple`), add two new lines: one for the background and one for the text color. Follow the naming pattern `highlight-NAME-bg` and `highlight-NAME-text`.

*Code Example: Adding a new "purple" highlight color*
```javascript
// Inside theme.extend.colors in index.html

// ... existing colors ...
'highlight-gray-text': '#1F2937',

// Add your new color definitions here:
'highlight-purple-bg': '#F3E8FF', // A light purple background
'highlight-purple-text': '#6B21A8', // A dark purple text
// ...
```
5.  That's it! Now you can use your new color in any project file like this: `==purple:This text will have a purple highlight==`. You can add as many custom colors as you like.