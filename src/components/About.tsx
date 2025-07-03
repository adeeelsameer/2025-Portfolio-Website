import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
    icon: Rocket,
    title: "AI Innovator",
    description: "Built AI apps and automations"
    },
    {
        icon: Code2,
        title: "Full-Stack Skills",
        description: "React, Next.js, Flask, Python"
    },
    {
        icon: Users,
        title: "Multi-Domain Experience",
        description: "AI, robotics, VC tech, SaaS"
    },
    {
        icon: Award,
        title: "Hackathons",
        description: "Projects with real-world impact"
    }
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software engineer passionate about AI, robotics, and automation. Skilled at building scalable solutions and collaborating in high-performing teams.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative bg-glass-card rounded-2xl p-8 border border-primary/20">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <img
                className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                src="/images/muhammad-adil-sameer-pfp.jpg"
                alt="Muhammad Adil Sameer"
                />
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full blur-sm"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Bio and highlights */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-glass-card rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I’m a passionate software engineer with hands-on experience in AI, automation, robotics, and SaaS, building scalable applications with technologies like React, Next.js, Node.js, Python, and Flask. I love solving real-world problems and creating user-focused solutions that make a genuine impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{highlight.title}</h4>
                      <p className="text-muted-foreground text-xs">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;