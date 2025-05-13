import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);
  const footerInView = useInView(footerRef, {
    once: true,
    amount: 0.3
  });
  return <footer ref={footerRef} className="bg-background py-8 border-t border-border" style={{
    opacity: footerInView ? 1 : 0,
    transform: footerInView ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-foreground/70">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-foreground/50">Made By Anshuman</div>
      </div>
    </footer>;
};
export default Footer;