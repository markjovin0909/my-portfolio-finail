import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import educationBg from "@/assets/education-library.jpg";

const education = [
  {
    degree: "Elementary Education",
    institution: "Bansang Elementary School",
    period: "2010 - 2017",
    description:
      "Specialized in being the most behaved student in the entire elementary school.",
    achievements: ["GPA: 75", "Graduated with Most Behaved Award"],
  },
  {
    degree: "High School Education",
    institution: "Nazareth High School",
    period: "2017 - 2021",
    description: "Master in Cutting Classes and Making Excuses.",
    achievements: ["GPA: 75", "Graduated with Most Excuses Award"],
  },
  {
    degree: "Senior High School Education",
    institution: "Mabuhay National High School",
    period: "2021 - 2023",
    description:
      "Computer Science and Servicing student master in disassembling computers.",
    achievements: ["GPA: 75", "Graduated with Most Skilled in Computer Award"],
  },
];

export const EducationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="education"
      className="relative min-h-screen py-20 px-4"
      ref={ref}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${educationBg})` }}
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
            The Haunted Academy
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Where knowledge becomes eternal
          </p>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-[var(--shadow-purple)] p-6 hover:shadow-[var(--shadow-amber)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-cinzel font-semibold text-primary">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-lg font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1 text-sm"
                          >
                            <Award className="w-4 h-4 text-accent" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
