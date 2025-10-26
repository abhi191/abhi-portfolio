# Project Input Template

## Instructions:
# 1. Fill out the details between the '---' lines. This is for the project's main info.
# 2. Below the '---', write your case study content. Use '#' for section titles and the special tags (like [IMAGE:...]) for different content blocks.
# 3. Once you're done, you can give this file to the AI to automatically create the project page for you.
# ---------------------------------------------------------------------------------

---
# REQUIRED: A unique number for this project (e.g., 4, 5, 6...)
ID: 7

# REQUIRED: A unique, URL-friendly name. Use lowercase letters and hyphens.
Slug: my-new-project-template

# OPTIONAL: The title for the project card and page.
Title: My new project from template

# OPTIONAL: A short description for the project card on the homepage.
Description: A brief summary of this amazing new project, designed to catch the visitor's eye on the main portfolio page.

# OPTIONAL: Set a password to protect this case study. Leave blank for public.
Password:

# OPTIONAL: Company name for the card.
Company: Awesome Inc.

# OPTIONAL: Path to the company logo SVG in your `public` folder.
CompanyLogoURL: /logos/awesome-inc.svg

# OPTIONAL: Path to the image for the project card in your `public` folder.
CardImageURL: /project-assets/template/card-image.jpg

# OPTIONAL: Position of the card image ('left' or 'right'). Defaults to 'left'.
CardImagePosition: right

# OPTIONAL: Up to 3 key metrics for the project card. Format: "Value | Label"
Metric1: +20% | User engagement
Metric2: 1500+ | New signups
Metric3: 4.9 ★ | User rating

# REQUIRED: Path to the main header image on the project detail page.
HeroImageURL: /project-assets/template/hero-image.jpg

# REQUIRED: A paragraph that introduces the project on the detail page.
Overview: This project was an exciting opportunity to solve a complex user problem. The goal was to rebuild a critical workflow from the ground up, focusing on usability, efficiency, and modern design principles.

# REQUIRED: Key details for the project header. Add as many as you need.
# Format is "Label | Value"
ProjectDetail1: Role | Lead designer & researcher
ProjectDetail2: Months | 4 Months
ProjectDetail3: Platform | Web & Mobile App
---

# Section 1: Introduction & the problem

This is a standard paragraph block. You can write as much as you need here. The system will automatically create paragraphs based on empty lines, just like in standard Markdown.

This is another paragraph, separated by a blank line above. It explains the core user problem we set out to solve. You can highlight text for emphasis! Use `==text==` for a yellow highlight, or `==color:text==` for a specific color (e.g., `==red:important==`).
# You can define your own custom colors! See the instructions in README.md or edit the tailwind.config in index.html.

You can also add subheadings within any section to better structure your content. The AI will automatically detect them.
## This is a Level 2 Heading
### This is a Level 3 Heading
#### This is a Level 4 Heading

> This is a quote block. Use it for user feedback or important statements.
> -- Optional Author

# Section 2: Goals & visuals

### Project Goals
Here are the project goals, shown as a numbered list.
1.  Increase user satisfaction.
2.  Decrease task completion time.
3.  Establish a new design language.

And here's a bulleted list for key takeaways.
*   Understanding the user is paramount.
*   Collaboration is key to success.
*   Iterate, iterate, iterate.

### Visuals
# Use local paths starting with a `/` that points to your `public` folder.
[IMAGE: /project-assets/template/image-1.jpg | This is a standard image with a caption. You can click to expand it. | expandable]

[FULL_WIDTH_IMAGE: /project-assets/template/full-width-1.jpg | This is a full-width image. It breaks out of the main text column for a high-impact look. | expandable]


# Section 3: More components

Here's an example of an image carousel for showing off mockups or a process.

[CAROUSEL]
/project-assets/template/carousel-1.jpg | Slide 1: The first design mockup.
/project-assets/template/carousel-2.jpg | Slide 2: An iteration based on user feedback.
/project-assets/template/carousel-3.jpg | Slide 3: The final, polished user interface.
[/CAROUSEL]


A video can be embedded easily. Just paste the YouTube or Vimeo URL.

[VIDEO: https://www.youtube.com/watch?v=SSo_EIwHSd4 | A short video explaining the new features.]


# Section 4: Complex layouts

Use a two-column layout to place text and images side-by-side.

[TWO_COLUMNS]
[LEFT]
This is the content for the left column. You can have multiple paragraphs or other simple blocks here.

It's great for explaining a concept next to a visual.
[/LEFT]
[RIGHT]
[IMAGE: /project-assets/template/column-image.jpg]
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


# Section 5: The results

Showcase the project's impact with metric cards.
# To add a color, add it as a third parameter: Value | Label | color
# Available colors: green, blue, yellow, red. Leave blank for default gray.
[METRIC_CARDS]
+50% | Increase in success rate | green
-10min | Reduction in average task time | red
+95% | User satisfaction score | blue
[/METRIC_CARDS]


# Section 6: Connect or view prototype

Use a Call to Action block for a final, colorful prompt.
# Format: [CALL_TO_ACTION | Title | Text | Button Text | Button URL | Color]
# Color is optional and can be green, blue, yellow, red. Defaults to gray.
[CALL_TO_ACTION | View the Live Prototype | Click the button below to explore the interactive Figma prototype and see the designs in action. | Open Prototype | https://figma.com | blue]
