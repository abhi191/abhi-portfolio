# Project Input Template

## Instructions:
# 1. Fill out the details between the '---' lines. This is for the project's main info.
# 2. Below the '---', write your case study content. Use '#' for section titles and the special tags (like [IMAGE:...]) for different content blocks.
# 3. Once you're done, you can give this file to the AI to automatically create the project page for you.
# ---------------------------------------------------------------------------------

---
# REQUIRED: A unique number for this project (e.g., 4, 5, 6...)
ID: 4

# REQUIRED: A unique, URL-friendly name. Use lowercase letters and hyphens.
Slug: my-new-project-template

# OPTIONAL: The title for the project card and page.
Title: My New Project from Template

# OPTIONAL: A short description for the project card on the homepage.
Description: A brief summary of this amazing new project, designed to catch the visitor's eye on the main portfolio page.

# OPTIONAL: Set a password to protect this case study. Leave blank for public.
Password:

# OPTIONAL: Company name for the card.
Company: Awesome Inc.

# OPTIONAL: URL for the company logo SVG. Can be a local path or data URI.
CompanyLogoURL: data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' fill='orange'/%3E%3C/svg%3E

# OPTIONAL: URL for the image on the project card.
CardImageURL: https://images.unsplash.com/photo-1517694712202-1428bc3835b3?q=80&w=2070&auto=format&fit=crop

# OPTIONAL: Position of the card image ('left' or 'right'). Defaults to 'left'.
CardImagePosition: right

# OPTIONAL: Up to 3 key metrics for the project card. Format: "Value | Label"
Metric1: +20% | User Engagement
Metric2: 1500+ | New Signups
Metric3: 4.9 ★ | User Rating

# REQUIRED: URL for the main header image on the project detail page.
HeroImageURL: https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop

# REQUIRED: Your role(s) in the project.
Role: Lead Designer & Researcher

# REQUIRED: The project's duration.
Timeline: 4 Months

# REQUIRED: A paragraph that introduces the project on the detail page.
Overview: This project was an exciting opportunity to solve a complex user problem. The goal was to rebuild a critical workflow from the ground up, focusing on usability, efficiency, and modern design principles.
---

# Section 1: Introduction & The Problem

This is a standard paragraph block. You can write as much as you need here. The system will automatically create paragraphs based on empty lines, just like in standard Markdown.

This is another paragraph, separated by a blank line above. It explains the core user problem we set out to solve. You can highlight text for emphasis! Use `==text==` for a yellow highlight, or `==color:text==` for a specific color (e.g., `==red:important==`).
# You can define your own custom colors! See the instructions in README.md or edit the tailwind.config in index.html.

> This is a quote block. Use it for user feedback or important statements.
> -- Optional Author

# Section 2: Goals & Visuals

Here are the project goals, shown as a numbered list.
1.  Increase user satisfaction.
2.  Decrease task completion time.
3.  Establish a new design language.

And here's a bulleted list for key takeaways.
*   Understanding the user is paramount.
*   Collaboration is key to success.
*   Iterate, iterate, iterate.

[IMAGE: https://images.unsplash.com/photo-1557804506-669a67965ba0 | This is a standard image with a caption. You can click to expand it. | expandable]

[FULL_WIDTH_IMAGE: https://images.unsplash.com/photo-1512499617640-c74ae3a79d37 | This is a full-width image. It breaks out of the main text column for a high-impact look. | expandable]


# Section 3: More Components

Here's an example of an image carousel for showing off mockups or a process.

[CAROUSEL]
https://images.unsplash.com/photo-1525507119028-ed4c629a60a3 | Slide 1: The first design mockup.
https://images.unsplash.com/photo-1760479099297-90f851fb0474 | Slide 2: An iteration based on user feedback.
https://images.unsplash.com/photo-1757258632083-e9b8a5345047 | Slide 3: The final, polished user interface.
[/CAROUSEL]


A video can be embedded easily. Just paste the YouTube or Vimeo URL.

[VIDEO: https://www.youtube.com/watch?v=SSo_EIwHSd4 | A short video explaining the new features.]


# Section 4: Complex Layouts

Use a two-column layout to place text and images side-by-side.

[TWO_COLUMNS]
[LEFT]
This is the content for the left column. You can have multiple paragraphs or other simple blocks here.

It's great for explaining a concept next to a visual.
[/LEFT]
[RIGHT]
[IMAGE: https://images.unsplash.com/photo-1556740738-b6a63e2775d2]
[/RIGHT]
[/TWO_COLUMNS]


Use a table for structured data, like a competitive analysis. Separate headers from rows with `---`. Separate cells with `|`.

[TABLE]
Feature | Competitor A | Competitor B | Our Solution
---
Onboarding | Complex | Manual | Automated & Simple
Data Export | Limited | Yes | One-click Export
Support | Email Only | Phone | 24/7 Chat & Email
[/TABLE]


# Section 5: The Results

Showcase the project's impact with metric cards.
# To add a color, add it as a third parameter: Value | Label | color
# Available colors: green, blue, yellow, red. Leave blank for default gray.
[METRIC_CARDS]
+50% | Increase in Success Rate | green
-10min | Reduction in Average Task Time | red
+95% | User Satisfaction Score | blue
[/METRIC_CARDS]