'use client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SmoothScrolling } from './components/ui/SmoothScrolling';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { ProgressiveTypographyProvider, useTypographyQualityChecker } from './components/ui/ProgressiveTypography';
import { Hero } from './components/sections/Hero';
import { Values } from './components/sections/Values';
import { Programs } from './components/sections/Programs';
import { Impact } from './components/sections/Impact';
import { GetInvolved } from './components/sections/GetInvolved';
import { Footer } from './components/sections/Footer';
import { Navigation } from './components/Navigation';

// Lazy load all page routes for better initial bundle size
const WaterWellAppeal = lazy(() => import('./pages/WaterWellAppeal').then(m => ({ default: m.WaterWellAppeal })));
const OrphanCareAppeal = lazy(() => import('./pages/OrphanCareAppeal').then(m => ({ default: m.OrphanCareAppeal })));
const FoodReliefAppeal = lazy(() => import('./pages/FoodReliefAppeal').then(m => ({ default: m.FoodReliefAppeal })));
const AppealsIndex = lazy(() => import('./pages/AppealsIndex').then(m => ({ default: m.AppealsIndex })));
const SoulCaravanFeature = lazy(() => import('./pages/SoulCaravanFeature').then(m => ({ default: m.SoulCaravanFeature })));
const EducationAppeal = lazy(() => import('./pages/EducationAppeal').then(m => ({ default: m.EducationAppeal })));
const Purpose = lazy(() => import('./pages/Purpose').then(m => ({ default: m.Purpose })));
const Leadership = lazy(() => import('./pages/Leadership').then(m => ({ default: m.Leadership })));
const Fundraise = lazy(() => import('./pages/Fundraise').then(m => ({ default: m.Fundraise })));

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

              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-teal-600 font-medium">Loading…</div></div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/water-well" element={<WaterWellAppeal />} />
                  <Route path="/orphan-care" element={<OrphanCareAppeal />} />
                  <Route path="/food-relief" element={<FoodReliefAppeal />} />
                  <Route path="/appeals" element={<AppealsIndex />} />
                  <Route path="/education" element={<EducationAppeal />} />
                  <Route path="/purpose" element={<Purpose />} />
                  <Route path="/leadership" element={<Leadership />} />
                  <Route path="/fundraise" element={<Fundraise />} />
                  <Route path="/soul-caravan" element={<SoulCaravanFeature />} />
                </Routes>
              </Suspense>

              <Footer />
            </div>
          </SmoothScrolling>
        </Router>
      </ProgressiveTypographyProvider>
    </ErrorBoundary>
  );
}

export default App;