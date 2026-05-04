import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useTheme } from '../context/ThemeContext'

const allReports = [
  { id: '#AX-992-B44', date: 'May 4, 2025  •  11:38 PM', verdict: 'FAKE',    confidence: 98.4, model: 'GAN-Detector v4.2',      duration: '1.42s', type: 'Video Upload' },
  { id: '#AX-991-C12', date: 'May 4, 2025  •  09:14 PM', verdict: 'REAL',    confidence: 95.1, model: 'VoiceClone-Analyzer',     duration: '0.98s', type: 'Live Stream' },
  { id: '#AX-990-A77', date: 'May 3, 2025  •  04:52 PM', verdict: 'FAKE',    confidence: 87.3, model: 'GAN-Detector v4.2',      duration: '2.10s', type: 'Video Upload' },
  { id: '#AX-989-F03', date: 'May 3, 2025  •  01:27 PM', verdict: 'REAL',    confidence: 91.6, model: 'Ensemble',               duration: '1.67s', type: 'Video Upload' },
  { id: '#AX-988-D55', date: 'May 2, 2025  •  08:09 PM', verdict: 'FAKE',    confidence: 99.1, model: 'GAN-Detector v4.2',      duration: '1.22s', type: 'Live Stream' },
  { id: '#AX-987-E20', date: 'May 2, 2025  •  03:40 PM', verdict: 'REAL',    confidence: 78.4, model: 'VoiceClone-Analyzer',    duration: '1.89s', type: 'Video Upload' },
  { id: '#AX-986-B91', date: 'May 1, 2025  •  11:55 AM', verdict: 'FAKE',    confidence: 93.2, model: 'Ensemble',               duration: '2.34s', type: 'Video Upload' },
  { id: '#AX-985-A44', date: 'May 1, 2025  •  07:20 AM', verdict: 'REAL',    confidence: 88.7, model: 'GAN-Detector v4.2',      duration: '1.11s', type: 'Live Stream' },
]

const statCards = [
  { icon: 'folder_open',    label: 'Total Scans',     value: '128',  sub: '+12 this week',    color: '#a78bfa' },
  { icon: 'warning',        label: 'Fakes Detected',  value: '74',   sub: '57.8% of scans',   color: '#ef4444' },
  { icon: 'verified_user',  label: 'Real Verified',   value: '54',   sub: '42.2% of scans',   color: '#34d399' },
  { icon: 'speed',          label: 'Avg Process Time', value: '1.4s', sub: 'across all models', color: '#f59e0b' },
]

