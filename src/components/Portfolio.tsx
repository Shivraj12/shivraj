import React, { useEffect, useState } from 'react';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import { BottomNavigation } from './navigation/BottomNavigation';
import { ThemeToggle } from './ui/ThemeToggle';
import { FloatingBlobs } from './ui/FloatingBlobs';

export const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    };

    observeElements();
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Background Elements */}
      <FloatingBlobs />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};