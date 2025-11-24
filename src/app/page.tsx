"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
              <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Services</a>
              <a href="#expertise" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Expertise</a>
              <a href="#approach" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Our Approach</a>
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">About</a>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <a href="#contact" className="px-5 py-2.5 bg-teal-600 dark:bg-teal-500 text-white rounded-full font-medium hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Dark Mode Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

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
            <a href="#expertise" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800">Expertise</a>
            <a href="#approach" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800">Our Approach</a>
            <a href="#about" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800">About</a>
            <div className="pt-4">
              <a href="#contact" className="block w-full text-center px-5 py-3 bg-teal-600 dark:bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-700 dark:hover:bg-teal-600">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

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
                We're a forward-thinking startup specializing in AI integration, custom software development, and technical consulting. From intelligent automation to scalable enterprise systems, we turn complex challenges into competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="px-8 py-4 bg-teal-600 text-white rounded-lg font-bold text-lg hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2">
                  Start Your Project <span>→</span>
                </a>
                <a href="#services" className="px-8 py-4 bg-transparent border border-slate-500 text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  Explore Services
                </a>
              </div>
              
              <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>AI Integration</span>
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
              {/* Decorative Graphic */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-4">
                <div className="rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                    alt="Data Analytics Dashboard"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-semibold text-teal-400 mb-1">Live Analytics</div>
                    <div className="text-2xl font-bold">Enterprise AI Integration</div>
                  </div>
                </div>
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 dark:text-teal-400 font-bold tracking-wide uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Comprehensive AI & Software Solutions</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">We offer end-to-end services in AI integration, custom software development, and strategic technical consulting to accelerate your digital transformation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span>🤖</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AI & Machine Learning Solutions</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Custom AI models, intelligent automation, predictive analytics, and LLM integration to solve complex business challenges and unlock new capabilities.</p>
              <a href="#contact" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1">Get Started <span className="text-xs">→</span></a>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <span>�</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Custom Software Development</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Full-stack web and mobile applications, APIs, and enterprise systems built with modern frameworks and best practices for scalability and performance.</p>
              <a href="#contact" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1">Get Started <span className="text-xs">→</span></a>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <span>☁️</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cloud & DevOps Engineering</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Cloud architecture, containerization, CI/CD pipelines, and infrastructure automation for reliable, scalable deployments on AWS, Azure, or GCP.</p>
              <a href="#contact" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1">Get Started <span className="text-xs">→</span></a>
            </div>

            {/* Service 4 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400 text-2xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <span>📊</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data Engineering & Analytics</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Data pipelines, ETL processes, data warehousing, and business intelligence solutions to transform raw data into actionable insights.</p>
              <a href="#contact" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1">Get Started <span className="text-xs">→</span></a>
            </div>

            {/* Service 5 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <span>🏗️</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Technical Consulting & Architecture</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Strategic technology planning, system architecture design, code reviews, and technical leadership to guide your development initiatives.</p>
              <a href="#contact" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1">Get Started <span className="text-xs">→</span></a>
            </div>

            {/* Service 6 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 text-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <span>🔄</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Process Automation & Integration</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">Streamline operations with workflow automation, system integrations, API development, and intelligent process optimization solutions.</p>
              <a href="#contact" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1">Get Started <span className="text-xs">→</span></a>
            </div>
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-2">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Real-World AI Solutions</h3>
            <p className="text-slate-600 text-lg">Production-ready AI systems deployed across government, healthcare, and enterprise sectors.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">📝</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase">OCR</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full uppercase">NLP</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Arabic OCR Engine</h4>
                <p className="text-slate-600 mb-4">Customized Arabic Optical Character Recognition deployed as SaaS with NER, summarization, and law-linking capabilities for government sector.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Deep Learning</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">MLOps Platform</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Arabic NLP</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full uppercase">Forecasting</span>
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full uppercase">Government</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Revenue Forecasting AI</h4>
                <p className="text-slate-600 mb-4">Production pipeline maintaining 20+ ML models achieving PEFA compliance for national government resource planning center.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Time Series</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">ML Platform</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">MLOps</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">👁️</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full uppercase">Healthcare</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-bold rounded-full uppercase">CV</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Glaucoma Detection AI</h4>
                <p className="text-slate-600 mb-4">State-of-the-art deep learning model achieving top AUC metrics for glaucoma detection. Research published at WACV 2025 and ICPR 2022.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">PyTorch</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Vision Transformers</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Medical AI</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🛰️</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold rounded-full uppercase">Remote Sensing</span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full uppercase">GIS</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Land Incursion Detection</h4>
                <p className="text-slate-600 mb-4">Novel computer vision pipeline for detecting land changes from satellite imagery. Led 30+ GIS annotators and developed custom evaluation metrics.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Satellite Data</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Segmentation</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Super-Resolution</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">💡</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase">Recommender</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase">Graph ML</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Spending Optimizer</h4>
                <p className="text-slate-600 mb-4">Framework agreement recommender using graph analysis to optimize government spending between entities and vendors.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Graph Analysis</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Behavioral Patterns</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Optimization</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 flex items-center justify-center aspect-video">
                <span className="text-6xl">🏥</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full uppercase">MLOps</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase">Healthcare</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Diabetic Retinopathy System</h4>
                <p className="text-slate-600 mb-4">Production deployment and scaling of medical imaging models using TorchServe with GPU optimization and performance testing.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">TorchServe</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Locust Testing</span>
                  <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">Intel OneAPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-2">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Founded by AI & ML Experts</h3>
            <p className="text-slate-600 text-lg">Led by experienced researchers and engineers passionate about transforming complex data into actionable intelligence.</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl aspect-square flex items-center justify-center text-white text-6xl font-bold mb-4">
                  MW
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Moustafa Wassel</h4>
                <p className="text-teal-600 font-semibold mb-4">Founder & CTO</p>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/mostafa-wassel" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition-colors">
                    <span className="text-2xl">in</span>
                  </a>
                  <a href="mailto:mostafa.wassel.dio@gmail.com" className="text-slate-600 hover:text-teal-600 transition-colors">
                    <span className="text-2xl">✉</span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h5 className="text-lg font-bold text-slate-900 mb-3">Experience Highlights</h5>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Arabic OCR Engine Development (SaaS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">AI Revenue Forecasting Systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Computer Vision R&D</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Medical AI (Glaucoma, Diabetic Retinopathy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Remote Sensing & Land Analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">Production ML Model Deployment</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-bold text-slate-900 mb-3">Education & Research</h5>
                  <div className="space-y-2">
                    <p className="text-slate-600">
                      <span className="font-semibold">M.Sc. Computer & Systems Engineering</span>
                    </p>
                    <p className="text-slate-600">
                      <span className="font-semibold">B.Eng. Computer & Communication Engineering</span>
                    </p>
                    <p className="text-slate-600 mt-3">
                      <span className="font-semibold">Published Researcher:</span> WACV 2025, ICPR 2022, HEALTHINF 2021
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-bold text-slate-900 mb-3">Technical Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">PyTorch</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold">TensorFlow</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold">OpenCV</span>
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-semibold">Scikit-learn</span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold">ML Platforms</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold">Docker</span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-semibold">Torchserve</span>
                    <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-semibold">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-teal-50 mb-10">Let's discuss how our AI-driven solutions can solve your unique challenges and accelerate your digital transformation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mostafa.wassel.dio@gmail.com" className="px-8 py-4 bg-white text-teal-600 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
              Email Us
            </a>
            <a href="https://www.linkedin.com/in/mostafa-wassel" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-teal-700 border border-teal-500 text-white rounded-lg font-bold text-lg hover:bg-teal-800 transition-colors">
              Connect on LinkedIn
            </a>
          </div>
          <div className="mt-8 text-teal-100">
            <p className="text-sm">📍 Egypt • Middle East</p>
            <p className="text-sm mt-1">📞 +20 111 115 4955 • +966 543 199 073</p>
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
                <a href="https://www.linkedin.com/in/mostafa-wassel" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">in</a>
                <a href="mailto:mostafa.wassel.dio@gmail.com" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors">✉</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Cloud DevOps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-teal-500">📍</span> Egypt • Middle East</li>
                <li className="flex items-center gap-2"><span className="text-teal-500">✉️</span> mostafa.wassel.dio@gmail.com</li>
                <li className="flex items-center gap-2"><span className="text-teal-500">📞</span> +966 543 199 073</li>
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
