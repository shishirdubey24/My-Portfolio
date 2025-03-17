import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <div id="certifications" className="font-medium p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Certifications</h1>

      <div className="space-y-6">

        {/* 🏆 JavaScript Certification */}
        <div className="p-4 rounded-lg border-l-4  border-gray-900 shadow-md">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <FaCertificate className="text-blue-500" /> JavaScript Certification Test
          </h2>
          <p className="text-gray-600">
            Completed the JavaScript Certification Test by Prashant Sir after his YouTube course. 
            The test contained **49 questions** covering a **mixture of all JavaScript topics**.
          </p>
          {/* 🖼️ Certificate Image Placeholder */}
          <div className="mt-4">
            <img 
              src="./js.jpg"
              alt="JavaScript Certification" 
              className="w-50% h-80 rounded-lg shadow"
            />
          </div>
        </div>

        <div className="p-4 rounded-lg border-l-4  border-gray-900 shadow-md">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <FaCertificate className="text-blue-500" /> IIT BHU COPS WEEK 25
          </h2>
          <p className="text-gray-600">
            Paricipated into IIT BHU CPOS week nsdgnklnbjdfbnouanbroeinboregbolewrhnog
          </p>
          {/* 🖼️ Certificate Image Placeholder */}
          <div className="mt-4">
            <img 
              src="/Hack_Img.jpg" 
              alt="JavaScript Certification" 
              className="w-50% h-80 rounded-lg shadow"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certifications;
