import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useTheme } from '../context/ThemeContext'

/* ── mock data ── */
const EVENTS = [
  {
    date: 'May 4, 2025',
    items: [
      { time: '11:38 PM', type: 'scan_fake',    id: '#AX-992-B44', title: 'Deepfake detected',          detail: 'GAN-based facial synthesis identified with 98.4% confidence.', icon: 'warning',         duration: '1.42s', source: 'Video Upload'   },
      { time: '10:02 PM', type: 'scan_real',    id: '#AX-991-C12', title: 'Authentic media verified',   detail: 'All heuristics passed. No synthetic manipulation found.',       icon: 'verified',        duration: '0.98s', source: 'Live Stream'    },
      { time: '08:14 PM', type: 'session',      id: null,          title: 'Live session started',        detail: 'Real-time detection session opened for 24 minutes.',            icon: 'videocam',        duration: '24 min', source: 'Webcam'        },
      { time: '05:30 PM', type: 'export',       id: '#AX-990-A77', title: 'Report exported',            detail: 'PDF report downloaded for scan #AX-990-A77.',                  icon: 'download',        duration: null,     source: 'Manual export' },
    ],
  },
  {
    date: 'May 3, 2025',
    items: [
      { time: '04:52 PM', type: 'scan_fake',    id: '#AX-990-A77', title: 'Deepfake detected',          detail: 'Temporal noise and edge blending artifacts triggered alert.',   icon: 'warning',         duration: '2.10s', source: 'Video Upload'   },
      { time: '01:27 PM', type: 'scan_real',    id: '#AX-989-F03', title: 'Authentic media verified',   detail: 'Audio sync and facial consistency passed all checks.',          icon: 'verified',        duration: '1.67s', source: 'Video Upload'   },
      { time: '11:00 AM', type: 'settings',     id: null,          title: 'Settings updated',            detail: 'Detection sensitivity changed from 65% → 72%.',               icon: 'tune',            duration: null,     source: 'Settings'      },
      { time: '09:15 AM', type: 'session',      id: null,          title: 'Live session started',        detail: 'Real-time detection session opened for 11 minutes.',            icon: 'videocam',        duration: '11 min', source: 'Webcam'        },
    ],
  },
  {
    date: 'May 2, 2025',
    items: [
      { time: '08:09 PM', type: 'scan_fake',    id: '#AX-988-D55', title: 'Deepfake detected',          detail: 'Voice cloning identified via audio spectrum gap at 12kHz.',    icon: 'warning',         duration: '1.22s', source: 'Live Stream'    },
      { time: '03:40 PM', type: 'scan_real',    id: '#AX-987-E20', title: 'Authentic media verified',   detail: 'Pitch variation and energy distribution within normal range.',  icon: 'verified',        duration: '1.89s', source: 'Video Upload'   },
      { time: '12:00 PM', type: 'model_update', id: null,          title: 'Model updated',              detail: 'GAN-Detector upgraded from v4.1 → v4.2. Improved accuracy.',  icon: 'system_update',   duration: null,     source: 'System'        },
    ],
  },
  {
    date: 'May 1, 2025',
    items: [
      { time: '11:55 AM', type: 'scan_fake',    id: '#AX-986-B91', title: 'Deepfake detected',          detail: 'Inconsistent blinking pattern and pupil reflection anomaly.',   icon: 'warning',         duration: '2.34s', source: 'Video Upload'   },
      { time: '07:20 AM', type: 'scan_real',    id: '#AX-985-A44', title: 'Authentic media verified',   detail: 'Biometric and spectral checks passed with 88.7% confidence.',  icon: 'verified',        duration: '1.11s', source: 'Live Stream'    },
    ],
  },
]

const TYPE_META = {
  scan_fake:    { label: 'Fake Detected',  colorKey: 'red'   },
  scan_real:    { label: 'Verified Real',  colorKey: 'green' },
  session:      { label: 'Session',        colorKey: 'primary' },
  export:       { label: 'Export',         colorKey: 'textDim' },
  settings:     { label: 'Settings',       colorKey: 'amber' },
  model_update: { label: 'System',         colorKey: 'primary' },
}

