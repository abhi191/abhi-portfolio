---
description: How to create a new project page from the project-input.md template
---

# Creating a New Project Page

This workflow allows you to create rich, interactive project pages (using the new "Playground/Editorial" layout) by simply writing content in a structured Markdown file.

## 1. Prepare the Input File
1.  **Duplicate Template**: Copy `project-input.md` to a new file, e.g., `my-new-project.md` (Do not edit the original template).
2.  **Fill Details**:
    *   **Metadata**: Update the YAML-like header (ID, Slug, Title, Password, Metrics, etc).
    *   **Content**: Write your case study using the defined tags (`[IMAGE]`, `[CAROUSEL]`, `[TWO_COLUMNS]`, etc).
    *   **Design**: The content structure determines the layout.
        *   Defining `Metrics` automatically renders the Impact Row.
        *   Defining `HeroImageURL` enables the Parallax/Editorial Hero.
        *   Using `## Headers` automatically builds the Sticky TOC.

## 2. Trigger the AI Generation
Once your markdown file is ready, run this command in the chat:

> "Create a new project from [filename].md"

## 3. Automated Process (AI Actions)
The AI will perform the following steps:
1.  **Parse**: Read your markdown file.
2.  **Convert**: Transform the markdown structure into the TypeScript `Project` object format required by `data/projects/`.
    *   It maps standard Markdown paragraphs to `ContentBlock`.
    *   It converts `[TAGS]` into specialized blocks (`Carousel`, `MetricCards`).
    *   It validates image paths.
3.  **Create File**: Generate `data/projects/[slug].ts`.
4.  **Register**: Import and add the new project to `data/projects/index.ts`.
5.  **Verify**: Confirm the new route works (e.g., `#/projects/[slug]`).

## 4. Updates & Iteration
To change the appearance or content later:
1.  Edit your `[filename].md`.
2.  Ask the AI: "Update [project-name] from [filename].md".
3.  The TypeScript data file will be regenerated with your latest changes.
