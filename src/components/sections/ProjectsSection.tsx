import React from 'react';
import { ExternalLink, Github, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern and responsive e-commerce platform with real-time cart system and seamless user experience",
    tech: ["React.js", "MUI v5", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Integrated Material-UI (MUI v5) for a modern and responsive UI, enhancing UX",
      "Developed a real-time cart system with React Context API Redux, ensuring seamless user experience across multiple pages",
      "Implemented secure user authentication and authorization"
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent chatbot using React.js for frontend and FastAPI for backend with natural language processing",
    tech: ["React.js", "FastAPI", "OpenAI API", "PostgreSQL", "WebSockets"],
    features: [
      "Designed and implemented an AI-powered chatbot using React.js for frontend and FastAPI for backend",
      "Integrated OpenAI API (GPT-4) to handle natural language processing (NLP) queries, reducing response time by 40%",
      "Integrated OpenAI API request handling"
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Imbalanced Data Classification",
    description: "Machine Learning project enhancing classifier performance for imbalanced datasets",
    tech: ["Machine Learning", "Python", "Scikit-learn", "Data Science"],
    features: [
      "Innovated a diversifying ensemble technique that enhances classifier performance by mitigating bias towards the majority class",
      "Analyzed and documented classification performance metrics across 15 datasets, showcasing the impact of precision, recall, and F1-score",
      "Led to a 20% improvement in model selection aided by the team"
    ],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development and modern technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="scroll-reveal">
              <div className="glass-card p-6 h-full flex flex-col group hover:scale-105 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};