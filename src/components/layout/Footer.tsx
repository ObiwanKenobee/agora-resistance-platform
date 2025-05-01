
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="relative w-7 h-7 mr-2">
                <div className="absolute inset-0 bg-gradient-to-br from-resistance-accent to-resistance-purple rounded-lg"></div>
                <div className="absolute inset-0.5 bg-background rounded-lg flex items-center justify-center text-sm font-bold">E</div>
              </div>
              <span className="font-bold text-lg">ExoMind</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A decentralized AI-powered platform for resistance against misinformation and authoritarianism.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/discernment" className="text-sm text-muted-foreground hover:text-foreground">Discernment AI</Link></li>
              <li><Link to="/agora" className="text-sm text-muted-foreground hover:text-foreground">Agora</Link></li>
              <li><Link to="/art" className="text-sm text-muted-foreground hover:text-foreground">Art Resistance</Link></li>
              <li><Link to="/patterns" className="text-sm text-muted-foreground hover:text-foreground">Pattern Watcher</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Organization</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link to="/contributors" className="text-sm text-muted-foreground hover:text-foreground">Contributors</Link></li>
              <li><Link to="/ethics" className="text-sm text-muted-foreground hover:text-foreground">Ethics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ExoMind. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms</Link>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
