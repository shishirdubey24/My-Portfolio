import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiCode, HiSparkles } from "react-icons/hi";
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <div id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-6 animate-fade-in-down delay-100" style={{ backgroundColor: 'rgba(55, 65, 81, 0.3)', backdropFilter: 'blur(8px)' }}>
              <HiSparkles className="text-lg" />
              Full Stack Developer
            </div>
            
            <h1 className="text-lg font-semibold text-gray-300 mb-2 animate-fade-in delay-100">
              Hello, I'm
            </h1>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 min-h-[4rem] md:min-h-[6rem] animate-slide-in-left delay-100">
              <Typewriter
                words={['Shishir Dubey']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                cursorColor='rgb(156 163 175)'
              />
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 min-h-[2rem] md:min-h-[3rem] animate-slide-in-left delay-200">
              <Typewriter
                words={['Freelance Full Stack Developer']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2500}
                cursorColor='rgb(156 163 175)'
              />
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl animate-fade-in delay-200">
               I don't just ship features — I ship thoughtful solutions. From building end-to-end web, handling secure authentication to performance and SEO. I focus on writing maintainable code that actually solves real problems.
            </p>

            {/* Professional Highlights */}
            <div className="mb-8 animate-fade-in delay-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Responsive full-stack web apps",
                  "Scalable Infra with system flow maps",
                  "JWT auth, REST API integration",
                  "Modular architecture & Git workflow"
                ].map((text, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 animate-slide-in-left delay-300"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
              <a
                href="https://www.linkedin.com/in/shishirdubey-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-500 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-200 hover-lift"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
              
              <a
                href="https://github.com/shishirdubey24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-500 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-200 hover-lift"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in-rotate delay-200">
            <div className="relative">
              {/* Floating background card for depth */}
              <div className="absolute inset-0 rounded-2xl transform rotate-2 scale-105 shadow-md animate-float" style={{ backgroundColor: 'rgba(55, 65, 81, 0.2)', backdropFilter: 'blur(4px)' }}></div>

              {/* Foreground main card */}
              <div className="relative rounded-2xl p-8 shadow-xl transform hover:rotate-1 transition-transform duration-300 hover-scale border border-gray-600" style={{ backgroundColor: 'rgba(31, 41, 55, 0.4)', backdropFilter: 'blur(12px)' }}>
                <div className="text-center">
                  {/* Avatar / Icon */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl flex items-center justify-center animate-pulse-once delay-200 border border-gray-600" style={{ backgroundColor: 'rgba(75, 85, 99, 0.3)', backdropFilter: 'blur(8px)' }}>
                    <HiCode className="w-16 h-16 text-gray-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-2 animate-fade-in delay-200">
                    Full Stack Developer
                  </h3>

                  {/* Location */}
                  <p className="text-gray-300 mb-4 animate-fade-in delay-200">
                    Remote, India
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['React.js', 'Node.js', 'MongoDB', 'Firebase'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-gray-300 border border-gray-600 rounded-full text-sm font-medium animate-bounce-in delay-300"
                        style={{ backgroundColor: 'rgba(31, 41, 55, 0.5)', backdropFilter: 'blur(6px)' }}
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
