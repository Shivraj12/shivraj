import React from 'react';
import { Mail, Phone, Github, Linkedin, Code, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResumeMessageWithPlane } from '../ui/ResumeMessageWithPlane';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "deshmukh.shivraj996@gmail.com",
    href: "mailto:deshmukh.shivraj996@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone", 
    value: "+91-8999349514",
    href: "tel:+918999349514"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Shivraj12",
    username: "Shivraj12"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivraj-deshmukh-2b9ab6148",
    username: "shivraj-deshmukh"
  },
  {
    icon: Code,
    label: "LeetCode",
    href: "https://leetcode.com/u/Durnkin_Master/",
    username: "Durnkin_Master"
  }
];

export const ContactSection = () => {
  const [showResumeMessage, setShowResumeMessage] = React.useState(false);
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always open to discussing new opportunities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="scroll-reveal">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                      >
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="text-foreground font-medium">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="scroll-reveal">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Social Profiles</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                      >
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{social.label}</p>
                          <p className="text-foreground font-medium">@{social.username}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="scroll-reveal text-center">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6">
                Download my resume or get in touch to discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glass-button" onClick={() => setShowResumeMessage(true)}>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <a
                  href="mailto:deshmukh.shivraj996@gmail.com"
                  className="glass-button inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-input bg-background hover:bg-primary/5 text-foreground"
                  style={{ textDecoration: 'none' }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Resume Message + Plane Animation */}
      <ResumeMessageWithPlane visible={showResumeMessage} onHide={() => setShowResumeMessage(false)} />
    </section>
  );
};