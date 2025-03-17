import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:shishirdev001@gmail.com?subject=New Inquiry&body=${encodeURIComponent(
      formData.message
    )}`;
    setFormData({ email: "", message: "" });
  };

  return (
    <section className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        📞 Contact Information
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Card 1: Contact Info */}
        <div className="p-6 border-l-4 border-b-4 border-gray-300 shadow-md text-white bg-gradient-to-r from-gray-600 to-gray-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:shishirdev001@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                shishirdev001@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-400" /> 6394009920
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" /> Noida, India
            </li>
          </ul>
        </div>

        {/* Card 2: Contact Form */}
        <div className="p-6 border-l-4 border-b-4 border-gray-300 shadow-md text-white bg-gradient-to-r from-gray-600 to-gray-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-400 rounded-md bg-transparent text-white focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-400 rounded-md bg-transparent text-white focus:outline-none focus:border-blue-400"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 border border-gray-400 rounded-md text-white hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
