import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'Geist, sans-serif' }}>
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, #121215 0%, #09090b 100%)',
        }}
      />

      <Header />

      {/* Main hero content */}
      <main className="relative z-10 flex items-center justify-center w-full h-screen px-4">
        <div
          className="max-w-4xl w-full flex flex-col items-center text-center space-y-8 p-12 relative overflow-hidden"
          style={{
            borderRadius: '0.75rem',
            background: 'rgba(18,18,21,0.4)',
            backdropFilter: 'blur(24px)',
            border: '1px solid #27272a',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
          }}
        >
          {/* Internal violet glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(167,139,250,0.05), transparent)',
            }}
          />

          <div className="space-y-4 relative z-10">
            <h1
              className="text-6xl md:text-8xl font-extrabold"
              style={{ letterSpacing: '-0.04em', color: '#fafafa' }}
            >
              Authentix
            </h1>
            <p className="text-xl md:text-2xl font-semibold" style={{ color: '#a78bfa', letterSpacing: '-0.01em' }}>
              Multimodal Deepfake Detection System
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#a1a1aa' }}>
              Detect fake videos in real-time using AI-powered video and audio analysis.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8 relative z-10">
            <Link
              to="/detect"
              className="group flex items-center justify-center gap-2 font-semibold px-8 py-4 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: '#a78bfa',
                color: '#0a0012',
                borderRadius: '0.25rem',
                boxShadow: '0 0 20px rgba(167,139,250,0.3)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(167,139,250,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(167,139,250,0.3)'}
            >
              <span className="material-symbols-outlined">videocam</span>
              Start Detection
            </Link>
            <Link
              to="/analysis"
              className="group flex items-center justify-center gap-2 font-semibold px-8 py-4 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'transparent',
                color: '#fafafa',
                borderRadius: '0.25rem',
                border: '1px solid #27272a',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#121215'
                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = '#27272a'
              }}
            >
              <span className="material-symbols-outlined" style={{ color: '#a78bfa' }}>folder</span>
              Upload Video
            </Link>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 relative z-10">
            <span
              className="px-3 py-1.5 text-xs font-medium rounded-full flex items-center gap-1.5"
              style={{ color: '#34d399', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Real-Time Detection
            </span>
            <span
              className="px-3 py-1.5 text-xs font-medium rounded-full"
              style={{ color: '#a1a1aa', background: '#121215', border: '1px solid #27272a' }}
            >
              Audio + Video Analysis
            </span>
            <span
              className="px-3 py-1.5 text-xs font-medium rounded-full"
              style={{ color: '#a1a1aa', background: '#121215', border: '1px solid #27272a' }}
            >
              Explainable AI
            </span>
            <span
              className="px-3 py-1.5 text-xs font-medium rounded-full"
              style={{ color: '#a1a1aa', background: '#121215', border: '1px solid #27272a' }}
            >
              Confidence Scoring
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
