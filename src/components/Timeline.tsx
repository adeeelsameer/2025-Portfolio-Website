import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Timeline = () => {
  const experiences = [
    {
      company: "TechCorp Inc.",
      role: "Senior Software Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Led development of microservices architecture serving 2M+ users. Reduced system latency by 40% and improved code coverage to 95%.",
      logo: "TC",
      achievements: ["Led team of 8 developers", "Architected scalable systems", "Mentored junior developers"]
    },
    {
      company: "Innovation Labs",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "Austin, TX",
      description: "Built end-to-end web applications using React, Node.js, and AWS. Delivered 15+ projects on time and under budget.",
      logo: "IL",
      achievements: ["Full-stack development", "AWS cloud deployment", "Agile methodology"]
    },
    {
      company: "StartupXYZ",
      role: "Frontend Developer",
      duration: "2019 - 2020",
      location: "Remote",
      description: "Developed responsive web applications and improved user engagement by 60% through UI/UX optimizations.",
      logo: "SX",
      achievements: ["React development", "UI/UX optimization", "Performance tuning"]
    },
    {
      company: "Digital Agency",
      role: "Junior Developer",
      duration: "2018 - 2019",
      location: "New York, NY",
      description: "Started my journey in web development, working on client projects and learning modern development practices.",
      logo: "DA",
      achievements: ["JavaScript fundamentals", "Client communication", "Code reviews"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-subtle-pattern" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Experience Timeline
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey through the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-accent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative mb-12 ml-20"
            >
              {/* Timeline dot */}
              <div className="absolute -left-14 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
              
              {/* Company logo */}
              <motion.div
                className="absolute -left-20 top-2 w-8 h-8 bg-glass-card border border-primary/30 rounded-lg flex items-center justify-center text-xs font-bold text-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {exp.logo}
              </motion.div>

              {/* Content card */}
              <motion.div
                className="bg-glass-card border border-primary/20 rounded-xl p-6 hover:shadow-glow transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gradient">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-primary">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;