import type { AboutPageData } from './types';
import { GoogleLogo, VMWareLogo, SAPLogo, CrestaLogo } from '../components/icons';
//import profile-image from './profile-image.jpg';

//export const profile-image
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
    title: 'My design philosophy',
    points: [
      {
        title: 'Empathy first',
        description: 'I believe the best solutions come from a deep understanding of user needs and pain points. I start every project by listening and learning.'
      },
      {
        title: 'Clarity & simplicity',
        description: 'My goal is to untangle complexity. I strive to create intuitive interfaces that feel effortless and guide users to their goals without friction.'
      },
      {
        title: 'Collaborative creation',
        description: 'Design is a team sport. I value close collaboration with engineers, product managers, and stakeholders to build holistic and impactful products.'
      }
    ]
  },
  
  journey: {
    title: 'My journey',
    history: [
      {
        company: 'Google',
        companyLogo: GoogleLogo,
        position: 'Senior Interaction Designer',
        description: 'Leading design for Google Cloud SaaS platform.',
        location: 'Toronto, Canada',
        period: 'Oct 2024 – Present'
      },
      {
        company: 'Cresta',
        companyLogo: CrestaLogo,
        position: 'Senior Product Designer',
        description: 'Designing a no-code command center for building AI-driven rules that support coaching, QA, and real-time agent assistance.',
        location: 'Toronto, Canada',
        period: 'Apr 2024 – Sep 2024'
      },
      {
        company: 'Google',
        companyLogo: GoogleLogo,
        position: 'Interaction Designer',
        description: 'Worked on automating release tools (CI/CD) for rolling out new features and versions of applications like YouTube, Gmail, and Workspace.',
        location: 'London, UK',
        period: 'May 2022 – Apr 2024'
      },
      {
        company: 'VMware',
        companyLogo: VMWareLogo,
        position: 'Product Designer',
        description: 'Shaped experiences for VMware vRealize Automation, a flagship infrastructure automation product.',
        location: 'Bengaluru, India',
        period: 'Nov 2019 – May 2022'
      },
      {
        company: 'SAP',
        companyLogo: SAPLogo,
        position: 'User Experience Designer',
        description: 'Lead designer for internal tools, collaborating globally for user research, testing, and design reviews.',
        location: 'Bengaluru, India',
        period: 'Jul 2017 – Oct 2019'
      },
      {
        company: 'Group10',
        companyLogo: 'Group10',
        position: 'Sr. UI Designer',
        description: 'Specialized in mobile app design for Android using material design guidelines, focused on process management and GPS tracking systems.',
        location: 'Gurugram, India',
        period: 'Oct 2012 – Jun 2015'
      }
    ]
  },
  
  beyondPixels: {
    title: 'Beyond the pixels',
    text: 'When I\'m not designing, you can find me exploring the outdoors, trying to capture the perfect landscape shot with my camera, or getting lost in a good book. I\'m also a passionate cook who loves experimenting with new recipes. These hobbies fuel my creativity and provide fresh perspectives that I bring back to my work.'
  },
  
  connect: {
    title: 'Let\'s connect',
    text: 'I\'m always open to discussing new projects, sharing ideas, or just talking about design. Feel free to reach out!',
    buttonText: 'Get in touch'
  }
};