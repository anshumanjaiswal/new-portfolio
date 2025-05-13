import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer';
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Start cursor blink animation when typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [typedText]);
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-background to-secondary/30 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-[0.03]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium mb-2 text-primary animate-fade-in opacity-0" style={{
          animationDelay: '0.3s'
        }}>
            Hello, I'm
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{
          animationDelay: '0.6s'
        }}>Anshuman J.</h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in opacity-0 flex justify-center items-center" style={{
          animationDelay: '0.9s'
        }}>
            <span>{typedText}</span>
            <span className={`w-1 h-8 bg-primary ml-1 inline-block ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{
          animationDelay: '1.2s'
        }}>I create stunning web experiences with modern technologies, focused on performance, accessibility, and beautiful UI/UX.</p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in opacity-0" style={{
          animationDelay: '1.5s'
        }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="button-effect"
            >
              <a
                href="/anshuman-FE-FS-resume.pdf"
                download="anshuman-FE-FS-resume.pdf"
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slight">
        <button onClick={scrollToNext} className="text-foreground/70 hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="hidden md:block absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
    </section>;
};
export default HeroSection;