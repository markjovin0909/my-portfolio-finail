import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import activity1 from "@/assets/Activity1.jpeg";
import activity2 from "@/assets/Activity2.jpeg";
import activity3 from "@/assets/Activity3.jpeg";
import activity4 from "@/assets/Activity4.jpeg";
import activity5 from "@/assets/Activity5.jpeg";
import laboratoryBg from "@/assets/laboratory-occult.jpg";
import { Github } from "lucide-react";

const labs = [
  {
    title: "Activity 1",
    description:
      "An interactive web card project demonstrating hover-based animations and dynamic text reveal effects. This project focuses on creating an interactive web card that reveals hidden text when hovered over. It highlights precision in layout design, CSS transitions, and attention to user experience. The activity helped enhance my understanding of front-end interactivity and clean code structure.",
    image: activity1,
    tech: ["HTML", "CSS"],
    githubUrl: "https://github.com/markjovin0909/Activity1",
  },
  {
    title: "Activity 2",
    description:
      "A hands-on HTML exercise showcasing proper use of semantic tags and web structure best practices. This project aimed to strengthen understanding of HTML semantics and structure. It involved using various tags and elements to build a functional and well-organized web layout, reinforcing the importance of clean and accessible code for effective web development.",
    image: activity2,
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/markjovin0909/Activity2",
  },
  {
    title: "Activity 3",
    description:
      "A web page with a toggle feature that dynamically displays hidden content upon button interaction. This task involved building a functional toggle button that reveals or hides additional content when clicked. It demonstrated practical use of JavaScript for interactivity and DOM manipulation while focusing on clean, maintainable code and intuitive user design.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: activity3,
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/markjovin0909/Activity3",
  },
  {
    title: "Activity 4",
    description:
      "A light and dark mode toggle feature designed to enhance user experience and visual comfort. In this project, I implemented a theme toggle system allowing users to switch between light and dark modes. It improved understanding of CSS variables, JavaScript event handling, and responsive design principles for modern web applications.",
    image: activity4,
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/markjovin0909/Activity4",
  },
  {
    title: "Activity 5",
    description:
      "A to-do list application for managing daily tasks with options to add, complete, and clear activities. This project focused on building a functional to-do list app where users can add, mark as complete, or clear tasks. It demonstrated practical JavaScript skills such as event handling, array management, and DOM manipulation, along with a focus on user-friendly design and functionality.",
    image: activity5,
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/markjovin0909/Activity5",
  },
];

export const LaboratorySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [selectedLab, setSelectedLab] = useState<(typeof labs)[0] | null>(null);

  return (
    <section
      id="laboratory"
      className="relative min-h-screen py-20 px-4"
      ref={ref}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${laboratoryBg})` }}
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
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {lab.description}
                      </p>
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
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={lab.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
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
              <Button variant="outline" className="w-full" asChild>
                <a
                  href={selectedLab.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Source Code
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
