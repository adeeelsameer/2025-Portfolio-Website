import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "AI Task Manager",
      description: "Smart productivity app with AI-powered task prioritization, natural language processing, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "OpenAI", "Prisma", "TypeScript", "Vercel"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with file sharing, emoji reactions, and room management. Supports 1000+ concurrent users.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      tech: ["Socket.io", "Express", "MongoDB", "Redis", "Docker"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard with real-time data processing, custom charts, and automated reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["D3.js", "React", "Python", "FastAPI", "Kafka"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for workout tracking, nutrition monitoring, and social fitness challenges.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["React Native", "GraphQL", "Apollo", "Firebase"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "Secure voting platform using blockchain technology to ensure transparency and immutability of election results.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      github: "#",
      live: "#",
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
              className={`group relative bg-glass-card border border-primary/20 rounded-xl overflow-hidden hover:shadow-glow transition-all duration-500 ${
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
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="p-3 bg-glass-card border border-primary/30 rounded-full hover:bg-primary/20 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-3 bg-glass-card border border-primary/30 rounded-full hover:bg-primary/20 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </motion.a>
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
          <motion.button
            className="px-8 py-4 bg-gradient-primary text-white rounded-xl hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;