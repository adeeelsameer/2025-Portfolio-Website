import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Timeline = () => {
  const experiences = [
    {
    company: "Icon Ventures",
    role: "Software Engineer Intern",
    duration: "June 2025 - August 2025",
    location: "Palo Alto, CA, USA (Remote)",
    logo: "IV",
    description: "Built AI-driven automations using n8n, integrating LLMs and APIs to reduce manual VC research time.",
    achievements: [
        "n8n",
        "JavaScript",
        "Python",
        "Automation development",
        "LLM integration",
        "API integration",
    ]
    },
    {
    company: "Real Life Robotics",
    role: "Robot Guide",
    duration: "June 2025 - August 2025",
    location: "Markham, ON, Canada",
    logo: "RL",
    description: "Ensured reliable robot navigation and reported technical issues to engineering teams, helping optimize delivery routes.",
    achievements: [
        "Robotics",
        "Troubleshooting",
        "Incident triage",
        "Operational feedback"
    ]
    },
    {
    company: "Mannai Infotech",
    role: "Software Engineer Intern",
    duration: "May 2025 - June 2025",
    location: "Doha, Qatar",
    logo: "MI",
    description: "Developed a Retrieval-Augmented Generation app for automating RFP document review using React, Flask, and OpenAI tools.",
    achievements: [
        "React.js",
        "Flask",
        "LangChain",
        "ChromaDB",
        "Docker",
        "Google Cloud Platform"
    ]
    },
    {
    company: "Visual Cognition Lab, UBC",
    role: "Software Developer",
    duration: "January 2025 - May 2025",
    location: "Vancouver, BC, Canada",
    logo: "VC",
    description: "Maintained and improved the research lab website with modern web technologies.",
    achievements: [
        "React.js",
        "TypeScript",
        "Express.js",
        "MongoDB"
    ]
    },
    {
    company: "Data Science Club, UBC",
    role: "UI/UX Developer",
    duration: "Oct 2024 - May 2025",
    location: "Vancouver, BC, Canada",
    logo: "DS",
    description: "Designed and developed project showcase sites for club members using modern web tools.",
    achievements: [
        "UI/UX Design",
        "Figma",
        "React.js",
        "JavaScript"
    ]
    }

  ];

  return (
    <section className="py-20 px-4 bg-subtle-pattern" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
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