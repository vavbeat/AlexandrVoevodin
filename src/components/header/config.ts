import { Link } from "@/types";

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: '/assets/nav-link-previews/landing.png'
  },
  {
    title: 'About',
    href: '/#about',
    thumbnail: '/assets/nav-link-previews/about.png'
  },
  {
    title: 'Skills',
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/skills.png'
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/projects.png'
  },
  {
    title: 'Blogs',
    href: '/blogs',
    thumbnail: '/assets/nav-link-previews/blog.png',
  },
  {
    title: 'Contact',
    href: '/#contact',
    thumbnail: '/assets/nav-link-previews/contact.png'
  }
];

const config = {
  title: "Александр Воеводин | ML Engineering (Data Analytics Architect)",
  description: {
    long: "Gamified portfolio showcasing advanced data systems architecture and machine learning solutions. Expertise in real-time analytics, scalable AI infrastructure, and nuclear fusion data systems.",
    short:
      "Gamified Portfolio of Александр Воеводин - Data scientist / ML engineer", // Updated subtitle
  },
  // ...rest of config remains same
};

export { links, config };
