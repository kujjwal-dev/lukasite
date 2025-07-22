
import { Button } from '@/components/ui/button'
import { Wallet, Send, Receipt, UserCheck, User, ShieldCheck, Link2, Briefcase, Building2, Code2, Layers, Zap, Shield, Target, FileCheck2, ArrowRight, Mail, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'

function useScrollTop(threshold = 200) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return show
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function FeatureCard({ icon, title, children }) {
  return (
    <motion.div
      className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/60 hover:ring-2 hover:ring-blue-200/40 group"
      whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(80,80,255,0.10)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mb-5 text-primary group-hover:text-blue-700 transition-colors">{icon}</div>
      <h3 className="font-semibold text-xl mb-3 text-gray-900 tracking-wide group-hover:text-blue-700 transition-colors">{title}</h3>
      <div className="text-gray-500 text-base leading-relaxed">{children}</div>
    </motion.div>
  )
}

function WhoForCard({ icon, title, children }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center bg-white/60 backdrop-blur border border-gray-100 rounded-xl p-8 shadow-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mb-4 text-purple-700">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900 tracking-wide">{title}</h3>
      <p className="text-gray-500 text-base">{children}</p>
    </motion.div>
  )
}

function StepCard({ icon, title, children }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mb-2 text-purple-700">{icon}</div>
      <h4 className="font-semibold mb-1 text-gray-900 tracking-wide">{title}</h4>
      <p className="text-gray-500 text-center text-base max-w-[200px]">{children}</p>
    </motion.div>
  )
}

