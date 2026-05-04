import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { Banner } from '../components/ui/banner'

const Spline = lazy(() => import('@splinetool/react-spline'))

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
      <main className="relative z-10 flex items-center w-full min-h-screen px-6 md:px-12 max-w-[1400px] mx-auto pt-20 pb-10">
        <div className="flex flex-col lg:flex-row w-full gap-12 items-center justify-between">
          
          {/* Left Column: Hero Content */}
          <div
            className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-10 p-10 md:p-14 relative overflow-hidden"
            style={{
              borderRadius: '1.25rem',
              background: 'rgba(18,18,21,0.5)',
              backdropFilter: 'blur(24px)',
              border: '1px solid #27272a',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
            }}
          >
            {/* Internal violet glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at top left, rgba(167,139,250,0.1), transparent 60%)',
              }}
            />

            <div className="space-y-5 relative z-10">
              <h1
                className="text-6xl md:text-7xl xl:text-8xl font-extrabold"
                style={{ letterSpacing: '-0.04em', color: '#fafafa', lineHeight: '1.1' }}
              >
                Authentix
              </h1>
              <p className="text-xl md:text-2xl font-semibold" style={{ color: '#a78bfa', letterSpacing: '-0.01em' }}>
                Multimodal Deepfake Detection
              </p>
              <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: '#a1a1aa' }}>
                Detect fake videos in real-time using AI-powered visual and audio analysis.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
              <Link
                to="/detect"
                className="group flex items-center justify-center gap-2 font-semibold px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{
                  background: '#a78bfa',
                  color: '#0a0012',
                  borderRadius: '0.5rem',
                  boxShadow: '0 0 20px rgba(167,139,250,0.3)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 35px rgba(167,139,250,0.5)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(167,139,250,0.3)'}
              >
                <span className="material-symbols-outlined text-lg">videocam</span>
                Start Detection
              </Link>
              <Link
                to="/analysis"
                className="group flex items-center justify-center gap-2 font-semibold px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{
                  background: 'transparent',
                  color: '#fafafa',
                  borderRadius: '0.5rem',
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
                <span className="material-symbols-outlined text-lg" style={{ color: '#a78bfa' }}>folder</span>
                Upload Video
              </Link>
            </div>

            {/* Rainbow Banner */}
            <div className="w-full mt-4 z-20 relative">
              <Banner
                id="home-banner"
                variant="rainbow"
                className="shadow-lg bg-zinc-900/80 backdrop-blur-md"
                rainbowColors={[
                  "rgba(167,139,250,0.4)",
                  "rgba(139,92,246,0.4)",
                  "transparent",
                  "rgba(167,139,250,0.4)",
                  "transparent",
                  "rgba(139,92,246,0.4)",
                  "transparent",
                ]}
              >
                🚀 Project evolving with more features soon!
              </Banner>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap justify-start gap-3 pt-6 relative z-10 border-t border-zinc-800/50 w-full">
              <span
                className="px-3 py-1.5 text-xs font-medium rounded-full flex items-center gap-1.5"
                style={{ color: '#34d399', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Real-Time
              </span>
              <span
                className="px-3 py-1.5 text-xs font-medium rounded-full"
                style={{ color: '#a1a1aa', background: '#121215', border: '1px solid #27272a' }}
              >
                Audio + Video
              </span>
              <span
                className="px-3 py-1.5 text-xs font-medium rounded-full"
                style={{ color: '#a1a1aa', background: '#121215', border: '1px solid #27272a' }}
              >
                Explainable AI
              </span>
            </div>
          </div>

          {/* Right Column: Spline 3D Scene */}
          <div className="hidden lg:flex w-full lg:w-1/2 relative items-center justify-center h-[600px]">
            <Suspense fallback={
              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 space-y-4">
                <div className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin" style={{ borderColor: '#8b5cf6', borderTopColor: 'transparent' }} />
                <p className="text-sm font-medium tracking-wide animate-pulse">Loading 3D Scene...</p>
              </div>
            }>
              <div id="spline-container" className="w-full h-full relative" style={{ mixBlendMode: 'screen' }}>
                <Spline scene="https://prod.spline.design/c6ryy5i3MC28oW9W/scene.splinecode" />
              </div>
            </Suspense>
          </div>

        </div>
      </main>
    </div>
  )
}
