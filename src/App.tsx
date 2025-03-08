import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight, Award, Heart, UserPlus, GraduationCap, Stethoscope, Users, Menu, X, Star, ChevronDown, FileText, Zap } from 'lucide-react';

// Custom tooth icon component
const ToothIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M7 2.5a4 4 0 0 1 10 0c0 1.5-1 2-2 3.5s-1 2-1 3.5v11c0-1-1-2-3-2s-3 1-3 2V9.5c0-1.5 0-2-1-3.5s-2-2-2-3.5a4 4 0 0 1 2-3.5Z" />
  </svg>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  const faqs = [
    {
      question: "What is a root canal?",
      answer: "A root canal is a dental procedure that removes infected or damaged pulp from inside a tooth. The space is then cleaned, disinfected, and filled with a special material to prevent future infections. This procedure saves teeth that would otherwise need to be extracted."
    },
    {
      question: "Why do I need a root canal?",
      answer: "You may need a root canal if you have severe tooth decay, a cracked tooth, or an injury that has damaged the tooth's pulp. Signs include severe tooth pain, sensitivity to hot and cold, swollen gums, or discoloration of the tooth."
    },
    {
      question: "Do root canals hurt?",
      answer: "Modern root canal procedures are virtually painless thanks to advanced techniques and effective anesthesia. Most patients report that it's no more uncomfortable than getting a filling. Any discomfort you might have been experiencing due to infection will be relieved by the procedure."
    },
    {
      question: "How long does it take to recover from a root canal?",
      answer: "Most patients return to their normal activities the day after the procedure. Mild discomfort may be present for a few days and can be managed with over-the-counter pain medication. Your tooth may feel sensitive for a few weeks, especially if there was pain or infection before the procedure."
    },
    {
      question: "Is a root canal covered by insurance?",
      answer: "Most dental insurance plans cover root canal treatment as it's considered a medically necessary procedure. Coverage typically ranges from 50% to 80% of the cost. We recommend checking with your insurance provider for specific coverage details and are happy to help you understand your benefits."
    }
  ];

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Dr. Tran and his team are exceptional! They made my root canal procedure completely painless and comfortable. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      name: "Michael P.",
      rating: 5,
      text: "Best endodontist in the area! Professional, caring, and extremely skilled. The office is modern and clean, and the staff is wonderful.",
      date: "1 month ago"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "I was very nervous about my root canal, but Dr. Tran put me at ease. The procedure was quick and painless. Thank you!",
      date: "2 months ago"
    }
  ];

  const services = [
    {
      title: "Root Canal Therapy",
      description: "State-of-the-art endodontic treatment to save your natural tooth and relieve pain.",
      icon: <ToothIcon />
    },
    {
      title: "Endodontic Retreatment",
      description: "Specialized care for previously treated teeth that haven't healed properly or have developed new problems.",
      icon: <FileText className="w-10 h-10" />
    },
    {
      title: "Emergency Care",
      description: "Prompt attention for dental emergencies including severe tooth pain, traumatic injuries, and infections.",
      icon: <Zap className="w-10 h-10" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <ToothIcon />
              <span className="text-2xl font-bold text-gray-900">Crimson Endodontics</span>
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" onClick={handleNavClick} className="text-gray-600 hover:text-crimson transition-colors">Home</a>
              <a href="#about" onClick={handleNavClick} className="text-gray-600 hover:text-crimson transition-colors">About</a>
              <a href="#doctor" onClick={handleNavClick} className="text-gray-600 hover:text-crimson transition-colors">Meet Dr. Tran</a>
              <a href="#services" onClick={handleNavClick} className="text-gray-600 hover:text-crimson transition-colors">Services</a>
              <a href="#faq" onClick={handleNavClick} className="text-gray-600 hover:text-crimson transition-colors">FAQ</a>
              <a href="#reviews" onClick={handleNavClick} className="text-gray-600 hover:text-crimson transition-colors">Reviews</a>
              <a href="#location" onClick={handleNavClick} className="text-gray-600 hover:text-crimson transition-colors">Location</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="#contact" onClick={handleNavClick} className="bg-crimson text-white px-6 py-2 rounded-full hover:bg-crimson-dark transition-colors hidden lg:block">
                Contact Us
              </a>
              <button 
                className="lg:hidden text-gray-600 hover:text-crimson transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100`}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#home" onClick={handleNavClick} className="block text-gray-600 hover:text-crimson transition-colors">Home</a>
            <a href="#about" onClick={handleNavClick} className="block text-gray-600 hover:text-crimson transition-colors">About</a>
            <a href="#doctor" onClick={handleNavClick} className="block text-gray-600 hover:text-crimson transition-colors">Meet Dr. Tran</a>
            <a href="#services" onClick={handleNavClick} className="block text-gray-600 hover:text-crimson transition-colors">Services</a>
            <a href="#faq" onClick={handleNavClick} className="block text-gray-600 hover:text-crimson transition-colors">FAQ</a>
            <a href="#reviews" onClick={handleNavClick} className="block text-gray-600 hover:text-crimson transition-colors">Reviews</a>
            <a href="#location" onClick={handleNavClick} className="block text-gray-600 hover:text-crimson transition-colors">Location</a>
            <a href="#contact" onClick={handleNavClick} className="inline-block bg-crimson text-white px-6 py-2 rounded-full hover:bg-crimson-dark transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px] md:h-[700px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
              alt="Modern dental office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Expert Root Canal Treatment in Dedham</h1>
              <p className="text-lg md:text-xl mb-8">Specialized endodontic care with advanced technology and gentle treatment approaches.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" onClick={handleNavClick} className="bg-crimson text-white px-8 py-3 rounded-full hover:bg-crimson-dark transition-colors inline-flex items-center justify-center">
                  Schedule Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#location" onClick={handleNavClick} className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-center">
                  Find Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in">About Crimson Endodontics</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm fade-in">
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Crimson Endodontics, we specialize in providing exceptional endodontic care to patients in Dedham and the surrounding Boston Metro Area. Our practice is dedicated to saving your natural teeth through advanced root canal therapy and other specialized endodontic procedures.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our state-of-the-art facility is equipped with the latest technology, allowing us to provide precise, efficient, and comfortable treatments. We understand that many patients feel anxious about dental procedures, which is why we've created a warm, welcoming environment and prioritize gentle approaches to care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Led by Dr. David Tran, our team is committed to excellence in endodontic care. We take the time to thoroughly evaluate each patient's condition and develop personalized treatment plans that address their specific needs and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow fade-in">
              <Award className="w-12 h-12 text-crimson mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Specialized endodontic treatments with the latest technology</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow fade-in">
              <Heart className="w-12 h-12 text-crimson mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gentle Approach</h3>
              <p className="text-gray-600">Comfortable and pain-free root canal procedures</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow fade-in">
              <UserPlus className="w-12 h-12 text-crimson mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient-Focused</h3>
              <p className="text-gray-600">Personalized treatment plans for optimal results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor */}
      <section id="doctor" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 fade-in">Meet Dr. David Tran, DMD</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
                  alt="Dr. David Tran"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6 fade-in">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-crimson mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="text-gray-600">DMD from Boston University Dental School</p>
                    <p className="text-gray-600">Certificate in Endodontics from Harvard Medical School</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Stethoscope className="w-6 h-6 text-crimson mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expertise</h3>
                    <p className="text-gray-600">Comprehensive dental care with expertise in general dentistry, endodontics, and periodontics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-crimson mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Personal</h3>
                    <p className="text-gray-600">Dr. Tran enjoys spending time with his wife Janet and their daughter Audrey when not providing exceptional dental care to his patients.</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Dr. Tran has been practicing in the Boston Metro Area for several years, earning a reputation for exceptional quality and a conservative approach to dental treatment. His career began with a passion for comprehensive dental care, ensuring that each patient receives thorough treatment planning and evaluation early on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in">
                <div className="text-crimson mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center fade-in">
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              At Crimson Endodontics, we utilize the latest technology and techniques to provide the highest quality endodontic care. Our goal is to save your natural teeth whenever possible and ensure your comfort throughout every procedure.
            </p>
            <a href="#contact" onClick={handleNavClick} className="inline-flex items-center text-crimson hover:text-crimson-dark transition-colors">
              Contact us to learn more about our services
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="fade-in border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 py-4 bg-gray-50 transition-all duration-200 ease-in-out ${
                    openFaq === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in">Patient Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm fade-in">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">{review.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <p className="font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 fade-in">
            <a
              href="https://www.google.com/maps/place/244+River+St,+Dedham,+MA+02026/@42.2475977,-71.1742287,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-crimson hover:text-crimson-dark transition-colors"
            >
              View More Reviews on Google
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in">Our Location</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-crimson mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">244 River Street, Dedham, MA 02026</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-crimson mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(617) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-crimson mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@crimsonendodontics.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-crimson mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="https://www.google.com/maps/dir//244+River+St,+Dedham,+MA+02026/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-crimson hover:text-crimson-dark transition-colors"
                >
                  Get Directions
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            <div className="fade-in h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.9762821892424!2d-71.17422868746292!3d42.24759772064286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37f8440c5c4b9%3A0x7f5f90b0f0a9c4a0!2s244%20River%20St%2C%20Dedham%2C%20MA%2002026!5e0!3m2!1sen!2sus!4v1715284576543!5m2!1sen!2sus"
                className="w-full h-full rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 fade-in">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <form className="bg-gray-50 p-8 rounded-lg shadow-sm space-y-6 fade-in">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-crimson text-white px-6 py-3 rounded-lg hover:bg-crimson-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ToothIcon />
              <span className="text-xl font-bold">Crimson Endodontics</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 Crimson Endodontics. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;