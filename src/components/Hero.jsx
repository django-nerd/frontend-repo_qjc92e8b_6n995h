import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6O2-7f3GqM0M2p9f/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-28 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
        <h1 className="relative z-10 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Build Beautiful Apps, Fast
        </h1>
        <p className="relative z-10 mt-4 max-w-2xl text-lg text-gray-700">
          A modern starter with React, Tailwind, and delightful interactions. Designed for speed and clarity.
        </p>
        <div className="relative z-10 mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-700 transition"
          >
            <Rocket className="h-5 w-5" />
            Get Started
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-800 hover:bg-gray-50"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
