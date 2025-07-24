import {
  FaCode,
  FaToolbox,
  FaDatabase,
  FaReact
} from "react-icons/fa";
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
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "-50px 0px -50px 0px" }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const Section = ({ icon: Icon, title, items, delay = 400 }) => (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift ${
        isVisible ? `animate-scale-in delay-${delay}` : "opacity-0"
      }`}
    >
      <div className="p-6">
        <div
          className={`flex items-center gap-3 mb-6 ${
            isVisible ? `animate-fade-in delay-${delay + 200}` : "opacity-0"
          }`}
        >
          <div
            className={`p-2 bg-gray-600 rounded-lg ${
              isVisible ? `animate-pulse-once delay-${delay + 400}` : ""
            }`}
          >
            {Icon && <Icon className="text-xl text-gray-300" />}
          </div>
          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {items.map((skill, index) => (
            <span
              key={skill}
              className={`px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium border border-gray-700 hover:border-gray-500 transition-colors text-center hover-scale ${
                isVisible ? "animate-bounce-in" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible
                  ? `${delay + 500 + index * 50}ms`
                  : "0ms"
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="skill"
      ref={skillsRef}
      className="min-h-screen w-full text-white py-20 px-6"
      style={{background: 'transparent'}}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-4 ${
              isVisible ? "animate-fade-in-down delay-300" : "opacity-0"
            }`}
          >
            <HiSparkles className="text-lg" />
            Technical Skills
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-4 ${
              isVisible ? "animate-fade-in delay-100" : "opacity-0"
            }`}
          >
            My Skills
          </h1>
          <p
            className={`text-gray-300 max-w-2xl mx-auto text-lg ${
              isVisible ? "animate-fade-in delay-200" : "opacity-0"
            }`}
          >
            A comprehensive overview of my technical expertise and tools I work
            with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <Section
            icon={FaCode}
            title="Programming Languages"
            items={[
              "C",
              "C++",
              "Java",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS"
            ]}
            delay={400}
          />
          <Section
            icon={FaReact}
            title="Frontend Technologies"
            items={[
              "React.js",
              "Next.js",
              "Redux",
              "React Router",
              "Bootstrap",
              "Tailwind CSS",
              "Shadcn/UI"
            ]}
            delay={500}
          />
          <Section
            icon={SiNextdotjs}
            title="Backend & Runtime"
            items={["Node.js", "Express.js", "Next.js API", "REST APIs"]}
            delay={600}
          />
          <Section
            icon={FaDatabase}
            title="Database"
            items={["MySQL", "MongoDB", "Firebase", "Appwrite"]}
            delay={700}
          />
          <Section
            icon={FaToolbox}
            title="Tools & Platforms"
            items={[
              "Git",
              "GitHub",
              "AWS",
              "Vite",
              "Cursor (GenAI)",
              "Vibe Coding",
              "Vercel",
              "Netlify"
            ]}
            delay={800}
          />
          <Section
            icon={HiSparkles}
            title="Development Workflow"
            items={[
              "Agile",
              "CI/CD",
              "Testing",
              "Code Review",
              "Documentation",
              "Performance Optimization",
              "Responsive Design",
              "SEO"
            ]}
            delay={900}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;