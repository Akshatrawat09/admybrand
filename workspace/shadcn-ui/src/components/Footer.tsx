import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Facebook,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-slate-900 to-slate-800" />
      
      <div className="relative z-10">
        {/* Newsletter section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>Stay Updated</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Get the Latest AI Marketing Insights
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Join 50,000+ marketers receiving weekly tips, strategies, and case studies.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="glass border-white/20 text-white placeholder:text-gray-400 flex-1"
                />
                <Button className="gradient-primary text-white px-8 font-semibold group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-400">
                No spam. Unsubscribe anytime. Read our privacy policy.
              </p>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">
                  ADmyBRAND AI Suite
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                The world's most advanced AI-powered marketing platform. Transform your campaigns with predictive analytics, automation, and intelligent optimization.
              </p>
              
              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span>hello@admybrand.ai</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-violet-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              
              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Youtube, href: '#', label: 'YouTube' },
                  { icon: Facebook, href: '#', label: 'Facebook' }
                ].map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="glass hover:bg-white/10 w-10 h-10 group"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Product links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Product</h4>
              <ul className="space-y-3">
                {[
                  'AI Campaign Planner',
                  'Predictive Analytics',
                  'Marketing Automation',
                  'Creative Generator',
                  'Spend Optimizer',
                  'Real-Time Insights',
                  'API Documentation'
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white hover:gradient-primary hover:bg-clip-text transition-all duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  'About Us',
                  'Careers',
                  'News & Press',
                  'Partnerships',
                  'Investors',
                  'Customer Stories',
                  'Events'
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white hover:gradient-primary hover:bg-clip-text transition-all duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-3">
                {[
                  'Blog',
                  'Case Studies',
                  'Whitepapers',
                  'Webinars',
                  'Help Center',
                  'Community',
                  'Training',
                  'Status Page'
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white hover:gradient-primary hover:bg-clip-text transition-all duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-400 text-sm">
                © {currentYear} ADmyBRAND AI Suite. All rights reserved.
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}