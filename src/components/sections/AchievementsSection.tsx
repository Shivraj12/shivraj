import React from 'react';
import { Trophy, Award, Star, Users, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Best Final Year Project 2020",
    description: "Won Best Final Year Project at SITS, Pune College",
    category: "Academic"
  },
  {
    icon: Award,
    title: "App Development Recognition",
    description: "Won college Technology quiz. Developed apps like Skydrop, Notes.io, Good Vibes, Isha SunRise, etc. published apps on Playstore",
    category: "Development"
  },
  {
    icon: Target,
    title: "File Tracking System",
    description: "File Tracking System implemented a web application and android app for Nashik Government Office",
    category: "Project"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led cross-functional teams in developing full-stack apps, improving team productivity by 20%",
    category: "Leadership"
  },
  {
    icon: Star,
    title: "Mentorship Impact",
    description: "Trained engineers on JavaScript and cloud technologies, enhancing team efficiency by 15%",
    category: "Mentorship"
  },
  {
    icon: Trophy,
    title: "Strategic Decision Making",
    description: "College Football Captain - Demonstrated strategic decision-making and teamwork, winning multiple tournaments",
    category: "Leadership"
  }
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Awards & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and accomplishments throughout my academic and professional journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="scroll-reveal">
                <div className="glass-card p-6 h-full group hover:scale-105 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};