import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'VP of Marketing',
    company: 'TechCorp',
    avatar: '/images/SarahJohnson.jpg',
    content: 'ADmyBRAND AI Suite transformed our marketing ROI by 245%. The predictive analytics helped us identify high-value customers before our competitors.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Growth Director',
    company: 'StartupX',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'The AI campaign planner is incredible. What used to take our team weeks now happens in hours, and the results are consistently better than manual planning.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'CMO',
    company: 'E-commerce Plus',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'The automation features saved us 40+ hours per week. Our team can now focus on strategy while AI handles the execution flawlessly.',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'Marketing Manager',
    company: 'Global Brands',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Real-time insights and spend optimization helped us reduce ad waste by 60% while increasing conversions by 180%. Game-changing platform.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Digital Marketing Lead',
    company: 'Fashion Forward',
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face',
    content: 'The creative generator produces ad copy and visuals that consistently outperform our human-created content. It\'s like having a creative genius on demand.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Head of Performance Marketing',
    company: 'FinTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    content: 'ADmyBRAND\'s predictive analytics helped us identify market trends 3 months before they hit. Our campaign timing is now perfect every time.',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>Customer Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Marketing Leaders
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            See how teams like yours are achieving breakthrough results with AI-powered marketing.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative h-96 overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <Card className="glass-card border-0 h-full">
                  <CardContent className="p-12 h-full flex flex-col justify-center">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                      {/* Quote icon */}
                      <Quote className="w-12 h-12 text-violet-400 mx-auto opacity-50" />
                      
                      {/* Rating */}
                      <div className="flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial content */}
                      <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Customer info */}
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full ring-2 ring-violet-500/30"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-white text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-400">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass hover:bg-white/10 w-12 h-12"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass hover:bg-white/10 w-12 h-12"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-violet-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: '10,000+', label: 'Marketing Teams' },
            { number: '245%', label: 'Average ROI Increase' },
            { number: '4.9/5', label: 'Customer Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}