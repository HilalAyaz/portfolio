export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Building modern, responsive websites and web applications tailored to your needs",
    longDescription:
      "I create high-performance, scalable web applications using cutting-edge technologies. From simple landing pages to complex web platforms, I ensure your digital presence stands out with clean code, optimal performance, and seamless user experiences.",
    icon: "💻",
    features: [
      "Custom web application development",
      "Responsive and mobile-first design",
      "E-commerce solutions",
      "Progressive Web Apps (PWA)",
      "Content Management Systems",
      "Performance optimization",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces with excellent user experience",
    longDescription:
      "I design user-centered interfaces that are not only visually appealing but also highly functional. Through research, prototyping, and testing, I create digital experiences that users love and that drive business results.",
    icon: "🎨",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Responsive design systems",
      "Accessibility compliance (WCAG)",
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    slug: "api-integration",
    title: "API Integration",
    description:
      "Seamless integration of third-party services and custom API development",
    longDescription:
      "I specialize in connecting your applications with external services and building robust APIs. Whether you need payment gateways, social media integration, or custom backend services, I ensure smooth, secure, and efficient data flow.",
    icon: "🔌",
    features: [
      "RESTful API development",
      "GraphQL implementation",
      "Third-party API integration",
      "Payment gateway integration (Stripe, PayPal)",
      "Authentication systems (OAuth, JWT)",
      "API documentation",
    ],
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "REST",
      "Supabase",
      "Firebase",
    ],
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Speed up your website and improve user experience with advanced optimization",
    longDescription:
      "I analyze and optimize every aspect of your web application to ensure lightning-fast load times and smooth interactions. Better performance means happier users, improved SEO rankings, and increased conversion rates.",
    icon: "⚡",
    features: [
      "Core Web Vitals optimization",
      "Code splitting and lazy loading",
      "Image and asset optimization",
      "Database query optimization",
      "Caching strategies",
      "Lighthouse audits and improvements",
    ],
    technologies: ["Webpack", "Vite", "Redis", "CDN", "GSAP", "React Query"],
  },
  {
    slug: "powerpoint-design",
    title: "PowerPoint Design",
    description:
      "Creating visually stunning and professional PowerPoint presentations",
    longDescription:
      "I craft compelling PowerPoint presentations that communicate your ideas effectively and captivate your audience. Custom slide designs, animations, and layouts ensure your presentations stand out.",
    icon: "📊",
    features: [
      "Custom slide design",
      "Animated transitions and effects",
      "Template creation",
      "Infographics and charts",
      "Corporate and educational presentations",
      "Brand-aligned styling",
    ],
    technologies: ["PowerPoint", "Canva", "Google Slides"],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Designing creative graphics, logos, and visual content for businesses and projects",
    longDescription:
      "I deliver visually appealing graphic designs tailored to your brand identity. From logos and banners to social media content, I create designs that engage your audience and enhance your brand image.",
    icon: "🖌️",
    features: [
      "Logo and brand identity design",
      "Social media graphics",
      "Marketing materials",
      "Print and digital design",
      "Illustrations and infographics",
      "Poster and flyer design",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Figma"],
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    description:
      "Building strong brand identities with consistent design and messaging",
    longDescription:
      "I help businesses create cohesive brand identities that resonate with their audience. From visual assets to messaging guidelines, your brand will be memorable and professional.",
    icon: "🏷️",
    features: [
      "Brand strategy and guidelines",
      "Logo and visual identity",
      "Typography and color palettes",
      "Marketing collateral",
      "Brand voice and messaging",
      "Consistent digital presence",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva"],
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    description:
      "Improving your website's visibility and ranking on search engines",
    longDescription:
      "I implement effective SEO strategies to enhance your website's search engine ranking. From keyword research to on-page optimization, I help drive organic traffic and improve your online presence.",
    icon: "🔍",
    features: [
      "Keyword research and analysis",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Content strategy and creation",
      "Link building and backlink optimization",
      "Local SEO strategies",
    ],
    technologies: [
      "Google Analytics",
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Yoast SEO",
    ],
  },
];

export const getServiceBySlug = (slug: string) => {
  return services.find((s) => s.slug === slug);
};
