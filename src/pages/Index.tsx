import { Navigation } from '@/components/Navigation';
import { ResumeSection } from '@/components/ResumeSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { LaboratorySection } from '@/components/LaboratorySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative">
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
    </div>
  );
};

export default Index;
