import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiSparkles, HiCode, HiShoppingBag, HiServer } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "-50px 0px -50px 0px" }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  const projects = [
    {
      title: "Code Snippet Editor",
      description: "A robust in-browser code editor built for developers. Features real-time syntax highlighting (Monaco), secure local storage, and instant sharing capabilities.",
      tech: ['Next.js', 'React', 'Tailwind', 'Monaco Editor'],
      live: "https://editor-snippet.vercel.app/",
      code: "https://github.com/shishirdubey24/Code-Editor.git",
      icon: <HiCode className="text-3xl" />,
      color: "from-brand-primary to-brand-secondary",
      features: [
        'VS Code-like editing experience',
        'Local snippet persistence',
        'Shareable dynamic links',
        'Language-aware autosaving'
      ]
    },
    {
      title: "TrendWired E-Commerce",
      description: "A full-feature shopping platform replicating modern e-commerce flows. Includes secure cart management, user authentication, and responsive product filtering.",
      tech: ['React', 'Redux Toolkit', 'Appwrite', 'Bootstrap'],
      live: "https://trendwired.netlify.app/",
      code: "https://github.com/shishirdubey24/E-commerce-project.git",
      icon: <HiShoppingBag className="text-3xl" />,
      color: "from-brand-secondary to-brand-tertiary",
      features: [
        'Secure Appwrite Authentication',
        'Redux State Management',
        'Persistent Cart System',
        'Responsive Mobile Layout'
      ]
    },
    {
      title: "Shopify Headless Store",
      description: "High-performance headless commerce solution using Shopify Storefront API. Decoupled frontend for maximum speed and customization.",
      tech: ['Next.js', 'GraphQL', 'Shopify API', 'Tailwind'],
      live: null,
      code: "https://github.com/shishirdubey24/Shopify-Clone.git",
      icon: <HiServer className="text-3xl" />,
      color: "from-brand-tertiary to-brand-primary",
      features: [
        'GraphQL Data Layer',
        'Stripe Payment Integration',
        'Auth0 Identity Management',
        'Real-time Order Tracking'
      ]
    }
  ];

  return (
    <div id="project" ref={projectsRef} className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`mb-20 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-brand-primary text-sm font-semibold uppercase tracking-wider mb-6 hover:bg-brand-surface/80 transition-colors">
            <HiSparkles className="animate-pulse" />
            <span>Engineering Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tighter">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            A selection of my recent <span className="text-white font-medium">technical works</span> and solutions.
          </p>
        </div>

        {/* Projects List - One per row */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-brand-surface border border-brand-border/50 rounded-2xl overflow-hidden hover:border-white transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] max-w-5xl mx-auto w-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b ${project.color} transition-all duration-300`}></div>

              <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-start">

                {/* Action Side - Ultra Compact Row */}
                <div className="w-full lg:w-1/4 flex flex-row gap-4 mb-4 lg:mb-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 lg:flex-none flex flex-col items-center justify-center p-2 min-w-[80px] rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group/live shadow-md"
                    >
                      <FaExternalLinkAlt className="text-base mb-1 group-hover/live:scale-110 transition-transform" />
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] whitespace-nowrap">Live</span>
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 lg:flex-none flex flex-col items-center justify-center p-2 min-w-[80px] rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group/code"
                  >
                    <FaGithub className="text-xl mb-1 group-hover/code:scale-110 transition-transform" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] whitespace-nowrap">Repo</span>
                  </a>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-3/4 flex flex-col">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-base font-normal mb-5">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg group-hover:border-white/30 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features Highlight */}
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-brand-primary"></span>
                      Engineering Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-md bg-white/5 flex items-center justify-center border border-white/10 text-[10px] font-bold`}>
                            {i + 1}
                          </div>
                          <span className="text-sm text-slate-300">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
