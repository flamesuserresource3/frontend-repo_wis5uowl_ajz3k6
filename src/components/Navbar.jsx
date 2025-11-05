import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight">CleanSaaS</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">About</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Log in</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">Get started</a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              <a onClick={() => setOpen(false)} href="#features" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Features</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Pricing</a>
              <a onClick={() => setOpen(false)} href="#about" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">About</a>
              <div className="flex items-center gap-3 px-3 pt-2">
                <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Log in</a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Get started</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
