import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiCode, HiSparkles } from "react-icons/hi";
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <div id="home" className="bg-primary min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border-default border rounded-full text-secondary text-sm font-medium mb-6 animate-fade-in-down delay-300">
              <HiSparkles className="text-lg" />
              Full Stack Developer
            </div>
            
            <h1 className="text-lg font-semibold text-muted mb-2 animate-fade-in delay-200">
              Hello, I'm
            </h1>
            
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4 min-h-[4rem] md:min-h-[6rem] animate-slide-in-left delay-100">
              <Typewriter
                words={['Shishir Dubey']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                cursorColor='var(--text-muted)'
              />
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-6 min-h-[2rem] md:min-h-[3rem] animate-slide-in-left delay-200">
              <Typewriter
                words={['Freelance Full Stack Developer']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2500}
                cursorColor='var(--text-muted)'
              />
            </h3>
            
            <p className="text-lg text-secondary mb-8 leading-relaxed max-w-xl animate-fade-in delay-1000">
               I don't just ship features — I ship thoughtful solutions. From building end-to-end web, handling secure authentication to performance and SEO. I focus on writing maintainable code that actually solves real problems.
            </p>

            {/* Professional Highlights */}
            <div className="mb-8 animate-fade-in delay-1200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Responsive full-stack web apps",
                  "Scalable Infra with system flow maps",
                  "JWT auth, REST API integration",
                  "Modular architecture & Git workflow"
                ].map((text, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-3 animate-slide-in-left delay-${1500 + (index * 100)}`}
                  >
                    <div className="w-2 h-2 bg-muted rounded-full mt-2" style={{backgroundColor: 'var(--text-muted)'}}></div>
                    <span className="text-secondary">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-2000">
              <a
                href="https://www.linkedin.com/in/shishirdubey-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 hover-lift"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
              
              <a
                href="https://github.com/shishirdubey24"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 hover-lift"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in-rotate delay-500">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-2xl transform rotate-3 scale-105 animate-float" style={{backgroundColor: 'var(--border-color)'}}></div>
              
              {/* Main card */}
              <div className="portfolio-card relative transform hover:rotate-1 transition-transform duration-300 hover-scale">
                <div className="text-center">
                  {/* Profile icon/avatar area */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl flex items-center justify-center animate-pulse-once delay-800" style={{backgroundColor: 'var(--bg-primary)'}}>
                    <HiCode className="w-16 h-16" style={{color: 'var(--text-muted)'}} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-2 animate-fade-in delay-600">
                    Full Stack Developer
                  </h3>
                  <p className="text-muted mb-4 animate-fade-in delay-700">
                    Remote, India
                  </p>
                  
                  {/* Tech stack highlights */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['React.js', 'Node.js', 'MongoDB', 'Firebase'].map((tech, index) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium animate-bounce-in delay-${1000 + (index * 100)}`}
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
