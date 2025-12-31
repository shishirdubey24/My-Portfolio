import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiCode, HiSparkles } from "react-icons/hi";
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <div id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 animate-fade-in-down delay-100">
              <HiSparkles className="text-lg" />
              <span>Ready to Build</span>
            </div>

            <h1 className="text-lg font-medium text-slate-400 mb-2 animate-fade-in delay-100">
              Hello, I'm
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 min-h-[4rem] md:min-h-[6rem] animate-slide-in-left delay-100 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-500">
                <Typewriter
                  words={['Shishir Dubey']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursorColor='#06b6d4'
                />
              </span>
            </h2>

            <h3 className="text-xl md:text-2xl font-medium text-slate-300 mb-6 min-h-[2rem] md:min-h-[3rem] animate-slide-in-left delay-200">
              <span className="text-cyan-500">/</span>{' '}
              <Typewriter
                words={['MERN Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2500}
                cursorColor='#84cc16'
              />
            </h3>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl animate-fade-in delay-200">
              Crafting pixel-perfect web experiences with modern technologies. I specialize in building scalable, secure, and performant applications using the <span className="text-cyan-400 font-medium">MERN Stack</span>. Let's turn your vision into code.
            </p>

            {/* Professional Highlights */}
            <div className="mb-8 animate-fade-in delay-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Full-Stack Architecture",
                  "Performance Optimization",
                  "Secure Authentication",
                  "Responsive Design"
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-slide-in-left group"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">{text}</span>
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
                className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1"
              >
                <FaLinkedin className="text-lg" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/shishirdubey24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/5"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Content - VS Code Snippet */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in-rotate delay-200 relative">
            <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-slate-700 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:border-cyan-500/30 w-full max-w-md group transition-all duration-300">
              {/* VS Code Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252525] border-b border-[#1e1e1e]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                  <HiCode className="text-cyan-400" />
                  apiService.js
                </div>
                <div className="w-10"></div>
              </div>

              {/* Code Area */}
              <div className="p-6 overflow-hidden">
                <pre className="font-mono text-sm leading-8">
                  <code className="block">
                    {[
                      { line: 1, content: <span><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">fetchUserData</span> <span className="text-slate-200">=</span> <span className="text-[#c678dd]">async</span> <span className="text-[#ffd700]">(</span><span className="text-[#e06c75]">userId</span><span className="text-[#ffd700]">)</span> <span className="text-[#c678dd]">=&gt;</span> <span className="text-[#ffd700]">{`{`}</span></span> },
                      { line: 2, content: <span className="pl-4"><span className="text-[#c678dd]">try</span> <span className="text-[#ffd700]">{`{`}</span></span> },
                      { line: 3, content: <span className="pl-8"><span className="text-[#7f848e] italic">// Check local cache first</span></span> },
                      { line: 4, content: <span className="pl-8"><span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">cached</span> <span className="text-slate-200">=</span> <span className="text-[#e5c07b]">localStorage</span><span className="text-slate-200">.</span><span className="text-[#61afef]">getItem</span><span className="text-[#ffd700]">(</span><span className="text-[#e06c75]">userId</span><span className="text-[#ffd700]">)</span><span className="text-slate-200">;</span></span> },
                      { line: 5, content: <span className="pl-8"><span className="text-[#c678dd]">if</span> <span className="text-[#ffd700]">(</span><span className="text-[#e06c75]">cached</span><span className="text-[#ffd700]">)</span> <span className="text-[#c678dd]">return</span> <span className="text-[#e5c07b]">JSON</span><span className="text-slate-200">.</span><span className="text-[#61afef]">parse</span><span className="text-[#ffd700]">(</span><span className="text-[#e06c75]">cached</span><span className="text-[#ffd700]">)</span><span className="text-slate-200">;</span></span> },
                      { line: 6, content: <span className="pl-8"></span> },
                      { line: 7, content: <span className="pl-8"><span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">res</span> <span className="text-slate-200">=</span> <span className="text-[#c678dd]">await</span> <span className="text-[#61afef]">fetch</span><span className="text-[#ffd700]">(</span><span className="text-[#98c379]">{`/api/users/`}<span className="text-[#e06c75]">${`{userId}`}</span></span><span className="text-[#ffd700]">)</span><span className="text-slate-200">;</span></span> },
                      { line: 8, content: <span className="pl-8"><span className="text-[#c678dd]">if</span> <span className="text-[#ffd700]">(</span><span className="text-slate-200">!</span><span className="text-[#e06c75]">res</span><span className="text-slate-200">.</span><span className="text-[#e06c75]">ok</span><span className="text-[#ffd700]">)</span> <span className="text-[#c678dd]">throw</span> <span className="text-[#c678dd]">new</span> <span className="text-[#e5c07b]">Error</span><span className="text-[#ffd700]">(</span><span className="text-[#98c379]">'Failed'</span><span className="text-[#ffd700]">)</span><span className="text-slate-200">;</span></span> },
                      { line: 9, content: <span className="pl-8"><span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">data</span> <span className="text-slate-200">=</span> <span className="text-[#c678dd]">await</span> <span className="text-[#e06c75]">res</span><span className="text-slate-200">.</span><span className="text-[#61afef]">json</span><span className="text-[#ffd700]">()</span><span className="text-slate-200">;</span></span> },
                      { line: 10, content: <span className="pl-8"><span className="text-[#e5c07b]">localStorage</span><span className="text-slate-200">.</span><span className="text-[#61afef]">setItem</span><span className="text-[#ffd700]">(</span><span className="text-[#e06c75]">userId</span><span className="text-slate-200">,</span> <span className="text-[#e5c07b]">JSON</span><span className="text-slate-200">.</span><span className="text-[#61afef]">stringify</span><span className="text-[#ffd700]">(</span><span className="text-[#e06c75]">data</span><span className="text-[#ffd700]">))</span><span className="text-slate-200">;</span></span> },
                      { line: 11, content: <span className="pl-8"><span className="text-[#c678dd]">return</span> <span className="text-[#e06c75]">data</span><span className="text-slate-200">;</span></span> },
                      { line: 12, content: <span className="pl-4"><span className="text-[#ffd700]">{`}`}</span> <span className="text-[#c678dd]">catch</span> <span className="text-[#ffd700]">(</span><span className="text-[#e06c75]">err</span><span className="text-[#ffd700]">)</span> <span className="text-[#ffd700]">{`{`}</span> <span className="text-[#e5c07b]">console</span><span className="text-slate-200">.</span><span className="text-[#61afef]">error</span><span className="text-[#ffd700]">(</span><span className="text-[#e06c75]">err</span><span className="text-[#ffd700]">)</span><span className="text-slate-200">;</span> <span className="text-[#ffd700]">{`}`}</span></span> },
                      { line: 13, content: <span><span className="text-[#ffd700]">{`}`}</span><span className="text-slate-200">;</span></span> }
                    ].map((item, index) => (
                      <div
                        key={item.line}
                        className="flex animate-bg-fade"
                        style={{ animationDuration: '1s', animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards', animationName: 'fade-in-up' }}
                      >
                        <span className="text-slate-600 mr-4 select-none w-4 text-right inline-block">{item.line}</span>
                        <span className="flex-1">{item.content}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
