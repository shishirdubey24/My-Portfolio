import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="project" className="font-medium p-6 mt-70">
      <h1 className="text-2xl font-bold text-center mb-6">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* 🚀 Project 1: Full Stack E-Commerce */}
        <div className="p-6 rounded-lg shadow-lg w-full bg-gradient-to-r from-gray-500 to-gray-900 text-white">
          <h2 className="text-xl font-semibold mb-3">Full Stack E-Commerce</h2>
          <p>
            Developed a responsive e-commerce web application replicating Myntra's core functionalities.
            Implemented secure authentication with Appwrite, optimized state management using Redux, 
            and created a dynamic UI with React.js.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">React.js</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Redux</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Router</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">JavaScript</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Bootstrap</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Appwrite</span>
          </div>
          <div className="mt-4 flex gap-4">


                {/*  Live Link*/}

            <a href="https://trendwired.netlify.app//" className="flex items-center gap-2 px-4 py-2 border rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition">
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a href="https://github.com/shishirdubey24/E-commerce-project.git" className="flex items-center gap-2 px-4 py-2 border rounded-lg text-white bg-gray-800 hover:bg-black transition">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
                   {/*  Feature Section*/}
        <div className="p-6 rounded-lg shadow-lg border w-full">
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>🔐 Implemented secure **JWT authentication** with Appwrite for user login and signup.</li>
            <li>🛍️ Optimized state management using **Redux Toolkit**, ensuring seamless cart updates and data flow.</li>
            <li>⚡ Built a **highly dynamic UI using React.js**, leveraging hooks and context for reactivity.</li>
            <li>🛒 Developed an **interactive shopping cart system** that persists user selections across sessions.</li>
            <li>📱 Ensured a **fully responsive design** using **CSS Grid, Flexbox, and Bootstrap utilities**.</li>
          </ul>
        </div>

        {/* 🚀 Project 2: Shopify Custom Storefront */}
        <div className="p-6 rounded-lg shadow-lg w-full bg-gradient-to-r from-gray-500 to-gray-900 text-white">
          <h2 className="text-xl font-semibold mb-3">Shopify Custom Storefront</h2>
          <p>
            Developed a custom Shopify storefront integrated with Shopify's Storefront API, 
            enabling seamless product listing, cart management, and checkout functionalities.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Next.js</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">GraphQL</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Shopify API</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Tailwind CSS</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Auth0</span>
            <span className="px-3 py-1 border rounded-md text-white border-gray-400">Stripe</span>
          </div>
          <div className="mt-4 flex gap-4">
            <a href="#" className="flex items-center gap-2 px-4 py-2 border rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition">
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a href="https://github.com/shishirdubey24/Shopify-Clone.git" className="flex items-center gap-2 px-4 py-2 border rounded-lg text-white bg-gray-800 hover:bg-black transition">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg border w-full">
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>🚀 Integrated **Shopify Storefront API** with GraphQL to dynamically fetch and display product data.</li>
            <li>🛒 Built a **custom cart system** with local storage, ensuring persistent cart data for users.</li>
            <li>💳 Implemented **secure Stripe payments** for seamless checkout and transaction processing.</li>
            <li>🔑 Added **user authentication via Auth0**, allowing customers to log in and track orders.</li>
            <li>📦 Developed an **order tracking system** that syncs real-time updates from Shopify's backend.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Projects;
