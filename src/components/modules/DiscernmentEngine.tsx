
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Search, Link, AlertTriangle, FileText, CheckCircle, History } from 'lucide-react';

const DiscernmentEngine = () => {
  const [inputValue, setInputValue] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const handleAnalyze = () => {
    if (!inputValue.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };
  
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discernment Engine</h1>
          <p className="text-muted-foreground">
            Analyze content for propaganda techniques and historical parallels.
          </p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Submit Content for Analysis</CardTitle>
            <CardDescription>
              Enter text, paste article content, or provide a URL to analyze for misinformation patterns.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="text">
              <TabsList className="mb-4">
                <TabsTrigger value="text" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Text
                </TabsTrigger>
                <TabsTrigger value="url" className="flex items-center">
                  <Link className="h-4 w-4 mr-2" />
                  URL
                </TabsTrigger>
                <TabsTrigger value="social" className="flex items-center" disabled>
                  <History className="h-4 w-4 mr-2" />
                  Social Feed
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="text">
                <Textarea 
                  placeholder="Enter text to analyze for propaganda patterns..." 
                  className="min-h-[200px] mb-4"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </TabsContent>
              
              <TabsContent value="url">
                <Input 
                  placeholder="https://example.com/article" 
                  className="mb-4"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full sm:w-auto" 
              onClick={handleAnalyze}
              disabled={isAnalyzing || !inputValue.trim()}
            >
              {isAnalyzing ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Analyze Content
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
        
        {analysisComplete && (
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Propaganda Likelihood</h3>
                      <span className="text-amber-500 font-medium">Moderate</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="bg-card border border-border/50 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="bg-amber-500/20 p-2 rounded-full mr-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Appeal to Fear</h4>
                          <p className="text-sm text-muted-foreground">
                            The content uses exaggerated threats to manipulate emotions, similar to propaganda techniques used in historical contexts.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-card border border-border/50 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="bg-amber-500/20 p-2 rounded-full mr-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Black-and-White Fallacy</h4>
                          <p className="text-sm text-muted-foreground">
                            The content presents complex issues as having only two possible sides or outcomes, eliminating nuanced perspectives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Historical Parallels</CardTitle>
                <CardDescription>
                  Similar techniques have been observed in these historical contexts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border border-border/50 rounded-lg p-4">
                    <h3 className="font-medium mb-2">1930s European Propaganda</h3>
                    <p className="text-sm text-muted-foreground">
                      Similar fear-based rhetoric was used to create divisions and scapegoat minority groups.
                    </p>
                  </div>
                  <div className="border border-border/50 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Cold War Era Communications</h3>
                    <p className="text-sm text-muted-foreground">
                      The binary framing resembles tactics used to simplify complex geopolitical issues into ideological conflicts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Contextual Information</CardTitle>
                <CardDescription>
                  Additional context that may be relevant to this content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 border border-border/50 rounded-lg p-4">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Fact Check</h3>
                      <p className="text-sm text-muted-foreground">
                        The core claim about economic statistics has been debunked by multiple independent sources.
                      </p>
                      <div className="mt-2 flex gap-2 flex-wrap">
                        <a href="#" className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full hover:bg-primary/20 transition-colors">
                          Related Research
                        </a>
                        <a href="#" className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full hover:bg-primary/20 transition-colors">
                          Official Statistics
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscernmentEngine;
