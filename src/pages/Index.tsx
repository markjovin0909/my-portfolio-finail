import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { Navigation } from '@/components/Navigation';
import { ResumeSection } from '@/components/ResumeSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { LaboratorySection } from '@/components/LaboratorySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="relative">
      {!hasEntered ? (
        <HeroSection onEnter={() => setHasEntered(true)} />
      ) : (
        <>
          <Navigation />
          <main className="relative">
            <ResumeSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <LaboratorySection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
