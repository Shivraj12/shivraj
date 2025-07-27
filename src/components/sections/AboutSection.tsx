import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
        </div>
        
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Results-driven MERN Stack Developer with 4+ years of experience building 
            high-performance web applications including average load times under 1s. 
            Skilled in React.js, Node.js, Express.js, and MongoDB, with a strong 
            focus on <span className="text-primary font-semibold">performance optimization</span>, 
            <span className="text-primary font-semibold"> scalability</span>, and 
            <span className="text-primary font-semibold"> intuitive UI/UX</span>. 
            Proven ability to lead teams, architect robust solutions, and deliver 
            high-impact applications.
          </p>
        </div>
      </div>
    </section>
  );
};