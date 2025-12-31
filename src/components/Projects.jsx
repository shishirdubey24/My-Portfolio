import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiSparkles, HiCode, HiShoppingBag, HiServer } from "react-icons/hi";

const Projects = () => {
  const projects = [
    {
      title: "Code Snippet Editor",
      description: "A robust in-browser code editor built for developers. Features real-time syntax highlighting (Monaco), secure local storage, and instant sharing capabilities.",
      tech: ['Next.js', 'React', 'Tailwind', 'Monaco Editor'],
      live: "https://editor-snippet.vercel.app/",
      code: "https://github.com/shishirdubey24/Code-Editor.git",
      icon: <HiCode className="text-3xl" />,
      color: "from-cyan-500 to-blue-500",
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
      color: "from-lime-500 to-emerald-500",
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
      color: "from-amber-500 to-orange-500",
      features: [
        'GraphQL Data Layer',
        'Stripe Payment Integration',
        'Auth0 Identity Management',
        'Real-time Order Tracking'
      ]
    }
  ];

  return (
    <div id="project" className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-6 hover:bg-slate-800 transition-colors">
            <HiSparkles className="animate-pulse" />
            <span>Engineering Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">Digital Reality</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Showcasing high-performance applications built with modern architecture and design-first thinking.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500 flex flex-col animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl bg-slate-800/50 text-white border border-slate-700 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-cyan-500 hover:text-white rounded-xl text-slate-400 transition-all duration-300 transform hover:-translate-y-1" title="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    <a href={project.code} target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-white hover:text-black rounded-xl text-slate-400 transition-all duration-300 transform hover:-translate-y-1" title="Source Code">
                      <FaGithub className="text-lg" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mt-auto pt-6 border-t border-slate-800">
                  <h4 className="text-xs font-semibold uppercase text-slate-500 mb-3 tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
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
