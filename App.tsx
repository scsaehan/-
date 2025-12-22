import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ProblemStatement from './components/ProblemStatement';
import Comparison from './components/Comparison';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Curriculum from './components/Curriculum';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import SuccessStories from './components/SuccessStories';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="antialiased selection:bg-yellow-500 selection:text-black bg-black min-h-screen text-white pb-20">
      <Hero />
      <Intro />
      <ProblemStatement />
      <Comparison />
      <Process />
      <Benefits />
      <Curriculum />
      <TargetAudience />
      <Testimonials />
      <SuccessStories />
      <Pricing />
      <FAQ />
      <ScrollToTop />
    </div>
  );
}