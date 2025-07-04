import { motion } from "framer-motion";
import { Code2, Database, Cloud, Smartphone, Palette, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 82 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 88 }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "PWA", level: 85 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Git", "Figma", "Postman", "MongoDB", "Redis", 
    "Jenkins", "Terraform", "Jest", "Cypress", "Webpack", "Vite"
  ];

  return (
    <section className="py-20 px-4 bg-subtle-pattern" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-glass-card border border-primary/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gradient">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-glass-card border border-primary/20 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent/20 rounded-lg">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-gradient">Tools & Technologies</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 cursor-pointer hover:bg-primary/30 transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 bg-glass-card border border-primary/20 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-secondary/20 rounded-lg">
              <Palette className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-gradient">Certifications & Learning</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "AWS Certified Solutions Architect",
              "Google Cloud Professional Developer",
              "Certified Kubernetes Administrator"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;