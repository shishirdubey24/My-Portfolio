import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiSparkles, HiCode, HiShoppingBag } from "react-icons/hi";

const Projects = () => {
  return (
    <div id="project" className="font-medium p-6 mt-20  min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 text-sm font-medium mb-4">
          <HiSparkles className="text-lg" />
          Portfolio Showcase
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Discover my latest work featuring modern web technologies and innovative solutions
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/*  Project 1: Code Editor */}
        <div className="group relative overflow-hidden rounded-xl  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <HiCode className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Code Snippet Editor</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              A fully functional in-browser code snippet editor that supports multiple languages with real-time syntax highlighting powered by Monaco Editor.
              Includes features like autosave, local snippet storage, dynamic routing, and sharing capabilities.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['Next.js', 'React.js', 'Tailwind CSS', 'LocalStorage', 'Monaco Editor'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://editor-snippet.vercel.app/" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold transition-all duration-200 shadow-md"
              >
                <FaExternalLinkAlt className="text-sm" /> 
                Live Demo
              </a>
              <a 
                href="https://github.com/shishirdubey24/Code-Editor.git" 
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-all duration-200"
              >
                <FaGithub className="text-sm" /> 
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Features for Code Editor */}
        <div className="group relative overflow-hidden rounded-xl  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <HiSparkles className="text-gray-500 dark:text-gray-400" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '💡', text: 'Built with Monaco Editor to replicate VS Code-like experience in the browser' },
                { icon: '📂', text: 'Save snippets to localStorage with language metadata and custom titles' },
                { icon: '🚀', text: 'Implemented dynamic routing to display detailed view of each saved snippet' },
                { icon: '🔄', text: 'Auto-save logic saves in-progress code by language key' },
                { icon: '📤', text: 'Easily share snippet links using clean routes' }
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-lg">{feature.icon}</span>
                  <span className="leading-relaxed">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🚀 Project 2: Full Stack E-Commerce */}
        <div className="group relative overflow-hidden rounded-xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <HiShoppingBag className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Full Stack E-Commerce</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Developed a responsive e-commerce web application replicating Myntra's core functionalities.
              Implemented secure authentication with Appwrite, optimized state management using Redux, 
              and created a dynamic UI with React.js.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['React.js', 'Redux', 'Router', 'JavaScript', 'Bootstrap', 'Appwrite'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://trendwired.netlify.app/" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold transition-all duration-200 shadow-md"
              >
                <FaExternalLinkAlt className="text-sm" /> 
                Live Demo
              </a>
              <a 
                href="https://github.com/shishirdubey24/E-commerce-project.git" 
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-all duration-200"
              >
                <FaGithub className="text-sm" /> 
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Features for E-Commerce */}
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <HiSparkles className="text-gray-500 dark:text-gray-400" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '🔐', text: 'Implemented secure JWT authentication with Appwrite' },
                { icon: '🛍️', text: 'Optimized state management using Redux Toolkit' },
                { icon: '⚡', text: 'Built a dynamic UI leveraging React hooks' },
                { icon: '🛒', text: 'Developed an interactive shopping cart with persistence' },
                { icon: '📱', text: 'Ensured fully responsive design using Bootstrap + Flexbox' }
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-lg">{feature.icon}</span>
                  <span className="leading-relaxed">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🚀 Project 3: Shopify Custom Storefront */}
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <HiShoppingBag className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Shopify Custom Storefront</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Developed a custom Shopify storefront using Storefront API and GraphQL.
              Integrated Auth0 for authentication and Stripe for payment, enabling seamless e-commerce experience.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['Next.js', 'GraphQL', 'Shopify API', 'Tailwind CSS', 'Auth0', 'Stripe'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold transition-all duration-200 shadow-md"
              >
                <FaExternalLinkAlt className="text-sm" /> 
                Live Demo
              </a>
              <a 
                href="https://github.com/shishirdubey24/Shopify-Clone.git" 
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-all duration-200"
              >
                <FaGithub className="text-sm" /> 
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Features for Shopify */}
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <HiSparkles className="text-gray-500 dark:text-gray-400" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '🚀', text: 'Integrated Shopify Storefront API with GraphQL' },
                { icon: '🛒', text: 'Built a persistent cart system using localStorage' },
                { icon: '💳', text: 'Implemented secure Stripe payments for real transactions' },
                { icon: '🔑', text: 'Enabled Auth0-based authentication' },
                { icon: '📦', text: 'Developed an order tracking system synced with Shopify backend' }
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-lg">{feature.icon}</span>
                  <span className="leading-relaxed">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
