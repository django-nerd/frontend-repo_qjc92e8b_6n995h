import { Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Elegant UI',
    description: 'Polished components with thoughtful spacing, crisp typography, and tasteful colors.',
    icon: Sparkles,
  },
  {
    title: 'Production-Ready',
    description: 'Pre-wired tooling, sensible defaults, and a scalable foundation for real projects.',
    icon: Shield,
  },
  {
    title: 'Blazing Fast',
    description: 'Vite-powered development for instant feedback and delightful DX.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What you get</h2>
        <p className="mt-3 text-gray-600">A clean, modern setup to help you launch quickly and look great doing it.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="inline-flex rounded-md bg-indigo-50 p-2 text-indigo-600">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
