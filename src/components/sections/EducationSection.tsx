import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Education</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="scroll-reveal">
            <div className="glass-card p-8 md:p-10">
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Bachelor of Engineering in Computer Engineering
                  </h3>
                  <p className="text-xl font-semibold text-primary">
                    Sinhgad Institute of Technology and Science
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">2017 - 2020</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Pune, India</span>
                </div>
              </div>

              {/* CGPA */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">CGPA</span>
                  <span className="text-2xl font-bold text-primary">8.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};