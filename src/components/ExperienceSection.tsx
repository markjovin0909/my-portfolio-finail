import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import experienceBg from "@/assets/experience-crypt.jpg";

const experiences = [
  {
    title: "Internship - IT Support",
    company: "Mabuhay National High School.",
    period: "March 2023 - June 2023",
    responsibilities: [
      "Performed computer hardware maintenance, including cleaning and assembling system units",
      "Created and tested LAN cables for network connectivity",
      "Installed, replaced, and configured CPUs and other computer components",
      "Assisted in troubleshooting and repairing computer hardware issues",
    ],
  },
];

export const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 px-4"
      ref={ref}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${experienceBg})` }}
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
            The Guild of Shadows
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Legends carved in spectral stone
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[var(--shadow-purple)]" />

                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-[var(--shadow-purple)] p-6 hover:shadow-[var(--shadow-amber)] transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                          <Briefcase className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-cinzel font-semibold text-primary">
                              {exp.title}
                            </h3>
                            <span className="text-sm text-muted-foreground">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-lg font-semibold mb-4 text-accent">
                            {exp.company}
                          </p>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-primary mt-1">▪</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
