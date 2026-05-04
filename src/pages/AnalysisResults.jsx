import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

/* ── helpers ── */
const card = {
  background: '#111113',
  border: '1px solid #27272a',
  borderRadius: '0.5rem',
}

function MetricBar({ label, value, color = '#ef4444' }) {
  const pct = Math.round(value * 100)
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm" style={{ color: '#d4d4d8' }}>{label}</span>
        <span className="text-sm font-semibold" style={{ color }}>{value.toFixed(2)}</span>
      </div>
      <div className="h-1 w-full rounded-full" style={{ background: '#27272a' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  )
}

function StatusChip({ status }) {
  const ok = status === 'PASS'
  return (
    <span
      className="text-xs font-bold px-2 py-0.5 rounded"
      style={{
        color: ok ? '#34d399' : '#ef4444',
        background: ok ? 'rgba(52,211,153,0.1)' : 'rgba(239,68,68,0.1)',
        border: `1px solid ${ok ? 'rgba(52,211,153,0.3)' : 'rgba(239,68,68,0.3)'}`,
      }}
    >
      {status}
    </span>
  )
}

/* ── page ── */
export default function AnalysisResults() {
  const detailedMetrics = [
    {
      icon: 'face',
      label: 'FACE CONSISTENCY',
      status: 'FAIL',
      detail: 'Temporal position times detected across frames.',
    },
    {
      icon: 'flare',
      label: 'FLICKERING ANALYSIS',
      status: 'FAIL',
      detail: 'Inconsistent boundary bleeding on facial regions.',
    },
    {
      icon: 'graphic_eq',
      label: 'PITCH VARIATION',
      status: 'PASS',
      detail: 'Natural fluctuation within range of vocal prosody.',
    },
    {
      icon: 'bolt',
      label: 'ENERGY VARIATION',
      status: 'FAIL',
      detail: 'Flat spectral envelope not typical of human vocal tract.',
    },
  ]

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'Geist, sans-serif' }}
    >
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-6 md:p-8" style={{ backgroundColor: '#09090b' }}>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">

          {/* ── Page header ── */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold tracking-tight" style={{ color: '#fafafa' }}>
                Analysis Results
              </h1>
              <p className="text-xs mt-1" style={{ color: '#71717a' }}>
                Scan ID: #AX-992-B44 &nbsp;•&nbsp; Processed in 1.42s
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors"
                style={{ border: '1px solid #27272a', color: '#a1a1aa' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fafafa'}
                onMouseLeave={e => e.currentTarget.style.color = '#a1a1aa'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
                Export
              </button>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors"
                style={{ background: '#18181b', border: '1px solid #27272a', color: '#fafafa' }}
                onMouseEnter={e => e.currentTarget.style.background = '#27272a'}
                onMouseLeave={e => e.currentTarget.style.background = '#18181b'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>share</span>
                Share
              </button>
            </div>
          </div>

          {/* ── Row 1: Verdict + Detection Summary ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

            {/* Verdict — 3/5 */}
            <div className="lg:col-span-3 p-6 flex flex-col gap-4 relative overflow-hidden" style={card}>
              {/* Red glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 40%, rgba(239,68,68,0.07) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                {/* Critical alert badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-sm" style={{ color: '#ef4444', fontVariationSettings: "'FILL' 1" }}>warning</span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#ef4444' }}>Critical Alert</span>
                </div>

                {/* FAKE verdict */}
                <div
                  className="text-7xl font-black tracking-tight leading-none mb-3"
                  style={{ color: '#ef4444', textShadow: '0 0 40px rgba(239,68,68,0.4)' }}
                >
                  FAKE
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: '#a1a1aa', maxWidth: '420px' }}>
                  High probability of synthetic manipulation detected in both visual and audio streams. Immediate review recommended.
                </p>

                {/* Confidence bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#71717a' }}>
                      Confidence Level
                    </span>
                    <span className="text-lg font-bold" style={{ color: '#ef4444' }}>98.4%</span>
                  </div>
                  <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: '#1e1e22' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: '98.4%', background: 'linear-gradient(to right, #dc2626, #ef4444)' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Detection Summary — 2/5 */}
            <div className="lg:col-span-2 p-6 flex flex-col gap-5" style={card}>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base" style={{ color: '#a78bfa' }}>manage_search</span>
                <h3 className="text-sm font-semibold" style={{ color: '#fafafa' }}>Detection Summary</h3>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#71717a' }}>Primary Vector</p>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded"
                  style={{ background: '#7c3aed', color: '#ede9fe' }}
                >
                  GAN-based + Voice Cloning
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#71717a' }}>Key Anomalies Detected</p>
                <ul className="space-y-2.5">
                  {[
                    'Unnatural pupil light reflections.',
                    'Audio spectrum gap at 12kHz indicating vocoder artifact.',
                    'Micro-expressions misaligned with vocal prosody.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined shrink-0" style={{ fontSize: '14px', color: '#ef4444', marginTop: '2px' }}>close</span>
                      <span className="text-xs leading-relaxed" style={{ color: '#d4d4d8' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Row 2: Model Prediction + Heuristic Analysis + Fusion Algorithm ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Model Prediction */}
            <div className="p-6 flex flex-col gap-4" style={card}>
              <div className="flex justify-between items-center">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#71717a' }}>Model Prediction</p>
                <span className="material-symbols-outlined text-base" style={{ color: '#52525b' }}>settings</span>
              </div>

              <div className="flex flex-col items-center justify-center py-2">
                <span
                  className="text-6xl font-black tracking-tight"
                  style={{ color: '#a78bfa', textShadow: '0 0 30px rgba(167,139,250,0.3)' }}
                >
                  0.96
                </span>
                <span className="text-xs mt-1" style={{ color: '#71717a' }}>Model Output Score</span>
              </div>

              <div
                className="flex justify-between items-center px-3 py-2 rounded"
                style={{ background: '#0c0c0f', border: '1px solid #27272a' }}
              >
                <span className="text-xs" style={{ color: '#71717a' }}>Architecture</span>
                <span className="text-xs font-semibold" style={{ color: '#fafafa' }}>Logistic Regression</span>
              </div>
            </div>

            {/* Heuristic Analysis */}
            <div className="p-6 flex flex-col gap-4" style={card}>
              <div className="flex justify-between items-center">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#71717a' }}>Heuristic Analysis</p>
                <span className="material-symbols-outlined text-base" style={{ color: '#52525b' }}>search</span>
              </div>

              <div className="flex flex-col gap-4 mt-1">
                <MetricBar label="Face Score" value={0.91} color="#ef4444" />
                <MetricBar label="Audio Score" value={0.94} color="#ef4444" />
                <MetricBar label="Aggregated Heuristic" value={0.92} color="#ef4444" />
              </div>
            </div>

            {/* Fusion Algorithm */}
            <div className="p-6 flex flex-col gap-4 justify-between" style={card}>
              <div className="flex justify-between items-center">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#71717a' }}>Fusion Algorithm</p>
                <span className="material-symbols-outlined text-base" style={{ color: '#52525b' }}>device_hub</span>
              </div>

              <div
                className="flex-1 flex items-center justify-center rounded py-4"
                style={{ background: '#0c0c0f', border: '1px solid #27272a' }}
              >
                <code className="text-sm font-mono" style={{ color: '#a78bfa' }}>
                  (0.7 * M) + (0.3 * H)
                </code>
              </div>

              <div className="flex justify-between items-end">
                <span className="text-xs" style={{ color: '#71717a' }}>Final Computed Score</span>
                <span
                  className="text-3xl font-black"
                  style={{ color: '#ef4444', textShadow: '0 0 20px rgba(239,68,68,0.4)' }}
                >
                  0.95
                </span>
              </div>
            </div>
          </div>

          {/* ── Row 3: Detailed Metric Breakdown ── */}
          <div>
            <h2 className="text-base font-semibold mb-4" style={{ color: '#fafafa' }}>
              Detailed Metric Breakdown
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detailedMetrics.map((m) => {
                const pass = m.status === 'PASS'
                const accent = pass ? '#34d399' : '#ef4444'
                return (
                  <div
                    key={m.label}
                    className="p-5 flex flex-col gap-3"
                    style={{
                      ...card,
                      borderTop: `2px solid ${accent}`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ color: accent }}
                      >
                        {m.icon}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#71717a' }}>
                        {m.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className="text-2xl font-black"
                        style={{ color: accent }}
                      >
                        {m.status}
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed" style={{ color: '#71717a' }}>
                      {m.detail}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Row 4: Models + Reasoning ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
            {/* Active Models */}
            <div className="p-6 flex flex-col gap-4" style={card}>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#71717a' }}>Detection Models</p>
              <div className="space-y-3">
                {[
                  { icon: 'memory', name: 'GAN-Detector v4.2', sub: 'Image Synthesis' },
                  { icon: 'graphic_eq', name: 'VoiceClone-Analyzer', sub: 'Audio Spectrum' },
                ].map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between p-3 rounded"
                    style={{ background: '#0c0c0f', border: '1px solid #27272a' }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#a78bfa' }}>{m.icon}</span>
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#fafafa' }}>{m.name}</p>
                        <p className="text-xs" style={{ color: '#71717a' }}>{m.sub}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono" style={{ color: '#34d399' }}>ACTIVE</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-2 text-xs" style={{ borderTop: '1px solid #27272a', color: '#71717a' }}>
                <span>Processing Time: 1.42s</span>
                <Link to="#" className="flex items-center gap-1 hover:underline" style={{ color: '#a78bfa' }}>
                  View Logs <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* AI Reasoning */}
            <div className="p-6 flex flex-col gap-4" style={card}>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#71717a' }}>AI Reasoning</p>
              <ul className="space-y-4">
                {[
                  { type: 'bad', title: 'Inconsistent blinking patterns', detail: 'Detected unnatural eye movement frequency compared to baseline human models.' },
                  { type: 'bad', title: 'Edge blending artifacts', detail: 'Pixel distortion observed along the jawline during head rotation.' },
                  { type: 'good', title: 'Voice pitch variation', detail: 'Audio spectrum falls within normal human vocal range.' },
                ].map((r) => (
                  <li key={r.title} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined shrink-0 mt-0.5"
                      style={{ fontSize: '16px', color: r.type === 'good' ? '#34d399' : '#ef4444' }}
                    >
                      {r.type === 'good' ? 'check_circle' : 'cancel'}
                    </span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#fafafa' }}>{r.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#71717a' }}>{r.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
