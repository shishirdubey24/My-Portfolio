import {
  FaCode,
  FaToolbox,
  FaDatabase,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";
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

  const Section = ({ icon: Icon, title, items, delay = 0, colorClass = "text-brand-primary", borderClass = "hover:border-brand-primary/50" }) => (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-brand-surface/50 border border-brand-border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${borderClass} ${isVisible ? `animate-fade-in-up` : "opacity-0"
        }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Gradient */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-transparent blur-2xl -z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100`}></div>

      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl bg-brand-dark border border-brand-border ${colorClass}`}>
          {Icon && <Icon className="text-2xl" />}
        </div>
        <h2 className="text-xl font-bold text-slate-100 tracking-wide">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-brand-dark text-slate-400 rounded-lg text-sm font-medium border border-brand-border hover:text-white hover:border-brand-primary/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skill"
      ref={skillsRef}
      className="min-h-screen w-full py-20 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4`}
              >
                <HiSparkles />
                Tech Stack
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                My <span className="text-brand-primary">Arsenal</span>
              </h1>
              <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
                A comprehensive look at the technologies I use to build scalable, high-performance web applications.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Frontend - Cyan/Blue */}
          <div className="lg:col-span-2">
            <Section
              icon={FaReact}
              title="Frontend Ecosystem"
              colorClass="text-brand-primary"
              borderClass="hover:border-brand-primary/50"
              items={[
                "React.js", "Next.js 14", "TypeScript", "Tailwind CSS",
                "Redux Toolkit", "Framer Motion", "Shadcn/UI", "Vite"
              ]}
              delay={100}
            />
          </div>

          {/* Backend - Lime/Green */}
          <div className="lg:row-span-2">
            <Section
              icon={FaNodeJs}
              title="Backend Infrastructure"
              colorClass="text-brand-secondary"
              borderClass="hover:border-brand-secondary/50"
              items={[
                "Node.js", "Express.js", "RESTful APIs", "GraphQL",
                "JWT Auth", "Microservices", "Serverless"
              ]}
              delay={200}
            />
            <div className="h-6"></div> {/* Spacer for grid alignment if needed, or just standard flex gap */}
            <Section
              icon={SiMongodb}
              title="Database & Cloud"
              colorClass="text-brand-secondary"
              borderClass="hover:border-brand-secondary/50"
              items={[
                "MongoDB", "Mongoose", "PostgreSQL", "Firebase",
                "Appwrite", "Supabase", "AWS S3"
              ]}
              delay={300}
            />
          </div>

          {/* Languages - Yellow/Amber */}
          <Section
            icon={SiJavascript}
            title="Core Languages"
            colorClass="text-brand-primary"
            borderClass="hover:border-brand-primary/50"
            items={[
              "JavaScript (ES6+)", "TypeScript", "Java", "C++", "Python Basics"
            ]}
            delay={400}
          />

          {/* Tools - Slate/Gray */}
          <Section
            icon={FaToolbox}
            title="DevOps & Tools"
            colorClass="text-brand-tertiary"
            borderClass="hover:border-brand-tertiary/50"
            items={[
              "Git & GitHub", "Docker", "CI/CD", "Vercel", "Netlify",
              "Postman", "VS Code", "Figma"
            ]}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;