export default function App() {
  const showScrollTop = useScrollTop(300)
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] via-white to-[#e9ecf3] flex flex-col font-sans relative">
      <Helmet>
        <title>Luka – Banking, Simplified</title>
        <meta name="description" content="Luka is a next-generation digital banking platform designed to make financial services simple, secure, and accessible for everyone." />
      </Helmet>
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src="/Luka.png" alt="Luka Logo" className="w-8 h-8 rounded-full bg-white border border-blue-100" />
            <span className="font-bold text-lg text-blue-900 tracking-tight">Luka</span>
          </div>
          <Button size="sm" className="font-medium px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-colors" onClick={() => scrollToSection('get-started')}>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="w-full py-28 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-r from-blue-900/90 to-purple-800/90 text-white shadow-md min-h-[80vh]">
        {/* Animated radial background */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-blue-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl opacity-80 animate-pulse-slow" />
          {/* SVG pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#fff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </motion.div>
        {/* Logo with enhanced glow and float */}
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-400/50 via-purple-400/40 to-transparent blur-2xl opacity-80 animate-pulse-slow"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
          <motion.img
            src="/Luka.png"
            alt="Luka Logo"
            className="w-28 h-28 mb-10 rounded-full shadow-2xl bg-white p-2 border-2 border-blue-100 relative z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg z-10 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Luka – Banking, Simplified.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-2 max-w-2xl mx-auto font-medium opacity-90 z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          Your money, your way.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-normal opacity-80 z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
        >
          Luka is a next-generation digital banking platform designed to make financial services simple, secure, and accessible for everyone.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
          className="z-10"
        >
          <Button size="lg" className="px-12 py-5 text-2xl font-bold shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors rounded-full animate-pulse-slow relative overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 rounded-full bg-white/10 blur-lg opacity-60 animate-pulse-slow" />
          </Button>
        </motion.div>
        {/* Trusted by row */}
        <motion.div
          className="flex flex-col items-center mt-14 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: 'easeOut' }}
        >
          <span className="uppercase text-xs tracking-widest text-white/70 mb-3">Trusted by</span>
          <div className="flex gap-8 opacity-80">
            <div className="w-24 h-8 bg-white/30 rounded-lg flex items-center justify-center text-xs font-semibold text-blue-900/70">BankOne</div>
            <div className="w-24 h-8 bg-white/30 rounded-lg flex items-center justify-center text-xs font-semibold text-blue-900/70">FinTechX</div>
            <div className="w-24 h-8 bg-white/30 rounded-lg flex items-center justify-center text-xs font-semibold text-blue-900/70">PayFlow</div>
            <div className="w-24 h-8 bg-white/30 rounded-lg flex items-center justify-center text-xs font-semibold text-blue-900/70">SecurePay</div>
          </div>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute left-1/2 bottom-6 -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="w-7 h-7 rounded-full border-2 border-white/60 flex items-center justify-center mb-1 animate-bounce-slow">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/80" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-5-5m5 5l5-5" /></svg>
          </div>
          <span className="text-xs text-white/60">Scroll</span>
        </motion.div>
      </header>

      {/* Divider */}
      <div className="w-full h-8 bg-gradient-to-b from-blue-900/20 to-transparent" />

      {/* Core Features */}
      <motion.section
        className="max-w-6xl mx-auto py-24 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wider bg-gradient-to-r from-blue-700 via-purple-700 to-blue-400 bg-clip-text text-transparent">Core Features</h2>
        <div className="grid gap-12 md:grid-cols-3">
          <FeatureCard icon={<Wallet size={36} />} title="Digital Wallets">
            Create & manage wallets<br/>Wallet-to-wallet transfers<br/>Transaction history
          </FeatureCard>
          <FeatureCard icon={<Send size={36} />} title="Money Transfers">
            Bank transfers<br/>M-Pesa integration<br/>International transfers
          </FeatureCard>
          <FeatureCard icon={<Receipt size={36} />} title="Utility & Bill Payments">
            Airtime top-up<br/>Bill payments<br/>Payment status tracking
          </FeatureCard>
          <FeatureCard icon={<UserCheck size={36} />} title="User Onboarding & KYC">
            Easy registration<br/>KYC verification<br/>Onboarding status
          </FeatureCard>
          <FeatureCard icon={<User size={36} />} title="Account Management">
            Profile management<br/>Balance & statements<br/>Account closure
          </FeatureCard>
          <FeatureCard icon={<ShieldCheck size={36} />} title="Security & Compliance">
            Role-based access<br/>Two-factor authentication<br/>Data encryption & compliance
          </FeatureCard>
          <FeatureCard icon={<Link2 size={36} />} title="API & Webhook Integrations">
            Choice Bank API<br/>Webhook notifications<br/>Developer-friendly
          </FeatureCard>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-8 bg-gradient-to-b from-purple-200/30 to-transparent" />

      {/* Who is Luka For */}
      <motion.section
        className="bg-white/80 py-24 px-4 border-y border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wider bg-gradient-to-r from-purple-700 via-blue-700 to-purple-400 bg-clip-text text-transparent">Who is Luka For?</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <WhoForCard icon={<Briefcase size={32} />} title="Individuals">
            Anyone looking for a modern, easy-to-use digital wallet and payment solution.
          </WhoForCard>
          <WhoForCard icon={<Building2 size={32} />} title="Businesses">
            Companies needing payroll, bulk payments, or seamless integration with banking APIs.
          </WhoForCard>
          <WhoForCard icon={<Code2 size={32} />} title="Developers">
            Teams building fintech solutions who want robust, ready-to-use banking APIs.
          </WhoForCard>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-8 bg-gradient-to-b from-blue-200/30 to-transparent" />

      {/* Why Luka */}
      <motion.section
        className="max-w-6xl mx-auto py-24 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wider bg-gradient-to-r from-blue-700 via-purple-700 to-blue-400 bg-clip-text text-transparent">Why Luka?</h2>
        <div className="grid md:grid-cols-4 gap-12">
          <FeatureCard icon={<Layers size={32} />} title="All-in-One">
            Banking, payments, and transfers in one place.
          </FeatureCard>
          <FeatureCard icon={<Zap size={32} />} title="Fast & Reliable">
            Real-time processing and 24/7 availability.
          </FeatureCard>
          <FeatureCard icon={<Shield size={32} />} title="Secure">
            Industry-leading security and compliance.
          </FeatureCard>
          <FeatureCard icon={<Target size={32} />} title="User-Centric">
            Designed for simplicity and ease of use.
          </FeatureCard>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-8 bg-gradient-to-b from-purple-200/30 to-transparent" />

      {/* How to Get Started */}
      <motion.section
        id="get-started"
        className="bg-gradient-to-r from-[#f5f7fa] to-[#e9ecf3] py-24 px-4 border-t border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wider bg-gradient-to-r from-purple-700 via-blue-700 to-purple-400 bg-clip-text text-transparent">How to Get Started</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <StepCard icon={<UserCheck size={28} />} title="Sign Up">
            Register with minimal hassle and start using Luka right away.
          </StepCard>
          <ArrowRight className="hidden md:block text-blue-400" size={32} />
          <StepCard icon={<FileCheck2 size={28} />} title="Complete KYC">
            Upload documents and complete identity verification.
          </StepCard>
          <ArrowRight className="hidden md:block text-blue-400" size={32} />
          <StepCard icon={<Wallet size={28} />} title="Explore Features">
            Access wallets, payments, transfers, and more.
          </StepCard>
          <ArrowRight className="hidden md:block text-blue-400" size={32} />
          <StepCard icon={<ShieldCheck size={28} />} title="Enjoy Secure Banking">
            Experience fast, reliable, and secure digital banking.
          </StepCard>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform border-2 border-white/70"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full py-10 text-center text-gray-400 text-base bg-white/90 border-t border-gray-100 mt-auto flex flex-col items-center gap-4">
        <div className="flex gap-6 mb-2">
          <a href="mailto:info@luka.com" className="hover:text-blue-700 transition-colors" aria-label="Email"><Mail size={22} /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="Twitter"><Twitter size={22} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="LinkedIn"><Linkedin size={22} /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="GitHub"><Github size={22} /></a>
        </div>
        <a href="mailto:info@luka.com" className="text-blue-700 hover:underline font-medium">Contact Us</a>
        <div>© 2025 Luka. All rights reserved.</div>
      </footer>
    </div>
  )
}
