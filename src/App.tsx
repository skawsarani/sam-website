import { ArrowRight, BookOpen, Calendar, Github, Lightbulb, Linkedin, Mail, Target, TrendingUp, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img
              src="/sk-logo-emblem.png"
              alt="Sam Kawsarani"
              className="h-10 w-auto"
            />
          </a>
          <div className="flex gap-8">
            <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
              About Me
            </a>
            <a href="https://www.producttrench.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
              Newsletter
            </a>
            <a href="#connect" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 mb-8 leading-tight tracking-tight">
                Building Products That Matter
              </h1>

              <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                Product leader and builder. 15+ years shipping FinTech and AI products from concept to scale. Currently VP Product at Paramount Commerce.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.producttrench.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} />
                  <span className="font-medium">Get My Newsletter</span>
                </a>
                <a
                  href="https://cal.com/samkawsarani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 rounded-full hover:bg-neutral-50 transition-all border-2 border-neutral-200 hover:border-neutral-300"
                >
                  <Calendar size={20} />
                  <span className="font-medium">Book a Chat</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
                <img
                  src="/sam_headshot_-_solid_bg.png"
                  alt="Sam Kawsarani"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
            <p>
              15+ years building products and teams. Founded two companies (both exited), led 0→1 builds at startups, now VP Product at Paramount Commerce.
            </p>
            <p>
              I've shipped FinTech and AI products from concept through scale. Currently exploring AI-powered tools for product workflows. My strength: translating messy opportunities into shipped products while building teams that execute.
            </p>
            <p>
              I coach PMs and founders on product operating models and write at ProductTrench.com—practical lessons from the field, not theory.
            </p>
          </div>
        </div>
      </section>

      {/* How I Build Section */}
      <section id="approach" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              How I Build
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From opportunity to shipped product
            </p>
          </div>

          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white p-10 rounded-3xl border-2 border-neutral-200 hover:border-neutral-900 transition-all hover:shadow-xl h-full">
                <div className="w-14 h-14 bg-neutral-900 text-white rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Understand the Problem
                </h3>
                <p className="text-lg font-semibold text-neutral-700 mb-4">
                  Find the real opportunity.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  I start with deep discovery—customer research, data analysis, market dynamics. No assumptions. The goal: find the highest-leverage bet that aligns business goals with actual user needs.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-10 rounded-3xl border-2 border-neutral-200 hover:border-neutral-900 transition-all hover:shadow-xl h-full">
                <div className="w-14 h-14 bg-neutral-900 text-white rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Ship & Iterate
                </h3>
                <p className="text-lg font-semibold text-neutral-700 mb-4">
                  Execution over perfect plans.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  I build products iteratively—concept to MVP to market. Clear ownership, ruthless prioritization, fast feedback loops. Ship, measure, learn, repeat. This is where most teams fail; it's where I thrive.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-10 rounded-3xl border-2 border-neutral-200 hover:border-neutral-900 transition-all hover:shadow-xl h-full">
                <div className="w-14 h-14 bg-neutral-900 text-white rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Scale What Works
                </h3>
                <p className="text-lg font-semibold text-neutral-700 mb-4">
                  Systems, teams, outcomes.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Once product-market fit is proven, I optimize for growth. Build the team, refine the process, strengthen the system. Scale isn't just about more—it's about better infrastructure, clearer leverage, sustainable momentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Pillars Section */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[2.5rem] p-12 md:p-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              My Pillars
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="w-3 h-3 bg-amber-400 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Agency Over Noise
                </h3>
                <p className="text-neutral-300 leading-relaxed text-lg">
                  Product teams drown in fake urgency and feature requests. I create clarity—clear bets, clear owners, clear outcomes. No roadmap theater, no feature factories.
                </p>
              </div>

              <div>
                <div className="w-3 h-3 bg-amber-400 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Player-Coach Leadership
                </h3>
                <p className="text-neutral-300 leading-relaxed text-lg">
                  I don't just set direction, I get in the trenches. Whether it's writing specs, debugging systems, or unblocking teams—I carry weight when needed while building teams that don't need me to.
                </p>
              </div>

              <div>
                <div className="w-3 h-3 bg-amber-400 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Systems Thinking
                </h3>
                <p className="text-neutral-300 leading-relaxed text-lg">
                  Products are systems. Organizations are systems. I optimize for coherence—how the pieces fit, where leverage exists, what breaks at scale. Levers, bets, outcomes.
                </p>
              </div>

              <div>
                <div className="w-3 h-3 bg-amber-400 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Founder Mentality at Scale
                </h3>
                <p className="text-neutral-300 leading-relaxed text-lg">
                  Two exits taught me: cashflow matters, fake urgency kills, and execution beats perfect plans. I bring that urgency and ownership to everything I build, whether it's my company or someone else's.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Experience
            </h2>
            <p className="text-xl text-neutral-600">
              Where I've built products and led teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-center p-4 bg-neutral-50 rounded-2xl hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group min-h-[120px]">
              <img
                src="/previous-companies/paramount_commerce.svg"
                alt="Paramount Commerce"
                className="w-full h-auto max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale"
              />
            </div>

            <div className="relative flex items-center justify-center p-4 bg-neutral-50 rounded-2xl hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group min-h-[120px]">
              <img
                src="/previous-companies/railz.svg"
                alt="Railz"
                className="w-full h-auto max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale"
              />
              <span className="absolute top-2 right-2 bg-amber-400 text-neutral-900 text-xs font-semibold px-2 py-1 rounded">
                Exited
              </span>
            </div>

            <div className="flex items-center justify-center p-4 bg-neutral-50 rounded-2xl hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group min-h-[120px]">
              <img
                src="/previous-companies/core_logic.svg"
                alt="CoreLogic"
                className="w-full h-auto max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale"
              />
            </div>

            <div className="relative flex items-center justify-center p-4 bg-neutral-50 rounded-2xl hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group min-h-[120px]">
              <img
                src="/previous-companies/corl.svg"
                alt="CORL"
                className="w-full h-auto max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale"
              />
              <span className="absolute top-2 right-2 bg-amber-400 text-neutral-900 text-xs font-semibold px-2 py-1 rounded">
                Exited
              </span>
            </div>

            <div className="flex items-center justify-center p-4 bg-neutral-50 rounded-2xl hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group min-h-[120px]">
              <img
                src="/previous-companies/iou_financial.svg"
                alt="IOU Financial"
                className="w-full h-auto max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale"
              />
            </div>

            <div className="flex items-center justify-center p-4 bg-neutral-50 rounded-2xl hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group min-h-[120px]">
              <img
                src="/previous-companies/nuvei.svg"
                alt="Nuvei"
                className="w-full h-auto max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teaching & Writing Section */}
      <section id="coaching" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Teaching & Writing
            </h2>
            <p className="text-xl text-neutral-600">
              Coaching PMs, sharing lessons
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center p-4 bg-neutral-50 rounded-2xl hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group min-h-[120px] w-full sm:w-[280px]">
              <img
                src="/community/tpma.svg"
                alt="TPMA"
                className="w-full h-auto max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale"
              />
            </div>

            <div className="flex items-center justify-center p-4 bg-neutral-50 rounded-2xl hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group min-h-[120px] w-full sm:w-[280px]">
              <img
                src="/community/fintech_cadence.svg"
                alt="Fintech Cadence"
                className="w-full h-auto max-h-20 object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
            Let's Connect
          </h2>
          <p className="text-2xl text-neutral-600 mb-16 leading-relaxed">
            Let's connect if you're building something interesting or want to talk product strategy and what actually works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://www.linkedin.com/in/samkawsarani/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-neutral-900 text-white px-10 py-5 rounded-full hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl text-lg font-medium"
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://cal.com/samkawsarani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-neutral-900 px-10 py-5 rounded-full hover:bg-neutral-50 transition-all border-2 border-neutral-200 hover:border-neutral-300 text-lg font-medium"
            >
              <Calendar size={20} />
              <span>Schedule a Call</span>
            </a>
          </div>

          <div className="mb-16">
            <p className="text-neutral-600 text-lg">
              Or email me at <span className="font-semibold text-neutral-900">contact at samkawsarani.com</span>
            </p>
          </div>

          <div className="flex gap-8 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/samkawsarani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/skawsarani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.producttrench.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Newsletter"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-600">
            © {new Date().getFullYear()} Sam Kawsarani
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
