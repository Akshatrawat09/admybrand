import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles, Crown, Rocket } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    icon: Sparkles,
    color: 'text-violet-400',
    basePrice: 29,
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5,000 contacts',
      'Basic AI campaign planner',
      'Email marketing automation',
      'Standard analytics',
      'Email support',
      '5 team members'
    ],
    popular: false
  },
  {
    name: 'Pro',
    icon: Crown,
    color: 'text-yellow-400',
    basePrice: 99,
    description: 'For growing businesses that need more power',
    features: [
      'Up to 50,000 contacts',
      'Advanced AI features',
      'Multi-channel automation',
      'Predictive analytics',
      'Priority support',
      'Unlimited team members',
      'Custom integrations',
      'A/B testing suite'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    color: 'text-cyan-400',
    basePrice: 299,
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited contacts',
      'Custom AI model training',
      'White-label solution',
      'Advanced security & compliance',
      'Dedicated success manager',
      'Custom development',
      'API access',
      'SLA guarantee'
    ],
    popular: false
  }
];

const comparisonFeatures = [
  { name: 'Contacts', starter: '5,000', pro: '50,000', enterprise: 'Unlimited' },
  { name: 'AI Campaign Planner', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom AI' },
  { name: 'Team Members', starter: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Analytics', starter: 'Standard', pro: 'Predictive', enterprise: 'Advanced' },
  { name: 'Support', starter: 'Email', pro: 'Priority', enterprise: 'Dedicated Manager' },
  { name: 'API Access', starter: false, pro: true, enterprise: true },
  { name: 'White-label', starter: false, pro: false, enterprise: true },
  { name: 'SLA', starter: false, pro: false, enterprise: true }
];

export default function PricingCalculator() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [teamSize, setTeamSize] = useState(10);

  const getPrice = (basePrice: number) => {
    const cycleMultiplier = billingCycle === 'annual' ? 10 : 12; // 20% discount for annual
    const teamMultiplier = Math.max(1, Math.floor(teamSize / 10));
    return Math.round(basePrice * cycleMultiplier / 12 * teamMultiplier);
  };

  const getSavings = (basePrice: number) => {
    if (billingCycle === 'annual') {
      return Math.round(basePrice * 12 * 0.2);
    }
    return 0;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span>Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              AI Marketing Plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Scale with confidence. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-1 flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                billingCycle === 'monthly' 
                ? 'gradient-primary text-white font-semibold' 
                : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                billingCycle === 'annual' 
                ? 'gradient-primary text-white font-semibold' 
                : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Interactive calculator */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="glass-card border-0">
            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Size
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="pricing-slider w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1</span>
                  <span className="text-white font-semibold">{teamSize} members</span>
                  <span>100+</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={tier.name}
              className={`glass-card border-0 relative group hover:scale-105 transition-all duration-500 animate-slide-in ${
                tier.popular ? 'ring-2 ring-violet-500/50 shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-white px-4 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center p-8 pb-6">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-4`}>
                  <tier.icon className={`w-8 h-8 ${tier.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{tier.description}</p>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">
                    ${getPrice(tier.basePrice)}
                    <span className="text-lg font-normal text-gray-400">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {getSavings(tier.basePrice) > 0 && (
                    <p className="text-green-400 text-sm">
                      Save ${getSavings(tier.basePrice)}/year
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                    ? 'gradient-primary text-white animate-glow' 
                    : 'glass hover:bg-white/10 border-white/20'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature comparison table */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Compare All Features</h3>
            <p className="text-gray-300">Everything you need to know about our plans</p>
          </div>

          <Card className="glass-card border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 text-white font-semibold">Features</th>
                      <th className="text-center p-6 text-white font-semibold">Starter</th>
                      <th className="text-center p-6 text-white font-semibold">Pro</th>
                      <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-6 text-gray-300 font-medium">{feature.name}</td>
                        <td className="text-center p-6">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{feature.starter}</span>
                          )}
                        </td>
                        <td className="text-center p-6">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{feature.pro}</span>
                          )}
                        </td>
                        <td className="text-center p-6">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}