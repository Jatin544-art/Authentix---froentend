import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RealTimeDetection from './pages/RealTimeDetection'
import AnalysisResults from './pages/AnalysisResults'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detect" element={<RealTimeDetection />} />
        <Route path="/analysis" element={<AnalysisResults />} />
      </Routes>
    </BrowserRouter>
  )
}
