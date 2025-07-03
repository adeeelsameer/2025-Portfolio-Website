import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "5+ Years Experience",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: Rocket,
      title: "20+ Projects Delivered",
      description: "From startups to enterprise solutions"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams of 8+ developers"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Winner of 3 hackathons and innovation awards"
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
            Passionate software engineer with a track record of building scalable applications 
            and leading high-performing teams.
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
                <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center text-4xl font-bold text-muted-foreground">
                  AJ
                </div>
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
                I'm a passionate software engineer with over 5 years of experience building 
                scalable web applications and leading development teams. I specialize in 
                React, Node.js, and cloud architecture, with a strong focus on creating 
                user-centric products that solve real-world problems.
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