import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import VariantA from './pages/VariantA'
import VariantB from './pages/VariantB'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<VariantA />} />
      <Route path="/variant-a" element={<VariantA />} />
      <Route path="/classic" element={<Home />} />
      <Route path="/variant-b" element={<VariantB />} />
    </Routes>
  )
}
