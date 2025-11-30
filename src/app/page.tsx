"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
      const toggleMenu = () => menu.classList.toggle('hidden');
      btn.addEventListener('click', toggleMenu);
      
      // Close mobile menu on link click
      const menuLinks = menu.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => menu.classList.add('hidden'));
      });
      
      return () => {
        btn.removeEventListener('click', toggleMenu);
      };
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased selection:bg-teal-500 selection:text-white bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors duration-300">
      {/* Navigation */}
      <nav id="navbar" className="fixed w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <Image 
                src="/logo.svg" 
                alt="Infera Solutions Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                Infera<span className="text-teal-600 dark:text-teal-400">Solutions</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#outsourcing" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Outsourcing</a>
              <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Services</a>
              <a href="#our-work" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Our Work</a>
              <a href="#expertise" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Expertise</a>
              <a href="#approach" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Our Approach</a>
              <a href="#expertise" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">About</a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 bg-teal-600 dark:bg-teal-500 text-white rounded-full font-medium hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Let&apos;s Talk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button id="mobile-menu-btn" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div id="mobile-menu" className="md:hidden hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-700 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800">Services</a>
            <a href="#our-work" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800">Our Work</a>
            <a href="#expertise" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800">Expertise</a>
            <a href="#approach" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800">Our Approach</a>
            <a href="#leadership" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800">About</a>
            <div className="pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="block w-full text-center px-5 py-3 bg-teal-600 dark:bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-700 dark:hover:bg-teal-600"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Let&apos;s Talk</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Tell us about your project and we&apos;ll get back to you shortly.</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">What&apos;s on your mind?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-slate-700 dark:text-white resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700 text-blue-100 text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                Building Tomorrow&apos;s Solutions Today
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">AI-Driven Software Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We're a forward-thinking startup specializing in AI Full Lifecycle, custom software development, and technical consulting. From intelligent automation to scalable enterprise systems, we turn complex challenges into competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-teal-600 text-white rounded-lg font-bold text-lg hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2"
                >
                  Let&apos;s Talk <span>→</span>
                </button>
                <a href="#services" className="px-8 py-4 bg-transparent border border-slate-500 text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  Explore Services
                </a>
              </div>
              
              <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>AI Full Lifecycle</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Custom Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Technical Consulting</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative mt-12 lg:mt-0">
              {/* Creative AI Visualization */}
              <div className="relative z-10">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse"></div>
                
                {/* Main Card */}
                <div className="relative bg-slate-800/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 dark:border-slate-600/50 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-teal-400">AI Processing</div>
                      <div className="text-xs text-slate-400">Real-time Intelligence</div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-900/50 dark:bg-black/30 rounded-xl p-4 border border-slate-700/50">
                      <div className="text-3xl font-bold text-white mb-1">98.5%</div>
                      <div className="text-xs text-slate-400">Model Accuracy</div>
                      <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 w-[98.5%]"></div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-900/50 dark:bg-black/30 rounded-xl p-4 border border-slate-700/50">
                      <div className="text-3xl font-bold text-white mb-1">24/7</div>
                      <div className="text-xs text-slate-400">Automation</div>
                      <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 w-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">Neural Network Training</span>
                      <span className="ml-auto text-teal-400 font-mono text-xs">Active</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">Data Pipeline Processing</span>
                      <span className="ml-auto text-blue-400 font-mono text-xs">Running</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300">API Endpoints Deployed</span>
                      <span className="ml-auto text-purple-400 font-mono text-xs">Live</span>
                    </div>
                  </div>

                  {/* Bottom Label */}
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <div className="text-xs text-slate-400 text-center">
                      Powered by <span className="text-teal-400 font-semibold">Infera AI Engine</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
            Delivering innovative solutions to <span className="text-slate-900 dark:text-white font-bold">startups and enterprises worldwide</span> — from concept to deployment.
          </p>
        </div>
      </section>

      {/* Outsourcing Section */}
      <section id="outsourcing" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-teal-600 dark:text-teal-400 font-bold tracking-wide uppercase text-sm mb-2">Outsourcing Excellence</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Software & AI Engineering Outsourcing</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Build your own virtual team of Infera Solutions experts dedicated exclusively to your project. We help you avoid the challenges of forming an in-house development unit and the infinite loop of employee turnover and rising operational costs.
            </p>
          </div>

          {/* Main Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Software Outsourcing */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
                  💻
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Software Outsourcing</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Access experienced web and mobile app developers working across different platforms to build high-performance, highly available solutions with exceptional user experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 dark:text-teal-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Dedicated team exclusively for your project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 dark:text-teal-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Full control over resources, cost, and timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 dark:text-teal-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Scalable solutions from startups to enterprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 dark:text-teal-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">From Scratch development or maintenance of existing systems</span>
                </li>
              </ul>
            </div>

            {/* AI Engineering Outsourcing */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
                  🧠
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">AI Engineering Outsourcing</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Leverage our ML/DL expertise to build production-ready AI solutions. From research to deployment, we handle the full AI lifecycle with cutting-edge technologies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 dark:text-purple-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Expert ML/DL engineers with proven track record</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 dark:text-purple-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Computer vision, NLP, and predictive analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 dark:text-purple-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">MLOps, model deployment, and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 dark:text-purple-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Research-backed solutions with measurable impact</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dedicated Team Model */}
          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-10 md:p-12 text-white shadow-2xl mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
                <span className="text-5xl">🎯</span>
              </div>
              <h4 className="text-3xl font-bold mb-4">Our Dedicated Team Model</h4>
              <p className="text-lg text-teal-50 leading-relaxed mb-8">
                Build your team to develop new solutions or enhance existing ones—you maintain full control of the project's scope, timeline, and deliverables. Our model eliminates the risks and costs of employee turnover while ensuring consistent quality and expertise.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold text-xl mb-2">Full Control</div>
                  <div className="text-teal-100 text-sm">Resources, Cost & Timeline</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="font-bold text-xl mb-2">Flexibility</div>
                  <div className="text-teal-100 text-sm">Scale Team Up or Down</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-2">🎓</div>
                  <div className="font-bold text-xl mb-2">Expertise</div>
                  <div className="text-teal-100 text-sm">Vetted Senior Engineers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-5xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">Why Outsource with Infera Solutions?</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">💰</div>
                <h5 className="font-bold text-slate-900 dark:text-white mb-2">Cost Efficiency</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">Reduce operational costs without compromising quality</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">⏱️</div>
                <h5 className="font-bold text-slate-900 dark:text-white mb-2">Time Efficiency</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">Faster delivery with dedicated resources</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🏆</div>
                <h5 className="font-bold text-slate-900 dark:text-white mb-2">Proven Quality</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">Delivered solutions across USA, UK, Egypt, KSA, UAE</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-4xl mb-4">🔒</div>
                <h5 className="font-bold text-slate-900 dark:text-white mb-2">Risk Mitigation</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">No employee turnover, consistent expertise</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/50 inline-flex items-center gap-3"
            >
              Build Your Team Today <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 dark:text-teal-400 font-bold tracking-wide uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Comprehensive AI & Software Solutions</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">We offer end-to-end services in AI Full Lifecycle, custom software development, and strategic technical consulting to accelerate your digital transformation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span>🤖</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AI Full Lifecycle - Research to Deployment</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Complete AI journey from research and model development through production deployment and integration. We handle everything from data preparation to scalable MLOps infrastructure.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <span>💻</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Custom Software Development</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Full-stack web and mobile applications, APIs, and enterprise systems built with modern frameworks and best practices for scalability and performance.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <span>☁️</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cloud & DevOps Engineering</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Cloud architecture, containerization, CI/CD pipelines, and infrastructure automation for reliable, scalable deployments on AWS, Azure, or GCP.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 text-2xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <span>📊</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data Engineering & Analytics</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Data pipelines, ETL processes, data warehousing, and business intelligence solutions to transform raw data into actionable insights.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <span>🏗️</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Technical Consulting & Architecture</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Strategic technology planning, system architecture design, code reviews, and technical leadership to guide your development initiatives.</p>
            </div>

            {/* Service 6 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <span>🔄</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Process Automation & Integration</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Streamline operations with workflow automation, system integrations, API development, and intelligent process optimization solutions.</p>
            </div>
          </div>

          {/* CTA Button at the end */}
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/50 inline-flex items-center gap-3"
            >
              Let&apos;s Talk About Your Project <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* AI Agents Section - Inspired by Genor/Relevance AI */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-teal-400 font-bold tracking-wide uppercase text-sm mb-4">Enterprise AI Agents</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Orchestrate Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Agentic Workflows</span>
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed">
              Build teams of AI agents that deliver human-quality work. From autonomous task execution to complex multi-agent orchestration, we create intelligent systems that scale your operations 24/7.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Feature 1 */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Reliable Intelligence</h4>
              <p className="text-slate-300 leading-relaxed">Built-in guardrails ensure consistent, trustworthy outcomes in mission-critical environments. Complete transparency into every decision.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Multi-Agent Orchestration</h4>
              <p className="text-slate-300 leading-relaxed">Coordinate fleets of specialized AI agents executing complex workflows across your enterprise systems seamlessly.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Production-Ready Deployment</h4>
              <p className="text-slate-300 leading-relaxed">From prototype to production with built-in monitoring, evaluation, and continuous improvement capabilities.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Fully Customizable</h4>
              <p className="text-slate-300 leading-relaxed">Tailor agent behaviors, integrate with your tech stack, and design workflows that match your business processes exactly.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Enterprise-Grade Security</h4>
              <p className="text-slate-300 leading-relaxed">Deploy anywhere securely - public cloud, private cloud, or on-premises with complete data sovereignty.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Scalable for Enterprise</h4>
              <p className="text-slate-300 leading-relaxed">Built to support large-scale operations and grow with your business as needs evolve and expand.</p>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
            <h4 className="text-2xl font-bold text-white mb-8 text-center">Transform Every Department with AI Agents</h4>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <div className="text-white font-semibold mb-2 text-lg">Sales & BDR</div>
                <div className="text-sm text-slate-400 leading-relaxed">Lead engagement, follow-ups, CRM automation</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📢</div>
                <div className="text-white font-semibold mb-2 text-lg">Marketing</div>
                <div className="text-sm text-slate-400 leading-relaxed">Content creation, campaign automation, analytics</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <div className="text-white font-semibold mb-2 text-lg">Operations</div>
                <div className="text-sm text-slate-400 leading-relaxed">Workflow automation, process optimization</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-bold text-lg hover:from-teal-600 hover:to-cyan-600 transition-all shadow-2xl hover:shadow-teal-500/50 transform hover:-translate-y-1 duration-200 inline-flex items-center gap-3"
            >
              Build Your AI Workforce
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-slate-400 mt-4 text-sm">Free consultation • Custom solutions • Enterprise-ready</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="approach" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-2">Our Approach</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Partner with Innovation-Driven Experts</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We're a startup built by engineers for innovators. We bring fresh perspectives, modern methodologies, and a passion for solving complex problems with cutting-edge technology.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm text-xl border border-slate-100">
                    <span>🚀</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Rapid Innovation & Deployment</h4>
                    <p className="text-slate-600 mt-1">Agile sprints, continuous integration, and fast iteration cycles to bring your ideas to life quickly.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm text-xl border border-slate-100">
                    <span>💡</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Modern Tech, Modern Thinking</h4>
                    <p className="text-slate-600 mt-1">We leverage the latest frameworks, AI tools, and cloud platforms to build future-ready solutions.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm text-xl border border-slate-100">
                    <span>🤝</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Collaborative Partnership</h4>
                    <p className="text-slate-600 mt-1">We work closely with you as an extension of your team, ensuring alignment with your vision and goals.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team Collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              {/* Pattern Background */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🚀</div>
              <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wide">Agile Approach</div>
              <p className="text-xs text-slate-500 mt-2">Fast iterations, quick delivery</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">💡</div>
              <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wide">Modern Stack</div>
              <p className="text-xs text-slate-500 mt-2">Latest technologies & frameworks</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🎯</div>
              <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wide">Client-Focused</div>
              <p className="text-xs text-slate-500 mt-2">Your success is our priority</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2">🔒</div>
              <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wide">Quality Driven</div>
              <p className="text-xs text-slate-500 mt-2">Best practices & security first</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="expertise" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 dark:text-teal-400 font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Modern Technology Stack</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">We work with cutting-edge technologies to build scalable, high-performance solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Frontend</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> React & Next.js</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> Vue & Angular</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> TypeScript</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> Tailwind CSS</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Backend</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> Node.js & Python</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> Django & FastAPI</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> GraphQL & REST</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> Microservices</li>
              </ul>
            </div>

            {/* AI & Data */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">AI & Data</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> TensorFlow & PyTorch</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> OpenAI & LangChain</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> SQL & NoSQL</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> Data Pipelines</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Cloud & DevOps</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> AWS & Azure & GCP</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> Docker & Kubernetes</li>
                <li className="flex items-center gap-2"><span className="text-teal-600 dark:text-teal-400">✓</span> CI/CD Pipelines</li>
                <li className="flex items-center gap-2"><span className="text-teal-600">✓</span> Infrastructure as Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="our-work" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 dark:text-teal-400 font-bold tracking-wide uppercase text-sm mb-2">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Real-World Solutions Delivered</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">From AI-powered automation to enterprise platforms, we've delivered production-ready solutions across multiple industries.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 - AI Agents Orchestration */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🤖</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-bold rounded-full uppercase">AI Agents</span>
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold rounded-full uppercase">Automation</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI Agents Orchestration Platform</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Central orchestration system managing and coordinating fleets of autonomous AI agents executing complex workflows across enterprise systems.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Multi-Agent</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Workflow Engine</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">API Integration</span>
                </div>
              </div>
            </div>

            {/* Project 2 - Arabic OCR */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">📝</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full uppercase">OCR</span>
                  <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold rounded-full uppercase">NLP</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Arabic OCR Engine</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Customized Arabic Optical Character Recognition deployed as SaaS with NER, summarization, and law-linking capabilities for government sector.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Deep Learning</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">MLOps</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Arabic NLP</span>
                </div>
              </div>
            </div>

            {/* Project 3 - Government Digital Platform */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-teal-500 to-green-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🏛️</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-bold rounded-full uppercase">Government</span>
                  <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase">Digital</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Public Services Platform</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Citizen-centric digital platform transforming access to government services with streamlined applications and real-time status tracking.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Web Portal</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">UX Design</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Automation</span>
                </div>
              </div>
            </div>

            {/* Project 4 - AI Revenue Forecasting */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase">Forecasting</span>
                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full uppercase">Analytics</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Revenue Forecasting AI</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Production pipeline maintaining 20+ ML models achieving PEFA compliance for national government resource planning.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Time Series</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">ML Platform</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">MLOps</span>
                </div>
              </div>
            </div>

            {/* Project 5 - FinTech Payment Platform */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">💳</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold rounded-full uppercase">FinTech</span>
                  <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full uppercase">Payments</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Payment Processing Platform</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Secure multi-channel payment processing system with gateway integrations, fraud detection, and merchant wallet management.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Security</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">API Integration</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">POS</span>
                </div>
              </div>
            </div>

            {/* Project 6 - Healthcare AI */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🏥</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded-full uppercase">Healthcare</span>
                  <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-xs font-bold rounded-full uppercase">Telemedicine</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Telehealth & Medical AI</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">End-to-end virtual care platform with video consultations, appointment scheduling, and AI-powered glaucoma detection system (WACV 2025).</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Computer Vision</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Video Conferencing</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Medical AI</span>
                </div>
              </div>
            </div>

            {/* Project 7 - Enterprise ERP */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🎓</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold rounded-full uppercase">ERP</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full uppercase">Education</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">University Management System</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Enterprise-scale platform handling student enrollment, academic records, and administrative operations for higher education institutions.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Full-Stack</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Database Design</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Automation</span>
                </div>
              </div>
            </div>

            {/* Project 8 - Business Intelligence */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">📈</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold rounded-full uppercase">Analytics</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full uppercase">BI</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Business Intelligence Platform</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Comprehensive BI tools with interactive dashboards, self-service reporting, and KPI monitoring to empower data-driven decision-making.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Data Viz</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Dashboards</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">KPI Tracking</span>
                </div>
              </div>
            </div>

            {/* Project 9 - Enterprise AI Transformation */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-bold rounded-full uppercase">Strategy</span>
                  <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-bold rounded-full uppercase">AI Transformation</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Enterprise AI Transformation</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Comprehensive AI adoption programs including strategy development, capability building, and implementation roadmaps for enterprises.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Consulting</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Change Management</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Training</span>
                </div>
              </div>
            </div>

            {/* Project 10 - Government Emergency Management */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-rose-500 to-red-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🚨</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-bold rounded-full uppercase">Emergency</span>
                  <span className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded-full uppercase">Real-time</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Emergency Management Platform</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Real-time coordination system for emergency response, resource allocation, and public communication during crisis situations.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Crisis Management</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Resource Allocation</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Real-time Comms</span>
                </div>
              </div>
            </div>

            {/* Project 11 - Government Internal Operations */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-slate-500 to-slate-700 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🏢</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-slate-50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-400 text-xs font-bold rounded-full uppercase">Government HR</span>
                  <span className="px-3 py-1 bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400 text-xs font-bold rounded-full uppercase">Operations</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Government Operations Platform</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Digital workplace solution automating employee services, HR processes, and internal governmental operations.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">HR Automation</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Employee Portal</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Workflow</span>
                </div>
              </div>
            </div>

            {/* Project 12 - Internal ERP Systems */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">⚙️</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full uppercase">ERP</span>
                  <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold rounded-full uppercase">Automation</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Internal ERP Systems</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Custom enterprise resource planning solutions automating core business processes from inventory to HR and finance.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Inventory</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">HR Management</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Finance</span>
                </div>
              </div>
            </div>

            {/* Project 13 - AI Computer Vision (Land Incursion) */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🛰️</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full uppercase">Remote Sensing</span>
                  <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-bold rounded-full uppercase">Computer Vision</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Land Monitoring AI System</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Novel computer vision pipeline for detecting land changes using satellite imagery, featuring custom metrics and super-resolution techniques.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Satellite Imagery</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Change Detection</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">GIS</span>
                </div>
              </div>
            </div>

            {/* Project 14 - Spending Optimization AI */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-lime-500 to-green-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">💰</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-lime-50 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 text-xs font-bold rounded-full uppercase">AI Optimization</span>
                  <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase">Procurement</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Spending Optimization AI</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Framework agreement recommender analyzing spending patterns to optimize procurement and vendor relationships for government entities.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Graph Analytics</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Pattern Analysis</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Recommender</span>
                </div>
              </div>
            </div>

            {/* Project 15 - GPS Attendance System */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">📍</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-xs font-bold rounded-full uppercase">Mobile</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full uppercase">GPS Tracking</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">GPS Attendance System</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Mobile application enabling location-verified attendance tracking and workforce management for remote teams.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Geolocation</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Mobile App</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Workforce</span>
                </div>
              </div>
            </div>

            {/* Project 16 - E-commerce Marketplace */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-fuchsia-500 to-pink-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🛒</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-400 text-xs font-bold rounded-full uppercase">E-commerce</span>
                  <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-xs font-bold rounded-full uppercase">SaaS</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">E-commerce Solutions</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Full-spectrum e-commerce platforms including marketplace development, inventory management, and multi-vendor capabilities.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Marketplace</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Multi-vendor</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Inventory</span>
                </div>
              </div>
            </div>

            {/* Project 17 - International P2P Ordering */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">✈️</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold rounded-full uppercase">Logistics</span>
                  <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold rounded-full uppercase">P2P</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Peer-to-Peer Ordering Platform</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Marketplace platform facilitating international purchasing and delivery through peer-to-peer shipping networks.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">International</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Shipping Network</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Marketplace</span>
                </div>
              </div>
            </div>

            {/* Project 18 - Real Estate & P2P Lending */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-stone-500 to-amber-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🏠</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-stone-50 dark:bg-stone-900/30 text-stone-700 dark:text-stone-400 text-xs font-bold rounded-full uppercase">Real Estate</span>
                  <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full uppercase">P2P Lending</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Real Estate & Lending Platform</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Dual-platform combining property management tools with peer-to-peer lending for real estate projects and investments.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Property Mgmt</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Lending</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Investment</span>
                </div>
              </div>
            </div>

            {/* Project 19 - UX Digital Transformation */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🎨</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-xs font-bold rounded-full uppercase">UX/UI</span>
                  <span className="px-3 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-bold rounded-full uppercase">Design Systems</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Digital Experience Transformation</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">UX modernization initiatives for mobile and web applications, implementing design systems and improving conversion metrics.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Design Systems</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">UX Research</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">Conversion</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About/Founder Section */}
      <section id="leadership" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 dark:text-teal-400 font-bold tracking-wide uppercase text-sm mb-2">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Our Expertise</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">Led by experienced entrepreneurs and engineers with a proven track record of delivering innovative AI and technology solutions across multiple industries.</p>
          </div>

          {/* Combined Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Technical Excellence */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl w-14 h-14 flex items-center justify-center text-white text-2xl shadow-lg">
                  🎓
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Excellence</h4>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">M.Sc. Computer & Systems Engineering with published research (WACV 2025, ICPR 2022)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Arabic OCR Engine deployed as SaaS for government sector</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">AI Revenue Forecasting maintaining 20+ ML models (PEFA compliant)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Medical AI systems for Glaucoma and Diabetic Retinopathy detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Computer Vision R&D with satellite imagery and land detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Production MLOps deployment with PyTorch, TensorFlow, Docker</span>
                </div>
              </div>
            </div>

            {/* Business Leadership */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-800 dark:to-purple-900/20 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl w-14 h-14 flex items-center justify-center text-white text-2xl shadow-lg">
                  🚀
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Business Leadership</h4>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Enterprise AI Transformation strategy and implementation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">AI Agents Orchestration platform for autonomous workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Government Digital Services platforms for citizen engagement</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">FinTech payment processing systems with fraud detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Healthcare & Telemedicine platforms with video conferencing</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Enterprise ERP and Business Intelligence solutions</span>
                </div>
              </div>
            </div>

          </div>

          {/* Industries */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div>
                <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏢</span>
                  Industries Served
                </h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-lg text-sm font-semibold">AI & Automation</span>
                  <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-semibold">Government</span>
                  <span className="px-3 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-semibold">FinTech</span>
                  <span className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-lg text-sm font-semibold">Healthcare</span>
                  <span className="px-3 py-1.5 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-lg text-sm font-semibold">Real Estate</span>
                  <span className="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded-lg text-sm font-semibold">E-commerce</span>
                  <span className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-lg text-sm font-semibold">Education</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project and explore how our AI solutions can drive real results for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-white text-teal-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl hover:shadow-white/50 transform hover:-translate-y-1 duration-200 inline-flex items-center gap-3"
            >
              Let&apos;s Talk
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            
            <a 
              href="mailto:info@infera.solutions" 
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all inline-flex items-center gap-3"
            >
              Send Us an Email
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Tailored Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Rapid Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 py-12 border-t border-slate-800 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Image 
                  src="/logo.svg" 
                  alt="Infera Solutions Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold text-xl">Infera<span className="text-teal-500 dark:text-teal-400">Solutions</span></span>
              </div>
              <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">Transforming complex data into actionable intelligence through cutting-edge AI and ML solutions.</p>
              <div className="flex space-x-4">
                <a href="mailto:info@infera.solutions" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">✉</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#expertise" className="hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#expertise" className="hover:text-teal-400 transition-colors">Our Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-teal-400 transition-colors">AI Full Lifecycle</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Custom Software Development</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Cloud & DevOps</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Data Engineering</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Technical Consulting</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Process Automation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-teal-500">📍</span> Egypt</li>
                <li className="flex items-center gap-2"><span className="text-teal-500">✉️</span> info@infera.solutions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            &copy; 2025 Infera Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
