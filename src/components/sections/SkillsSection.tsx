import React from 'react';
import { Code, Database, Smartphone, Cloud, GitBranch, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React.js", "Redux", "Next.js", "Bootstrap", "Material-UI", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Backend", 
    icon: Settings,
    skills: ["Node.js", "Express.js", "Fast API", "Spring Boot", "PHP", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Android", "Jetpack Compose", "React Native"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "GitLab CI/CD", "Heroku", "Vercel"]
  },
  {
    title: "Version Control & Collaboration",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Jira", "Slack", "Asana"]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="scroll-reveal">
                <div className="glass-card p-6 h-full group hover:scale-105 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors group/skill"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary group-hover/skill:scale-125 transition-transform" />
                        <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};