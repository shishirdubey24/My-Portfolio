import { FaGraduationCap } from "react-icons/fa";
const Education = () => {
    return (
      <div id="education" className="font-medium p-6 mt-50">
        <h1 className="text-2xl font-bold text-center mb-6">Education</h1>
  
        <div className="space-y-6">
  
          {/* 🎓 Master's Degree */}
          <div className="p-4 rounded-lg border-l-4 h-40 mt-10 border-gray-900 shadow-md">
     <h2 className="text-lg font-semibold "><FaGraduationCap className="text-gray-800 w-10 h-10" />Master of Computer Applications (MCA)</h2>

           
            <p className="text-gray-600 h-10 mt-2">Dr. APJ Abdul Kalam Technical University</p>
            <p className="text-gray-500 h-10">2022 - 2024</p>
          </div>
  
          {/* 🎓 Bachelor's Degree */}
          <div className="p-4 rounded-lg border-l-4 h-40 mt-10 border-gray-900 shadow-md">
 <h2 className="text-lg font-semibold gap-20"> <FaGraduationCap className="text-gray-800 w-10 h-10" />Bachelor of Science</h2>
            <p className="text-gray-600 h-10 mt-2">KNIPSS, Sultanpur</p>
            <p className="text-gray-500 h-10">2018 - 2021</p>
          </div>
  
          {/* 🏫 12th Grade */}
          <div className="p-4 rounded-lg border-l-4  border-gray-900 shadow-md h-40 ">
<h2 className="text-lg font-semibold "> <FaGraduationCap className="text-gray-800 w-10 h-10" />Intermediate (12th Grade)</h2>
            <p className="text-gray-600 h-10 mt-2">SAIC, Khapradeeh, Faizabad</p>
            <p className="text-gray-500 h-10">Completed in 2018</p>
          </div>
  
          {/* 🏫 10th Grade */}
          <div className="p-4 rounded-lg border-l-4  border-gray-900 shadow-md h-40">
 <h2 className="text-lg font-semibold "><FaGraduationCap className="text-gray-800 w-10 h-10" />High School (10th Grade)</h2>
            <p className="text-gray-600 h-10 mt-2">RNICS, Maniyari Patti, Ambedkar Nagar</p>
            <p className="text-gray-500 h-10">Completed in 2016</p>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Education;
  