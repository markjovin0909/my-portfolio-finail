import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Github, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-graveyard.jpg";
import profilePic from "@/assets/MyProfile.jpg";

export const ResumeSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Javascript",
    "Laravel",
    "MySQL",
    "Sql",
  ];

  return (
    <section id="resume" className="relative min-h-screen py-20 px-4" ref={ref}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
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
            Personal Portfolio
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Crafting innovative digital solutions
          </p>

          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-[var(--shadow-purple)] p-8 mb-8">
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="text-center pb-6 border-b border-border">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-[var(--shadow-purple)]">
                    <AvatarImage src={profilePic} alt="Profile" />
                    <AvatarFallback className="text-4xl font-cinzel">
                      YN
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-2xl font-cinzel font-bold mb-2">
                  Mark Jovin Molina
                </h3>
                <p className="text-muted-foreground mb-4">
                  BSIT Student | Student of Ms. Hannah Faye Panaligan
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:markjovin0909@gmail.com"
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    markjovin0909@gmail.com
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xl font-cinzel font-semibold mb-3 text-primary">
                  Professional Summary
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated BSIT student with a strong passion for technology
                  and web development. Highly motivated and willing to learn at
                  all costs to master both front-end and back-end development.
                  Committed to building efficient, user-friendly applications
                  while continuously improving skills and staying up to date
                  with the latest technologies.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-cinzel font-semibold mb-3 text-primary">
                  Core Skills
                </h4>
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
                  <a
                    href="https://github.com/markjovin0909"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.facebook.com/latebloomerrr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
