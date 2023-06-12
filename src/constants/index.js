import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  astutex,
  ilapz
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },


];

const experiences = [

  {
    title: "Data Scientist",
    company_name: "ILapz Technologies",
    icon: ilapz,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Present",
    points: [
      "Developing models with TensorFlow & PyTorch to make accurate predictions",
      "Developed predictive models to inform business decisions, resulting in 10% reduction in customer churn.",
      "Utilized Python and machine learning libs such as TensorFlow PyTorch to extract insights from data.",
    ],
  },  
  {
    title: "Software Developer",
    company_name: "ILapz Technologies",
    icon: ilapz,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Present",
    points: [
      "Experience in developing Android, IOS apps, problem solving & Dependency injection etc.",
      "Developed apps with Node.js, NestJS, and Socket.io and received positive feedback from users.",
      "Developed predictive models to inform business decisions, resulting in 10% reduction in customer churn.",
      "Utilized Python and machine learning libs such as TensorFlow PyTorch to extract insights from data.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Astutex Technology Solutions",
    icon: astutex,
    iconBg: "#383E56",
    date: "Oct 2021 - Feb 2022",
    points: [
      "Developing and maintaining mobile applications using Flutter for cross-platforms Android and iOS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed an application that includes Chatting, Payments, and E-commerce, Dialogflow, Firebase etc.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ArmorDef",
    description:
      "Store our all-social account passwords in one place with Strong AES double protection encryption.",
    tags: [
      {
        name: "BETA",
        color: "yellow-text-gradient",
      },{
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },{
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI - digital assistant",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
