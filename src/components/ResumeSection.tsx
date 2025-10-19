import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const ResumeSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    'React & TypeScript', 'Node.js & Express', 'Python & Django',
    'PostgreSQL & MongoDB', 'AWS & Docker', 'Three.js & WebGL',
    'REST & GraphQL APIs', 'Git & CI/CD', 'Agile Methodologies'
  ];

  return (
    <section id="resume" className="min-h-screen py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-center mb-4 text-glow-purple">
            The Mausoleum of Knowledge
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Carved in stone, written in code
          </p>

          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-[var(--shadow-purple)] p-8 mb-8">
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="text-center pb-6 border-b border-border">
                <h3 className="text-2xl font-cinzel font-bold mb-2">Your Name</h3>
                <p className="text-muted-foreground mb-4">Full Stack Developer & 3D Web Specialist</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    your.email@example.com
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xl font-cinzel font-semibold mb-3 text-primary">Professional Summary</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Creative and detail-oriented Full Stack Developer with 5+ years of experience crafting 
                  immersive web experiences. Specialized in React, Three.js, and modern web technologies. 
                  Passionate about creating beautiful, performant applications that push the boundaries 
                  of what's possible on the web.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-cinzel font-semibold mb-3 text-primary">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Download Resume Button */}
          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-[var(--shadow-amber)]">
              <Download className="w-5 h-5 mr-2" />
              Download Full Resume (PDF)
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
