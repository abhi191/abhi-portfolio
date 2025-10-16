import type { AboutPageData } from './types';

/**
 * ===================================================================================
 * EDIT THIS FILE TO UPDATE THE "ABOUT ME" PAGE
 * ===================================================================================
 *
 * All the content for your "About Me" page is stored here.
 * To change your profile picture, simply replace the `profileImageUrl` below.
 *
 * INSTRUCTIONS FOR YOUR PROFILE PICTURE:
 * 1. Create a new folder named `public` in the root of your project if it doesn't exist.
 * 2. Add your image file to this `public` folder (e.g., `profile-pic.jpg`).
 * 3. Change the `profileImageUrl` value below to `/profile-pic.jpg`.
 *
 * For example:
 * profileImageUrl: '/profile-pic.jpg',
 */
export const aboutPageContent: AboutPageData = {
  profileImageUrl: '/profile-image.jpg',
  title: 'Hi, I’m Abhinav Gupta.',
  intro: 'I’m an Interaction Designer at Google, where I focus on creating meaningful, clear, and effective products. With over 9 years of experience, I\'ve had the privilege of designing and developing for both enterprise and consumer-grade applications. I thrive on solving complex problems and crafting experiences that are not only functional but also delightful to use.',
  
  designPhilosophy: {
    title: 'My Design Philosophy',
    points: [
      {
        title: 'Empathy First',
        description: 'I believe the best solutions come from a deep understanding of user needs and pain points. I start every project by listening and learning.'
      },
      {
        title: 'Clarity & Simplicity',
        description: 'My goal is to untangle complexity. I strive to create intuitive interfaces that feel effortless and guide users to their goals without friction.'
      },
      {
        title: 'Collaborative Creation',
        description: 'Design is a team sport. I value close collaboration with engineers, product managers, and stakeholders to build holistic and impactful products.'
      }
    ]
  },
  
  journey: {
    title: 'My Journey',
    history: [
      { title: 'Interaction Designer, Google', period: '2021 — Present' },
      { title: 'Sr. UX Designer, VMWare', period: '2019 — 2021' },
      { title: 'UX Designer, Oracle', period: '2016 — 2019' },
      { title: 'Software Engineer, Wipro', period: '2013 — 2015' }
    ]
  },
  
  beyondPixels: {
    title: 'Beyond the Pixels',
    text: 'When I\'m not designing, you can find me exploring the outdoors, trying to capture the perfect landscape shot with my camera, or getting lost in a good book. I\'m also a passionate cook who loves experimenting with new recipes. These hobbies fuel my creativity and provide fresh perspectives that I bring back to my work.'
  },
  
  connect: {
    title: 'Let\'s Connect',
    text: 'I\'m always open to discussing new projects, sharing ideas, or just talking about design. Feel free to reach out!',
    buttonText: 'Get in Touch'
  }
};