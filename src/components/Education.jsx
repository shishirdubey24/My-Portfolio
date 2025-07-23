import { FaGraduationCap } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Education = () => {
  return (
    <div id="education" className="font-medium p-6 mt-20  min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 text-sm font-medium mb-4">
          <HiSparkles className="text-lg" />
          Academic Journey
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Education
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          My academic background and qualifications in computer science and technology
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* 🎓 Master's Degree */}
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0">
                <FaGraduationCap className="text-2xl text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Master of Computer Applications (MCA)
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  Dr. APJ Abdul Kalam Technical University
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  2022 - 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🎓 Bachelor's Degree */}
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0">
                <FaGraduationCap className="text-2xl text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Science (Computer Science)
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  KNIPSS, Sultanpur
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  2018 - 2021
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Foundation */}
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0">
                <FaGraduationCap className="text-2xl text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Academic Foundation
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                      Intermediate (12th Grade)
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      SAIC, Khapradeeh, Faizabad • 2018
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                      High School (10th Grade)
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      RNICS, Maniyari Patti, Ambedkar Nagar • 2016
                    </p>
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

export default Education;
