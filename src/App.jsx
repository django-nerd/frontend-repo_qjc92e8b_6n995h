import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Designed for creators</h2>
              <p className="mt-4 text-gray-700">
                This starter pairs a sleek interface with solid foundations. It keeps your focus on ideas while
                the setup handles the rest. Clean components, smooth animations, and a delightful developer
                experience out of the box.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Accessible, responsive layout</li>
                <li>• Friendly defaults you can customize</li>
                <li>• Ready for real-world apps</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop"
                alt="Laptop with code editor"
                className="h-full w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
