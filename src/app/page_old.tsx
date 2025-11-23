"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center text-slate-900 font-extrabold text-xl shadow-lg">
                AI
              </div>
              <div>
                <div className="font-extrabold text-xl text-slate-900 dark:text-white">Infera Solutions</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Production-ready AI for business</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-semibold transition-colors">Services</a>
              <a href="#how" className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-semibold transition-colors">How it works</a>
              <a href="#industries" className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-semibold transition-colors">Industries</a>
              <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-full font-bold hover:shadow-lg hover:shadow-teal-500/25 transition-all transform hover:-translate-y-0.5">
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Transform how your business works — with practical, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">production-ready AI</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We design, build and operate AI systems that change the way you operate, sell, and deliver value — not experiments. From dedicated teams and full model builds to agentic automation and secure integrations, we deliver measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-teal-500/25 transition-all transform hover:-translate-y-0.5 text-center">
                  Book a free AI readiness audit
                </a>
                <a href="#contact" className="px-8 py-4 bg-transparent border border-slate-500 text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all text-center">
                  Request a proposal
                </a>
              </div>
            </div>
            
            <aside className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Quick services</h3>
              <p className="text-slate-300 mb-6">Pick a path — team augmentation, build a model, or run a PoC.</p>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">✓</span>
                  AI development teams outsourcing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">✓</span>
                  Custom AI models & products
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">✓</span>
                  Agentic AI & voice agents
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">✓</span>
                  Chatbots, Automations & Integrations
                </li>
              </ul>
              <div className="flex gap-3">
                <a href="#services" className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all text-center">
                  See services
                </a>
                <a href="#how" className="flex-1 px-6 py-3 bg-transparent border border-slate-600 text-slate-300 rounded-lg font-bold hover:bg-slate-700/50 transition-all text-center">
                  How it works
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Services — clear, pragmatic, high ROI</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            We cover the full spectrum of AI services, helping organizations build scalable, secure, and intelligent solutions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/10">
              <h4 className="text-xl font-bold text-white mb-3">AI development teams outsourcing</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">Dedicated, vetted engineers, data scientists and MLOps at competitive rates. Fast ramp and SLAs.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all">
                Scale my team →
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/10">
              <h4 className="text-xl font-bold text-white mb-3">Build your own AI model</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">Custom model design & training tailored to your data and KPIs. Data strategy, training, deployment.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all">
                Start model discovery →
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/10">
              <h4 className="text-xl font-bold text-white mb-3">Custom AI solutions (business-driven)</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">We audit workflows, identify gaps, and deliver tailored AI solutions that move KPIs — PoC to Production.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all">
                Request a gap analysis →
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/10">
              <h4 className="text-xl font-bold text-white mb-3">Agentic AI development</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">Multi-component agents that plan, act and orchestrate across systems. Safety and orchestration included.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all">
                Talk to an agent architect →
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/10">
              <h4 className="text-xl font-bold text-white mb-3">Custom AI chatbots</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">Conversational assistants integrated with your CRM and knowledge base for customer support and internal use.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all">
                Design my chatbot →
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/10">
              <h4 className="text-xl font-bold text-white mb-3">Automations with AI built in</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">Smart workflows from invoice processing to predictive maintenance — RPA + AI components.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all">
                Automate a process →
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-500/10 lg:col-span-3 md:col-span-2">
              <h4 className="text-xl font-bold text-white mb-3">AI services integrations</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">Connect models to your CRM, ERP, ticketing and e-commerce systems with secure data flows and realtime inference.</p>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all">
                Integrate my systems →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How it works</h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl space-y-8">
            <div className="flex gap-6 items-start">
              <div className="min-w-[56px] h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-2xl border border-slate-600">
                1
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Conduct a research</h4>
                <p className="text-slate-300 leading-relaxed">
                  We work with you to gather all relevant business information, workflows and scripts to successfully train your AI voice agents. We choose the right AI architecture (LLMs, decision trees, reinforcement learning, etc.) based on the complexity of the use case.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="min-w-[56px] h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-2xl border border-slate-600">
                2
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Develop and train model</h4>
                <p className="text-slate-300 leading-relaxed">
                  We fine-tune the model using relevant data to enhance performance. Incorporate retrieval-augmented generation (RAG) or knowledge bases for better accuracy, and integrate business-specific rules.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="min-w-[56px] h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-white font-bold text-2xl border border-slate-600">
                3
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Deploy, monitor, improve</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We release the AI agent within your existing business systems, such as CRM, ERP, or customer support platforms. Continuously monitor performance, gather user feedback, and refine the model with iterative improvements to enhance accuracy, scalability, and reliability.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all">
                  Start a PoC →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Industries we serve</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl mt-8">
            <p className="text-slate-300 text-lg mb-6">
              We focus on regulated, fast-moving, and cost-sensitive environments where measurable improvements matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-6 py-3 bg-gradient-to-br from-slate-700/50 to-transparent border border-slate-600 rounded-xl text-white font-semibold hover:border-teal-500/50 transition-all">Healthcare</span>
              <span className="px-6 py-3 bg-gradient-to-br from-slate-700/50 to-transparent border border-slate-600 rounded-xl text-white font-semibold hover:border-teal-500/50 transition-all">Tourism</span>
              <span className="px-6 py-3 bg-gradient-to-br from-slate-700/50 to-transparent border border-slate-600 rounded-xl text-white font-semibold hover:border-teal-500/50 transition-all">SMEs & Startups</span>
              <span className="px-6 py-3 bg-gradient-to-br from-slate-700/50 to-transparent border border-slate-600 rounded-xl text-white font-semibold hover:border-teal-500/50 transition-all">Industrial</span>
              <span className="px-6 py-3 bg-gradient-to-br from-slate-700/50 to-transparent border border-slate-600 rounded-xl text-white font-semibold hover:border-teal-500/50 transition-all">Financial services</span>
              <span className="px-6 py-3 bg-gradient-to-br from-slate-700/50 to-transparent border border-slate-600 rounded-xl text-white font-semibold hover:border-teal-500/50 transition-all">E-commerce & Retail</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why choose us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-white mb-3">Business-first</h4>
              <p className="text-slate-300 leading-relaxed">ROI and workflows before buzzwords.</p>
            </div>
            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-white mb-3">End-to-end</h4>
              <p className="text-slate-300 leading-relaxed">From strategy to production and MLOps.</p>
            </div>
            <div className="bg-gradient-to-b from-slate-800/50 to-transparent backdrop-blur-sm border border-slate-700 p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-white mb-3">Cost-efficient teams</h4>
              <p className="text-slate-300 leading-relaxed">High skill, competitive pricing, flexible contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Success metrics we track</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Accuracy / relevance</h4>
                <p className="text-slate-300">Intent F1, response relevance.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Business KPIs</h4>
                <p className="text-slate-300">Cost per ticket, AHT, conversion lift.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Reliability</h4>
                <p className="text-slate-300">Latency, uptime, error rate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">FAQs</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl space-y-6">
            <div>
              <p className="text-white font-bold text-lg mb-2">How long does a PoC take?</p>
              <p className="text-slate-300">Usually 2–6 weeks, depending on scope.</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg mb-2">Who owns the model & IP?</p>
              <p className="text-slate-300">Options: full IP transfer, co-ownership, or hosted licensing.</p>
            </div>
            <div>
              <p className="text-white font-bold text-lg mb-2">Do you handle sensitive data?</p>
              <p className="text-slate-300">Yes — on-prem, VPC, encryption, and access controls available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Next steps / Contact</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-300 text-lg mb-4">Transform how your business works with AI. Pick a quick path:</p>
                <ul className="text-slate-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    Book a 30-minute discovery call — free AI readiness audit
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    Start a PoC — validate impact fast
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✓</span>
                    Send project details & get a proposal
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-600">
                <div className="mb-4">
                  <p className="text-white font-bold mb-2">Email</p>
                  <p className="text-slate-300">
                    <a href="mailto:info@inferasolutions.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                      info@inferasolutions.com
                    </a>
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-white font-bold mb-2">Phone</p>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 rounded-lg font-bold hover:shadow-lg transition-all text-center">
                    Book discovery call
                  </a>
                  <a href="#contact" className="flex-1 px-6 py-3 bg-transparent border border-slate-600 text-slate-300 rounded-lg font-bold hover:bg-slate-700/50 transition-all text-center">
                    Request proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center text-slate-900 font-extrabold text-xl">
                  AI
                </div>
                <span className="font-bold text-lg text-white">Infera Solutions</span>
              </div>
              <p className="text-sm mb-4">Production-ready AI for business. Transform how your organization operates with practical AI solutions.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
                <li><a href="#how" className="hover:text-teal-400 transition-colors">How it works</a></li>
                <li><a href="#industries" className="hover:text-teal-400 transition-colors">Industries</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>AI Team Outsourcing</li>
                <li>Custom AI Models</li>
                <li>Agentic AI Development</li>
                <li>AI Chatbots</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>info@inferasolutions.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Infera Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#contact" className="hover:text-teal-400 transition-colors">Privacy</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
