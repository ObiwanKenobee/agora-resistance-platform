
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ChevronRight, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-resistance-purple/20 via-background to-background"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-resistance-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-resistance-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full border border-resistance-purple/40 bg-resistance-purple/10">
            <Shield className="h-4 w-4 mr-2 text-resistance-accent" />
            <span>Resistance through knowledge and technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="gradient-text">ExoMind:</span> Decentralized Intelligence Against Authoritarianism
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Open-source tools for discernment, resistance, and creating a more truthful information ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/discernment">
                Try Discernment AI
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
