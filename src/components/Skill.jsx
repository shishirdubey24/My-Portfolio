import { FaCode, FaToolbox, FaDatabase, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once animations have been triggered
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "-50px 0px -50px 0px" // Adjust trigger point
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div 
      id="skill" 
      ref={skillsRef}
      className="font-medium p-6 mt-20 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      {/* Header Section */}
      <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 text-sm font-medium mb-4 ${isVisible ? 'animate-fade-in-down delay-300' : 'opacity-0'}`}>
          <HiSparkles className="text-lg" />
          Technical Skills
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
          My Skills
        </h1>
        <p className={`text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
          A comprehensive overview of my technical expertise and tools I work with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        
        {/* Programming Languages */}
        <div className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift ${isVisible ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
          <div className="relative p-6">
            <div className={`flex items-center gap-3 mb-6 ${isVisible ? 'animate-fade-in delay-600' : 'opacity-0'}`}>
              <div className={`p-2 bg-gray-100 dark:bg-gray-700 rounded-lg ${isVisible ? 'animate-pulse-once delay-800' : ''}`}>
                <FaCode className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Programming Languages</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {['C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map((skill, index) => (
                <span 
                  key={skill} 
                  className={`px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-center hover-scale ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${700 + (index * 50)}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift ${isVisible ? 'animate-scale-in delay-500' : 'opacity-0'}`}>
          <div className="relative p-6">
            <div className={`flex items-center gap-3 mb-6 ${isVisible ? 'animate-fade-in delay-700' : 'opacity-0'}`}>
              <div className={`p-2 bg-gray-100 dark:bg-gray-700 rounded-lg ${isVisible ? 'animate-pulse-once delay-900' : ''}`}>
                <FaReact className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Technologies</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {['React.js', 'Next.js', 'Redux', 'React Router', 'Bootstrap', 'Tailwind CSS', 'Shadcn/UI'].map((skill, index) => (
                <span 
                  key={skill} 
                  className={`px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-center hover-scale ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${800 + (index * 50)}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Backend & Runtime */}
        <div className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift ${isVisible ? 'animate-scale-in delay-600' : 'opacity-0'}`}>
          <div className="relative p-6">
            <div className={`flex items-center gap-3 mb-6 ${isVisible ? 'animate-fade-in delay-800' : 'opacity-0'}`}>
              <div className={`p-2 bg-gray-100 dark:bg-gray-700 rounded-lg ${isVisible ? 'animate-pulse-once delay-1000' : ''}`}>
                <SiNextdotjs className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Backend & Runtime</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {['Node.js', 'Express.js', 'Next.js API', 'REST APIs'].map((skill, index) => (
                <span 
                  key={skill} 
                  className={`px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-center hover-scale ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${900 + (index * 50)}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Database */}
        <div className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift ${isVisible ? 'animate-scale-in delay-700' : 'opacity-0'}`}>
          <div className="relative p-6">
            <div className={`flex items-center gap-3 mb-6 ${isVisible ? 'animate-fade-in delay-900' : 'opacity-0'}`}>
              <div className={`p-2 bg-gray-100 dark:bg-gray-700 rounded-lg ${isVisible ? 'animate-pulse-once delay-1100' : ''}`}>
                <FaDatabase className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Database</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {['MySQL', 'MongoDB', 'Firebase', 'Appwrite'].map((skill, index) => (
                <span 
                  key={skill} 
                  className={`px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-center hover-scale ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${1000 + (index * 50)}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 hover-lift ${isVisible ? 'animate-slide-in-left delay-800' : 'opacity-0'}`}>
          <div className="relative p-6">
            <div className={`flex items-center gap-3 mb-6 ${isVisible ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
              <div className={`p-2 bg-gray-100 dark:bg-gray-700 rounded-lg ${isVisible ? 'animate-pulse-once delay-1200' : ''}`}>
                <FaToolbox className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tools & Platforms</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Git', 'GitHub', 'AWS', 'Vite', 'Cursor (GenAI)', 'Vibe Coding', 'Vercel', 'Netlify'].map((skill, index) => (
                <span 
                  key={skill} 
                  className={`px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-center hover-scale ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${1100 + (index * 50)}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Development Workflow */}
        <div className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 hover-lift ${isVisible ? 'animate-slide-in-right delay-1000' : 'opacity-0'}`}>
          <div className="relative p-6">
            <div className={`flex items-center gap-3 mb-6 ${isVisible ? 'animate-fade-in delay-1200' : 'opacity-0'}`}>
              <div className={`p-2 bg-gray-100 dark:bg-gray-700 rounded-lg ${isVisible ? 'animate-pulse-once delay-1400' : ''}`}>
                <HiSparkles className="text-xl text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Development Workflow</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Agile', 'CI/CD', 'Testing', 'Code Review', 'Documentation', 'Performance Optimization', 'Responsive Design', 'SEO'].map((skill, index) => (
                <span 
                  key={skill} 
                  className={`px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-center hover-scale ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${1300 + (index * 50)}ms` : '0ms' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
