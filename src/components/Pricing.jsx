import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: false,
    features: ['Basic components', 'Email support', 'Community access']
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    highlight: true,
    features: ['Everything in Starter', 'Advanced blocks', 'Priority support']
  },
  {
    name: 'Business',
    price: '$49',
    period: '/mo',
    highlight: false,
    features: ['Unlimited projects', 'Team collaboration', 'SLA & SSO']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-purple-200 via-indigo-200 to-transparent opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start for free, upgrade when you grow. No hidden fees.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm ${tier.highlight ? 'ring-2 ring-indigo-500' : ''}`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">
                  Most popular
                </span>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-3xl font-semibold text-slate-900">{tier.price}</span>
                  <span className="pb-1 text-sm text-slate-600">{tier.period}</span>
                </div>
              </div>

              <ul className="mb-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  tier.highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
