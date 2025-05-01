
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Bookmark, Heart, Share2, Globe, Calendar, Lock, Flag, User, Plus, Send, Mic } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: {
      name: "AliceResistance",
      avatar: "A",
    },
    timeAgo: "2 hours ago",
    content: "Just documented evidence of election irregularities in the eastern provinces. Will be posting full report with sources and methodology shortly. #TransparencyNow",
    tags: ["Elections", "Evidence", "Democracy"],
    likes: 124,
    replies: 28,
  },
  {
    id: 2,
    author: {
      name: "GlobalWitness",
      avatar: "G",
    },
    timeAgo: "5 hours ago",
    content: "Our satellite imagery analysis confirms the presence of unreported military activity near civilian populations in the disputed zone. These findings contradict official statements made yesterday.",
    tags: ["HumanRights", "Conflict"],
    likes: 376,
    replies: 52,
  },
  {
    id: 3,
    author: {
      name: "TechForTruth",
      avatar: "T",
    },
    timeAgo: "8 hours ago",
    content: "Released a new browser extension that detects AI-generated synthetic media and cross-references claims with trusted fact-checking sources. Open source and decentralized. #TechForGood",
    tags: ["Technology", "OpenSource", "FactChecking"],
    likes: 238,
    replies: 41,
  }
];

const categories = [
  { name: "Government Accountability", count: 243, icon: <Flag className="h-4 w-4" /> },
  { name: "Press Freedom", count: 187, icon: <MessageSquare className="h-4 w-4" /> },
  { name: "Digital Rights", count: 152, icon: <Lock className="h-4 w-4" /> },
  { name: "Climate Truth", count: 134, icon: <Globe className="h-4 w-4" /> },
  { name: "Election Integrity", count: 98, icon: <Calendar className="h-4 w-4" /> },
];

const AgoraPost = ({ post }: { post: typeof posts[0] }) => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3 mb-3">
          <Avatar>
            <AvatarFallback>{post.author.avatar}</AvatarFallback>
            <AvatarImage src={`/avatars/${post.id}.png`} />
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{post.author.name}</h3>
              <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
            </div>
            <p className="text-sm mt-1">
              {post.content}
            </p>
            
            <div className="flex flex-wrap gap-1 mt-3">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-primary/5 hover:bg-primary/10">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-4 pt-3 border-t border-border/40">
          <div className="flex gap-6">
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              <Heart className="h-4 w-4" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              <MessageSquare className="h-4 w-4" />
              <span>{post.replies}</span>
            </button>
          </div>
          <div className="flex gap-3">
            <button className="text-muted-foreground hover:text-foreground">
              <Bookmark className="h-4 w-4" />
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const AgoraHub = () => {
  const [newPost, setNewPost] = useState('');
  
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left sidebar */}
        <div className="hidden md:block">
          <div className="sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>
                  Browse resistance topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button key={category.name} className="flex items-center justify-between w-full p-2 rounded-md hover:bg-primary/5 transition-colors text-left">
                      <div className="flex items-center gap-2">
                        <div className="text-muted-foreground">
                          {category.icon}
                        </div>
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="outline" className="bg-background">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Category
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* Main feed */}
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Share with the Agora</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Input 
                    placeholder="Share information, evidence, or ask for verification..." 
                    className="mb-3"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Globe className="h-4 w-4 mr-2" />
                        Public
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mic className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" disabled={!newPost.trim()}>
                      <Send className="h-4 w-4 mr-2" />
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mb-6">
            <Tabs defaultValue="latest">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="verified">Verified</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Saved
                </Button>
              </div>
              
              <TabsContent value="latest">
                <div>
                  {posts.map(post => (
                    <AgoraPost key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="trending">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
                      <Badge variant="outline" className="mb-4">Coming Soon</Badge>
                      <p className="text-muted-foreground">Trending content analysis will be available soon.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="verified">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
                      <Badge variant="outline" className="mb-4">Coming Soon</Badge>
                      <p className="text-muted-foreground">Verified content curation will be available soon.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgoraHub;
