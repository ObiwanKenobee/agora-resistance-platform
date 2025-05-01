
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, BookOpen, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About ExoMind</h1>
          <p className="text-xl text-muted-foreground">
            A decentralized collective building tools for truth in the age of misinformation.
          </p>
        </div>
        
        <Tabs defaultValue="mission" className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="mission" className="flex flex-col items-center py-3 px-1 text-center h-auto">
              <Shield className="h-5 w-5 mb-1" />
              <span>Mission</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="flex flex-col items-center py-3 px-1 text-center h-auto">
              <Users className="h-5 w-5 mb-1" />
              <span>Team</span>
            </TabsTrigger>
            <TabsTrigger value="values" className="flex flex-col items-center py-3 px-1 text-center h-auto">
              <BookOpen className="h-5 w-5 mb-1" />
              <span>Values</span>
            </TabsTrigger>
            <TabsTrigger value="tech" className="flex flex-col items-center py-3 px-1 text-center h-auto">
              <Code className="h-5 w-5 mb-1" />
              <span>Technology</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission" className="animate-fade-in">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="mb-4">
                ExoMind exists to empower individuals and communities with decentralized tools that strengthen cognitive resilience against misinformation and authoritarianism.
              </p>
              <p className="mb-4">
                We believe that the preservation of open, democratic societies depends on our shared ability to discern truth, recognize propaganda, and resist the manipulation of information.
              </p>
              <p className="mb-4">
                By combining advanced AI, blockchain technologies, and crowd-sourced intelligence, we are building a suite of applications and protocols that enable people worldwide to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Detect and contextualize misinformation at scale</li>
                <li>Share verifiable information without censorship</li>
                <li>Understand historical patterns of authoritarianism</li>
                <li>Contribute to a collective knowledge base for resistance</li>
                <li>Sustain truth-seeking through decentralized economic incentives</li>
              </ul>
              <p>
                Our work is open-source, community-driven, and committed to protecting privacy, promoting transparency, and preserving human rights in the digital age.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="team" className="animate-fade-in">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">Our Team</h2>
              <p className="mb-6">
                ExoMind is a global collective of technologists, journalists, academics, artists, and activists united by a shared commitment to truth and resistance against authoritarianism.
              </p>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Contributors</CardTitle>
                    <CardDescription>
                      Individuals building ExoMind
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm">
                      Our contributors include AI researchers, cryptographers, security experts, UI designers, and full-stack developers from over 12 countries.
                    </p>
                    <Button variant="outline" asChild size="sm" className="w-full">
                      <Link to="/contributors">View Contributors</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Partners</CardTitle>
                    <CardDescription>
                      Organizations supporting our mission
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm">
                      We collaborate with journalists, academic institutions, human rights organizations, and progressive tech companies.
                    </p>
                    <Button variant="outline" asChild size="sm" className="w-full">
                      <Link to="/partners">View Partners</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3">Join Us</h3>
                <p className="mb-3">
                  ExoMind is always looking for contributors who share our values and mission. Our work happens in the open, and we welcome diverse perspectives.
                </p>
                <Button asChild>
                  <a href="https://github.com" target="_blank" rel="noreferrer">Get Involved</a>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="values" className="animate-fade-in">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <p className="mb-6">
                The principles that guide our work and community:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">Truth</h3>
                  <p>
                    We believe in the existence of objective reality and the human capacity to discover truth through evidence, reason, and verified information.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">Freedom</h3>
                  <p>
                    We defend intellectual freedom, freedom of expression, and freedom of conscience as essential human rights.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">Decentralization</h3>
                  <p>
                    We resist centralized control of information and promote systems that distribute power, decision-making, and data storage.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">Privacy</h3>
                  <p>
                    We respect privacy as a fundamental right and build tools that protect people from surveillance and data exploitation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">Accessibility</h3>
                  <p>
                    We create tools that are usable by people with diverse abilities, languages, and technical expertise across the globe.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tech" className="animate-fade-in">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
              <p className="mb-6">
                ExoMind combines advanced web technologies with decentralized protocols:
              </p>
              
              <div className="grid gap-6">
                <div>
                  <h3 className="text-xl font-bold">Frontend</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>React for component-based UI development</li>
                    <li>TailwindCSS for efficient, responsive styling</li>
                    <li>D3.js for data visualization</li>
                    <li>TensorFlow.js for client-side machine learning</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">Decentralized Storage</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IPFS for distributed content storage</li>
                    <li>Filecoin for long-term data archiving</li>
                    <li>OrbitDB for decentralized databases</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">Blockchain</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ethereum for identity and smart contracts</li>
                    <li>Polygon for scaling and lower transaction fees</li>
                    <li>Lens Protocol for decentralized social graphs</li>
                    <li>ENS for human-readable identifiers</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">AI & ML</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>GPT-4o for natural language understanding</li>
                    <li>Vector databases for semantic search</li>
                    <li>Python/Flask for AI model serving</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3">Open Source</h3>
                <p className="mb-3">
                  All ExoMind code is open source, allowing for transparency, community contributions, and independent security audits.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noreferrer">View Source Code</a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutSection;
