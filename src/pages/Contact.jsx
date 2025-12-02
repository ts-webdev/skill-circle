import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
     
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
    
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setIsSubmitted(true);
      reset();

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error(error);
    }
  };

  const contactInfo = [
    {
      icon: <MdEmail className="text-3xl" />,
      title: "Email",
      details: "support@skillcircle.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <MdPhone className="text-3xl" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9am-6pm EST"
    },
    {
      icon: <MdLocationOn className="text-3xl" />,
      title: "Location",
      details: "123 Skill Street, Community City",
      subtitle: "Available worldwide online"
    },
    {
      icon: <MdAccessTime className="text-3xl" />,
      title: "Support Hours",
      details: "9:00 AM - 8:00 PM",
      subtitle: "7 days a week"
    }
  ];

  const contactReasons = [
    "General inquiry about SkillCircle",
    "Technical support or bug report",
    "Partnership or collaboration",
    "Feature request or suggestion",
    "Account or billing issues",
    "Community guidelines questions"
  ];

  return (
    <div className="min-h-screen bg-linear-to-b mt-20 from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#10B981',
            },
          },
          error: {
            style: {
              background: '#EF4444',
            },
          },
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#560BAD]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about SkillCircle? We're here to help you connect, learn, and grow with your local community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate__animated animate__fadeInLeft">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { 
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560BAD] focus:border-transparent transition ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560BAD] focus:border-transparent transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  {...register("subject", { required: "Please select a subject" })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560BAD] focus:border-transparent transition ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a topic</option>
                  {contactReasons.map((reason, index) => (
                    <option key={index} value={reason}>{reason}</option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaComment className="inline mr-2" />
                  Message
                </label>
                <textarea
                  {...register("message", { 
                    required: "Message is required",
                    minLength: { value: 10, message: "Message must be at least 10 characters" },
                    maxLength: { value: 1000, message: "Message must be less than 1000 characters" }
                  })}
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#560BAD] focus:border-transparent transition ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us how we can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] ${
                  isSubmitting || isSubmitted 
                    ? 'bg-purple-500 cursor-not-allowed' 
                    : 'bg-linear-to-r from-[#7209B7] to-[#3A0CA3] hover:from-[#3A0CA3] hover:to-[#7209B7]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-500 text-center">
              By contacting us, you agree to our{' '}
              <a href="/privacy" className="text-[#560BAD] hover:underline">Privacy Policy</a>
            </p>
          </div>

          {/* Right Column - Contact Info & FAQ */}
          <div className="space-y-8 animate__animated animate__fadeInRight">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#7209B7]/10 to-[#3A0CA3]/10">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-[#560BAD] font-medium">{item.details}</p>
                      <p className="text-gray-600 text-sm mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            

            {/* Community Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Our Community Impact</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#560BAD]">10,000+</div>
                  <div className="text-gray-600 text-sm">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#560BAD]">500+</div>
                  <div className="text-gray-600 text-sm">Skills Offered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#560BAD]">98%</div>
                  <div className="text-gray-600 text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-linear-to-r from-[#7209B7]/5 to-[#3A0CA3]/5 rounded-2xl p-8 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start sharing your skills or learning something new today. Join thousands of others in our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="px-8 py-3 bg-linear-to-r from-[#7209B7] to-[#3A0CA3] text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Sign Up Free
            </a>
            <a 
              href="/about" 
              className="px-8 py-3 border-2 border-[#560BAD] text-[#560BAD] font-semibold rounded-lg hover:bg-[#560BAD] hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;