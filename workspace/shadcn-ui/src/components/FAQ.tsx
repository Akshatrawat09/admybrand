import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, HelpCircle, MessageCircle, Mail } from 'lucide-react';

const faqs = [
  {
    question: 'How does ADmyBRAND AI Suite improve my marketing ROI?',
    answer: 'Our AI platform analyzes your campaign data, customer behavior, and market trends to optimize ad spend, improve targeting, and predict high-performing strategies. Customers typically see 200-300% ROI improvements within the first 3 months by reducing wasted spend and increasing conversion rates.'
  },
  {
    question: 'What makes your AI different from other marketing tools?',
    answer: 'ADmyBRAND uses proprietary machine learning models trained on billions of marketing data points. Unlike generic tools, our AI learns your specific business patterns, industry trends, and customer preferences to provide personalized recommendations that get better over time.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most customers see initial improvements within 2-4 weeks of implementation. Significant results, including 100%+ ROI improvements, typically occur within 60-90 days as our AI learns your business patterns and optimizes campaigns automatically.'
  },
  {
    question: 'Do I need technical expertise to use the platform?',
    answer: 'No technical expertise required! ADmyBRAND is designed for marketers, not engineers. Our intuitive interface, guided setup process, and dedicated customer success team ensure you\'re up and running quickly. We also provide comprehensive training and 24/7 support.'
  },
  {
    question: 'Can ADmyBRAND integrate with my existing marketing tools?',
    answer: 'Yes! We integrate with 200+ popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and more. Our API also allows custom integrations with proprietary systems. Setup typically takes less than 30 minutes.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer multiple support tiers: email support for Starter plans, priority support for Pro users, and dedicated customer success managers for Enterprise clients. All plans include onboarding assistance, training resources, and access to our knowledge base.'
  },
  {
    question: 'Is my data secure with ADmyBRAND?',
    answer: 'Absolutely. We\'re SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data is never shared with third parties, and you maintain full control over data retention and deletion. We also offer on-premise deployment for Enterprise clients.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel anytime with no penalties or hidden fees. We offer month-to-month and annual billing options. Even after canceling, you\'ll retain access to your data and can export it at any time. We also offer a 30-day money-back guarantee.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Got</span>
            <span className="gradient-primary bg-clip-text text-transparent"> Questions?</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite and how it can transform your marketing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="glass-card border-0 overflow-hidden animate-slide-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4 group-hover:gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">
              Still have questions?
            </h3>
            <p className="text-gray-300">
              Our team is here to help you succeed with AI-powered marketing.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="glass-card hover:bg-white/15 border-0 px-8 py-4 font-semibold gradient-primary text-white group transition-all duration-300">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Live Chat Support
            </Button>
            <Button className="glass hover:bg-white/10 px-8 py-4 font-semibold text-white transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}