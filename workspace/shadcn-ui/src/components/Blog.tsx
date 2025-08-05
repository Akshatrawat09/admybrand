import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of AI in Marketing: 2025 Trends and Predictions',
    excerpt: 'Discover the emerging AI technologies that will reshape marketing strategies in 2025 and beyond.',
    author: 'Sarah Chen',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'AI Trends',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    featured: true
  },
  {
    title: 'How to Increase ROI by 300% with Predictive Analytics',
    excerpt: 'Learn the proven strategies that top marketers use to maximize campaign performance with AI.',
    author: 'Michael Rodriguez',
    date: 'Dec 12, 2024',
    readTime: '6 min read',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    featured: false
  },
  {
    title: 'Marketing Automation Best Practices for 2025',
    excerpt: 'Essential automation workflows that every modern marketing team should implement.',
    author: 'Emily Park',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    category: 'Best Practices',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    featured: false
  },
  {
    title: 'AI-Generated Creative: The New Era of Ad Content',
    excerpt: 'Explore how artificial intelligence is revolutionizing creative content generation.',
    author: 'David Kim',
    date: 'Dec 8, 2024',
    readTime: '7 min read',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
    featured: false
  }
];

export default function Blog() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Latest Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Marketing</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Intelligence Hub
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Stay ahead of the curve with expert insights, case studies, and AI marketing strategies.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Featured post */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 overflow-hidden group hover:scale-[1.02] transition-all duration-500 animate-slide-in">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center space-y-6">
                    <div className="space-y-4">
                      <Badge variant="outline" className="w-fit glass border-white/20">
                        {blogPosts[0].category}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold text-white group-hover:gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {blogPosts[0].title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{blogPosts[0].author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{blogPosts[0].date}</span>
                        </div>
                      </div>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    
                    <Button className="w-fit glass hover:bg-white/10 group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regular posts */}
          {blogPosts.slice(1).map((post, index) => (
            <Card 
              key={index}
              className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500 animate-slide-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <Badge variant="outline" className="w-fit glass border-white/20">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-white group-hover:gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 pt-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between glass hover:bg-white/10 group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button className="glass-card hover:bg-white/15 border-0 px-8 py-4 font-semibold gradient-primary text-white animate-glow group">
            <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}