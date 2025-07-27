import React from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const navItems = [
  {
    icon: Home,
    label: "Home",
    href: "#hero"
  },
  {
    icon: User,
    label: "About", 
    href: "#about"
  },
  {
    icon: Code,
    label: "Projects",
    href: "#projects"
  },
  {
    icon: Briefcase,
    label: "Experience",
    href: "#experience"
  },
  {
    icon: Mail,
    label: "Contact",
    href: "#contact"
  }
];

export const BottomNavigation = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-card px-6 py-3">
        <div className="flex items-center gap-4">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label={item.label}
              >
                <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};