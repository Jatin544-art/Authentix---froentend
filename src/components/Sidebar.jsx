import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'Real-time', to: '/detect', icon: 'videocam' },
  { label: 'Analysis', to: '/analysis', icon: 'analytics' },
  { label: 'Reports', to: '#', icon: 'description' },
  { label: 'Settings', to: '#', icon: 'tune' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <nav className="hidden md:flex flex-col h-screen w-64 border-r border-zinc-800 bg-[#0c0c0f] shrink-0 py-6">
      {/* Logo */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-violet-600 to-violet-900 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-lg">shield</span>
            </div>
          </div>
          <div>
            <h2 className="text-violet-400 font-bold tracking-tight text-lg leading-none">Authentix</h2>
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Deepfake Guard</span>
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div className="flex-1 px-4 space-y-1">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to
          return (
            <Link
              key={link.label}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-zinc-900 text-violet-400 font-semibold border-r-2 border-violet-400'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
              }`}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          )
        })}
      </div>

      {/* CTA */}
      <div className="px-6 mt-auto">
        <Link
          to="/detect"
          className="w-full py-3 bg-violet-500 text-white rounded-lg font-semibold hover:bg-violet-400 transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
          New Scan
        </Link>
      </div>
    </nav>
  )
}
