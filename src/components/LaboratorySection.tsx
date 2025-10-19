import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lab1 from '@/assets/lab1.jpg';
import lab2 from '@/assets/lab2.jpg';
import lab3 from '@/assets/lab3.jpg';

const labs = [
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard with real-time data updates and custom chart components.',
    image: lab1,
    tech: ['React', 'D3.js', 'Recharts', 'WebSocket'],
    demoUrl: 'https://example.com/lab1'
  },
  {
    title: 'Component Library System',
    description: 'Comprehensive UI component library with documentation and live code playground.',
    image: lab2,
    tech: ['React', 'Storybook', 'TypeScript', 'CSS Modules'],
    demoUrl: 'https://example.com/lab2'
  },
  {
    title: 'API Testing Interface',
    description: 'Developer tool for testing REST and GraphQL APIs with request/response visualization.',
    image: lab3,
    tech: ['React', 'GraphQL', 'Monaco Editor', 'Axios'],
    demoUrl: 'https://example.com/lab3'
  }
];

export const LaboratorySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [selectedLab, setSelectedLab] = useState<typeof labs[0] | null>(null);

  return (
    <section id="laboratory" className="min-h-screen py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-center mb-4 text-glow-purple">
            The Occult Laboratory
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Experiments in code and creativity
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {labs.map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-[var(--shadow-purple)] overflow-hidden group hover:shadow-[var(--shadow-amber)] transition-all duration-300 cursor-pointer h-full">
                  <div onClick={() => setSelectedLab(lab)}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={lab.image}
                        alt={lab.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-70" />
                      <div className="absolute top-3 right-3 p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                        <Beaker className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-cinzel font-semibold mb-2 text-primary group-hover:text-accent transition-colors line-clamp-2">
                        {lab.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{lab.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {lab.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-primary/10 border border-primary/20 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button size="sm" variant="outline" className="w-full" asChild onClick={(e) => e.stopPropagation()}>
                        <a href={lab.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lab Modal */}
      <Dialog open={!!selectedLab} onOpenChange={() => setSelectedLab(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-cinzel text-primary">
              {selectedLab?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedLab && (
            <div className="space-y-4">
              <img
                src={selectedLab.image}
                alt={selectedLab.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-muted-foreground">{selectedLab.description}</p>
              <div>
                <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedLab.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="w-full" asChild>
                <a href={selectedLab.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Demo
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
