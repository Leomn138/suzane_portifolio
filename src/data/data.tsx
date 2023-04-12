import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import DribbbleIcon from '../components/Icon/DribbbleIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/amazon_ilustration.jpg';
import testimonialImage from '../images/home.png';
import porfolioImage1 from '../images/portfolio/climmob.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage2 from '../images/portfolio/sleepify.png';
import profileEpic from '../images/suzane.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Suzane Castro\'s Portifolio',
  description: "Suzane Castro's Portifolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'projects',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Suzane Castro.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Berlin-based <strong className="text-stone-100">Product Designer</strong> and <strong className="text-stone-100">UI/UX Teaching Assistant</strong> at <strong className="text-stone-100">Ironhack</strong>, dedicated to mentoring and nurturing aspiring designers in the wild world of design. Creating the next generation of design adventurers! 🚀🌴🌿🐾
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profileEpic,
  description: `I am a Berlin-based Product Designer with a passion for UI/UX design. 
  Currently, I'm working at Ironhack as a UI/UX Designer Teacher Assistant, where I have the opportunity to mentor and train over 60 students and newcomer designers. 
  My role involves creating a supportive learning environment, providing guidance on design principles, and helping students develop their skills in user interface and user experience design. 
  I am dedicated to helping aspiring designers grow and thrive in their design journey, and I take pride in contributing to the next generation of design professionals.

  When I'm not designing, you can find me spending time in the kitchen, experimenting with different ingredients and cooking up some meals. 
  I also have a green thumb and enjoy taking care of my growing collection of plants, nurturing them and watching them thrive. 
  Additionally, I find solace in nature and love exploring beautiful landscapes.`,
  aboutItems: [
    {label: 'Location', text: 'Berlin, Germany', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Nature, Plants, Cooking', Icon: SparklesIcon},
    {label: 'Study', text: 'Rio de Janeiro Federal University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Ironhack', Icon: OfficeBuildingIcon},
  ],
};


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Clim Mob',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ph.D Kauê de Sousa - Agricultural Scientist @ CGIAR',
      text: 'Suzane\'s creativity and efficiency in creating the software\'s organizational chart within a tight timeline was impressive. Her ability to identify priority areas for improvement and her prompt response to feedback, resulting in an improved design, was commendable. I am grateful for her hard work and professionalism, and I highly recommend her for the exceptional skills demonstrated during the project.',
      image:  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Leonardo Nascimento - Tech Lead @ ebayKleinanzeigen',
      text: 'During the time I worked with her, she has always been deeply committed to our product and users. Starting as a support analyst, she played a crucial role in sharing users feedback with the development team. Her growth within the company has been remarkable, as she has earned the trust of our customers and become the bridge between our tech team and the customer\'s team.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Max Teacher @ Ironhack',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Student @ Ironhack',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image:  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Looking forward to connecting with you and exploring the digital wilderness together!',
  items: [
    {
      type: ContactType.Email,
      text: 'suzane.castro10@gmail.com',
      href: 'mailto:suzane.castro10@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Berlin, Germany',
      href: 'https://goo.gl/maps/7L8hcdwm146C8Uf27',
    },
    {
      type: ContactType.Instagram,
      text: '@suzaneecastro',
      href: 'https://www.instagram.com/suzaneecastro/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'suzane-c-9410b9149',
      href: 'https://www.linkedin.com/in/suzane-c-9410b9149/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/suzane-c-9410b9149/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/suzaneecastro/'},
  {label: 'Dribbble', Icon: DribbbleIcon, href: 'https://www.instagram.com/suzaneecastro/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/suzane.castro.946'},
];
