'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon, GlobeAltIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from './components/Icons';
import Navbar from './components/Navbar';
import Image from 'next/image';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-xl font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        ) : (
          <PlusIcon className="h-6 w-6 text-gray-400" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-purple-50 to-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-blue-100/30 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Professional</span>
                <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Trusted</span>
                <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Experienced</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional<br />
                <span className="text-purple-600">Notary Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Serving Montreal with professional notarial services. Specializing in real estate, wills, mandates, and business documentation.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#contact" className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors inline-flex items-center">
                  Get in touch
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop"
                  alt="Professional Notary Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                alt="Nadia De Riggi - Professional Notary"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:pl-8"
            >
              <div className="space-y-8">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <span className="text-purple-600 font-medium">Meet Your Notary</span>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Professional Notary Services in Montreal
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600">
                  <p className="leading-relaxed">
                    As a dedicated notary in Montreal, I bring over a decade of experience in providing professional and reliable notarial services to individuals and businesses throughout Quebec.
                  </p>
                  <p className="leading-relaxed">
                    My practice focuses on real estate transactions, wills and mandates, and business documentation. I take pride in offering personalized service and ensuring that each client receives the attention and expertise they deserve.
                  </p>
                  <p className="leading-relaxed">
                    As an active member of the Chambre des notaires du Québec, I maintain the highest standards of professional practice and stay current with the latest developments in notarial law.
                  </p>
                </div>
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Me?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Professional Service</h4>
                        <p className="text-sm text-gray-600">Personalized attention and expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Extensive Experience</h4>
                        <p className="text-sm text-gray-600">Quebec notarial practice expert</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Clear Communication</h4>
                        <p className="text-sm text-gray-600">Timely and transparent service</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Convenient Location</h4>
                        <p className="text-sm text-gray-600">Easy access in Montreal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Notary Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located at 6150 Avenue de Monkland, Montreal, Quebec. Serving the community with reliable notarial services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div 
                drag="x"
                dragConstraints={{ left: -1000, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, { offset }) => {
                  const swipe = offset.x;
                  if (swipe < -100 && activeTestimonial < testimonials.length - 1) {
                    setActiveTestimonial(activeTestimonial + 1);
                  } else if (swipe > 100 && activeTestimonial > 0) {
                    setActiveTestimonial(activeTestimonial - 1);
                  }
                }}
                className="flex cursor-grab active:cursor-grabbing transition-transform duration-500 ease-in-out pb-8" 
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="bg-white p-10 rounded-2xl shadow-lg"
                    >
                      <div className="flex items-center mb-8">
                        <div className="flex-shrink-0">
                          <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-2xl font-semibold text-purple-600">{testimonial.name[0]}</span>
                          </div>
                        </div>
                        <div className="ml-6">
                          <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-base text-gray-600">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 italic leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-12 space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-purple-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              Frequently asked questions
            </h2>
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 -mb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
              <p className="text-gray-600 mb-8">
                Have a specific inquiry? Send us a message. Don&apos;t hesitate, get in contact.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                  <label className="ml-2 block text-sm text-gray-700">
                    You agree to our friendly privacy policy.
                  </label>
                </div>
                <button type="submit" className="w-full bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-48 pb-12 rounded-t-[48px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1611532736637-13a8bdf96127?w=32&h=32&fit=crop&auto=format&q=80"
                  alt="Nadia De Riggi"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold text-white">Nadia De Riggi</span>
              </div>
              <div className="mb-8">
                <h5 className="text-sm font-medium text-gray-400 mb-4">Follow us on</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Real Estate</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Wills & Mandates</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">6150 Avenue de Monkland</li>
                <li className="text-gray-400">Montreal, Quebec</li>
                <li><a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-gray-400 text-sm">© Nadia De Riggi, 2024. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    title: "Real Estate",
    description: "Professional notarial services for all your real estate transactions.",
    icon: <ShieldCheckIcon className="h-6 w-6 text-purple-600" />,
    features: [
      "Deed of Sale",
      "Mortgage Documentation",
      "Title Examination",
      "Property Transfer"
    ]
  },
  {
    title: "Wills & Mandates",
    description: "Ensure your wishes are properly documented and legally binding.",
    icon: <CheckCircleIcon className="h-6 w-6 text-purple-600" />,
    features: [
      "Last Will and Testament",
      "Protection Mandate",
      "Living Will",
      "Power of Attorney"
    ]
  },
  {
    title: "Business Services",
    description: "Comprehensive notarial services for businesses of all sizes.",
    icon: <GlobeAltIcon className="h-6 w-6 text-purple-600" />,
    features: [
      "Incorporation Documents",
      "Business Contracts",
      "Corporate Minutes",
      "Certified Copies"
    ]
  }
];

const faqs = [
  {
    question: "What notarial services do you provide for businesses?",
    answer: "We offer a comprehensive range of notarial services for businesses including incorporation documents, shareholder agreements, corporate resolutions, business contracts, certified copies of corporate documents, and authentication of company representatives' signatures."
  },
  {
    question: "How long does the business incorporation process take?",
    answer: "The typical business incorporation process takes 3-5 business days once all required documents are submitted. This includes preparing and reviewing incorporation documents, filing with the appropriate authorities, and obtaining the necessary certificates. Rush service may be available for urgent cases."
  },
  {
    question: "Do you provide bilingual business documentation services?",
    answer: "Yes, we provide bilingual (French and English) documentation services for all business needs. This includes contracts, corporate resolutions, and other legal documents. We ensure accurate translation and proper legal terminology in both languages."
  },
  {
    question: "Can you assist with international business documents?",
    answer: "Yes, we can help with international business documents including authentication and legalization of corporate documents for use abroad, certification of company documents, and notarization of international business contracts. We're familiar with requirements for various jurisdictions."
  }
];

const testimonials = [
  {
    name: "Sarah Thompson",
    title: "Real Estate Transaction",
    quote: "Nadia made our real estate transaction smooth and stress-free. Her expertise and attention to detail gave us complete confidence throughout the process."
  },
  {
    name: "Michel Dubois",
    title: "Will & Mandate",
    quote: "Professional, knowledgeable, and thorough. Nadia helped us prepare our wills and mandates with great care and explained everything clearly."
  },
  {
    name: "Robert Chen",
    title: "Business Services",
    quote: "As a business owner, I appreciate Nadia's efficiency and expertise. She handles all our corporate documentation needs with the utmost professionalism."
  }
];
