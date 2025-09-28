
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Leadership Journey</h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your organization? Let's discuss how LeadForward Academy can help 
            develop your leaders and drive sustainable business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-blue-900"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office Location</h4>
                    <p className="text-blue-100">Phnom Penh, Cambodia</p>
                    <p className="text-blue-200 text-sm">Central Business District</p>
                    <a 
                      href="https://maps.app.goo.gl/nbcgdUZfUp2LUmxH9?g_st=ipc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm mt-2 transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line mr-1"></i>
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xl text-blue-900"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-blue-100">+855 12 345 678</p>
                    <p className="text-blue-200 text-sm">Monday - Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xl text-blue-900"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-blue-100">info@leadforward.academy</p>
                    <p className="text-blue-200 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
              <h4 className="text-lg font-bold text-white mb-4">Find Us</h4>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.123456789!2d104.9176!3d11.5564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzIzLjAiTiAxMDTCsDU1JzAzLjQiRQ!5e0!3m2!1sen!2skh!4v1640000000000!5m2!1sen!2skh"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Schedule a Consultation</h4>
              <p className="text-blue-900 mb-6">
                Book a free 30-minute consultation to discuss your organization's leadership development needs.
              </p>
              <Button variant="secondary" size="md" className="bg-blue-900 text-white hover:bg-blue-800">
                Book Free Consultation
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm pr-8"
                    >
                      <option value="" className="text-gray-900">Select a service</option>
                      <option value="leadership-training" className="text-gray-900">Leadership Training</option>
                      <option value="team-coaching" className="text-gray-900">Team Coaching</option>
                      <option value="strategic-consulting" className="text-gray-900">Strategic Consulting</option>
                      <option value="hr-outsourcing" className="text-gray-900">HR Outsourcing</option>
                      <option value="digital-marketing" className="text-gray-900">Digital Marketing</option>
                      <option value="research" className="text-gray-900">Applied Research</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm resize-none"
                    placeholder="Tell us about your organization's needs and how we can help... (max 500 characters)"
                  />
                  <div className="text-right mt-1">
                    <span className="text-blue-200 text-xs">{formData.message.length}/500</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-blue-200">
                    * Required fields
                  </div>
                  <Button 
                    variant="primary" 
                    size="lg"
                    disabled={isSubmitting}
                    className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-200">
                    <i className="ri-check-circle-line mr-2"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-200">
                    <i className="ri-error-warning-line mr-2"></i>
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
