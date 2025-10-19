import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-graveyard.jpg';

interface HeroSectionProps {
  onEnter: () => void;
}

export const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Fog Effect */}
      <div className="absolute inset-0 fog-overlay" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold mb-6 text-glow-purple"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          The Graveyard
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Enter if you dare... A portfolio of code, creativity, and spectral innovation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button
            size="lg"
            onClick={handleEnter}
            disabled={isEntering}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-lg shadow-[var(--shadow-purple)] transition-all duration-300 hover:shadow-[var(--shadow-amber)] hover:scale-105"
          >
            {isEntering ? 'Opening Gate...' : 'Enter the Graveyard'}
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary animate-pulse" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
