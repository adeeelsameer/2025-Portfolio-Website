import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
        title: "RFP Analyzer",
        description: "Automated RAG app for summarizing and searching 200+ page RFP documents. Built with React, Flask, and LangChain, leveraging OpenAI embeddings and ChromaDB for semantic search. Dockerized and deployed on GCP.",
        image: "/images/projects/RAG.jpg",
        tech: ["React.js", "Flask", "LangChain", "OpenAI", "ChromaDB", "Docker", "Google Cloud Platform"],
        github: "https://github.com/adeeelsameer/RFP-AI-Reader",
        live: null,
        featured: true
    },
    {
        title: "Flashify.AI",
        description: "Flashcard SaaS webapp developed with Next.js and Material-UI, featuring AI-powered flashcard creation, real-time data via Firebase, and secure authentication/payments using Clerk and Stripe.",
        image: "/images/projects/flashify.png",
        tech: ["Next.js", "Material-UI", "OpenAI", "Firebase", "Clerk", "Stripe"],
        github: "https://github.com/adeeelsameer/Flashcards-App",
        live: "https://flashcards-app-kappa.vercel.app/",
        featured: true
    },
    {
        title: "SmartReply AI",
        description: "Automated AI-driven email responder built in under 24 hours for nwHacks 2025. Features secure real-time inbox display with Gmail API and instant AI-powered reply generation via OpenAI.",
        image: "/images/projects/smartreply.webp",
        tech: ["Ionic React", "TypeScript", "OpenAI", "Gmail API", "OAuth 2.0"],
        github: "https://github.com/adeeelsameer/nwhacks-email-responder",
        live: null,
        featured: true
    },
    {
        title: "Library Management System",
        description: "GUI-based library system built in Java and Swing, supporting book management, borrowing, ratings, and persistent data via JSON. Developed for UBC course project, with extensive unit testing.",
        image: "/images/projects/library-management.avif",
        tech: ["Java", "Swing", "JUnit", "OOP", "JSON"],
        github: "https://github.com/adeeelsameer/Library-Management-System", // Replace with actual repo link
        live: null,
        featured: false
    },
    {
        title: "Predicting Heart Disease",
        description: "Machine learning project using R to predict heart disease risk from anonymized patient data. Achieved 70% accuracy, 67.4% recall, and 68.9% precision. End-to-end analysis in Jupyter Notebook.",
        image: "/images/projects/predicting-heart-disease.jpg",
        tech: ["R", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
        github: "https://github.com/adeeelsameer/Predicting-Heart-Disease", // Replace with actual repo link
        live: null,
        featured: false
    },
    {
        title: "Personal Portfolio",
        description: "My personal portfolio website showcasing my projects, skills, and experience. Built with React, Express, Tailwind CSS, and Lovable featuring a responsive design and smooth animations.",
        image: "/images/projects/personal-portfolio.png",
        tech: ["React.js", "Express.js", "TypeScript", "Lovable", "Tailwind CSS", "UI/UX"],
        github: "https://github.com/adeeelsameer/2025-Portfolio-Website",
        live: null,
        featured: false
    }
    ];


  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-glass-card border border-primary/20 rounded-xl overflow-hidden hover:shadow-glow transition-shadow duration-500 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-gradient-primary px-3 py-1 rounded-full text-white text-xs font-semibold">
                    <Zap className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt="Muhammad Adil Sameer"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-glass-card border border-primary/30 rounded-full hover:bg-primary/20 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                        <Github className="w-5 h-5 text-primary" />
                        </motion.a>
                    )}
                    {project.live && (
                        <motion.a
                            href={project.live}
                            target="_blank"
                            className="p-3 bg-glass-card border border-primary/30 rounded-full hover:bg-primary/20 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                        <ExternalLink className="w-5 h-5 text-primary" />
                        </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gradient mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
        >
          <motion.a
            className="px-8 py-4 bg-gradient-primary text-white rounded-xl hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/adeeelsameer"
            target="_blank"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;