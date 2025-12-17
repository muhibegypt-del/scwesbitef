'use client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X, Phone, Lock, ChevronDown, Plane, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { SmoothScrolling } from './components/ui/SmoothScrolling';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { ProgressiveTypographyProvider, useTypographyQualityChecker } from './components/ui/ProgressiveTypography';
import { useOptimizedScroll } from './hooks/useOptimizedScroll';
import { CONTACT, ANIMATION } from './constants';
import type { NavigationLink } from './types';
import { Hero } from './components/sections/Hero';
import { Values } from './components/sections/Values';
import { Programs } from './components/sections/Programs';
import { Impact } from './components/sections/Impact';
import { GetInvolved } from './components/sections/GetInvolved';
import { Footer } from './components/sections/Footer';
import { WaterWellAppeal } from './pages/WaterWellAppeal';
import { OrphanCareAppeal } from './pages/OrphanCareAppeal';
import { FoodReliefAppeal } from './pages/FoodReliefAppeal';
import { AppealsIndex } from './pages/AppealsIndex';
import { Navigation } from './components/Navigation';

function NoiseOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] hidden sm:block"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGklEQVQYV2M8c+YMAxYwiqIoiqIoiqIoOikAAEX8A/nGmjQkAAAAAElFTkSuQmCC")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '10px 10px'
      }}
    />
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Values />
      <Programs />
      <Impact />
      <GetInvolved />
    </main>
  );
}

function App() {
  // Enable typography quality checking in development
  useTypographyQualityChecker();

  return (
    <ErrorBoundary>
      <ProgressiveTypographyProvider>
        <Router>
          <SmoothScrolling>
            <div className="min-h-screen bg-gray-50 font-sans">
              <NoiseOverlay />
              <Navigation />
              
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/water-well" element={<WaterWellAppeal />} />
                <Route path="/orphan-care" element={<OrphanCareAppeal />} />
                <Route path="/food-relief" element={<FoodReliefAppeal />} />
                <Route path="/appeals" element={<AppealsIndex />} />
              </Routes>
              
              <Footer />
            </div>
          </SmoothScrolling>
        </Router>
      </ProgressiveTypographyProvider>
    </ErrorBoundary>
  );
}

export default App;