import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />

        <section id="about" className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-semibold tracking-tight">A clean foundation for your SaaS</h3>
              <p className="mt-3 text-slate-600">
                Opinionated where it matters, flexible where it counts. Use these sections to craft a focused landing page that converts.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} CleanSaaS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