export default function History() {
  const { c } = useTheme()
  const [filter, setFilter] = useState('ALL')
  const [search, setSearch] = useState('')

  const filters = ['ALL', 'scan_fake', 'scan_real', 'session', 'settings', 'model_update']
  const filterLabels = { ALL: 'All', scan_fake: 'Fakes', scan_real: 'Real', session: 'Sessions', settings: 'Settings', model_update: 'System' }

  const getColor = (colorKey) => c[colorKey] || c.textMuted

  const filtered = EVENTS.map(group => ({
    ...group,
    items: group.items.filter(item => {
      const matchType   = filter === 'ALL' || item.type === filter
      const matchSearch = search === '' ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.detail.toLowerCase().includes(search.toLowerCase()) ||
        (item.id || '').toLowerCase().includes(search.toLowerCase())
      return matchType && matchSearch
    }),
  })).filter(g => g.items.length > 0)

  const totalEvents = EVENTS.reduce((a, g) => a + g.items.length, 0)
  const fakes  = EVENTS.reduce((a, g) => a + g.items.filter(i => i.type === 'scan_fake').length, 0)
  const reals  = EVENTS.reduce((a, g) => a + g.items.filter(i => i.type === 'scan_real').length, 0)
  const sessions = EVENTS.reduce((a, g) => a + g.items.filter(i => i.type === 'session').length, 0)

  return (
    <div
      className="flex h-screen overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: c.bg, color: c.text, fontFamily: 'Geist, sans-serif' }}
    >
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">

          {/* Header */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold tracking-tight" style={{ color: c.text }}>Activity History</h1>
              <p className="text-sm mt-1" style={{ color: c.textDim }}>
                Full chronological log of all detection events and system actions.
              </p>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{ background: c.surface, border: `1px solid ${c.border}`, color: c.textMuted }}
            >
              <span className="material-symbols-outlined text-base">filter_list</span>
              Date Range
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Total Events',     value: totalEvents, icon: 'timeline',      color: c.primary },
              { label: 'Fakes Detected',   value: fakes,       icon: 'warning',       color: c.red     },
              { label: 'Real Verified',    value: reals,       icon: 'verified',      color: c.green   },
              { label: 'Live Sessions',    value: sessions,    icon: 'videocam',      color: c.amber   },
            ].map(s => (
              <div
                key={s.label}
                className="flex items-center gap-3 p-4 rounded-xl transition-colors"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: s.color + '18' }}
                >
                  <span className="material-symbols-outlined text-base" style={{ color: s.color }}>{s.icon}</span>
                </div>
                <div>
                  <p className="text-xl font-black leading-none" style={{ color: c.text }}>{s.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: c.textDim }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Search + type filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div
              className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-lg"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <span className="material-symbols-outlined text-base" style={{ color: c.textDim }}>search</span>
              <input
                type="text"
                placeholder="Search events, scan IDs…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: c.text, caretColor: c.primary }}
              />
              {search && (
                <button onClick={() => setSearch('')} style={{ color: c.textDim }}>
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              )}
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-3 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap"
                  style={filter === f
                    ? { background: c.primary, color: '#fff' }
                    : { background: c.surface, border: `1px solid ${c.border}`, color: c.textMuted }
                  }
                >
                  {filterLabels[f]}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          {filtered.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-20 rounded-xl gap-3"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <span className="material-symbols-outlined text-4xl" style={{ color: c.border }}>history</span>
              <p className="text-sm" style={{ color: c.textDim }}>No events match your search.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-8 pb-8">
              {filtered.map(group => (
                <div key={group.date}>
                  {/* Date header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: c.textDim }}>
                      {group.date}
                    </span>
                    <div className="flex-1 h-px" style={{ background: c.border }} />
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: c.surfaceHigh, color: c.textDim }}
                    >
                      {group.items.length} event{group.items.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Event items */}
                  <div className="relative">
                    {/* Vertical line */}
                    <div
                      className="absolute left-[23px] top-0 bottom-0 w-px"
                      style={{ background: c.border }}
                    />

                    <div className="flex flex-col gap-3">
                      {group.items.map((item, idx) => {
                        const meta      = TYPE_META[item.type]
                        const iconColor = getColor(meta.colorKey)

                        return (
                          <div key={idx} className="flex gap-4 items-start">
                            {/* Icon dot */}
                            <div
                              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10"
                              style={{
                                background: iconColor + '15',
                                border: `2px solid ${iconColor}40`,
                              }}
                            >
                              <span
                                className="material-symbols-outlined text-lg"
                                style={{
                                  color: iconColor,
                                  fontVariationSettings: item.type === 'scan_fake' || item.type === 'scan_real'
                                    ? "'FILL' 1" : "'FILL' 0",
                                }}
                              >
                                {item.icon}
                              </span>
                            </div>

                            {/* Event card */}
                            <div
                              className="flex-1 p-4 rounded-xl transition-colors duration-200"
                              style={{ background: c.surface, border: `1px solid ${c.border}` }}
                              onMouseEnter={e => e.currentTarget.style.borderColor = iconColor + '60'}
                              onMouseLeave={e => e.currentTarget.style.borderColor = c.border}
                            >
                              <div className="flex items-start justify-between gap-3 flex-wrap">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <p className="text-sm font-semibold" style={{ color: c.text }}>{item.title}</p>
                                  <span
                                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                                    style={{
                                      color: iconColor,
                                      background: iconColor + '18',
                                      border: `1px solid ${iconColor}30`,
                                    }}
                                  >
                                    {meta.label}
                                  </span>
                                  {item.id && (
                                    <span
                                      className="text-xs font-mono px-2 py-0.5 rounded"
                                      style={{ color: c.textDim, background: c.surfaceHigh }}
                                    >
                                      {item.id}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                  {item.duration && (
                                    <span className="text-xs font-mono" style={{ color: c.textDim }}>
                                      ⏱ {item.duration}
                                    </span>
                                  )}
                                  <span className="text-xs" style={{ color: c.textDim }}>{item.time}</span>
                                </div>
                              </div>

                              <p className="text-xs mt-2 leading-relaxed" style={{ color: c.textDim }}>
                                {item.detail}
                              </p>

                              <div className="flex items-center gap-1.5 mt-3">
                                <span className="material-symbols-outlined text-xs" style={{ color: c.textDim }}>
                                  {item.source === 'Webcam' ? 'videocam' : item.source === 'Live Stream' ? 'live_tv' : item.source === 'System' ? 'computer' : 'upload_file'}
                                </span>
                                <span className="text-xs" style={{ color: c.textDim }}>{item.source}</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>
    </div>
  )
}
