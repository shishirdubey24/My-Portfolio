import { FaCertificate } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Certifications = () => {
  return (
    <div id="certifications" className="font-medium p-6 mt-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 text-sm font-medium mb-4">
          <HiSparkles className="text-lg" />
          Professional Achievements
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Certifications
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Professional certifications and achievements that validate my technical expertise
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* 🏆 JavaScript Certification */}
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="relative p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0">
                  <FaCertificate className="text-2xl text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    JavaScript Certification Test
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Completed the JavaScript Certification Test by Prashant Sir after his comprehensive YouTube course. 
                    The certification test contained **49 questions** covering a **comprehensive mixture of all JavaScript topics** 
                    including fundamentals, advanced concepts, and practical applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'ES6+', 'DOM Manipulation', 'Async Programming'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certificate Image */}
            <div className="relative p-8 lg:p-4 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="./js.jpg"
                  alt="JavaScript Certification Certificate" 
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 🏆 IIT BHU COPS WEEK */}
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="relative p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0">
                  <FaCertificate className="text-2xl text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    IIT BHU COPS WEEK 25
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Participated in the prestigious IIT BHU COPS (Computer Programming and Software) Week 25, 
                    a competitive programming and software development event. This participation demonstrates 
                    proficiency in algorithmic thinking, problem-solving, and technical implementation skills.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Competitive Programming', 'Algorithm Design', 'Problem Solving', 'IIT BHU'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certificate Image */}
            <div className="relative p-8 lg:p-4 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <img 
                  src="/Hack_Img.jpg" 
                  alt="IIT BHU COPS WEEK 25 Certificate" 
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
