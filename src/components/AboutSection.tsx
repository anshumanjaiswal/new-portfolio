import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'framer-motion';
const skills = [{
  name: 'React',
  category: 'frontend'
}, {
  name: 'JavaScript',
  category: 'language'
}, {
  name: 'Node.js',
  category: 'backend'
}, {
  name: 'MongoDB',
  category: 'database'
}, {
  name: 'Express',
  category: 'backend'
}, {
  name: 'TailwindCSS',
  category: 'css'
}, {
  name: 'Redux',
  category: 'state'
}, {
  name: 'HTML5',
  category: 'frontend'
}, {
  name: 'CSS3',
  category: 'frontend'
}, {
  name: 'Figma',
  category: 'design'
}, {
  name: 'Git',
  category: 'tools'
}, {
  name: 'GitHub',
  category: 'tools'
}, {
  name: 'Java',
  category: 'language'
}];
const AboutSection = () => {
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const leftColInView = useInView(leftColRef, {
    once: true,
    amount: 0.3
  });
  const rightColInView = useInView(rightColRef, {
    once: true,
    amount: 0.3
  });
  const skillsInView = useInView(skillsRef, {
    once: true,
    amount: 0.3
  });
  const cardsInView = useInView(cardsRef, {
    once: true,
    amount: 0.3
  });
  return <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{
        animationDelay: '200ms',
        animationFillMode: 'forwards'
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image and Info */}
          <div ref={leftColRef} className="flex flex-col items-center lg:items-end" style={{
          opacity: leftColInView ? 1 : 0,
          transform: leftColInView ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
            <div className="relative mb-8">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-lg">
                <img alt="Jane Doe" className="w-full h-full object-cover" src="/lovable-uploads/7ab5c431-943c-4ca5-8d19-abd2284af0d9.jpg" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-md animate-bounce-slight">
                <p className="font-medium">Experienced Developer</p>
              </div>
            </div>
            
            <div ref={cardsRef} className="grid grid-cols-2 gap-4 max-w-xs" style={{
            opacity: cardsInView ? 1 : 0,
            transform: cardsInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
          }}>
              
              
            </div>
          </div>
          
          {/* Right Column: Bio and Skills */}
          <div ref={rightColRef} style={{
          opacity: rightColInView ? 1 : 0,
          transform: rightColInView ? 'translateX(0)' : 'translateX(50px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-foreground/80 mb-6">I'm a passionate frontend developer with expertise in creating interactive and responsive web applications.</p>
            <p className="text-foreground/80 mb-8">
              My approach combines technical excellence with an eye for design, ensuring that the applications 
              I build are not only functional but also aesthetically pleasing and user-friendly.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div ref={skillsRef} className="flex flex-wrap gap-2 mb-8" style={{
            opacity: skillsInView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s'
          }}>
              {skills.map((skill, index) => <Badge key={skill.name} variant="secondary" className="px-3 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300" style={{
              animationDelay: `${index * 70}ms`,
              animationFillMode: 'forwards'
            }}>
                  {skill.name}
                </Badge>)}
            </div>
            
            
            
            
            
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>;
};
export default AboutSection;