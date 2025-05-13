import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useInView } from 'framer-motion';
import emailjs from 'emailjs-com';

// EmailJS configuration with actual values
const SERVICE_ID = "service_pc8d4ko";
const TEMPLATE_ID = "template_xf4wvzd";
const USER_ID = "QFNnoJnYbovvV1YIq";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const titleRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const titleInView = useInView(titleRef, {
    once: true,
    amount: 0.3
  });
  const leftColInView = useInView(leftColRef, {
    once: true,
    amount: 0.3
  });
  const formInView = useInView(formRef, {
    once: true,
    amount: 0.3
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);

    // Use EmailJS to send the email
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(result => {
      console.log('Email sent successfully:', result.text);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!"
      });

      // Reset form
      form.current?.reset();
    }).catch(error => {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  return <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto">
        <div ref={titleRef} className="text-center mb-16" style={{
        opacity: titleInView ? 1 : 0,
        transform: titleInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Have a question or want to work together? Feel free to contact me using the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact Information */}
          <div ref={leftColRef} className="space-y-8" style={{
          opacity: leftColInView ? 1 : 0,
          transform: leftColInView ? 'translateX(0)' : 'translateX(-50px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail size={24} className="animate-bounce-slight" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-foreground/70">anshumanjofficial@gmail.com</p>
                </div>
              </div>
              
              
              
              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin size={24} className="animate-bounce-slight" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Bangalore, India</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-bold mb-3">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/anshuman-jaiswal" className="social-icon transform transition-all hover:scale-110 hover:rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/anshumanjaiswal" className="social-icon transform transition-all hover:scale-110 hover:rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
                <a href="https://x.com/Anshuma98661691?t=w7O_aDsnPKpKbRZxfa1MSA&s=09" className="social-icon transform transition-all hover:scale-110 hover:rotate-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div ref={formRef} style={{
          opacity: formInView ? 1 : 0,
          transform: formInView ? 'translateX(0)' : 'translateX(50px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
            <Card className="shadow-md transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 transition-all duration-300 hover:translate-y-[-2px]">
                      <Label htmlFor="user_name">Name</Label>
                      <Input id="user_name" name="user_name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2 transition-all duration-300 hover:translate-y-[-2px]">
                      <Label htmlFor="user_email">Email</Label>
                      <Input id="user_email" name="user_email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2 transition-all duration-300 hover:translate-y-[-2px]">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can I help you?" required />
                  </div>
                  
                  <div className="space-y-2 transition-all duration-300 hover:translate-y-[-2px]">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message here..." required rows={5} />
                  </div>
                  
                  <Button type="submit" className="w-full gap-2 transition-all duration-300 hover:scale-[1.02]" disabled={isSubmitting}>
                    {isSubmitting ? <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span> : <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[30%] bg-secondary/30 -z-10 transform -skew-y-3"></div>
    </section>;
};
export default ContactSection;