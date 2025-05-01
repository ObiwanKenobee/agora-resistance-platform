
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Globe, Image, Search, Coins, Book, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const modules = [
  {
    icon: <Brain className="h-8 w-8 text-resistance-accent" />,
    title: "Discernment AI",
    description: "Real-time misinformation detection using GPT-4o and a historical propaganda pattern database.",
    path: "/discernment",
    status: "beta"
  },
  {
    icon: <Globe className="h-8 w-8 text-resistance-purple" />,
    title: "Decentralized Agora",
    description: "A censorship-resistant public forum powered by IPFS and blockchain identity.",
    path: "/agora",
    status: "alpha"
  },
  {
    icon: <Image className="h-8 w-8 text-resistance-blue" />,
    title: "Art Resistance",
    description: "Display, mint, and remix political art. AI-generated truth-telling media.",
    path: "/art",
    status: "coming-soon"
  },
  {
    icon: <Search className="h-8 w-8 text-resistance-accent" />,
    title: "Pattern Watcher",
    description: "A global map and timeline highlighting authoritarian patterns in real time.",
    path: "/patterns",
    status: "coming-soon"
  },
  {
    icon: <Coins className="h-8 w-8 text-resistance-purple" />,
    title: "Truth Tokens",
    description: "Token-based incentive system for contributors, moderators, and creators.",
    path: "/tokens",
    status: "planned"
  },
  {
    icon: <Book className="h-8 w-8 text-resistance-blue" />,
    title: "Cognitive Immunization",
    description: "Gamified simulation that trains users to recognize propaganda patterns.",
    path: "/immunize",
    status: "planned"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-resistance-accent" />,
    title: "Resistance Analytics",
    description: "Impact dashboard showing misinformation exposure reduced and counter-narrative reach.",
    path: "/analytics",
    status: "planned"
  }
];

const getStatusBadge = (status: string) => {
  const styles = {
    beta: "bg-green-500/20 text-green-500 border-green-500/30",
    alpha: "bg-blue-500/20 text-blue-500 border-blue-500/30",
    "coming-soon": "bg-orange-500/20 text-orange-500 border-orange-500/30",
    planned: "bg-gray-500/20 text-gray-400 border-gray-500/30"
  };
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full border ${styles[status as keyof typeof styles]}`}>
      {status}
    </span>
  );
};

const ModulesPreview = () => {
  return (
    <section className="py-16 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Resistance Modules</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          An integrated ecosystem of decentralized tools to empower resistance movements worldwide.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <Card key={index} className="module-card h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                {module.icon}
                {getStatusBadge(module.status)}
              </div>
              <CardTitle className="mt-4">{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                variant={module.status === "planned" ? "outline" : "default"} 
                className="w-full" 
                asChild 
                disabled={module.status === "planned"}
              >
                <Link to={module.path}>
                  {module.status === "planned" ? "Coming Soon" : "Explore"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ModulesPreview;
