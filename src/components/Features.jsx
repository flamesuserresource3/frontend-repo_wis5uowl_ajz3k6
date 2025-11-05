import { Shield, Zap, Check } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: 'Optimized assets, smart caching, and minimal scripts keep things lightning quick.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'Security-minded by default with sensible patterns and hardened defaults.'
  },
  {
    icon: Check,
    title: 'Ready to ship',
    desc: 'Reusable blocks that help you assemble pages in minutes, not days.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Everything you need</h2>
          <p className="mt-3 text-slate-600">
            Thoughtfully crafted building blocks that help you launch with confidence and grow without friction.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-black/5 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-600">
            Built with modern tooling and best practices so you can focus on what matters most: your product.
          </p>
        </div>
      </div>
    </section>
  );
}
