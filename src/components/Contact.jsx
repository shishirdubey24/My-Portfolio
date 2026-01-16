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
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <HiSparkles />
          Contact
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Get in <span className="text-brand-primary">Touch</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Ready to build something amazing? Let's discuss your next project.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Contact Information Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-brand-dark border border-brand-border text-brand-primary">
                  <FaEnvelope className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-100">Contact Information</h2>
              </div>

              <div className="space-y-6">
                {[
                  { icon: FaEnvelope, title: 'Email', value: 'shishirdev001@gmail.com', href: 'mailto:shishirdev001@gmail.com' },
                  { icon: FaPhone, title: 'Phone', value: '+91 6394009920', href: '#' },
                  { icon: FaMapMarkerAlt, title: 'Location', value: 'Noida, India', href: '#' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-brand-border bg-brand-dark/50 hover:border-brand-primary/50 transition-colors group/item">
                    <div className="p-3 rounded-lg bg-brand-surface text-slate-400 group-hover/item:text-brand-primary transition-colors">
                      <item.icon className="text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{item.title}</p>
                      {item.href !== '#' ? (
                        <a href={item.href} className="text-slate-200 font-medium hover:text-brand-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-200 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 border border-brand-border rounded-xl bg-gradient-to-br from-brand-tertiary/20 to-brand-surface/20">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">
                  Available for:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Freelance Projects', 'Full-time Roles', 'Collaborations', 'Consulting'].map((item) => (
                    <span key={item} className="px-3 py-1 text-brand-primary bg-brand-primary/10 rounded-full text-sm font-medium border border-brand-primary/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-brand-dark border border-brand-border text-brand-primary">
                  <FaPaperPlane className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-100">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-400 font-medium mb-2 text-sm uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-2 text-sm uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-brand-dark border border-brand-border rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all resize-none font-medium"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-primary hover:bg-brand-secondary text-black rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1"
                >
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  I typically respond within 24 hours.
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
