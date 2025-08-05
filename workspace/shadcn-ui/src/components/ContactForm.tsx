import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  teamSize: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName': {
        return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
      }
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      }
      case 'company': {
        return value.trim().length < 2 ? 'Company name is required' : '';
      }
      case 'phone': {
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
        return value && !phoneRegex.test(value.replace(/\s+/g, '')) ? 'Please enter a valid phone number' : '';
      }
      case 'message': {
        return value.trim().length < 10 ? 'Please provide more details (minimum 10 characters)' : '';
      }
      default:
        return '';
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'phone' && key !== 'teamSize' && key !== 'budget') { // Optional fields
        const error = validateField(key, value);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="glass-card border-0">
              <CardContent className="p-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white">
                    Thank You!
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your message has been received. Our team will get back to you within 24 hours to discuss how ADmyBRAND AI Suite can transform your marketing.
                  </p>
                </div>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: '', lastName: '', email: '', company: '',
                      phone: '', teamSize: '', budget: '', message: ''
                    });
                  }}
                  className="glass hover:bg-white/10"
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Get in Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Ready to</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Transform Your Marketing?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Let's discuss how ADmyBRAND AI Suite can help you achieve breakthrough results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our team of AI marketing experts is ready to show you how to achieve 200%+ ROI improvements with our platform.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', content: 'hello@admybrand.ai', description: 'Get a response within 4 hours' },
                { icon: Phone, title: 'Call Us', content: '+1 (555) 123-4567', description: 'Mon-Fri, 9AM-6PM EST' },
                { icon: MapPin, title: 'Visit Us', content: 'San Francisco, CA', description: 'Schedule an office visit' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-violet-400 font-medium">{item.content}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Get Your Free Marketing Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`glass border-white/20 text-white placeholder:text-gray-400 ${
                          errors.firstName ? 'border-red-500' : ''
                        }`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`glass border-white/20 text-white placeholder:text-gray-400 ${
                          errors.lastName ? 'border-red-500' : ''
                        }`}
                        placeholder="Smith"
                      />
                      {errors.lastName && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email and Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`glass border-white/20 text-white placeholder:text-gray-400 ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className={`glass border-white/20 text-white placeholder:text-gray-400 ${
                          errors.company ? 'border-red-500' : ''
                        }`}
                        placeholder="Your Company"
                      />
                      {errors.company && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.company}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone and Team Size */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`glass border-white/20 text-white placeholder:text-gray-400 ${
                          errors.phone ? 'border-red-500' : ''
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamSize" className="text-white">Team Size</Label>
                      <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                        <SelectTrigger className="glass border-white/20 text-white">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent className="glass border-white/20 bg-slate-800">
                          <SelectItem value="1-10">1-10 people</SelectItem>
                          <SelectItem value="11-50">11-50 people</SelectItem>
                          <SelectItem value="51-200">51-200 people</SelectItem>
                          <SelectItem value="200+">200+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-white">Monthly Marketing Budget</Label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="glass border-white/20 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="glass border-white/20 bg-slate-800">
                        <SelectItem value="<10k">Less than $10,000</SelectItem>
                        <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Tell us about your marketing goals *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`glass border-white/20 text-white placeholder:text-gray-400 min-h-[120px] resize-none ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      placeholder="What marketing challenges are you facing? What results are you hoping to achieve?"
                    />
                    {errors.message && (
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-semibold gradient-primary text-white animate-glow group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Send Message & Get Free Analysis
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}