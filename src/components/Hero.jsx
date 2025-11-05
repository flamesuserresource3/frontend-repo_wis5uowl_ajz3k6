import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-200 via-purple-200 to-transparent opacity-70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="inline-flex items-center text-amber-500"><Star size={14} className="mr-1" />New</span>
            Meet the cleanest way to launch your SaaS
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Build a beautiful SaaS, faster.
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
            CleanSaaS gives you polished UI, thoughtful UX, and the essentials you need to convert visitors into customers — without the bloat.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
              Start free
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              Explore features
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'No clutter', desc: 'Just the parts that matter. Minimal, focused, delightful.' },
            { title: 'Built for speed', desc: 'Snappy Lighthouse scores out of the box with best practices.' },
            { title: 'Accessible', desc: 'Inclusive by default. Keyboard and screen-reader friendly.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
