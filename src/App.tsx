import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

const FeaturedProject = lazy(() => import('./sections/FeaturedProject'));
const Projects = lazy(() => import('./sections/Projects'));
const Certifications = lazy(() => import('./sections/Certifications'));
const HolyGraph = lazy(() => import('./sections/HolyGraph'));
const GitHubSection = lazy(() => import('./sections/GitHubSection'));
const Contact = lazy(() => import('./sections/Contact'));

function PageBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(67,56,202,0.12),transparent_28%)]" />
      <div className="hero-grid absolute inset-0 opacity-25" />
      <div className="surface-noise absolute inset-0 hidden opacity-20 md:block" />
      <div className="absolute left-[-7rem] top-24 hidden h-72 w-72 rounded-full bg-primary-500/12 blur-[110px] animate-float-slow md:block" />
      <div className="absolute right-[-5rem] top-[18rem] hidden h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px] animate-float md:block" style={{ animationDelay: '1.8s' }} />
      <div className="absolute bottom-[-10rem] left-[18%] hidden h-96 w-96 rounded-full bg-primary-400/10 blur-[140px] animate-drift lg:block" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[12%] right-[16%] hidden h-56 w-56 rounded-full bg-cyan-300/10 blur-[110px] animate-float-slow lg:block" style={{ animationDelay: '3.2s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:120px_120px] opacity-10 md:bg-[size:84px_84px] md:opacity-18" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-gray-100 font-sans">
      <PageBackdrop />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<div className="section-lazy-placeholder" aria-hidden="true" />}>
          <FeaturedProject />
          <Projects />
          <Certifications />
          <HolyGraph />
          <GitHubSection />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
