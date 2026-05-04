import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const navLinks = [
    { label: 'Detect', to: '/detect' },
    { label: 'Dashboard', to: '/' },
    { label: 'Heuristics', to: '/analysis' },
    { label: 'History', to: '#' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800 tracking-tight" style={{ fontFamily: 'Geist, sans-serif' }}>
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tighter text-violet-400">
            Authentix
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-violet-400'
                    : 'text-zinc-400 hover:text-violet-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3 text-zinc-400">
            <button aria-label="settings" className="hover:text-violet-300 transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800">
              <span className="material-symbols-outlined text-xl">settings</span>
            </button>
            <button aria-label="notifications" className="hover:text-violet-300 transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
          </div>
          <Link
            to="/detect"
            className="bg-violet-500 text-white hover:bg-violet-400 transition-colors px-4 py-2 text-sm font-semibold rounded"
          >
            Get Started
          </Link>
          <img
            alt="User profile"
            className="w-8 h-8 rounded-full border border-zinc-700 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsWmh5HNIBRWOv2hgSWlpvlzMVr-Dg_JCAlQxmB5WlN1-exda5KUzYKaV6hhKXjMLMcMfUrfCLYwodo-KrRodmJAaWYDuVwsKYrb8QAbuxpOlGbw2aRcFKOmQXb2ABk6HXfeZ3Lj5RyBLSZm9cWoVMj-UNSiQ-ZlHjjKaacdbAQuf4DbXwukEvtTlSpOYmy7yDPQRmdtqy9X3MUwC0BAde_sAmTBzGrH5kIk6S_4yDeBqMnUJ7WBKDU5PCnUlzPPx3P4-nPr3aIRg"
          />
        </div>
      </div>
    </header>
  )
}
