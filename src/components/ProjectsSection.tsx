import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github, X } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';

const projects = [
  {
    title: 'Spectral E-Commerce Platform',
    description: 'A haunting shopping experience with 3D product visualization and real-time inventory management.',
    fullDescription: 'Built a complete e-commerce solution featuring 3D product previews using Three.js, real-time inventory updates with WebSocket connections, secure payment processing with Stripe, and an admin dashboard for managing products and orders. The platform handles 10,000+ daily active users with 99.9% uptime.',
    image: project1,
    tech: ['React', 'Three.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Phantom Task Manager',
    description: 'A collaborative project management tool with ethereal real-time updates and team analytics.',
    fullDescription: 'Developed a comprehensive task management system with real-time collaboration features, drag-and-drop kanban boards, team analytics dashboard, automated notifications, and integrations with Slack and email. Supports unlimited projects and team members with role-based access control.',
    image: project2,
    tech: ['React', 'TypeScript', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project2'
  }
];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
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
                      <p className="text-muted-foreground mb-4">{project.description}</p>
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
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
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
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
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
                <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
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
                <Button className="flex-1" asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
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
