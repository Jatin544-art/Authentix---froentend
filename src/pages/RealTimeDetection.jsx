import { useState } from 'react'
import Sidebar from '../components/Sidebar'

export default function RealTimeDetection() {
  const [scanning, setScanning] = useState(false)

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'Geist, sans-serif' }}
    >
      <Sidebar />

      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Mobile top bar */}
        <header
          className="md:hidden fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 border-b border-zinc-800"
          style={{ background: 'rgba(9,9,11,0.8)', backdropFilter: 'blur(12px)' }}
        >
          <span className="text-xl font-bold tracking-tighter text-violet-400">Authentix</span>
        </header>

        {/* Scrollable canvas */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 mt-16 md:mt-0">
          <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-8">

            {/* Left column: Video feed + controls */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Page title + status */}
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight mb-1" style={{ color: '#fafafa' }}>
                    Real-Time Detection
                  </h1>
                  <p className="text-sm" style={{ color: '#a1a1aa' }}>
                    Analyze live video streams for synthetic manipulation.
                  </p>
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: '#121215', border: '1px solid #27272a' }}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${scanning ? 'bg-violet-400 animate-pulse' : 'bg-emerald-400'}`}
                  />
                  <span
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: scanning ? '#a78bfa' : '#34d399' }}
                  >
                    {scanning ? 'Scanning…' : 'Ready to Scan'}
                  </span>
                </div>
              </div>

              {/* Video feed */}
              <div
                className="relative w-full overflow-hidden flex items-center justify-center group"
                style={{
                  aspectRatio: '16/9',
                  borderRadius: '0.75rem',
                  background: '#09090b',
                  border: '1px solid #27272a',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                }}
              >
                <img
                  alt="Webcam feed placeholder"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEZT4zOxLa7cWgoZcgLRmR6FIGQrLkS3bxXESH-Y-d8G-QM5nA-qHF6AFBEKrHcQ5PVc6cFwFUH_rp9iaW53ERGxsvufiA-OzXyTgZhmEP9-6RlQITIh4dQp1l-mSLac9eFEWzSva5ntaTWMELpWs4Y-nWt4v0ivQLRPybMy-yzNQqb2GKUe9vSdi5JphiRhIiw7xpWxuaP3pHiNX1HS1nITp3jsETSOvMdYRd8KFtTq29Cp671E5lZeMiG-PG6rmNv8dOjTs5Sr0"
                />

                {/* Scan line overlay */}
                {scanning && (
                  <div
                    className="absolute w-full h-1/4 top-1/3 border-y"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(167,139,250,0.1), transparent)',
                      borderColor: 'rgba(167,139,250,0.3)',
                      animation: 'scan 2s ease-in-out infinite',
                    }}
                  />
                )}

                {/* Corner markers */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: 'rgba(167,139,250,0.5)' }} />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: 'rgba(167,139,250,0.5)' }} />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: 'rgba(167,139,250,0.5)' }} />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: 'rgba(167,139,250,0.5)' }} />

                {/* Centre reticle */}
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    border: '1px solid #27272a',
                    background: 'rgba(9,9,11,0.3)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <span className="material-symbols-outlined text-4xl" style={{ color: '#a1a1aa' }}>
                    visibility
                  </span>
                </div>

                {/* Overlay stats */}
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4 text-xs font-mono px-4 py-1.5 rounded-md"
                  style={{
                    color: '#a1a1aa',
                    background: 'rgba(9,9,11,0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #27272a',
                  }}
                >
                  <span>FPS: {scanning ? '30' : '--'}</span>
                  <span>RES: 1080p</span>
                  <span>LATENCY: {scanning ? '12ms' : '--'}</span>
                </div>
              </div>

              {/* Control buttons */}
              <div className="flex gap-4">
                <button
                  id="btn-start-scanning"
                  onClick={() => setScanning(true)}
                  className="flex-1 py-4 font-bold tracking-wide flex items-center justify-center gap-2 transition-colors rounded-lg"
                  style={{ background: '#a78bfa', color: '#0a0012' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#c4b5fd'}
                  onMouseLeave={e => e.currentTarget.style.background = '#a78bfa'}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  Start Scanning
                </button>
                <button
                  id="btn-stop-scanning"
                  onClick={() => setScanning(false)}
                  className="flex-1 py-4 font-bold tracking-wide flex items-center justify-center gap-2 transition-colors rounded-lg"
                  style={{ background: 'transparent', border: '1px solid #27272a', color: '#fafafa' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#18181b'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <span className="material-symbols-outlined">stop</span>
                  Stop
                </button>
              </div>
            </div>

            {/* Right column: Upload & heuristics */}
            <div className="w-full lg:w-80 flex flex-col gap-6 pt-12 lg:pt-0">
              {/* Drag & drop zone */}
              <div
                className="p-6 flex flex-col items-center justify-center text-center gap-4 cursor-pointer transition-colors min-h-60 rounded-xl"
                style={{
                  background: '#121215',
                  border: '1px dashed #27272a',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#18181b'}
                onMouseLeave={e => e.currentTarget.style.background = '#121215'}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: '#09090b', border: '1px solid #27272a', color: '#a78bfa' }}
                >
                  <span className="material-symbols-outlined text-2xl">upload_file</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#fafafa' }}>Upload Video</h3>
                  <p className="text-xs" style={{ color: '#a1a1aa' }}>
                    Drag and drop MP4 or MOV files here to analyze pre-recorded footage.
                  </p>
                </div>
                <button
                  className="mt-2 text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                  style={{ color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(167,139,250,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  Select File
                </button>
              </div>

              {/* Active heuristics panel */}
              <div
                className="p-5 rounded-xl flex flex-col gap-4"
                style={{ background: '#121215', border: '1px solid #27272a' }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: '#fafafa' }}>
                  Active Heuristics
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: 'face', label: 'Facial Artifacts' },
                    { icon: 'waves', label: 'Audio Sync Drift' },
                    { icon: 'blur_on', label: 'Temporal Noise' },
                  ].map((h) => (
                    <div key={h.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm" style={{ color: '#a1a1aa' }}>
                        <span className="material-symbols-outlined text-lg" style={{ color: '#a78bfa' }}>{h.icon}</span>
                        {h.label}
                      </div>
                      <span className="text-xs font-mono" style={{ color: '#34d399' }}>ENABLED</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(-30px); opacity: 0.4; }
          50% { transform: translateY(30px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
