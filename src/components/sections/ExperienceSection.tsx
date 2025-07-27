import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self Employed",
    location: "Pune, India",
    period: "April 2022 – PRESENT",
    achievements: [
      "Collaborated directly with clients to gather requirements, propose technical solutions, and deliver customized software that improved operational efficiency and user engagement",
      "Managed end-to-end project lifecycle, including architecture design, database schema modeling (MySQL/PostgreSQL), cloud deployment (AWS), and DevOps using GitLab CI/CD pipelines",
      "Utilized Agile methodologies for sprint planning, task tracking, and rapid delivery, often resulting in improved client satisfaction and on-time project delivery",
      "Adopted best practices in software engineering such as code reviews, test-driven development (TDD), and clean code principles to maintain high-quality, maintainable codebases",
      "Led migration from React 16 to React 18, leveraging Concurrent Mode, Suspense, and Automatic Batching to optimize rendering performance",
      "Designed an optimized Redux Toolkit architecture with normalized state, reducing unnecessary re-renders and improving API caching",
      "Led the development of Android and web platforms handling 5,000+ daily deliveries with React.js for the front-end and SpringBoot for the backend, enhancing scalability and efficiency",
      "Integrated Google Maps API for real-time tracking, increasing app engagement by 25% through increased service accuracy",
      "Spearheaded the upgrade of Stripe Java SDK (v8 → v29), modernizing the payment backend, reducing technical debt, and improving system resilience and security posture"
    ]
  },
  {
    title: "Software Engineer",
    company: "Persistent Systems",
    location: "Pune, India", 
    period: "November 2020 – March 2022",
    achievements: [
      "Built a dynamic dashboard with D3.js and Chart.js, enabling real-time data visualization and insights",
      "Revamped React.js components for data visualization, improving decision-making speed by 20%",
      "Utilized React.memo, useCallback, and useMemo to minimize re-renders and enhance frontend efficiency"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Work Experience</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="scroll-reveal mb-12">
              <div className="glass-card p-8 md:p-10 relative">
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-px h-12 bg-gradient-to-b from-primary to-transparent" />
                )}
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                    <p className="text-xl font-semibold text-foreground">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};