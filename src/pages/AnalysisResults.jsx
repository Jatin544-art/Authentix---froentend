import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

const heuristics = [
  { icon: 'face', label: 'Facial Artifacts', score: 92, color: '#ef4444' },
  { icon: 'graphic_eq', label: 'Audio Sync', score: 78, color: '#a78bfa' },
  { icon: 'lightbulb', label: 'Lighting Const.', score: 14, color: '#34d399' },
]

const reasoning = [
  {
    type: 'bad',
    title: 'Inconsistent blinking patterns',
    detail: 'Detected unnatural eye movement frequency compared to baseline human models.',
  },
  {
    type: 'bad',
    title: 'Edge blending artifacts',
    detail: 'Pixel distortion observed along the jawline during head rotation.',
  },
  {
    type: 'good',
    title: 'Voice pitch variation',
    detail: 'Audio spectrum falls within normal human vocal range.',
  },
]

const models = [
  { icon: 'memory', name: 'GAN-Detector v4.2', sub: 'Image Synthesis' },
  { icon: 'graphic_eq', name: 'VoiceClone-Analyzer', sub: 'Audio Spectrum' },
]

export default function AnalysisResults() {
  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'Geist, sans-serif' }}
    >
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-4 md:p-8" style={{ backgroundColor: '#09090b' }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">

          {/* Page header */}
          <header
            className="flex justify-between items-end pb-4"
            style={{ borderBottom: '1px solid #27272a' }}
          >
            <div>
              <h2
                className="text-2xl font-semibold tracking-tight"
                style={{ color: '#fafafa' }}
              >
                Analysis Results
              </h2>
              <p className="text-sm mt-1" style={{ color: '#a1a1aa' }}>Scan ID: #AX-8924-VL</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors"
                style={{ border: '1px solid #27272a', color: '#a1a1aa' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fafafa'}
                onMouseLeave={e => e.currentTarget.style.color = '#a1a1aa'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                Export
              </button>
              <button
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                style={{ background: '#18181b', border: '1px solid #27272a', color: '#fafafa' }}
                onMouseEnter={e => e.currentTarget.style.background = '#27272a'}
                onMouseLeave={e => e.currentTarget.style.background = '#18181b'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>share</span>
                Share
              </button>
            </div>
          </header>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Verdict card — 8 cols */}
            <div
              className="col-span-1 md:col-span-8 rounded-lg p-6 flex flex-col relative overflow-hidden"
              style={{ background: '#121215', border: '1px solid #27272a' }}
            >
              <div
                className="absolute inset-0 opacity-50 z-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.05), transparent)' }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3
                      className="text-sm font-medium uppercase tracking-wider"
                      style={{ color: '#a1a1aa' }}
                    >
                      Final Verdict
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="material-symbols-outlined text-4xl" style={{ color: '#ef4444' }}>warning</span>
                      <span
                        className="text-4xl font-bold tracking-tight"
                        style={{ color: '#ef4444' }}
                      >
                        FAKE
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm block mb-1" style={{ color: '#a1a1aa' }}>Confidence Score</span>
                    <span className="text-2xl font-semibold" style={{ color: '#fafafa' }}>98.4%</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between text-xs mb-2" style={{ color: '#a1a1aa' }}>
                    <span>Low Risk</span>
                    <span>Suspicious</span>
                    <span style={{ color: '#ef4444' }}>High Risk</span>
                  </div>
                  <div
                    className="h-2 w-full rounded-full overflow-hidden flex"
                    style={{ background: '#1e1e22' }}
                  >
                    <div className="h-full w-1/4" style={{ background: '#34d399', opacity: 0.2 }} />
                    <div className="h-full w-1/4" style={{ background: '#a78bfa', opacity: 0.4 }} />
                    <div className="h-full w-1/2" style={{ background: '#ef4444' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Fusion score gauge — 4 cols */}
            <div
              className="col-span-1 md:col-span-4 rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden"
              style={{ background: '#121215', border: '1px solid #27272a' }}
            >
              <h3
                className="text-sm font-medium absolute top-6 left-6 uppercase tracking-wider"
                style={{ color: '#a1a1aa' }}
              >
                Fusion Score
              </h3>
              <div className="relative w-48 h-48 mt-8 flex items-center justify-center">
                <svg className="w-full h-full" style={{ transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#1e1e22" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="45" fill="none"
                    stroke="#a78bfa"
                    strokeWidth="8"
                    strokeDasharray="282.7"
                    strokeDashoffset="40"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold" style={{ color: '#fafafa' }}>86</span>
                  <span
                    className="text-xs mt-1 font-medium px-2 py-0.5 rounded"
                    style={{ color: '#a78bfa', background: 'rgba(167,139,250,0.1)' }}
                  >
                    Aggregated
                  </span>
                </div>
              </div>
            </div>

            {/* Heuristic analysis — 4 cols */}
            <div
              className="col-span-1 md:col-span-4 rounded-lg p-6"
              style={{ background: '#121215', border: '1px solid #27272a' }}
            >
              <h3
                className="text-sm font-medium mb-6 uppercase tracking-wider"
                style={{ color: '#a1a1aa' }}
              >
                Heuristic Analysis
              </h3>
              <div className="flex flex-col gap-6">
                {heuristics.map((h) => (
                  <div key={h.label}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: '16px', color: '#a78bfa' }}
                        >
                          {h.icon}
                        </span>
                        <span className="text-sm font-medium" style={{ color: '#fafafa' }}>{h.label}</span>
                      </div>
                      <span className="text-sm font-medium" style={{ color: h.color }}>{h.score}%</span>
                    </div>
                    <div
                      className="h-1.5 w-full rounded-full overflow-hidden"
                      style={{ background: '#1e1e22' }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${h.score}%`, background: h.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Reasoning — 4 cols */}
            <div
              className="col-span-1 md:col-span-4 rounded-lg p-6"
              style={{ background: '#121215', border: '1px solid #27272a' }}
            >
              <h3
                className="text-sm font-medium mb-6 uppercase tracking-wider"
                style={{ color: '#a1a1aa' }}
              >
                AI Reasoning
              </h3>
              <ul className="space-y-4">
                {reasoning.map((r) => (
                  <li key={r.title} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined shrink-0 mt-0.5"
                      style={{
                        fontSize: '18px',
                        color: r.type === 'good' ? '#34d399' : '#ef4444',
                      }}
                    >
                      {r.type === 'good' ? 'check' : 'close'}
                    </span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#fafafa' }}>{r.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#a1a1aa' }}>{r.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detection Models — 4 cols */}
            <div
              className="col-span-1 md:col-span-4 rounded-lg p-6 flex flex-col justify-between"
              style={{ background: '#121215', border: '1px solid #27272a' }}
            >
              <div>
                <h3
                  className="text-sm font-medium mb-4 uppercase tracking-wider"
                  style={{ color: '#a1a1aa' }}
                >
                  Detection Models
                </h3>
                <div className="space-y-3">
                  {models.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center justify-between p-3 rounded"
                      style={{ background: '#09090b', border: '1px solid #27272a' }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: '20px', color: '#a78bfa' }}
                        >
                          {m.icon}
                        </span>
                        <div>
                          <p className="text-sm font-medium" style={{ color: '#fafafa' }}>{m.name}</p>
                          <p className="text-xs" style={{ color: '#a1a1aa' }}>{m.sub}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono" style={{ color: '#a1a1aa' }}>ACTIVE</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mt-6 pt-4 flex justify-between items-center text-xs"
                style={{ borderTop: '1px solid #27272a', color: '#a1a1aa' }}
              >
                <span>Processing Time: 1.24s</span>
                <Link
                  to="#"
                  className="flex items-center gap-1 transition-colors hover:underline"
                  style={{ color: '#a78bfa' }}
                >
                  View Logs
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
