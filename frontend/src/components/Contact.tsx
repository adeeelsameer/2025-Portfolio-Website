import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, Phone, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL as string;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const res = await fetch(`${API_BASE}/api/send-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
            });

            if (res.ok) {
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSent(true);
            setTimeout(() => setIsSent(false), 10000); // "Sent" state for 10 seconds
        } else {
            alert("Failed to send message. Please try again later.");
        }
        } catch (err) {
            alert("Error: " + (err as Error).message);
        }

        setIsSubmitting(false);
    };


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adil.fall2023@gmail.com",
      href: "mailto:adil.fall2023@gmail.com"
    },

    {
      icon: MapPin,
      label: "Location",
      value: "Vancouver, BC, Canada",
      href: "https://www.google.com/maps/place/Vancouver,+BC,+Canada"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-adil-sameer/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/adeeelsameer", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/adeeelsameer", label: "Instagram" }
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-glass-card border border-primary/20 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 border border-primary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 border border-primary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-primary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  placeholder="Project discussion"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-primary/30 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                    <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                    </>
                ) : isSent ? (
                    <>
                    <Send className="w-5 h-5" />
                    Sent!
                    </>
                ) : (
                    <>
                    <Send className="w-5 h-5" />
                    Send Message
                    </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-glass-card border border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-200">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-glass-card border border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6">Follow Me</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-4 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-primary rounded-xl p-6 text-white"
            >
              <h4 className="text-lg font-bold mb-2">Connect with me!</h4>
              <p className="text-white/90 text-sm">
                Let’s chat about tech, projects, or opportunities!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;