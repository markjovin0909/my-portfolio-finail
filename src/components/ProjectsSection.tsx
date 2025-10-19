import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";
import project1 from "@/assets/ArnieShop.jpeg";
import project2 from "@/assets/handyhub.jpeg";
import projectsBg from "@/assets/projects-workshop.jpg";

const projects = [
  {
    title: "ArnieShop Online Store",
    description:
      "A convenient e-commerce platform designed for local sari-sari stores to sell products online and manage daily sales efficiently.",
    fullDescription:
      "Developed a user-friendly sari-sari store e-commerce platform that allows customers to browse and purchase everyday household items online. Features include inventory tracking, product categorization, order management, and simple payment handling. The system helps small store owners digitize their operations and reach more local customers while maintaining ease of use and reliability.",
    image: project1,
    tech: [".Net Windows Form", "Entity Framework", "Guna UI", "MySQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/markjovin0909/ArnieShopFinal",
  },

  {
    title: "HandyHub",
    description:
      "A collaborative project management tool with ethereal real-time updates and team analytics.",
    fullDescription:
      "Developed a comprehensive task management system with real-time collaboration features, drag-and-drop kanban boards, team analytics dashboard, automated notifications, and integrations with Slack and email. Supports unlimited projects and team members with role-based access control.",
    image: project2,
    tech: ["Laravel", "Livewire", "Bootsrap", "Mysql"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/markjovin0909/HandyHub_Project",
  },
];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4"
      ref={ref}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectsBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Fog Effect */}
      <div className="absolute inset-0 fog-overlay" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-center mb-4 text-glow-purple">
            The Pumpkin Workshop
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Where ideas come to life in the darkness
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-[var(--shadow-purple)] overflow-hidden group hover:shadow-[var(--shadow-amber)] transition-all duration-300 cursor-pointer h-full">
                  <div onClick={() => setSelectedProject(project)}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-cinzel font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-cinzel text-primary">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.fullDescription}
              </p>
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="flex-1" asChild>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
