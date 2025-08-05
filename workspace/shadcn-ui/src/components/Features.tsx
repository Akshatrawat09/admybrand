import { Brain, TrendingUp, Zap, Palette, DollarSign, BarChart3, Target, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'Strategic Intelligence',
    description: 'Enterprise-grade AI that transforms market data into actionable strategies, delivering competitive advantage through sophisticated analysis.',
    color: 'text-amber-400',
    glowColor: 'shadow-amber-500/20',
    bgGradient: 'from-amber-500/15 via-yellow-500/10 to-amber-500/15',
    borderGradient: 'from-amber-400/40 to-yellow-400/40'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Excellence',
    description: 'Advanced forecasting capabilities that anticipate market trends and customer behaviors with unprecedented accuracy.',
    color: 'text-slate-300',
    glowColor: 'shadow-slate-500/20',
    bgGradient: 'from-slate-500/15 via-gray-500/10 to-slate-500/15',
    borderGradient: 'from-slate-400/40 to-gray-400/40'
  },
  {
    icon: Zap,
    title: 'Intelligent Orchestration',
    description: 'Seamlessly coordinate complex marketing operations with precision automation that adapts to your business dynamics.',
    color: 'text-amber-300',
    glowColor: 'shadow-amber-500/20',
    bgGradient: 'from-amber-400/15 via-orange-400/10 to-amber-400/15',
    borderGradient: 'from-amber-300/40 to-orange-300/40'
  },
  {
    icon: Palette,
    title: 'Creative Mastery',
    description: 'Generate premium content and creative assets that resonate with your target audience and elevate brand perception.',
    color: 'text-gray-300',
    glowColor: 'shadow-gray-500/20',
    bgGradient: 'from-gray-500/15 via-slate-500/10 to-gray-500/15',
    borderGradient: 'from-gray-400/40 to-slate-400/40'
  },
  {
    icon: DollarSign,
    title: 'Investment Optimization',
    description: 'Maximize marketing ROI through intelligent budget allocation and performance optimization across all channels.',
    color: 'text-yellow-400',
    glowColor: 'shadow-yellow-500/20',
    bgGradient: 'from-yellow-500/15 via-amber-500/10 to-yellow-500/15',
    borderGradient: 'from-yellow-400/40 to-amber-400/40'
  },
  {
    icon: BarChart3,
    title: 'Executive Dashboards',
    description: 'Real-time executive insights with sophisticated analytics that inform strategic decisions and drive business growth.',
    color: 'text-slate-400',
    glowColor: 'shadow-slate-500/20',
    bgGradient: 'from-slate-400/15 via-gray-400/10 to-slate-400/15',
    borderGradient: 'from-slate-300/40 to-gray-300/40'
  }
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Premium header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-8">
          <div className="inline-flex items-center gap-3 glass rounded-full px-8 py-4 text-sm font-medium border border-amber-500/20">
            <Target className="w-4 h-4 text-amber-400" />
            <span className="text-gray-200">Premium Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            <span className="gradient-premium bg-clip-text text-transparent">
              Sophisticated Solutions
            </span>
            <br />
            <span className="text-white font-light">for Modern Enterprises</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            Elevate your marketing operations with enterprise-grade intelligence designed for discerning business leaders.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none`} />
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl ${feature.glowColor}`} />
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${feature.borderGradient} rounded-full animate-pulse`}
                    style={{
                      left: `${20 + (i * 15)}%`,
                      top: `${15 + (i * 12)}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>

              <Card className="relative glass-card border-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl backdrop-blur-xl">
                <CardContent className="p-8 space-y-6 relative z-10">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon container */}
                  <div className="relative">
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.borderGradient} opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500`} />
                    
                    <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.bgGradient} group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/10 group-hover:border-white/30`}>
                      <feature.icon className={`w-8 h-8 ${feature.color} group-hover:drop-shadow-lg transition-all duration-300`} />
                      
                      {/* Sparkle effect */}
                      <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Sparkles className="w-4 h-4 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4 relative">
                    <h3 className="text-xl font-bold text-white group-hover:gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 relative">
                      {feature.title}
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:animate-pulse transition-opacity duration-700" />
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Interactive hover element */}
                  <div className="relative overflow-hidden">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className={`text-sm font-medium flex items-center gap-2 ${feature.color} group-hover:text-white transition-colors duration-300`}>
                        <span>Explore feature</span>
                        <div className="relative">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.borderGradient} flex items-center justify-center animate-pulse`}>
                            <div className="w-2 h-2 bg-white rounded-full transform group-hover:translate-x-0.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`h-full bg-gradient-to-r ${feature.borderGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to experience the power of AI marketing?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="glass-card hover:bg-white/15 border-0 px-8 py-4 rounded-xl font-semibold gradient-primary text-white animate-glow group transition-all duration-300">
              <Clock className="w-5 h-5 mr-2 inline group-hover:scale-110 transition-transform" />
              Start Your Free Trial
            </button>
            <button className="glass hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}