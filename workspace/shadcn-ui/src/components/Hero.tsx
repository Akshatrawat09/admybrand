import { Button } from '@/components/ui/button';
import { Play, Sparkles, TrendingUp, Zap, ChevronRight, Star, Orbit, Cpu, Database, Brain, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559526324-593bc073d938?w=1920&h=1080&fit=crop&crop=center)'
        }}
      />
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/80 to-slate-900/95" />
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orbs with 3D effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 rounded-full mix-blend-soft-light filter blur-3xl opacity-50 animate-3d-float shadow-2xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-400/25 to-gray-400/25 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-3d-float-reverse shadow-2xl" style={{ animationDelay: '-1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-amber-300/35 to-orange-300/35 rounded-full mix-blend-soft-light filter blur-3xl opacity-45 animate-3d-rotate shadow-2xl" style={{ animationDelay: '-2s' }} />
        
        {/* 3D Geometric shapes */}
        <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-br from-amber-400/40 to-yellow-500/40 transform rotate-45 animate-3d-cube shadow-lg backdrop-blur-sm border border-amber-300/30" />
        <div className="absolute bottom-32 left-16 w-8 h-8 bg-gradient-to-br from-slate-400/50 to-gray-500/50 rounded-full animate-3d-bounce shadow-lg backdrop-blur-sm" />
        <div className="absolute top-40 left-20 w-6 h-16 bg-gradient-to-b from-amber-300/60 to-orange-400/60 animate-3d-swing shadow-lg backdrop-blur-sm border border-amber-200/20" style={{ animationDelay: '-0.5s' }} />
        
        {/* Floating 3D rings */}
        <div className="absolute top-1/2 right-32 w-24 h-24 border-2 border-amber-400/30 rounded-full animate-3d-orbit shadow-lg backdrop-blur-sm">
          <div className="absolute inset-2 border border-amber-300/40 rounded-full animate-3d-orbit-reverse">
            <div className="absolute inset-2 w-2 h-2 bg-amber-400 rounded-full animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Particle system */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full animate-3d-particle opacity-60 shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-slide-in">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-8 py-4 text-sm font-medium border border-amber-500/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-gray-200">Enterprise-Grade Marketing Intelligence</span>
          </div>

          {/* Elegant headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="block gradient-premium bg-clip-text text-transparent">
              Transform Your
            </span>
            <span className="block text-white font-light">
              Marketing Excellence
            </span>
            <span className="block gradient-elegant bg-clip-text text-transparent">
              with Premium AI
            </span>
          </h1>

          {/* Refined subtext */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            The sophisticated marketing intelligence platform trusted by enterprise leaders to deliver exceptional results.
          </p>

          {/* 3D Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Button size="lg" className="glass-card hover:bg-white/12 border border-amber-500/30 px-12 py-8 text-lg font-medium gradient-primary text-slate-900 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-1 animate-3d-hover">
              <Zap className="w-5 h-5 mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              Schedule Consultation
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="glass hover:bg-white/8 border-white/20 px-12 py-8 text-lg font-medium text-white hover:text-amber-300 transition-all duration-500 group transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-white/20">
              <Play className="w-5 h-5 mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              View Capabilities
              <Star className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-500" />
            </Button>
          </div>

          {/* Premium trust indicators */}
          <div className="pt-16 space-y-6">
            <p className="text-gray-300 text-sm uppercase tracking-widest font-light">Trusted by Fortune 500 Companies</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              {['Goldman Sachs', 'McKinsey & Company', 'Deloitte', 'BCG', 'JP Morgan'].map((company) => (
                <div key={company} className="text-xl font-light text-white/60 hover:text-amber-300/80 transition-colors duration-300">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Agency-Style Brand Showcase */}
        <div className="relative max-w-7xl mx-auto mt-16 animate-slide-in" style={{ animationDelay: '0.3s' }}>
          {/* Floating brand elements */}
          <div className="absolute -top-10 -left-10 z-20">
            <div className="animate-brand-float-1">
              <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg animate-brand-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-5 -right-16 z-20">
            <div className="animate-brand-float-2">
              <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center shadow-xl">
                <div className="w-6 h-6 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full animate-brand-spin"></div>
              </div>
            </div>
          </div>

          {/* Main showcase container */}
          <div className="glass-card rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-brand-drift"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full opacity-30"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 min-h-[500px]">
              {/* Brand showcase header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-amber-300">Live Brand Intelligence</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 animate-brand-reveal">Premium Marketing Dashboard</h3>
                <p className="text-gray-400 animate-brand-reveal" style={{ animationDelay: '0.2s' }}>Real-time analytics for enterprise brands</p>
              </div>

              {/* Animated brand mockups grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Brand Performance Card */}
                <div className="glass-card rounded-xl p-6 space-y-4 animate-agency-slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center animate-brand-glow">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">Brand Growth</span>
                    </div>
                    <div className="animate-number-counter">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">+347%</div>
                    </div>
                  </div>
                  
                  {/* Animated chart */}
                  <div className="space-y-2">
                    <div className="flex items-end justify-between h-16">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-emerald-500 to-green-400 rounded-t animate-chart-build"
                          style={{
                            width: '8px',
                            height: `${height}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 text-center">7-day performance</div>
                  </div>
                </div>

                {/* Creative Assets Card */}
                <div className="glass-card rounded-xl p-6 space-y-4 animate-agency-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg flex items-center justify-center animate-brand-glow">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">Creative Suite</span>
                  </div>
                  
                  {/* Brand asset thumbnails */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((item, i) => (
                      <div
                        key={item}
                        className="aspect-square bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg border border-violet-400/30 animate-brand-thumbnail"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-violet-400/50 rounded animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-xs text-gray-400 text-center">AI-Generated Assets</div>
                </div>

                {/* Campaign Metrics Card */}
                <div className="glass-card rounded-xl p-6 space-y-4 animate-agency-slide-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center animate-brand-glow">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">Campaign Impact</span>
                  </div>
                  
                  {/* Live metrics */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Impressions</span>
                      <span className="text-cyan-400 font-mono animate-number-tick">2.4M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Conversions</span>
                      <span className="text-green-400 font-mono animate-number-tick" style={{ animationDelay: '0.5s' }}>8.2K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Engagement</span>
                      <span className="text-yellow-400 font-mono animate-number-tick" style={{ animationDelay: '1s' }}>94.7%</span>
                    </div>
                  </div>
                  
                  {/* Animated progress ring */}
                  <div className="flex justify-center mt-4">
                    <div className="relative w-12 h-12">
                      <svg className="w-12 h-12 animate-brand-rotate" viewBox="0 0 24 24">
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="none"
                          stroke="rgba(251, 191, 36, 0.2)"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          fill="none"
                          stroke="rgb(251, 191, 36)"
                          strokeWidth="2"
                          strokeDasharray={`${2 * Math.PI * 8}`}
                          strokeDashoffset={`${2 * Math.PI * 8 * 0.25}`}
                          className="animate-progress-fill"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-amber-400">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}