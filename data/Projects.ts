export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  demo: string;
  source: string;
  featured: boolean;
  date: string;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "full-stack-event-manager-app",
    title: "Full Stack Event Manager App",
    description:
      "Event Hub is a Full Stack Web App that enables users to create and manage events. Built with Next.js 14 and TypeScript. User Authentication is handled by Clerk, payments by Stripe, and events stored in MongoDB. Responsive and usable on any device.",
    longDescription: `
Event Hub is a comprehensive full-stack web application designed to simplify event management for users of all levels. The platform enables users to create, organize, and manage events from start to finish, providing a seamless and intuitive user experience. At the core of the app, Clerk authentication ensures secure user login and registration, giving each user a personal account to manage their events.

The application is built with Next.js 14 and TypeScript, leveraging the latest web development technologies to ensure fast page loads, type safety, and scalable architecture. Users can create events with detailed descriptions, dates, times, and locations, providing potential attendees with all the necessary information. Stripe integration handles ticket sales and payments, allowing users to monetize their events securely and efficiently.

MongoDB serves as the backend database, storing user and event data reliably. The application includes robust CRUD operations, letting users edit or delete events, and view attendee lists. TailwindCSS powers the frontend design, ensuring a responsive layout that works flawlessly across desktops, tablets, and mobile devices. Every aspect of the interface, from forms to navigation and dashboards, is optimized for usability.

This project also emphasizes accessibility and modern UI/UX best practices. Interactive components, hover effects, and smooth animations create a polished user experience. Beyond functionality, Event Hub demonstrates the integration of multiple third-party services—authentication, payments, and database management—showing real-world full-stack development expertise.

In addition to its technical complexity, Event Hub represents a practical solution for organizers who want a reliable, modern platform for managing events. It showcases essential full-stack skills, including state management, secure authentication, responsive design, backend integration, and third-party API utilization. By combining functionality, design, and performance optimization, Event Hub is both a technical achievement and a portfolio-worthy showcase for any web developer.
    `,
    tech: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "Stripe",
      "MongoDB",
      "TailwindCSS",
    ],
    image: "/projects/event-manager.png",
    demo: "https://nextjs-event-manager-mu.vercel.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Full Stack",
  },
  {
    slug: "full-stack-prompt-app",
    title: "Full Stack Prompt App",
    description:
      "Inspiro is a Fullstack Website enabling creators to manage AI prompts securely with Google authentication. Built with Next.js 14 and Tailwind CSS.",
    longDescription: `
Inspiro is a sophisticated full-stack platform designed specifically for content creators and AI enthusiasts to manage, organize, and share AI prompts efficiently. The application provides a centralized hub where users can create, edit, categorize, and discover prompts for various AI models and use cases. Built with Next.js 14 and TypeScript, the platform ensures type safety, optimal performance, and scalable architecture.

Google Authentication integration provides secure and seamless user onboarding, allowing users to sign in with their existing Google accounts while maintaining high security standards. Each user gets a personalized dashboard where they can manage their prompt library, view their creation history, and organize prompts into custom categories. The intuitive interface makes it easy to search, filter, and browse through hundreds of prompts.

The application features a robust CRUD system that enables users to create new prompts with detailed descriptions, tags, and usage examples. Users can also edit existing prompts, update categories, and delete prompts they no longer need. The platform includes social features that allow users to share their prompts with the community and discover prompts created by others.

TailwindCSS powers the responsive design, ensuring the application looks and functions perfectly across all device sizes. The clean, modern interface focuses on usability with clear navigation, intuitive forms, and accessible components. Performance optimization techniques including code splitting, lazy loading, and efficient state management ensure fast loading times and smooth user interactions.

Inspiro demonstrates advanced full-stack development skills including authentication implementation, database management, responsive design, and modern React patterns. It serves as both a practical tool for AI prompt management and a showcase of professional web development capabilities.
    `,
    tech: ["Next.js", "TailwindCSS", "Google Auth", "TypeScript"],
    image: "/projects/prompt-app.png",
    demo: "https://next-ai-prompt-sepia.vercel.app/",
    source: "",
    featured: true,
    date: "2024-01-01",
    category: "Full Stack",
  },
  {
    slug: "3d-portfolio",
    title: "3D Portfolio",
    description:
      "A 3D portfolio website built with React and Three.js, designed to showcase skills and projects. Fully responsive.",
    longDescription: `
This immersive 3D portfolio represents a cutting-edge approach to personal branding and project showcasing in the digital space. Built with React and Three.js, the portfolio transforms traditional web presentation into an interactive 3D experience that engages visitors from the moment they arrive. The application features a sophisticated 3D environment where projects and skills are visualized as interactive elements that users can explore.

The portfolio includes multiple 3D scenes that showcase different aspects of my development journey. Each project is represented as a 3D object that users can rotate, zoom, and interact with to reveal detailed information. The main navigation is built as an intuitive 3D interface that feels natural and responsive. Advanced Three.js techniques including lighting, shadows, and materials create a visually stunning experience that demonstrates both technical skill and creative vision.

Performance optimization was a key consideration throughout development. The application implements efficient rendering techniques, lazy loading of 3D assets, and careful resource management to ensure smooth performance across different devices and network conditions. The responsive design adapts the 3D experience to various screen sizes, maintaining usability on mobile devices while delivering the full immersive experience on desktop.

Beyond the visual appeal, the portfolio demonstrates advanced React patterns including custom hooks for 3D interactions, context providers for state management across 3D components, and efficient re-rendering strategies. The code architecture separates concerns between 3D rendering logic and business logic, making the application maintainable and extensible.

This project showcases the potential of WebGL and modern browser capabilities for creating engaging web experiences. It serves as both a demonstration of technical expertise in 3D web development and an innovative approach to personal portfolio design that leaves a lasting impression on visitors.
    `,
    tech: ["React", "Three.js", "TailwindCSS"],
    image: "/projects/3d-portfolio.png",
    demo: "https://hilalayaz-3d-portfolio.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Portfolio",
  },
  {
    slug: "artiqnova",
    title: "ArtIQnova",
    description:
      "ArtIQnova allows users to generate art using CloudinaryAI. Built with Next.js 14, Clerk authentication, Stripe payments, and MongoDB storage.",
    longDescription: `
ArtIQnova is an innovative AI-powered art generation platform that democratizes digital art creation for users of all skill levels. The application leverages CloudinaryAI's advanced image generation capabilities to transform user prompts into stunning visual artworks. Built with Next.js 14 and TypeScript, the platform provides a robust and scalable foundation for handling complex AI operations and user interactions.

The application features a sophisticated user authentication system powered by Clerk, ensuring secure access to user accounts and generated content. Each user receives a personalized gallery where they can store, organize, and manage their AI-generated artworks. The platform includes advanced filtering and search capabilities, allowing users to quickly find specific creations based on generation date, style, or keywords.

Stripe integration enables seamless monetization through a flexible credit-based system. Users can purchase generation credits and use them to create new artworks, with real-time balance updates and transaction history. The payment flow is optimized for conversion with clear pricing, secure checkout, and instant credit allocation upon successful payment.

MongoDB serves as the primary database, efficiently storing user data, generation history, and artwork metadata. The database architecture is designed for scalability, with optimized queries and indexing for fast retrieval of user galleries and generation history. The application implements efficient image storage and delivery through Cloudinary's CDN, ensuring fast loading times for artwork galleries.

The user interface, built with TailwindCSS, focuses on simplicity and elegance, putting the AI-generated artworks at the center of the experience. The generation interface provides intuitive controls for adjusting art style, resolution, and other generation parameters. Real-time generation status updates keep users informed during the creation process.

ArtIQnova demonstrates expertise in integrating multiple third-party services, handling complex state management, and creating intuitive user experiences for AI-powered applications. It represents the cutting edge of creative technology and showcases how AI can enhance human creativity in accessible and meaningful ways.
    `,
    tech: ["Next.js", "CloudinaryAI", "Clerk", "Stripe", "MongoDB"],
    image: "/projects/artiqnova.png",
    demo: "https://art-iq-nova.vercel.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "AI / Full Stack",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    description:
      "A weather forecasting application built with Next.js and TypeScript providing real-time weather updates, forecasts, and interactive maps.",
    longDescription: `
This comprehensive weather application delivers accurate, real-time weather information with an emphasis on user experience and visual clarity. Built with Next.js 14 and TypeScript, the app provides reliable weather forecasting for locations worldwide with a sophisticated interface that makes complex meteorological data accessible and understandable.

The application features multiple viewing modes including current conditions, hourly forecasts for the next 48 hours, and detailed 7-day forecasts. Each forecast includes comprehensive data points such as temperature, humidity, wind speed and direction, precipitation probability, UV index, and atmospheric pressure. The data is presented through intuitive visualizations including temperature graphs, precipitation charts, and wind direction indicators.

Interactive maps powered by Leaflet.js provide geographical context to weather patterns, showing precipitation radar, cloud cover, and temperature gradients across regions. Users can pan and zoom the maps to explore weather conditions in different areas and get location-specific forecasts. The map interface includes multiple layer options that users can toggle to view different types of weather data.

The application implements intelligent caching strategies to minimize API calls while ensuring data freshness. Location detection automatically provides weather information for the user's current location, with manual location search for any city worldwide. The search functionality includes autocomplete suggestions and recent search history for quick access to frequently checked locations.

Accessibility was a primary consideration throughout development. The interface includes proper ARIA labels, keyboard navigation support, and high contrast ratios for readability. The responsive design ensures optimal viewing experience across all device sizes, with adaptive layouts that prioritize the most relevant information based on screen size.

Performance optimization techniques including static generation for common locations, efficient re-rendering strategies, and optimized bundle sizes ensure fast loading times and smooth interactions. The application demonstrates modern React patterns including custom hooks for weather data management, context providers for user preferences, and efficient state updates.

This weather app showcases expertise in API integration, data visualization, responsive design, and performance optimization. It transforms complex weather data into an accessible, user-friendly experience that helps people make informed decisions based on current and forecasted conditions.
    `,
    tech: ["Next.js", "TypeScript", "API"],
    image: "/projects/weather-app.png",
    demo: "https://weather-app-devdesigner.netlify.app/",
    source: "",
    featured: true,
    date: "2024-01-01",
    category: "Frontend",
  },
  {
    slug: "ai-article-summarizer",
    title: "AI Article Summarizer",
    description:
      "A website that summarizes articles from URL input using OpenAI API. Responsive design.",
    longDescription: `
The AI Article Summarizer is an intelligent web application that harnesses the power of OpenAI's advanced natural language processing to transform lengthy articles into concise, meaningful summaries. This tool addresses the modern challenge of information overload by enabling users to quickly grasp the essence of online content without reading entire articles.

Built with React and TypeScript, the application features a clean, focused interface that puts the summarization functionality front and center. Users can simply paste any article URL into the input field, and the application will automatically fetch the content, process it through the OpenAI API, and return a well-structured summary that captures the key points, main arguments, and essential information.

The summarization engine is tuned to maintain the original context and meaning while significantly reducing the content length. It can handle various types of articles including news reports, blog posts, research papers, and technical documentation. The system identifies and preserves critical information such as statistics, dates, names, and central themes while eliminating redundant content and minor details.

The application includes advanced features such as summary length customization, allowing users to choose between brief overviews and more detailed summaries. It also provides key point extraction, highlighting the most important sentences or concepts from the original article. The history feature enables users to review their previous summarizations, making it easy to reference earlier content.

Error handling and user feedback are carefully implemented to provide clear status updates during the summarization process. The application handles various edge cases including invalid URLs, paywalled content, and processing failures with helpful error messages and recovery suggestions.

Performance optimization ensures fast processing times even for lengthy articles, with efficient text processing and smart caching of recent summarizations. The responsive design provides an optimal experience across desktop and mobile devices, with accessible form controls and readable typography.

This project demonstrates expertise in API integration, asynchronous programming, error handling, and creating user-friendly interfaces for AI-powered functionality. It showcases how artificial intelligence can be leveraged to solve real-world problems and enhance productivity in content consumption.
    `,
    tech: ["React", "OpenAI API", "TypeScript"],
    image: "/projects/ai-article-summarizer.png",
    demo: "https://web-url-summary.netlify.app/",
    source: "",
    featured: true,
    date: "2024-01-01",
    category: "AI",
  },
  {
    slug: "modern-bank-ui-ux",
    title: "Modern Bank UI/UX",
    description:
      "A modern bank website built with React and TailwindCSS. Provides a user-friendly interface and responsive design.",
    longDescription: `
This modern banking interface represents a comprehensive redesign of traditional financial digital experiences, focusing on user trust, accessibility, and intuitive navigation. Built with React and TailwindCSS, the application showcases how modern web technologies can transform complex financial operations into simple, engaging user interactions.

The design system is built around principles of clarity, security, and efficiency. The color palette combines professional blues and grays with accent colors that guide user attention to important actions and information. Typography is carefully chosen for optimal readability across all devices, with proper hierarchy that makes complex financial data easily scannable and understandable.

The application features multiple dashboard views tailored to different user needs. The main dashboard provides an overview of account balances, recent transactions, and quick access to common banking operations. Separate sections are dedicated to transfers, bill payments, investment tracking, and account management, each with optimized workflows that minimize user effort.

Interactive components include animated transaction histories, progressive disclosure of complex information, and real-time balance updates. The interface implements modern UX patterns such as loading states, success confirmations, and helpful empty states that guide users through initial setup processes. Form interactions are enhanced with validation, auto-completion, and clear error messaging.

Security indicators are prominently displayed throughout the interface, building user confidence in the digital banking experience. Encryption status, login activity, and security recommendations are presented in non-technical language that average users can understand and appreciate.

The responsive design ensures flawless functionality across all device types, with mobile-specific interactions like swipe gestures for transaction actions and touch-optimized button sizes. Performance optimization techniques including code splitting, lazy loading, and efficient re-rendering ensure fast loading times and smooth animations.

This project demonstrates advanced skills in component architecture, state management for complex financial data, and creating accessible interfaces that comply with financial industry standards. It represents a forward-thinking approach to digital banking that prioritizes user experience without compromising on security or functionality.
    `,
    tech: ["React", "TailwindCSS"],
    image: "/projects/modern-bank.png",
    demo: "https://bank-app-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "UI/UX",
  },
  {
    slug: "tea-house-site-ui-ux",
    title: "Tea House Site UI/UX",
    description:
      "A tea house website developed with React and TailwindCSS. Provides browsing, booking, and reservation functionalities.",
    longDescription: `
This elegant tea house website combines traditional tea culture with modern web design principles to create a digital experience that reflects the sophistication and tranquility of tea appreciation. Built with React and TailwindCSS, the application serves as both an informational platform and a booking system for a premium tea establishment.

The design aesthetic draws inspiration from traditional tea ceremonies while maintaining contemporary usability standards. The color scheme features warm, earthy tones complemented by clean whites and subtle accents that evoke the natural origins of tea. Typography choices balance readability with artistic flair, using serif fonts for headings to convey tradition and sans-serif for body text to ensure clarity.

The website is structured around several key sections that guide visitors through the tea house experience. An immersive hero section introduces the establishment's philosophy and ambiance through carefully curated imagery and evocative copy. The tea menu section showcases the available varieties with high-quality photographs, detailed descriptions of flavor profiles, brewing recommendations, and origin information.

The reservation system is designed for simplicity and convenience, with an intuitive booking interface that allows users to select date, time, party size, and special requirements. The system includes real-time availability checking, automatic confirmation emails, and calendar integration. For walk-in visitors, the interface provides current wait times and queue position tracking.

An educational section delves into the art of tea preparation, covering different brewing methods, tea ceremonies, and the cultural significance of various tea types. Interactive elements allow users to explore tea pairings with food and learn about the health benefits of different tea varieties.

E-commerce functionality enables online purchasing of tea leaves, accessories, and gift sets. The shopping experience is optimized with intelligent recommendations based on user preferences, secure checkout process, and order tracking. The application integrates with inventory management to ensure accurate stock levels and delivery estimates.

Performance optimization ensures fast loading of high-resolution product images through lazy loading and modern image formats. The responsive design adapts the elegant aesthetic to all screen sizes, with mobile-specific navigation patterns and touch-friendly interfaces. Accessibility features include proper contrast ratios, keyboard navigation, and screen reader compatibility.

This project demonstrates expertise in creating branded digital experiences that balance aesthetic appeal with functional requirements. It showcases how modern web technologies can enhance traditional businesses and create meaningful connections with customers through thoughtful digital interfaces.
    `,
    tech: ["React", "TailwindCSS"],
    image: "/projects/tea-house.png",
    demo: "https://chaipeelo-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "UI/UX",
  },
  {
    slug: "brainwave-ui-ux",
    title: "Brainwave UI/UX",
    description:
      "UI/UX website developed with React and TailwindCSS featuring animations using AOS library. Fully responsive.",
    longDescription: `
Brainwave UI/UX represents a cutting-edge exploration of modern web design patterns and interactive user experiences. This project showcases how strategic animation, thoughtful micro-interactions, and progressive disclosure can create engaging digital products that captivate users while maintaining usability and accessibility.

Built with React and TailwindCSS, the application demonstrates advanced frontend development techniques through a series of interactive showcases. Each section of the website serves as a live demonstration of different UI/UX principles, from complex navigation patterns to innovative content presentation methods. The AOS (Animate On Scroll) library is employed strategically to create narrative flow and guide user attention through the content.

The design system is built around a cohesive visual language that balances creativity with functionality. Color usage follows psychological principles to evoke specific emotions and guide user behavior. Typography creates clear hierarchy while adding personality through careful font pairing and spacing. The layout system uses modern CSS techniques including Grid and Flexbox to create dynamic, adaptive interfaces.

Interactive components include animated navigation menus that provide context-aware functionality, progressive form interfaces that break complex inputs into manageable steps, and dynamic content cards that reveal additional information through hover and click interactions. Each interaction is designed with purpose, enhancing usability rather than serving as mere decoration.

The animation system is implemented with performance in mind, using CSS transforms and opacity changes that leverage GPU acceleration. Transitions are timed according to established UX principles, with durations that feel responsive without being jarring. Loading states and skeleton screens provide visual feedback during data fetching operations.

The website includes a comprehensive style guide section that documents the design decisions, component specifications, and implementation details. This makes the project not only a demonstration of skills but also a educational resource for other developers interested in modern UI/UX practices.

Accessibility features are integrated throughout, including proper semantic HTML, ARIA labels for complex interactive elements, keyboard navigation support, and color contrast compliance. The responsive design ensures optimal viewing experience across all device sizes, with breakpoint-specific layouts that adapt the content structure for different contexts.

This project demonstrates mastery of modern frontend development tools and techniques, with particular emphasis on creating memorable user experiences through thoughtful animation and interaction design. It serves as both a portfolio piece and a technical demonstration of what's possible with contemporary web technologies.
    `,
    tech: ["React", "TailwindCSS", "AOS"],
    image: "/projects/brainwave.png",
    demo: "https://brainwave-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "UI/UX",
  },
  {
    slug: "snake-game-python",
    title: "Snake Game in Python",
    description:
      "Classic Snake Game implemented in Python using Pygame. Eat food, avoid obstacles, and grow your snake!",
    longDescription: `
This Python implementation of the classic Snake game represents a comprehensive exercise in game development fundamentals, object-oriented programming, and real-time application design. Built with Pygame, the project demonstrates how to create engaging interactive experiences using Python's game development ecosystem while maintaining clean, maintainable code architecture.

The game features the traditional Snake gameplay mechanics where players control a growing snake that moves around the game board, consuming food items to increase length while avoiding collisions with walls and the snake's own body. The implementation includes multiple difficulty levels that adjust game speed, board complexity, and scoring mechanics to provide appropriate challenges for different skill levels.

The game architecture follows object-oriented principles with clearly separated concerns. The Snake class manages movement, growth, and collision detection, while the Food class handles random placement and special food types. The Game class orchestrates the overall game state, including score tracking, level progression, and game over conditions. This modular design makes the codebase extensible and easy to understand.

Advanced features include special food items that provide temporary abilities like speed boosts, invincibility, or score multipliers. The game implements smooth animation through delta-time calculations that ensure consistent movement speed regardless of frame rate variations. Particle effects enhance visual feedback when the snake consumes food or collides with obstacles.

The user interface includes a main menu with game options, in-game HUD displaying current score and high scores, and detailed game over screens that provide performance statistics and encouragement for improvement. The control system supports both keyboard and gamepad input with configurable key bindings and input buffering for responsive controls.

The codebase demonstrates several important programming concepts including game loops, event handling, collision detection algorithms, and state management. Performance optimization techniques ensure smooth gameplay even on lower-end systems, with efficient rendering and minimal CPU usage during idle periods.

This project showcases the ability to create complete, polished applications from concept to implementation. It demonstrates understanding of game design principles, user experience considerations for interactive software, and professional coding practices including documentation, error handling, and code organization. The game serves as both an entertaining product and a demonstration of technical proficiency in Python game development.
    `,
    tech: ["Python", "Pygame"],
    image: "/projects/snake-game.png",
    demo: "https://github.com/HilalAyaz/snake-game-python",
    source: "https://github.com/HilalAyaz/snake-game-python",
    featured: false,
    date: "2024-01-01",
    category: "Python",
  },
  {
    slug: "text-analysis-python",
    title: "Text Analysis in Python",
    description:
      "Text Analysis App using Flask and NLTK to provide insights on paragraphs, sentences, words, and common words.",
    longDescription: `
This comprehensive text analysis application represents a sophisticated tool for extracting meaningful insights from textual data through natural language processing techniques. Built with Python Flask for the web framework and NLTK for linguistic analysis, the application provides researchers, writers, and content creators with powerful analytical capabilities in an accessible web interface.

The application processes input text through multiple analysis pipelines that extract different types of linguistic and statistical information. Basic metrics include character count, word count, sentence count, and paragraph count, providing fundamental quantitative understanding of the text structure. Advanced analysis includes reading level assessment using established formulas like Flesch-Kincaid and Coleman-Liau indexes.

The NLTK integration enables sophisticated linguistic analysis including part-of-speech tagging that identifies nouns, verbs, adjectives, and other grammatical elements throughout the text. Named entity recognition extracts and categorizes proper nouns such as people, organizations, and locations. Sentiment analysis evaluates the emotional tone of the text, providing scores for positivity, negativity, and neutrality.

Frequency analysis identifies the most common words and phrases, with filtering options to exclude common stop words and focus on meaningful content. The application generates word clouds and frequency distribution charts that visualize textual patterns at a glance. Concordance analysis shows how specific words are used in context, helping users understand usage patterns and semantic relationships.

The web interface, built with Flask and modern frontend technologies, provides an intuitive workflow for text analysis. Users can either paste text directly into the application or upload document files in various formats. The results are presented in an organized dashboard with tabbed navigation between different analysis types, export options for further processing, and interactive visualizations.

The backend architecture is designed for efficiency when processing large texts, with optimized algorithms for text segmentation, tokenization, and linguistic analysis. Caching mechanisms store analysis results for repeated access, and background processing handles particularly large documents without blocking the user interface.

This project demonstrates expertise in natural language processing, web application development, and data visualization. It showcases how complex computational linguistics concepts can be packaged into user-friendly tools that provide immediate value to non-technical users while maintaining the analytical depth required by researchers and professionals.
    `,
    tech: ["Python", "Flask", "NLTK"],
    image: "/projects/text-analysis.png",
    demo: "https://github.com/HilalAyaz/text-analysis-python",
    source: "https://github.com/HilalAyaz/text-analysis-python",
    featured: false,
    date: "2024-01-01",
    category: "Python",
  },
  {
    slug: "quiz-app",
    title: "Quiz App",
    description:
      "A simple quiz platform developed with the MERN stack where users can take quizzes and track performance.",
    longDescription: `
This comprehensive quiz application represents a full-stack implementation of an interactive learning and assessment platform using the MERN stack (MongoDB, Express.js, React, Node.js). The application provides a robust environment for creating, taking, and analyzing quizzes across various subjects and difficulty levels, serving both educational and entertainment purposes.

The platform features a sophisticated quiz creation system that allows administrators to build quizzes with multiple question types including multiple choice, true/false, fill-in-the-blank, and matching questions. The quiz editor includes rich text formatting, image support, and mathematical notation capabilities for comprehensive question creation. Questions can be organized into categories, tagged for searchability, and assigned difficulty levels.

The quiz-taking experience is designed for engagement and fairness. Timed quizzes with configurable time limits create appropriate pressure while preventing unlimited contemplation. The interface provides clear progress indicators, question navigation, and the ability to flag questions for review. Real-time validation gives immediate feedback in learning mode, while assessment mode delays results until quiz completion.

User performance analytics form a core component of the application. Detailed results pages show overall scores, time spent per question, category-wise performance, and comparative statistics against other users. Progress tracking over time helps users identify improvement areas and celebrate learning milestones. Achievement systems with badges and certificates provide motivation and recognition.

The technical architecture demonstrates modern full-stack development practices. MongoDB stores user data, quiz content, and performance records with optimized queries for fast retrieval. Express.js provides a robust API with proper authentication, authorization, and validation middleware. React on the frontend delivers a responsive, component-based user interface with efficient state management.

Advanced features include adaptive testing algorithms that adjust question difficulty based on user performance, collaborative quiz modes for group learning, and social features that allow users to share results and challenge friends. The application supports multiple languages and includes accessibility features for inclusive usage.

Security measures protect user data and ensure quiz integrity, including prevention of multiple submissions, secure authentication with JWT tokens, and protection against common web vulnerabilities. Performance optimization techniques including database indexing, API response caching, and frontend code splitting ensure smooth operation even with large user bases.

This project showcases expertise in full-stack JavaScript development, database design, API architecture, and creating engaging user experiences for educational technology. It demonstrates the ability to build complex, feature-rich applications that serve real user needs while maintaining code quality and scalability.
    `,
    tech: ["React", "Node", "Express", "MongoDB", "TailwindCSS"],
    image: "/projects/quiz-app.png",
    demo: "https://onlinequizbyhilal.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Full Stack",
  },
];

export const getFeaturedProjects = (limit?: number) => {
  const featured = projects.filter((p) => p.featured);
  return limit ? featured.slice(0, limit) : featured;
};

export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectsByCategory = (category: string, limit?: number) => {
  const filtered = projects.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  return limit ? filtered.slice(0, limit) : filtered;
};

export const getAllCategories = (): string[] => {
  const categories = projects.map((p) => p.category);
  return Array.from(new Set(categories)).sort();
};