export default function Reports() {
  const { c } = useTheme()
  const [filter, setFilter] = useState('ALL')
  const [search, setSearch] = useState('')

  const filtered = allReports.filter(r => {
    const matchVerdict = filter === 'ALL' || r.verdict === filter
    const matchSearch = r.id.toLowerCase().includes(search.toLowerCase()) ||
                        r.model.toLowerCase().includes(search.toLowerCase())
    return matchVerdict && matchSearch
  })

  return (
    <div
      className="flex h-screen overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: c.bg, color: c.text, fontFamily: 'Geist, sans-serif' }}
    >
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">

          {/* Header */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold tracking-tight" style={{ color: c.text }}>Reports</h1>
              <p className="text-sm mt-1" style={{ color: c.textDim }}>Full history of all deepfake detection scans.</p>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{ background: c.primary, color: '#fff' }}
            >
              <span className="material-symbols-outlined text-base">download</span>
              Export All
            </button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-xl flex flex-col gap-2 transition-colors duration-300"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: c.textDim }}>
                    {s.label}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: s.color + '18' }}
                  >
                    <span className="material-symbols-outlined text-base" style={{ color: s.color }}>{s.icon}</span>
                  </div>
                </div>
                <p className="text-3xl font-black tracking-tight" style={{ color: c.text }}>{s.value}</p>
                <p className="text-xs" style={{ color: c.textDim }}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div
              className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-lg"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <span className="material-symbols-outlined text-base" style={{ color: c.textDim }}>search</span>
              <input
                type="text"
                placeholder="Search by scan ID or model…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: c.text, caretColor: c.primary }}
              />
            </div>
            <div className="flex gap-2">
              {['ALL', 'FAKE', 'REAL'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-colors"
                  style={filter === f
                    ? { background: c.primary, color: '#fff' }
                    : { background: c.surface, border: `1px solid ${c.border}`, color: c.textMuted }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div
            className="rounded-xl overflow-hidden transition-colors duration-300"
            style={{ border: `1px solid ${c.border}` }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-12 px-5 py-3 text-xs font-semibold uppercase tracking-widest"
              style={{ background: c.surfaceHigh, color: c.textDim, borderBottom: `1px solid ${c.border}` }}
            >
              <span className="col-span-3">Scan ID</span>
              <span className="col-span-3">Date & Time</span>
              <span className="col-span-2 text-center">Verdict</span>
              <span className="col-span-1 text-center">Confidence</span>
              <span className="col-span-2">Model Used</span>
              <span className="col-span-1 text-center">Actions</span>
            </div>

            {/* Rows */}
            {filtered.length === 0 ? (
              <div
                className="py-16 text-center text-sm"
                style={{ background: c.surface, color: c.textDim }}
              >
                No scans match your filter.
              </div>
            ) : (
              filtered.map((r, i) => {
                const isFake = r.verdict === 'FAKE'
                return (
                  <div
                    key={r.id}
                    className="grid grid-cols-12 px-5 py-4 items-center transition-colors duration-150"
                    style={{
                      background: c.surface,
                      borderBottom: i < filtered.length - 1 ? `1px solid ${c.border}` : 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = c.surfaceHigh}
                    onMouseLeave={e => e.currentTarget.style.background = c.surface}
                  >
                    {/* Scan ID */}
                    <div className="col-span-3 flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: isFake ? c.red : c.green }}
                      />
                      <span className="text-sm font-mono font-semibold" style={{ color: c.text }}>{r.id}</span>
                    </div>

                    {/* Date */}
                    <div className="col-span-3">
                      <span className="text-xs" style={{ color: c.textDim }}>{r.date}</span>
                    </div>

                    {/* Verdict badge */}
                    <div className="col-span-2 flex justify-center">
                      <span
                        className="px-3 py-1 rounded text-xs font-bold"
                        style={{
                          color: isFake ? c.red : c.green,
                          background: isFake ? c.redBg : c.greenBg,
                          border: `1px solid ${isFake ? c.redBorder : c.greenBorder}`,
                        }}
                      >
                        {r.verdict}
                      </span>
                    </div>

                    {/* Confidence */}
                    <div className="col-span-1 text-center">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: isFake ? c.red : c.green }}
                      >
                        {r.confidence}%
                      </span>
                    </div>

                    {/* Model */}
                    <div className="col-span-2">
                      <span className="text-xs" style={{ color: c.textMuted }}>{r.model}</span>
                    </div>

                    {/* Actions */}
                    <div className="col-span-1 flex justify-center gap-2">
                      <button
                        title="View details"
                        className="w-7 h-7 rounded flex items-center justify-center transition-colors"
                        style={{ color: c.textDim }}
                        onMouseEnter={e => { e.currentTarget.style.color = c.primary; e.currentTarget.style.background = c.primaryBg }}
                        onMouseLeave={e => { e.currentTarget.style.color = c.textDim; e.currentTarget.style.background = 'transparent' }}
                      >
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                      </button>
                      <button
                        title="Download report"
                        className="w-7 h-7 rounded flex items-center justify-center transition-colors"
                        style={{ color: c.textDim }}
                        onMouseEnter={e => { e.currentTarget.style.color = c.primary; e.currentTarget.style.background = c.primaryBg }}
                        onMouseLeave={e => { e.currentTarget.style.color = c.textDim; e.currentTarget.style.background = 'transparent' }}
                      >
                        <span className="material-symbols-outlined text-base">download</span>
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Pagination hint */}
          <p className="text-xs text-center pb-4" style={{ color: c.textDim }}>
            Showing {filtered.length} of {allReports.length} scans
          </p>
        </div>
      </main>
    </div>
  )
}
