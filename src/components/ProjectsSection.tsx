import React, { useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
const projects = [{
  id: 1,
  title: "Youtube Clone",
  description: "A clone of YouTube with video player, comments, and a personalized feed using React and other tech stack.",
  image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  tags: ["React", "Redux", "Firebase", "material-ui"],
  github: "https://github.com/anshumanjaiswal/youtube_clone",
  demo: "https://sweet-pie-d212c5.netlify.app/"
}, {
  id: 2,
  title: "Google Keep Clone",
description : "This is a Google Keep inspired, Notes keeping app.",
  image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  tags: ["React", "html", "CSS"],
  github: "https://github.com/anshumanjaiswal/keep-clone",
  demo: "https://cute-palmier-931b08.netlify.app/"
}, {
  id: 3,
  title: "Login Validation",
  description: "A login and validation webapp.",
  image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  tags: ["HTML", "CSS", "JS"],
  github: "https://github.com/anshumanjaiswal/Login-Validation-Authentication",
  demo: "https://splendorous-salmiakki-a3f201.netlify.app/"
}, {
  id: 4,
  title: "Expense Tracker",
  description: "A app to track your expenses.",
  image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  tags: ["React", "Css", "Html"],
  github: "#",
  demo: "https://sparkly-starburst-ddfa71.netlify.app/"
}];
const ProjectsSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);
  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.3
  });
  const carouselInView = useInView(carouselRef, {
    once: true,
    amount: 0.1
  });

  // Auto-scroll animation from right to left
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // Wait for the carousel to be in view and the API to be available
    if (carouselInView && apiRef.current) {
      intervalId = setInterval(() => {
        apiRef.current.scrollNext();
      }, 3000); // Scroll every 3 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [carouselInView, apiRef.current]);

  // Set up the carousel API reference when it's available
  const setCarouselApi = (api: any) => {
    apiRef.current = api;
  };
  return <section id="projects" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16" style={{
        opacity: titleInView ? 1 : 0,
        transform: titleInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Explore my latest projects showcasing my skills in frontend development, backend architecture, and full-stack applications.
          </p>
        </div>
        
        <div ref={carouselRef} className="w-full" style={{
        opacity: carouselInView ? 1 : 0,
        transition: 'opacity 0.8s ease 0.3s'
      }}>
          <Carousel className="w-full" setApi={setCarouselApi} opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps"
        }}>
            <CarouselContent>
              {projects.map((project, index) => <CarouselItem key={project.id} className="sm:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden card-hover mx-2" style={{
                opacity: carouselInView ? 1 : 0,
                transform: carouselInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${0.2 + index * 0.1}s, transform 0.8s ease ${0.2 + index * 0.1}s`
              }}>
                    <div className="relative h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map(tag => <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>)}
                        {project.tags.length > 3 && <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex justify-between pt-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={project.github === "#" ? -1 : 0}
                        aria-disabled={project.github === "#"}
                        className="inline-block"
                        style={{ pointerEvents: project.github === "#" ? "none" : "auto" }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 transition-transform hover:scale-105"
                          disabled={project.github === "#"}
                          asChild
                        >
                          <span>
                            <Github size={16} />
                            <span>Code</span>
                          </span>
                        </Button>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={project.demo === "#" ? -1 : 0}
                        aria-disabled={project.demo === "#"}
                        className="inline-block"
                        style={{ pointerEvents: project.demo === "#" ? "none" : "auto" }}
                      >
                        <Button
                          size="sm"
                          className="gap-2 transition-transform hover:scale-105"
                          disabled={project.demo === "#"}
                          asChild
                        >
                          <span>
                            <ExternalLink size={16} />
                            <span>Demo</span>
                          </span>
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
      
      {/* Background elements */}
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>;
};
export default ProjectsSection;