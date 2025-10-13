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
    longDescription:
      "Full Stack Event Manager App allowing users to create, manage, and attend events with secure authentication and payment handling. Built with Next.js, TypeScript, Clerk, Stripe, and MongoDB.",
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
    longDescription:
      "A full-stack AI prompt management platform with secure Google authentication. Users can create, edit, delete, and manage prompts efficiently.",
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
    longDescription:
      "Interactive 3D portfolio using React and Three.js to showcase projects and skills with engaging visuals.",
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
    longDescription:
      "Generate AI-based art with ArtIQnova, featuring secure authentication, payment handling, and cloud storage for generated images.",
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
    longDescription:
      "Real-time weather app with location-based forecasts, interactive maps, and responsive UI.",
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
    longDescription:
      "Summarizes articles from a URL input using OpenAI API for quick insights.",
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
    longDescription:
      "Banking UI/UX project featuring clean, interactive design for financial services applications.",
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
    longDescription:
      "Tea House UI/UX project with intuitive interface, booking system, and responsive design.",
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
    longDescription:
      "Modern UI/UX design project with interactive animations and responsive layouts.",
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
    longDescription:
      "Python Pygame project recreating the classic Snake game for interactive gameplay.",
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
    longDescription:
      "Python project using Flask and NLTK for text analysis including word counts, sentence counts, and frequent words.",
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
    longDescription:
      "Full-stack quiz platform enabling users to take quizzes, check results, and track progress. Built with MongoDB, Express, React, Node.",
    tech: ["React", "Node", "Express", "MongoDB", "TailwindCSS"],
    image: "/projects/quiz-app.png",
    demo: "https://onlinequizbyhilal.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Full Stack",
  },
  {
    slug: "note-taking-app",
    title: "Note-Taking App",
    description:
      "A simple note-taking application built with ReactJS for writing, editing, and organizing notes efficiently.",
    longDescription:
      "ReactJS app for creating, editing, and managing notes with a clean interface.",
    tech: ["React", "TailwindCSS"],
    image: "/projects/note-taking.png",
    demo: "https://note-taking-by-hilal.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Frontend",
  },
  {
    slug: "hangman",
    title: "Hangman",
    description:
      "Traditional word-guessing game Hangman, developed with React TypeScript, offering challenging gameplay.",
    longDescription:
      "Interactive Hangman game with React TypeScript, providing an engaging experience for players.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    image: "/projects/hangman.png",
    demo: "https://hangman-game-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Games",
  },
  {
    slug: "card-flip-memory-game",
    title: "Card Flip Memory Game",
    description:
      "A card flipping memory game developed with ReactJS for challenging and entertaining gameplay.",
    longDescription:
      "ReactJS memory game where players flip cards to find matching pairs. Interactive and fun.",
    tech: ["React", "TailwindCSS"],
    image: "/projects/card-flip.png",
    demo: "https://cardflip-game-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Games",
  },
  {
    slug: "random-quote-generator",
    title: "Random Quote Generator",
    description:
      "A web app built with ReactJS that fetches and displays random quotes from multiple sources.",
    longDescription:
      "ReactJS application for generating and displaying random motivational and inspirational quotes.",
    tech: ["React", "TailwindCSS", "API"],
    image: "/projects/quote-generator.png",
    demo: "https://quotes-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Frontend",
  },
  {
    slug: "pos-app",
    title: "POS App",
    description:
      "Point-of-sale front-end app built with ReactJS, streamlining sales, managing inventory, and generating reports.",
    longDescription:
      "ReactJS front-end application for small business POS management including sales, inventory, and reporting.",
    tech: ["React", "TailwindCSS"],
    image: "/projects/pos-app.png",
    demo: "https://pos-app-practice.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Frontend",
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    description:
      "Currency conversion tool built with ReactJS enabling quick conversions with up-to-date rates.",
    longDescription:
      "ReactJS app for converting currencies in real-time using live exchange rates.",
    tech: ["React", "API", "TailwindCSS"],
    image: "/projects/currency-converter.png",
    demo: "https://currencyconvert-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Frontend",
  },
  {
    slug: "fitness-quiz",
    title: "Fitness Quiz",
    description:
      "Interactive fitness quiz built with ReactJS to test knowledge on health, nutrition, and exercise.",
    longDescription:
      "ReactJS fitness quiz app allowing users to answer questions and track their knowledge on health and fitness.",
    tech: ["React", "TailwindCSS"],
    image: "/projects/fitness-quiz.png",
    demo: "https://fitness-quiz-app.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Frontend",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description:
      "Personal portfolio website developed using HTML and TailwindCSS. Fully responsive.",
    longDescription:
      "HTML & TailwindCSS based personal portfolio website to showcase projects and skills.",
    tech: ["HTML", "TailwindCSS"],
    image: "/projects/portfolio.png",
    demo: "https://devdesignerpk.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Portfolio",
  },
  {
    slug: "ahadees-app",
    title: "Ahadees App",
    description:
      "App containing Ahadees from Sahih Bukhari, developed using ReactJS.",
    longDescription:
      "ReactJS app providing easy access to Ahadees from Sahih Bukhari with a clean interface.",
    tech: ["React", "TailwindCSS"],
    image: "/projects/ahadees-app.png",
    demo: "https://ahadees-sahihbukhari.netlify.app/",
    source: "",
    featured: true,
    date: "2024-01-01",
    category: "Frontend",
  },
  {
    slug: "simple-portfolio",
    title: "Simple Portfolio",
    description:
      "A simple portfolio developed using HTML and CSS for showcasing projects and skills.",
    longDescription:
      "Basic HTML & CSS portfolio website for personal projects.",
    tech: ["HTML", "CSS"],
    image: "/projects/simple-portfolio.png",
    demo: "https://hilalayaz-portfolio-practice.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Portfolio",
  },
  {
    slug: "practice-with-redux",
    title: "Practice with Redux",
    description:
      "Simple counter app made with ReactJS using Redux for state management.",
    longDescription:
      "ReactJS app demonstrating state management using Redux for a simple counter.",
    tech: ["React", "Redux", "TailwindCSS"],
    image: "/projects/redux-practice.png",
    demo: "https://redux-prac-hilal.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Frontend",
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    description:
      "Visually appealing landing page built with ReactJS to engage visitors. Fully responsive.",
    longDescription:
      "ReactJS landing page for a gaming shop with responsive design and interactive layout.",
    tech: ["React", "TailwindCSS"],
    image: "/projects/landing-page.png",
    demo: "https://gaming-shop-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "UI/UX",
  },
  {
    slug: "rock-paper-scissors",
    title: "Rock-Paper-Scissors",
    description:
      "Classic Rock-Paper-Scissors game implemented using HTML and CSS.",
    longDescription:
      "HTML & CSS based Rock-Paper-Scissors game playable in the browser.",
    tech: ["HTML", "CSS"],
    image: "/projects/rock-paper-scissors.png",
    demo: "https://rockpaperscissor-devdesigner.netlify.app/",
    source: "",
    featured: false,
    date: "2024-01-01",
    category: "Games",
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
