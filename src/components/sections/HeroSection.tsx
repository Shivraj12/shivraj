import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import Silk from '../../../components/Silk/Silk.tsx';
import StarBorder from '../../../components/StarBorder/StarBorder.tsx'
import { ResumeMessageWithPlane } from '../ui/ResumeMessageWithPlane';

export const HeroSection = () => {
  const [showResumeMessage, setShowResumeMessage] = React.useState(false);

  const handleResumeDownload = () => {
    setShowResumeMessage(true);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Resume Message + Plane Animation */}
      <ResumeMessageWithPlane visible={showResumeMessage} onHide={() => setShowResumeMessage(false)} />
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Silk Effect Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Silk
          speed={5}
          scale={1}
          color="#5227FF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-30">
        <div className="scroll-reveal max-w-4xl mx-auto">
          {/* Name with Gradient */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient glow-effect">
            Shivraj Deshmukh
          </h1>

          {/* Title */}
          {/* <StarBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="5s"
          >
          </StarBorder> */}

          <div className="glass-card p-6 mb-8 inline-block">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              React.js • SpringBoot • AWS • MongoDB
            </p>
          </div>


          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-primary">Creative Full-Stack Developer</span> <span role="img" aria-label="rocket">🚀</span>, <span className="font-semibold text-primary">AI Enthusiast</span> <span role="img" aria-label="robot">🤖</span> & App Builder.<br />
            <span className="text-primary font-medium">Turning ideas into powerful products</span> with <span className="font-semibold">React.js</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Flutter</span> & more.<br /><br />
            <span className="italic">Off the screen:</span> <span role="img" aria-label="chess">♟️</span> Chess champ, <span role="img" aria-label="soccer">⚽</span> Football captain, <span role="img" aria-label="mountain">🏔️</span> Trekking junkie, <span role="img" aria-label="both hands">👐</span> Ambidextrous coder.<br />
            <span className="font-semibold text-primary">Let’s ship it!</span> <span role="img" aria-label="laptop">💻</span><span role="img" aria-label="zap">⚡</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="glass-primary"
              size="lg" 
              className="text-lg px-8 py-4 group"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Resume
            </Button>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8 py-4 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
              View Projects
            </Button>
          </div>

          {/* Scroll Indicator */}
          {/* Removed ArrowDown scroll indicator */}
        </div>
      </div>
    </section>
  );
};
