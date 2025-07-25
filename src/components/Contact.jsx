import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
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
    <div id="contact" className="font-medium p-6 mt-20 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-4">
          <HiSparkles className="text-lg" />
          Get In Touch
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Me
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Ready to start your next project? Let's discuss how we can bring your ideas to life
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Information Card */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg">
                  <FaEnvelope className="text-xl text-gray-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
                  <div className="p-2 rounded-lg">
                    <FaEnvelope className="text-lg text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:shishirdev001@gmail.com"
                      className="text-white font-medium hover:text-gray-300 transition-colors"
                    >
                      shishirdev001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
                  <div className="p-2 rounded-lg">
                    <FaPhone className="text-lg text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white font-medium">+91 6394009920</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors">
                  <div className="p-2 rounded-lg">
                    <FaMapMarkerAlt className="text-lg text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white font-medium">Noida, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 border border-gray-600 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Available for:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Freelance Projects', 'Full-time Roles', 'Collaborations', 'Consulting'].map((item) => (
                    <span key={item} className="px-3 py-1 text-gray-300 rounded-full text-sm font-medium border border-gray-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="group relative overflow-hidden rounded-xl border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg">
                  <FaPaperPlane className="text-xl text-gray-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                    style={{ backgroundColor: 'transparent' }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all resize-none"
                    style={{ backgroundColor: 'transparent' }}
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold transition-all duration-200 shadow-md"
                >
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 border border-gray-600 rounded-lg">
                <p className="text-sm text-gray-400 text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
